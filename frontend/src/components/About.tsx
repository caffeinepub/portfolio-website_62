import { MapPin, Calendar, Coffee, Zap } from 'lucide-react';

interface AboutProps {
    bio: string;
}

const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Zap, label: 'Projects Completed', value: '40+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
];

export default function About({ bio }: AboutProps) {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-primary font-mono text-sm font-medium">01.</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
                    <div className="flex-1 h-px bg-border max-w-xs" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Avatar side */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-3 rounded-3xl border border-primary/20 rotate-3" />
                            <div className="absolute -inset-3 rounded-3xl border border-primary/10 -rotate-3" />

                            {/* Avatar image */}
                            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-amber-md">
                                <img
                                    src="/assets/generated/avatar-placeholder.dim_256x256.png"
                                    alt="Profile avatar"
                                    className="w-full h-full object-cover"
                                />
                                {/* Amber overlay tint */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-card">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-xs font-medium text-foreground">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="space-y-6">
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {bio}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {stats.map(({ icon: Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
                                >
                                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                                    <div className="font-display text-2xl font-bold text-foreground">{value}</div>
                                    <div className="text-xs text-muted-foreground mt-1 leading-tight">{label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Download CV button */}
                        <div className="pt-2">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Download Resume
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
