import { Icon } from "./Icons";

export function ProductMockup() {
  return (
    <div className="card-border rounded-panel bg-carddark p-5 shadow-glow">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-warm"><Icon name="spark" className="h-5 w-5 text-amber" /> Gomentum</div>
        <span className="rounded-full bg-teal/12 px-3 py-1 text-xs font-semibold text-teal">Preview</span>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl bg-offblack/80 p-4">
          <p className="text-sm font-semibold text-textgray">How are you feeling?</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Low energy', 'A bit scattered', 'Okay', 'Focused'].map((item) => (
              <span key={item} className="rounded-xl border border-softgray/10 bg-white/5 px-3 py-2 text-sm text-warm">{item}</span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-teal/25 bg-teal/8 p-4">
          <p className="text-sm font-semibold text-teal">First move</p>
          <p className="mt-2 text-xl font-bold text-warm">Open the document and write only the title.</p>
        </div>
        <div className="rounded-2xl bg-offblack/80 p-4">
          <div className="flex items-center justify-between text-sm text-textgray"><span>3-minute focus</span><span>03:00</span></div>
          <div className="mt-3 h-3 rounded-full bg-white/10"><div className="h-3 w-2/3 rounded-full bg-teal" /></div>
        </div>
      </div>
    </div>
  );
}
