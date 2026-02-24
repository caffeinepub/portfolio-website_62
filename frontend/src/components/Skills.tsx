import type { Skill } from '../backend';

interface SkillsProps {
    skills: Skill[];
}

function SkillBar({ skill }: { skill: Skill }) {
    const level = Number(skill.level);
    const label = level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 60 ? 'Proficient' : 'Learning';

    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <span className="text-xs font-mono text-primary">{level}%</span>
                </div>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-deep to-amber-glow transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}

const techCategories = [
    { label: 'Frontend', techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { label: 'Backend', techs: ['Node.js', 'Rust', 'Python', 'Go', 'Motoko'] },
    { label: 'Tools', techs: ['Git', 'Docker', 'Figma', 'AWS', 'PostgreSQL'] },
];

export default function Skills({ skills }: SkillsProps) {
    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-primary font-mono text-sm font-medium">02.</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
                    <div className="flex-1 h-px bg-border max-w-xs" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Skill bars */}
                    <div className="space-y-6">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                            Core Competencies
                        </h3>
                        {skills.length > 0 ? (
                            skills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))
                        ) : (
                            <p className="text-muted-foreground text-sm">No skills added yet.</p>
                        )}
                    </div>

                    {/* Tech categories */}
                    <div className="space-y-8">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                            Technologies
                        </h3>
                        {techCategories.map(({ label, techs }) => (
                            <div key={label}>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{label}</span>
                                    <div className="flex-1 h-px bg-border" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
