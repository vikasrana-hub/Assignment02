import axios from 'axios';
import { Briefcase, Code, Eye, FileText, Globe, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';
const PortfolioFormBuilder = () => {
    const [formData, setFormData] = useState({
        Templet: "modern",
        hero: {
            Name: "",
            Title: "",
            tagline: "",
            Image: "",
        },
        about: {
            Bio: "",
            Email: "",
            Phone: "",
            location: "",
        },
        socials: [
            { Name: "GitHub", Link: "" },
            { Name: "LinkedIn", Link: "" },
            { Name: "Twitter", Link: "" },
            { Name: "Website", Link: "" },
        ],
        services: [
            { Name: "", Description: "" },
        ],
        projects: [
            { Name: "", Description: "", Link: "", Image: "" },
        ],
        testimonials: [
            { Name: "", Feedback: "", Image: "" },
        ],
        contact: {
            Email: "",
            Phone: "",
            Address: "",
        },
    });

    const [currentSection, setCurrentSection] = useState("hero");

    const formSubmissionHandler = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/userInfo',formData)
        if(res.status===200){
            alert("Form Data Submitted Successfully")
            window.location.href=`/Portfolio/${res.data.template}/${res.data.userid}`
        }else{
            alert("Error in form submission")
        }
        console.log("Form Data Submitted:", formData);
        setFormData("")
    }

    const sections = [
        { id: "hero", name: "Hero Section", icon: <User className="w-4 h-4" /> },
        { id: "about", name: "About Me", icon: <FileText className="w-4 h-4" /> },
        { id: "skills", name: "Social Links", icon: <Code className="w-4 h-4" /> },
        { id: "services", name: "Services", icon: <Briefcase className="w-4 h-4" /> },
        { id: "projects", name: "Portfolio", icon: <Globe className="w-4 h-4" /> },
        { id: "testimonials", name: "Testimonials", icon: <MessageSquare className="w-4 h-4" /> },
        { id: "contact", name: "Contact Info", icon: <FileText className="w-4 h-4" /> },
        { id: "template", name: "Template", icon: <Eye className="w-4 h-4" /> },
    ];

    const handleNestedChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    const handleArrayChange = (arrayName, index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [arrayName]: prev[arrayName].map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            ),
        }));
    };

    const addItem = (arrayName, newItem) => {
        setFormData((prev) => ({
            ...prev,
            [arrayName]: [...prev[arrayName], newItem],
        }));
    };

    const removeItem = (arrayName, index) => {
        setFormData((prev) => ({
            ...prev,
            [arrayName]: prev[arrayName].filter((_, i) => i !== index),
        }));
    };

    const renderHeroSection = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hero Section</h3>
            <input
                type="text"
                value={formData.hero.Name}
                onChange={(e) => handleNestedChange("hero", "Name", e.target.value)}
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="text"
                value={formData.hero.Title}
                onChange={(e) => handleNestedChange("hero", "Title", e.target.value)}
                placeholder="Professional Title"
                className="w-full p-3 border rounded-lg"
            />
            <textarea
                value={formData.hero.tagline}
                onChange={(e) => handleNestedChange("hero", "tagline", e.target.value)}
                placeholder="Your tagline..."
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="url"
                value={formData.hero.Image}
                onChange={(e) => handleNestedChange("hero", "Image", e.target.value)}
                placeholder="Profile Image URL"
                className="w-full p-3 border rounded-lg"
            />
        </div>
    );

    const renderAboutSection = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">About Me</h3>
            <textarea
                value={formData.about.Bio}
                onChange={(e) => handleNestedChange("about", "Bio", e.target.value)}
                placeholder="Write your bio..."
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="email"
                value={formData.about.Email}
                onChange={(e) => handleNestedChange("about", "Email", e.target.value)}
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="tel"
                value={formData.about.Phone}
                onChange={(e) => handleNestedChange("about", "Phone", e.target.value)}
                placeholder="Phone"
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="text"
                value={formData.about.location}
                onChange={(e) => handleNestedChange("about", "location", e.target.value)}
                placeholder="Location"
                className="w-full p-3 border rounded-lg"
            />
        </div>
    );

    const renderSocialsSection = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Links</h3>
            {formData.socials.map((social, index) => (
                <div key={index} className="flex space-x-4 items-center">
                    <span className="w-24">{social.Name}</span>
                    <input
                        type="url"
                        value={social.Link}
                        onChange={(e) =>
                            handleArrayChange("socials", index, "Link", e.target.value)
                        }
                        placeholder={`Enter ${social.Name} link`}
                        className="flex-1 p-3 border rounded-lg"
                    />
                </div>
            ))}
        </div>
    );

    const renderServicesSection = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Services</h3>
                <button
                    onClick={() => addItem("services", { Name: "", Description: "" })}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                >
                    + Add Service
                </button>
            </div>
            {formData.services.map((service, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                    <input
                        type="text"
                        value={service.Name}
                        onChange={(e) =>
                            handleArrayChange("services", index, "Name", e.target.value)
                        }
                        placeholder="Service Name"
                        className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                        value={service.Description}
                        onChange={(e) =>
                            handleArrayChange("services", index, "Description", e.target.value)
                        }
                        placeholder="Description"
                        className="w-full p-3 border rounded-lg"
                    />
                    <button
                        onClick={() => removeItem("services", index)}
                        className="text-red-600"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );

    const renderProjectsSection = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Projects</h3>
                <button
                    onClick={() =>
                        addItem("projects", { Name: "", Description: "", Link: "", Image: "" })
                    }
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                >
                    + Add Project
                </button>
            </div>
            {formData.projects.map((project, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                    <input
                        type="text"
                        value={project.Name}
                        onChange={(e) =>
                            handleArrayChange("projects", index, "Name", e.target.value)
                        }
                        placeholder="Project Name"
                        className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                        value={project.Description}
                        onChange={(e) =>
                            handleArrayChange("projects", index, "Description", e.target.value)
                        }
                        placeholder="Description"
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="url"
                        value={project.Link}
                        onChange={(e) =>
                            handleArrayChange("projects", index, "Link", e.target.value)
                        }
                        placeholder="Project Link"
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="url"
                        value={project.Image}
                        onChange={(e) =>
                            handleArrayChange("projects", index, "Image", e.target.value)
                        }
                        placeholder="Image URL"
                        className="w-full p-3 border rounded-lg"
                    />
                </div>
            ))}
        </div>
    );

    const renderTestimonialsSection = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Testimonials</h3>
                <button
                    onClick={() =>
                        addItem("testimonials", { Name: "", Feedback: "", Image: "" })
                    }
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                >
                    + Add Testimonial
                </button>
            </div>
            {formData.testimonials.map((t, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                    <input
                        type="text"
                        value={t.Name}
                        onChange={(e) =>
                            handleArrayChange("testimonials", index, "Name", e.target.value)
                        }
                        placeholder="Client Name"
                        className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                        value={t.Feedback}
                        onChange={(e) =>
                            handleArrayChange("testimonials", index, "Feedback", e.target.value)
                        }
                        placeholder="Feedback"
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="url"
                        value={t.Image}
                        onChange={(e) =>
                            handleArrayChange("testimonials", index, "Image", e.target.value)
                        }
                        placeholder="Image URL"
                        className="w-full p-3 border rounded-lg"
                    />
                </div>
            ))}
        </div>
    );

    const renderContactSection = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <input
                type="email"
                value={formData.contact.Email}
                onChange={(e) => handleNestedChange("contact", "Email", e.target.value)}
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="tel"
                value={formData.contact.Phone}
                onChange={(e) => handleNestedChange("contact", "Phone", e.target.value)}
                placeholder="Phone"
                className="w-full p-3 border rounded-lg"
            />
            <input
                type="text"
                value={formData.contact.Address}
                onChange={(e) => handleNestedChange("contact", "Address", e.target.value)}
                placeholder="Address"
                className="w-full p-3 border rounded-lg"
            />
        </div>
    );

    const renderTemplateSection = () => (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Choose Template</h3>
            <div className="grid grid-cols-2 gap-6">
                <div
                    onClick={() => setFormData({ ...formData, Templet: "modern" })}
                    className={`p-6 border-2 rounded-lg cursor-pointer ${formData.Templet === "modern"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                >
                    Modern Template
                </div>
                <div
                    onClick={() => setFormData({ ...formData, Templet: "professional" })}
                    className={`p-6 border-2 rounded-lg cursor-pointer ${formData.Templet === "professional"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                >
                    Professional Template
                </div>
            </div>
        </div>
    );

    const renderCurrentSection = () => {
        switch (currentSection) {
            case "hero": return renderHeroSection();
            case "about": return renderAboutSection();
            case "skills": return renderSocialsSection();
            case "services": return renderServicesSection();
            case "projects": return renderProjectsSection();
            case "testimonials": return renderTestimonialsSection();
            case "contact": return renderContactSection();
            case "template": return renderTemplateSection();
            default: return renderHeroSection();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setCurrentSection(s.id)}
                                className={`w-full flex items-center p-3 rounded-lg mb-2 ${currentSection === s.id
                                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                {s.icon}
                                <span className="ml-2">{s.name}</span>
                            </button>
                        ))}
                        <button
                            onClick={formSubmissionHandler}
                            className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg"
                        >
                            Generate Portfolio
                        </button>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow">
                        {renderCurrentSection()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioFormBuilder;
