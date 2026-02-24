import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x800.png')" }}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Available for new opportunities
                </div>

                {/* Name */}
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Hi, I'm{' '}
                    <span className="text-gradient-amber">Alex Morgan</span>
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Full-Stack Developer & UI/UX Designer
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    I craft beautiful, performant digital experiences that live at the intersection of design and engineering.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-amber-md hover:shadow-amber-lg hover:-translate-y-0.5"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={scrollToAbout}
                        className="px-8 py-3.5 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold text-base hover:bg-secondary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        About Me
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {[
                        { icon: SiGithub, href: 'https://github.com', label: 'GitHub' },
                        { icon: SiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                        { icon: SiX, href: 'https://x.com', label: 'X (Twitter)' },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-10 h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float"
                aria-label="Scroll down"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <ArrowDown className="w-4 h-4" />
            </button>
        </section>
    );
}
