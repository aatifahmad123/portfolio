interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ id, eyebrow, title, subtitle, action, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 px-4 md:px-8 lg:px-12 py-4">
      <div className="rounded-lg border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            {eyebrow && <p className="sp-eyebrow mb-1.5">{eyebrow}</p>}
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{title}</h2>
            {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
