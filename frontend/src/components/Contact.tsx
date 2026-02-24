import { useState } from 'react';
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate async submission
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('Contact form submitted:', form);
        setIsSubmitting(false);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'alex@example.com' },
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
        { icon: MessageSquare, label: 'Response Time', value: 'Within 24 hours' },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-primary font-mono text-sm font-medium">04.</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
                    <div className="flex-1 h-px bg-border max-w-xs" />
                </div>
                <p className="text-muted-foreground mb-12 max-w-xl">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                                Let's work together
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm currently open to freelance projects and full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">{label}</div>
                                        <div className="text-sm font-medium text-foreground">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                                    <Send className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground text-sm mb-6">
                                    Thanks for reaching out. I'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-5 py-2.5 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Your Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-secondary border-border focus:border-primary/60 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-secondary border-border focus:border-primary/60 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="bg-secondary border-border focus:border-primary/60 focus:ring-primary/20 placeholder:text-muted-foreground/50 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-amber-sm hover:shadow-amber-md"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
