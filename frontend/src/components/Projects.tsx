import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../backend';

interface ProjectsProps {
    projects: Project[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-sm flex flex-col">
            {/* Card header with number */}
            <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors leading-none">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2">
                        <a
                            href={project.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                            aria-label={`View ${project.name} on GitHub`}
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href={project.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                            aria-label={`Visit ${project.name}`}
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                </p>
            </div>

            {/* Skills used */}
            <div className="p-6 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.skillsUsed.map((skill) => (
                        <span
                            key={skill.name}
                            className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-primary font-mono text-sm font-medium">03.</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
                    <div className="flex-1 h-px bg-border max-w-xs" />
                </div>
                <p className="text-muted-foreground mb-12 max-w-xl">
                    A selection of projects I've built — from web apps to design systems and everything in between.
                </p>

                {projects.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        <p>No projects added yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
