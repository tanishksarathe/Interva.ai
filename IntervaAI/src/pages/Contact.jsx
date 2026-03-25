import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Send,
  Clock,
  CheckCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactEmail = 'tanishk.workforme@gmail.com'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill all fields')
      return
    }

    setIsSubmitting(true)

    // Create mailto link with pre-filled recipient and message body
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Try to open mail client
    const link = document.createElement('a')
    link.href = mailtoLink
    link.click()
    link.remove()

    // Show success message
    setTimeout(() => {
      toast.success('Opening your email client...')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 500)
  }

  const directEmailHandler = () => {
    // Try to open default mail client
    const mailtoLink = `mailto:${contactEmail}`
    
    // Use a more reliable method to open mailto
    const link = document.createElement('a')
    link.href = mailtoLink
    link.click()
    link.remove()
  }

  const openGmailCompose = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${contactEmail}`
    window.open(gmailUrl, '_blank')
    toast.success('Opening Gmail...')
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail)
    toast.success(`Email copied to clipboard: ${contactEmail}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Send directly to our inbox",
      contact: contactEmail,
      actions: [
        { text: "Gmail", handler: openGmailCompose, color: "bg-indigo-500 hover:bg-indigo-600" },
        { text: "Copy Email", handler: copyEmailToClipboard, color: "bg-slate-700 hover:bg-slate-800" }
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Quick Message",
      description: "Use the form below to compose",
      contact: "Contact Form",
      actions: []
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Response Time",
      description: "We respond within 24 hours",
      contact: "Mon-Fri, 9 AM - 6 PM",
      actions: []
    }
  ]

  return (
    <div className="bg-linear-to-br from-pink-100 via-blue-100 to-indigo-200 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="text-lg text-gray-600">
            Reach out to us through any of the methods below
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-white/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-md p-8 rounded-xl hover:shadow-lg transition transform hover:scale-105 text-center"
              >
                <div className="text-indigo-500 mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                <p className="text-indigo-500 font-semibold mb-4 break-all">{method.contact}</p>
                {method.actions && method.actions.length > 0 && (
                  <div className="flex gap-2 flex-wrap justify-center">
                    {method.actions.map((action, actionIdx) => (
                      <button
                        key={actionIdx}
                        onClick={action.handler}
                        className={`${action.color} text-white px-4 py-2 rounded-lg font-semibold transition text-sm`}
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="block text-slate-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white/50"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <label className="block text-slate-700 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white/50"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-slate-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white/50"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <label className="block text-slate-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're thinking..."
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white/50 resize-none"
                />
              </motion.div>

              {/* Hidden recipient email info */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                <p className="text-sm text-slate-700">
                  <strong>Email will be sent to:</strong> <span className="text-indigo-500 font-semibold">{contactEmail}</span>
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin">
                      <Send className="w-5 h-5" />
                    </div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-lg border border-indigo-200/50"
            >
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 mb-2">How to Send Your Message</p>
                  <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
                    <li><strong>Option 1 - Gmail:</strong> Click "Send Message" to open Gmail web interface</li>
                    <li><strong>Option 2 - Mail Client:</strong> If a mail client is set as default, it will open automatically</li>
                    <li><strong>Option 3 - Copy Email:</strong> Copy the email address and send from any platform</li>
                    <li><strong>Response:</strong> We typically respond within 24 hours during business hours</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            {[
              {
                q: "How quickly will I receive a response?",
                a: "We aim to respond to all inquiries within 24 hours during business days (Monday-Friday, 9 AM - 6 PM). Urgent matters may be prioritized."
              },
              {
                q: "Can I contact you through other channels?",
                a: "Currently, email is our primary contact method. You can also reach out through the email address provided: tanishk.workforme@gmail.com"
              },
              {
                q: "What should I include in my message?",
                a: "Please provide clear details about your question or feedback, including any relevant context. The more specific you are, the better we can assist you."
              },
              {
                q: "Is my information kept private?",
                a: "Yes, we take privacy seriously. Your contact information and messages are only used to respond to your inquiry and are never shared with third parties."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-md p-6 rounded-xl hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-slate-800 text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-700">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-indigo-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Need Immediate Support?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Choose your preferred way to reach us
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={openGmailCompose}
              className="bg-white text-indigo-500 hover:bg-slate-50 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Open in Gmail
            </button>
            <button
              onClick={copyEmailToClipboard}
              className="bg-slate-200 text-slate-800 hover:bg-slate-300 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Copy Email
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
