// pages/api/job/Contact.js

import ConnectDB from '@/DB/connectDB';
import Joi from 'joi';
import ContactMessage from '@/models/ContactMessage';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await handleContactFormSubmission(req, res);
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}

const handleContactFormSubmission = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate the request body
        const { error } = schema.validate({ name, email, message });
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        // Create a new instance of the ContactMessage model
        const newMessage = new ContactMessage({
            name,
            email,
            message,
        });

        // Save the message to the database
        await newMessage.save();

        return res.status(200).json({ success: true, message: 'Message submitted successfully' });
    } catch (error) {
        console.error('Error submitting message:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
