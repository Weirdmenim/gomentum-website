(() => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });
  }
  const sticky = document.querySelector('.sticky-cta');
  const toggleSticky = () => {
    if (!sticky) return;
    sticky.classList.toggle('is-visible', window.scrollY > 420);
  };
  toggleSticky();
  window.addEventListener('scroll', toggleSticky, { passive: true });
  const demo = document.querySelector('[data-demo]');
  if (demo) {
    const input = demo.querySelector('#task-input');
    const result = demo.querySelector('[data-demo-result]');
    const getMove = (text) => {
      const value = text.toLowerCase();
      if (!text.trim()) return 'Add one task first. It can be messy.';
      if (/report|proposal|write|essay|document/.test(value)) return 'Open the document and write only the title.';
      if (/email|inbox|reply|message/.test(value)) return 'Open one message and write the first sentence.';
      if (/study|read|exam|chapter/.test(value)) return 'Open the material and read only the first heading.';
      if (/clean|room|tidy|desk|wash/.test(value)) return 'Pick up five visible items and put them in one place.';
      return 'Write the task name at the top of a blank note. That is the first move.';
    };
    demo.querySelectorAll('[data-task]').forEach((btn) => btn.addEventListener('click', () => { input.value = btn.dataset.task || ''; result.innerHTML = '<p class="eyebrow">First move</p><p><strong>' + getMove(input.value) + '</strong></p><p class="helper">Try this for three minutes. Stop there if that is enough.</p>'; input.focus(); }));
    demo.querySelector('[data-demo-submit]')?.addEventListener('click', () => { result.innerHTML = '<p class="eyebrow">First move</p><p><strong>' + getMove(input.value) + '</strong></p><p class="helper">Try this for three minutes. Stop there if that is enough.</p>'; });
  }
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const submit = form.querySelector('button[type="submit"]');
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      if (!form.reportValidity()) return;
      const configured = form.dataset.formspreeConfigured === 'true';
      if (submit) { submit.disabled = true; submit.textContent = 'Sending...'; }
      try {
        if (configured) {
          const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
          if (!response.ok) throw new Error('Formspree submission failed');
        }
        form.reset();
        if (status) { status.className = 'form-status success'; status.textContent = configured ? 'Thanks. Your message has been sent.' : 'Thanks. Your message is ready to send once the form endpoint is configured.'; }
      } catch (error) {
        if (status) { status.className = 'form-status error'; status.textContent = 'That did not send. Please email hello@gomentum.app instead.'; }
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = 'Send Message'; }
      }
    });
  }
})();