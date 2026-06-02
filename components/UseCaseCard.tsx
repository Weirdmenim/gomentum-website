import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function UseCaseCard({ title, problem, task, firstMove, cta }: { title: string; problem: string; task: string; firstMove: string; cta: string }) {
  return (
    <article className="card-border flex h-full flex-col rounded-card bg-white/[0.04] p-6">
      <p className="mb-4 inline-flex w-fit rounded-full bg-teal/12 px-3 py-1 text-sm font-semibold text-teal">{title}</p>
      <h3 className="text-xl font-bold text-warm">{problem}</h3>
      <div className="mt-5 space-y-3 rounded-2xl bg-offblack/70 p-4">
        <p className="text-sm font-semibold text-textgray">Task</p>
        <p className="text-warm">{task}</p>
        <div className="border-t border-softgray/10 pt-3">
          <p className="text-sm font-semibold text-teal">First move</p>
          <p className="mt-1 text-warm">{firstMove}</p>
        </div>
      </div>
      <ButtonLink href="/#first-step-demo" variant="secondary" className="mt-6 w-full">
        {cta} <Icon name="arrow" className="h-4 w-4" />
      </ButtonLink>
    </article>
  );
}
