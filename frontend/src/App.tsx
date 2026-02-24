import { useEffect, useRef, useState } from 'react';
import { useGetPortfolio, useCreatePortfolio } from './hooks/useQueries';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Portfolio } from './backend';

const DEFAULT_PORTFOLIO: Portfolio = {
    bio: "I'm a passionate full-stack developer and designer who loves crafting beautiful, performant digital experiences. With expertise spanning modern web technologies, I bring ideas to life through clean code and thoughtful design. When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or sketching UI concepts.",
    skills: [
        { name: 'React & TypeScript', level: BigInt(90) },
        { name: 'Node.js & Backend', level: BigInt(82) },
        { name: 'UI/UX Design', level: BigInt(75) },
        { name: 'Cloud & DevOps', level: BigInt(68) },
        { name: 'Web3 & ICP', level: BigInt(72) },
        { name: 'Database Design', level: BigInt(78) },
    ],
    projects: [
        {
            name: 'DeFi Dashboard',
            description: 'A real-time decentralized finance dashboard with portfolio tracking, yield farming analytics, and cross-chain asset management built on the Internet Computer.',
            link: 'https://github.com',
            skillsUsed: [
                { name: 'React', level: BigInt(90) },
                { name: 'Web3', level: BigInt(80) },
                { name: 'TypeScript', level: BigInt(85) },
            ],
        },
        {
            name: 'AI Content Studio',
            description: 'A collaborative content creation platform powered by AI, featuring real-time editing, version control, and multi-format export capabilities.',
            link: 'https://github.com',
            skillsUsed: [
                { name: 'Next.js', level: BigInt(88) },
                { name: 'OpenAI API', level: BigInt(75) },
                { name: 'PostgreSQL', level: BigInt(70) },
            ],
        },
        {
            name: 'Design System Kit',
            description: 'A comprehensive design system and component library with 80+ accessible components, dark mode support, and full Figma integration.',
            link: 'https://github.com',
            skillsUsed: [
                { name: 'Storybook', level: BigInt(85) },
                { name: 'Tailwind CSS', level: BigInt(92) },
                { name: 'Figma', level: BigInt(80) },
            ],
        },
        {
            name: 'Real-time Analytics',
            description: 'High-performance analytics platform processing millions of events per second with live dashboards, custom alerting, and predictive insights.',
            link: 'https://github.com',
            skillsUsed: [
                { name: 'Rust', level: BigInt(70) },
                { name: 'ClickHouse', level: BigInt(65) },
                { name: 'React', level: BigInt(90) },
            ],
        },
    ],
};

export default function App() {
    const { data: portfolio, isLoading } = useGetPortfolio();
    const createPortfolio = useCreatePortfolio();
    const [activeSection, setActiveSection] = useState('hero');
    const hasSeeded = useRef(false);

    // Seed default portfolio data if none exists
    useEffect(() => {
        if (!isLoading && portfolio === null && !hasSeeded.current && !createPortfolio.isPending) {
            hasSeeded.current = true;
            createPortfolio.mutate({
                bio: DEFAULT_PORTFOLIO.bio,
                skills: DEFAULT_PORTFOLIO.skills,
                projects: DEFAULT_PORTFOLIO.projects,
            });
        }
    }, [isLoading, portfolio, createPortfolio]);

    // Track active section on scroll
    useEffect(() => {
        const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.4 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const displayPortfolio = portfolio ?? DEFAULT_PORTFOLIO;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation activeSection={activeSection} />
            <main>
                <Hero />
                <About bio={displayPortfolio.bio} />
                <Skills skills={displayPortfolio.skills} />
                <Projects projects={displayPortfolio.projects} />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
