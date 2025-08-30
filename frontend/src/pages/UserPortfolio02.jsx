import axios from 'axios';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Quote, Send, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UserPortfolio02 = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const fetchUser = async () => {
        try {


            const res = await axios.get(`https://assignment02-rt3u-kvr2m5ca1-vikas-projects-987d5ea3.vercel.app/api/getUserInfo/${id}`)
            console.log(res.data);
            setUser(res.data);

        } catch (error) {
            console.error('Error fetching user data:', error);
            setTimeout(() => { alert('Failed to fetch user data. Please try again later.') }, 6000)

        }
    }

    useEffect(() => {
        fetchUser();

    }, [id])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });


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

    return (<>
        {!user ? ( // ✅ Show loading until data arrives
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                <div className="text-white text-2xl">Loading...</div>
            </div>):(

        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {user.hero.Name}
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-blue-600 mb-6">
                                {user.hero.Title}
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {user.hero.tagline}
                            </p>
                            <div className="flex space-x-4 mb-8">
                            </div>
                            <div className="flex space-x-6">
                                <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
                            </div>
                        </div>
                        <div className="lg:text-right">
                            <img
                                src={user.hero.Image}
                                alt={user.hero.Name}
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
                                {user.about.Bio}
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                My approach combines user research, strategic thinking, and creative problem-solving to deliver designs that not only look beautiful but also drive business results.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-700">
                                    <Mail className="w-5 h-5 mr-4 text-blue-600" />
                                    {user.about.Email}
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Phone className="w-5 h-5 mr-4 text-blue-600" />
                                    {user.about.Phone}
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <MapPin className="w-5 h-5 mr-4 text-blue-600" />
                                    {user.about.location}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {user.services.map((s, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
                                    >
                                        <span className="text-gray-700 font-medium">{s.Name}</span>
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
                        {user.services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.Name}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.Description}</p>
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
                        {user.projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <img
                                    src={project.Image}
                                    alt={project.Name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.Name}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.Description}</p>
                                    <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        <span className="font-medium" onClick={() => window.open(project.Link, '_blank')
                                        }>View Project </span>
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
                        {user.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.Feedback}"</p>
                                <div className="flex items-center">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.Name}</h4>

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
                                        <p className="text-gray-600">{user.contact.Email}</p>
                                        <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-600">{user.contact.Phone}</p>
                                        <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Location</h4>
                                        <p className="text-gray-600">{user.contact.Address}</p>
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
                        © 2025 {user.hero.Name}. All rights reserved. Built with React and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>)}
        </>
    );
};

export default UserPortfolio02;
