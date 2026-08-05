import { Mail, Github, Linkedin, CircleDot, Music, Mountain, Phone } from "lucide-react";

const hobbies = [
  { name: "Playing Cricket", icon: CircleDot },
  { name: "Listening to Music", icon: Music },
  { name: "Hiking", icon: Mountain },
];

const socials = [
  { label: "ahmadaatif6@gmail.com", href: "mailto:ahmadaatif6@gmail.com", icon: Mail },
  { label: "+91-6207392585", href: "tel:+916207392585", icon: Phone },
  { label: "GitHub", href: "https://github.com/aatifahmad123", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/aatifahmad123", icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 py-4 pb-10">
      <div className="rounded-lg border border-border bg-card p-6 md:p-8">
        {/* Hobbies */}
        <div className="mb-8">
          <p className="sp-eyebrow mb-1.5">Off the clock</p>
          <h3 className="mb-4 text-xl font-extrabold text-foreground">Hobbies</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card">
                  <hobby.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-semibold text-foreground">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <p className="sp-eyebrow mb-1.5">Get in touch</p>
          <h3 className="mb-3 text-xl font-extrabold text-foreground">Contact</h3>
          <p className="max-w-2xl text-sm text-muted-foreground">
            I am actively seeking opportunities in AI engineering and software development, where I
            can work on challenging problems and build systems that scale and matter.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-accent hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aatif Ahmad. Built with React & Tailwind CSS in Mumbai, India. Font: Figtree.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
