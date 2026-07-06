import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { contactFormConfig, isEmailJsConfigured } from '../../data/contact';
import { personalInfo } from '../../data/personal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sending, setSending] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      if (isEmailJsConfigured()) {
        await emailjs.send(
          contactFormConfig.serviceId,
          contactFormConfig.templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: personalInfo.email,
          },
          contactFormConfig.publicKey,
        );
        toast.success('Message sent — thank you for reaching out.');
        setForm(initialState);
      } else {
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        toast.success('Opening your email client…');
      }
    } catch {
      toast.error('Something went wrong. Please try again or email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <input
          id="contact-name"
          type="text"
          name="name"
          className="contact-input"
          placeholder=" "
          value={form.name}
          onChange={update('name')}
          required
          autoComplete="name"
        />
        <label htmlFor="contact-name" className="contact-label">
          Name
        </label>
      </div>

      <div className="contact-field">
        <input
          id="contact-email"
          type="email"
          name="email"
          className="contact-input"
          placeholder=" "
          value={form.email}
          onChange={update('email')}
          required
          autoComplete="email"
        />
        <label htmlFor="contact-email" className="contact-label">
          Email
        </label>
      </div>

      <div className="contact-field">
        <textarea
          id="contact-message"
          name="message"
          className="contact-input contact-textarea"
          placeholder=" "
          value={form.message}
          onChange={update('message')}
          required
          rows={5}
        />
        <label htmlFor="contact-message" className="contact-label">
          Message
        </label>
      </div>

      <motion.button
        type="submit"
        className="contact-submit"
        disabled={sending}
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <Send size={15} />
        {sending ? 'Sending…' : 'Send Message'}
      </motion.button>
    </form>
  );
}
