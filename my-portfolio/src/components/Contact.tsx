import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'alief@example.com', href: 'mailto:alief@example.com' },
    { icon: '💼', label: 'LinkedIn', value: '@alieffahdal', href: 'https://linkedin.com' },
    { icon: '🐙', label: 'GitHub', value: '@alieffahdal', href: 'https://github.com/alieffahdal' },
    { icon: '🐦', label: 'Twitter', value: '@alieffahdal', href: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind or want to collaborate? I would love to hear from you!
            </p>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <div className="contact-label">{link.label}</div>
                    <div className="contact-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={5}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {submitted && <p className="success-message">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
