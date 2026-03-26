import { ReactNode } from "react";

interface Props {
  step: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionBlock = ({ step, title, subtitle, children }: Props) => (
  <div className="mb-10">
    <div className="flex items-baseline gap-3 mb-1">
      <span className="font-data text-xs font-bold text-primary uppercase tracking-widest">{step}</span>
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {subtitle && <p className="font-body text-sm text-muted-foreground mb-5">{subtitle}</p>}
    {!subtitle && <div className="mb-5" />}
    {children}
  </div>
);

export default SectionBlock;
