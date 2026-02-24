import { Heart, Code2 } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'portfolio-website');

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: SiGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: SiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: SiX, href: 'https://x.com', label: 'X (Twitter)' },
    ];

    return (
        <footer className="border-t border-border bg-card">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid sm:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                                <Code2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-display font-bold text-lg text-foreground">Alex Morgan</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Full-stack developer & designer crafting beautiful digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-sm text-foreground mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-sm text-foreground mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {year} Alex Morgan. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        Built with{' '}
                        <Heart className="w-3 h-3 text-primary fill-primary" />{' '}
                        using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
