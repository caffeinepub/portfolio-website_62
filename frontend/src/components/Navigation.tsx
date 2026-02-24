import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavigationProps {
    activeSection: string;
}

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-card'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollTo('hero')}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Code2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-display font-bold text-lg text-foreground">
                        Portfolio
                    </span>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollTo(link.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeSection === link.id
                                        ? 'text-primary bg-primary/10'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => scrollTo('contact')}
                        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-amber-sm"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-card border-b border-border px-6 py-4">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => scrollTo(link.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        activeSection === link.id
                                            ? 'text-primary bg-primary/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                        <li className="pt-2">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                            >
                                Hire Me
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
