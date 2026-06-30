import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/personal';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function ShootingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 80}%`,
            right: `${Math.random() * 100}%`,
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, -400 - Math.random() * 200],
            y: [0, 200 + Math.random() * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeIn',
          }}
        >
          <div
            className="h-px"
            style={{
              width: 80 + Math.random() * 60,
              background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.8), rgba(255,255,255,0.6))',
              transform: 'rotate(-30deg)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#06B6D4' },
  { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#3B82F6' },
  { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location, href: '#', color: '#8B5CF6' },
  { icon: <Clock size={18} />, label: 'Availability', value: personalInfo.availability, href: '#', color: '#A855F7' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
    toast.success('Message sent! I\'ll get back to you soon. 🚀', {
      style: {
        background: 'rgba(5,8,22,0.95)',
        border: '1px solid rgba(6,182,212,0.3)',
        color: '#E2E8F0',
        backdropFilter: 'blur(16px)',
      },
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #050816 100%)' }}
    >
      <Toaster position="top-right" />
      <StarField count={180} speed={0.3} />
      <NebulaBackground variant="contact" />
      <ShootingStars />

      {/* Galaxy fog */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-secondary text-sm text-accent-cyan tracking-widest uppercase mb-4">Let's Connect</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto text-sm">
            Have a project in mind, a collaboration opportunity, or just want to say hi? I'm always open to new conversations.
          </p>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: 'linear-gradient(90deg,transparent,#06B6D4,transparent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-heading font-semibold text-xl text-white mb-2">Let's Build Something Amazing</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                Whether you're looking for an AI engineer, a full-stack developer, or a technical co-founder — I bring both deep technical expertise and creative problem-solving to every project.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 glass px-4 py-3 rounded-xl group hover:border-opacity-50 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: `${info.color}20`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-secondary text-xs text-white/30">{info.label}</p>
                      <p className="font-secondary text-sm text-white group-hover:text-accent-cyan transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ background: info.color, boxShadow: `0 0 6px ${info.color}` }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              className="glass-card p-6"
              whileHover={{ boxShadow: '0 0 30px rgba(34,211,238,0.15)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
                <span className="font-secondary font-semibold text-green-400 text-sm">Currently Available</span>
              </div>
              <p className="font-body text-white/50 text-xs">
                Open to full-time roles, freelance projects, and exciting collaborations.
                Response time: typically within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
              <h3 className="font-heading font-semibold text-xl text-white mb-2">Send a Message</h3>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Alex Johnson' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'alex@example.com' },
                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Collaboration' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-secondary text-xs text-white/40 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full px-4 py-3 glass rounded-xl font-body text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '1px solid rgba(6,182,212,0.5)';
                      e.target.style.boxShadow = '0 0 15px rgba(6,182,212,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ))}

              <div>
                <label className="block font-secondary text-xs text-white/40 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-xl font-body text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(6,182,212,0.5)';
                    e.target.style.boxShadow = '0 0 15px rgba(6,182,212,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                className="btn-primary text-white flex items-center justify-center gap-2 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
