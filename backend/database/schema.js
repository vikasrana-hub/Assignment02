import mongoose from "mongoose";

const SocialSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Link: { type: String, required: true },
})
const ServiceSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
})
const ProjectSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Link: { type: String,  },
    Image: { type: String, required: true },
})
const TestimonialSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Feedback: { type: String, required: true },
    Image: { type: String, },
})
const ContactSchema = new mongoose.Schema({
    Email: { type: String, required: true },
    Phone: { type: String, required: true },
    Address: { type: String, required: true },
})

const portfolioData= new mongoose.Schema({
    Templet:{ type: String, required: true },
    hero:{
    Name: { type: String, required: true },
    Title: { type: String, required: true },
    tagline: { type: String, required: true },
    Image: { type: String, required: true },
},
    about:{
        Bio:{ type: String, required: true},
        Email:{ type: String, required: true},
        Phone:{ type: String, required: true},
        location:{ type: String, required: true},
    },
    socials:[SocialSchema],
    services:[ServiceSchema],
    projects:[ProjectSchema],
    testimonials:[TestimonialSchema],
    contact:ContactSchema,
})

const Portfolio = mongoose.model("Portfolio", portfolioData)

export default Portfolio