import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, LocateFixed, Briefcase, Linkedin } from "lucide-react";
import {
  EMAILJS_CONTACT_ME_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
} from "@/config/emailjs";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_ME_TEMPLATE_ID,
        form.current!,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Thank you for your message! I'll get back to you soon.");
          setIsSubmitting(false);
          if (form.current) form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Interested in working together on a unique project or partnership?
            I'm open to new business opportunities and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Let's connect if you have a project idea, want to discuss
                collaboration, or need a reliable partner for your next venture.
                I value clear communication and long-term cooperation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <LocateFixed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Gliwice, PL</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Availability</h4>
                  <p className="text-gray-300">Open to opportunities</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/armin-bolen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/armin-bolen
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4">Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to emails within 24 hours during weekdays.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 outline-none placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 outline-none placeholder:text-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 outline-none resize-none placeholder:text-gray-500"
                  placeholder="Enter your message or describe your inquiry."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
