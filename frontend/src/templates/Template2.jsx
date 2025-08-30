import { Code, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, Palette, Phone, Quote, Send, Smartphone, Twitter, X } from 'lucide-react';
import { useState } from 'react';

const PortfolioTemplate2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const skills = [
        'JavaScript', 'React', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Git'
    ];

    const services = [
        {
            icon: <Code className="w-8 h-8 text-blue-600" />,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive user interfaces with modern frameworks like React, Vue.js, and Angular.'
        },
        {
            icon: <Smartphone className="w-8 h-8 text-blue-600" />,
            title: 'Mobile Development',
            description: 'Building native and cross-platform mobile applications for iOS and Android using React Native and Flutter.'
        },
        {
            icon: <Palette className="w-8 h-8 text-blue-600" />,
            title: 'UI/UX Design',
            description: 'Designing user-centered interfaces that are both beautiful and functional, focusing on usability and accessibility.'
        }
    ];

    const projects = [
        {
            title: 'Healthcare Dashboard',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and analytics dashboard.'
        },
        {
            title: 'Finance Tracker App',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            description: 'Personal finance management application with budget tracking, expense categorization, and financial insights.'
        },
        {
            title: 'Learning Platform',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            description: 'Online learning platform with course management, progress tracking, and interactive learning modules.'
        }
    ];

    const testimonials = [
        {
            name: 'Jennifer Smith',
            role: 'Project Manager, WebCorp',
            quote: 'Outstanding technical skills and excellent communication. Delivered a high-quality solution that perfectly met our requirements.'
        },
        {
            name: 'David Rodriguez',
            role: 'CTO, StartupHub',
            quote: 'Reliable, creative, and detail-oriented. The project was completed ahead of schedule and within budget.'
        },
        {
            name: 'Lisa Thompson',
            role: 'Marketing Director, BrandCo',
            quote: 'Exceptional work on our website redesign. The new design increased our conversion rate by 40%.'
        }
    ];

    const handleContactChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = () => {
        console.log('Contact form submitted:', contactForm);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setContactForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="font-bold text-xl text-gray-900">Emma Wilson</div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                                <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
                                <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</a>
                                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Emma Wilson
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-blue-600 mb-6">
                                Senior UX/UI Designer
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                I create meaningful digital experiences that connect brands with their audiences through thoughtful design and strategic thinking.
                            </p>
                            <div className="flex space-x-4 mb-8">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                    View My Work
                                </button>
                                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                                    Download CV
                                </button>
                            </div>
                            <div className="flex space-x-6">
                                <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                            </div>
                        </div>
                        <div className="lg:text-right">
                            <img
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face"
                                alt="Emma Wilson"
                                className="w-80 h-80 rounded-2xl shadow-2xl object-cover mx-auto lg:mx-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                I'm a passionate UX/UI designer with over 6 years of experience creating digital products that users love. I believe great design should be invisible - it should solve problems so elegantly that users don't even think about it.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                My approach combines user research, strategic thinking, and creative problem-solving to deliver designs that not only look beautiful but also drive business results.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-700">
                                    <Mail className="w-5 h-5 mr-4 text-blue-600" />
                                    emma.wilson@email.com
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Phone className="w-5 h-5 mr-4 text-blue-600" />
                                    +1 (555) 987-6543
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <MapPin className="w-5 h-5 mr-4 text-blue-600" />
                                    New York, NY
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
                                    >
                                        <span className="text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            I offer comprehensive design and development services to help businesses create exceptional digital experiences.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A selection of my recent projects showcasing different aspects of design and development.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="font-medium">View Project</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
                        <p className="text-xl text-gray-600">What people say about working with me</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
                        <p className="text-xl text-gray-600">Insights and thoughts on design and technology</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
                                alt="Blog post"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span>March 15, 2024</span>
                                    <span className="mx-2">•</span>
                                    <span>5 min read</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Psychology of User Interface Design: Creating Intuitive Experiences
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Exploring how understanding human psychology can dramatically improve user interface design. Learn about cognitive load, visual hierarchy, and the principles that make interfaces feel natural and effortless to use.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Read More
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                        <p className="text-xl text-gray-600">Ready to start your next project? I'd love to hear from you.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send me a message</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleContactChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactForm.email}
                                        onChange={handleContactChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        value={contactForm.message}
                                        onChange={handleContactChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    onClick={handleContactSubmit}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-600">emma.wilson@email.com</p>
                                        <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                        <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Location</h4>
                                        <p className="text-gray-600">New York, NY</p>
                                        <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-medium text-gray-900 mb-4">Follow me</h4>
                                <div className="flex space-x-4">
                                    <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                    <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                    <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2024 Emma Wilson. All rights reserved. Built with React and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioTemplate2;