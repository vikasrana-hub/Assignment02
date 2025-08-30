import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send, Star, Twitter } from 'lucide-react';
import { useState } from 'react';

const PortfolioTemplate1 = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const skills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'GraphQL'
    ];

    const services = [
        {
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.'
        },
        {
            title: 'Mobile Development',
            description: 'Cross-platform mobile apps using React Native and Flutter for iOS and Android platforms.'
        },
        {
            title: 'UI/UX Design',
            description: 'User-centered design solutions that create engaging and intuitive digital experiences.'
        }
    ];

    const projects = [
        {
            title: 'E-commerce Platform',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.'
        },
        {
            title: 'Task Management App',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics.'
        },
        {
            title: 'Portfolio Website',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
            description: 'Responsive portfolio website showcasing creative work with smooth animations and modern design.'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            quote: 'Exceptional work quality and attention to detail. The project was delivered on time and exceeded our expectations.'
        },
        {
            name: 'Mike Chen',
            role: 'Product Manager, InnovaCorp',
            quote: 'Professional, creative, and reliable. Would definitely work together again on future projects.'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-white font-bold text-xl">Portfolio</div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
                            <a href="#services" className="text-white hover:text-purple-300 transition-colors">Services</a>
                            <a href="#portfolio" className="text-white hover:text-purple-300 transition-colors">Portfolio</a>
                            <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
                        />
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            Alex Johnson
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-purple-300 mb-6">
                            Full-Stack Developer
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Crafting digital experiences that inspire and engage users through innovative design and cutting-edge technology
                        </p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <Github className="w-8 h-8 text-white/70 hover:text-white transition-colors cursor-pointer" />
                        <Linkedin className="w-8 h-8 text-white/70 hover:text-white transition-colors cursor-pointer" />
                        <Twitter className="w-8 h-8 text-white/70 hover:text-white transition-colors cursor-pointer" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-white/80 text-lg leading-relaxed mb-6">
                                    I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center text-white/70">
                                        <Mail className="w-5 h-5 mr-3" />
                                        alex.johnson@email.com
                                    </div>
                                    <div className="flex items-center text-white/70">
                                        <Phone className="w-5 h-5 mr-3" />
                                        +1 (555) 123-4567
                                    </div>
                                    <div className="flex items-center text-white/70">
                                        <MapPin className="w-5 h-5 mr-3" />
                                        San Francisco, CA
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                                <p className="text-white/70 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Portfolio</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => setActiveProject(index)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                    <p className="text-white/70 text-sm mb-4">{project.description}</p>
                                    <ExternalLink className="w-5 h-5 text-purple-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Testimonials</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Latest Blog Post</h2>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            The Future of Web Development: Trends to Watch in 2024
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Exploring the latest trends in web development including AI integration, improved performance optimization, and the rise of new frameworks that are shaping the future of digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Get In Touch</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/20 text-center">
                                <p className="text-white/70 mb-4">Or reach out directly:</p>
                                <div className="flex justify-center space-x-8">
                                    <div className="flex items-center text-white/70">
                                        <Mail className="w-5 h-5 mr-2" />
                                        alex.johnson@email.com
                                    </div>
                                    <div className="flex items-center text-white/70">
                                        <Phone className="w-5 h-5 mr-2" />
                                        +1 (555) 123-4567
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-white/50">
                        © 2024 Alex Johnson. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioTemplate1;