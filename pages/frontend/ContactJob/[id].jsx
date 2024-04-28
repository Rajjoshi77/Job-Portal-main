import React, { useState } from 'react';
import NavBar from '@/components_jobseeker/NavBar_jobseeker'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/job/Contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    // Display success message or redirect to another page
                    alert('Message submitted successfully');
                } else {
                    // Handle error response
                    alert('Error submitting message');
                }
            } else {
                // Handle non-successful response
                alert('Error submitting message');
            }
        } catch (error) {
            // Handle network error
            console.error('Error:', error);
            alert('Error submitting message');
        }
    };

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div style={{ maxWidth: '400px', width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold' }}>Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold' }}>Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="message" style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold' }}>Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
                        </div>
                        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s' }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
