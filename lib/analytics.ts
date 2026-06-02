export function trackEvent(eventName: string, properties?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("gomentum:event", { detail: { eventName, properties } }));
}
