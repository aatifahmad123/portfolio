import { GraduationCap } from "lucide-react";
import Section from "./Section";

const education = [
  {
    school: "Indian Institute of Technology (IIT), Jodhpur",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    meta: "2022 – 2026"
  },
  {
    school: "Delhi Public School",
    degree: "Secondary and Senior Secondary, Class IV to XII",
    meta: "2013 – 2022"
  }
];

const EducationSection = () => {
  return (
    <Section eyebrow="Albums" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
              <GraduationCap className="h-5 w-5 text-primary" />
            </span>
            <div>
              <h3 className="text-base font-bold text-foreground">{item.school}</h3>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
