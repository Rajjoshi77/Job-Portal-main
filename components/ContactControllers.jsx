// controllers/contactController.js

const ContactMessage = require('../models/ContactMessage');

const handleSubmit = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Create a new instance of the ContactMessage schema
        const newMessage = new ContactMessage({
            name,
            email,
            message
        });

        // Save the message to the database
        await newMessage.save();

        // Respond with a success message
        res.status(200).json({ success: true, message: 'Message submitted successfully' });
    } catch (error) {
        // If an error occurs, respond with an error message
        res.status(500).json({ success: false, message: 'Error submitting message' });
    }
};

module.exports = { handleSubmit };
