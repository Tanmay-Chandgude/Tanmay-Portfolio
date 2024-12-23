import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('xb0lJS8UFPhakibus'); // Replace with your actual public key
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_johaquk'; // Replace with your service ID
    const templateId = 'template_gpllnlx'; // Replace with your template ID
    const userId = 'xb0lJS8UFPhakibus'; // Replace with your public user ID

    const templateParams = {
      from_name: formData.name,
      email_id: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('Something went wrong. Please try again later.');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 block w-full rounded-xl border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                placeholder="Write your message here..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
