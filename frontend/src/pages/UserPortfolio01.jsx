import axios from 'axios';
import { ExternalLink, Mail, MapPin, Phone, Send, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UserPortfolio01 = () => {
    const { id } = useParams();
    console.log(id);
    const [activeProject, setActiveProject] = useState(null);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {


            const res = await axios.get(`http://localhost:3000/api/getUserInfo/${id}`)
            console.log(res.data);
            setUser(res.data);

        } catch (error) {
            console.error('Error fetching user data:', error);
            setInterval(() => { alert('Failed to fetch user data. Please try again later.') }, 500)

        }
    }

    useEffect(() => {
        fetchUser();

    }, [id])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (<>
        {!user ? ( // ✅ Show loading until data arrives
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                <div className="text-white text-2xl">Loading...</div>
            </div>
        ) : (


            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="text-white font-bold text-xl">Portfolio</div>

                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <img
                                src={user.hero.Image}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
                            />
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                {user.hero.Name}
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-purple-300 mb-6">
                                {user.hero.Title}
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                {user.hero.tagline}
                            </p>
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
                                        {user.about.Bio}
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-white/70">
                                            <Mail className="w-5 h-5 mr-3" />
                                            {user.about.Email}
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <Phone className="w-5 h-5 mr-3" />
                                            {user.about.Phone}
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <MapPin className="w-5 h-5 mr-3" />
                                            {user.about.location}
                                        </div>
                                    </div>
                                </div>
                                <div>

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
                            {user.services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-4">{service.Name}</h3>
                                    <p className="text-white/70 leading-relaxed">{service.Description}</p>
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
                            {user.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    onClick={() => setActiveProject(index)}
                                >
                                    <img
                                        src={project.Image}
                                        alt={project.Name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-3">{project.Name}</h3>
                                        <p className="text-white/70 text-sm mb-4">{project.Description}</p>
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
                            {user.testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 mb-6 italic">"{testimonial.Feedback}"</p>
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.Name}</h4>
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
                                            {user.contact.Email}
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <Phone className="w-5 h-5 mr-2" />
                                            {user.contact.Phone}
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
                            © 2025 {user.hero.Name}. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        )}
    </>
    );
};

export default UserPortfolio01;