"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anmol.ap12@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="contactme"
      className="min-h-screen flex relative overflow-hidden flex-col text-white max-w-full px-6 md:px-10 justify-center items-center py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid-bg opacity-10"></div>
      <div className="absolute inset-0 analytics-gradient opacity-20"></div>
      
      {/* Floating Security Elements */}
      <div className="absolute top-20 left-10 text-primary-400/20 font-mono text-sm animate-float">
        {"{ status: 'secure' }"}
      </div>
      <div className="absolute top-32 right-20 text-accent-400/20 font-mono text-sm animate-float" style={{ animationDelay: '1s' }}>
        verify.credentials()
      </div>
      <div className="absolute bottom-32 left-20 text-primary-400/20 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
        audit.schedule()
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="section-title mb-6">Let&apos;s Connect</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="data-card">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
                Get In Touch
              </h4>
              
              <div className="space-y-6">
                {[
                  // {
                  //   icon: PhoneIcon,
                  //   label: "Phone",
                  //   value: "+91123456789",
                  //   href: "tel:+91123456789"
                  // },
                  {
                    icon: EnvelopeIcon,
                    label: "Email",
                    value: "anmol.ap12@gmail.com",
                    href: "mailto:anmol.ap12@gmail.com"
                  },
                  {
                    icon: MapPinIcon,
                    label: "Location",
                    value: "Pune, Maharashtra, India",
                    href: null
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-cyber-800/30 border border-cyber-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-cyber-800/50">
                      <div className="relative">
                        <contact.icon className="w-6 h-6 text-primary-400 group-hover:text-accent-400 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-cyber-400 font-mono uppercase tracking-wider">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-lg md:text-xl text-cyber-200 hover:text-primary-300 transition-colors duration-300 font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-lg md:text-xl text-cyber-200 font-medium">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="data-card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
                <span className="text-accent-400 font-semibold font-mono">Available for Projects</span>
              </div>
              <p className="text-cyber-300 text-sm leading-relaxed">
                Currently accepting new Full Stack Development and Data Science projects.
                <br />Response time: Usually within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="data-card"
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
              Send Message
            </h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-cyber-300 mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your full name"
                    className="contactInput w-full"
                    type="text"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-cyber-300 mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="your.email@domain.com"
                    className="contactInput w-full"
                    type="email"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-cyber-300 mb-2 font-mono">
                  Subject *
                </label>
                <input
                  {...register("subject", { required: true })}
                  placeholder="Project inquiry, collaboration, etc."
                  className="contactInput w-full"
                  type="text"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-cyber-300 mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Tell me about your Project needs, or any questions you have..."
                  className="contactInput w-full h-32 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </form>

            {/* Form Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 pt-6 border-t border-cyber-700/50"
            >
              <p className="text-xs text-cyber-400 text-center font-mono">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-cyber-900/40 border border-cyber-700/50 rounded-2xl backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-security-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-cyber-300 font-mono text-sm">
              Let&apos;s secure your digital infrastructure together
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}