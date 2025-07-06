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
      
      {/* Floating Data Elements */}
      <div className="absolute top-20 left-10 text-primary-400/20 font-mono text-sm animate-float">
        {"{ contact: 'ready' }"}
      </div>
      <div className="absolute top-32 right-20 text-accent-400/20 font-mono text-sm animate-float" style={{ animationDelay: '1s' }}>
<<<<<<< HEAD
        console.log(&apos;Let&apos;s connect!&apos;)
=======
        console.log('Let\'s connect!')
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
      </div>
      <div className="absolute bottom-32 left-20 text-data-purple/20 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
        await collaboration()
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <h3 className="section-title mb-6">Let&apos;s Connect</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          {/* <p className="text-xl md:text-2xl text-neural-200 font-light max-w-3xl mx-auto leading-relaxed">
=======
          <h3 className="section-title mb-6">Let's Connect</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-neural-200 font-light max-w-3xl mx-auto leading-relaxed">
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
            Ready to transform your data into{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-semibold">
              actionable insights
            </span>
<<<<<<< HEAD
            ? Let&apos;s discuss your next data science project.
          </p> */}
=======
            ? Let's discuss your next data science project.
          </p>
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
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
<<<<<<< HEAD
              <h4 className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
=======
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
                Get In Touch
              </h4>
              
              <div className="space-y-6">
                {[
<<<<<<< HEAD
                  // {
                  //   icon: PhoneIcon,
                  //   label: "Phone",
                  //   value: "+919796657649",
                  //   href: "tel:+919796657649"
                  // },
=======
                  {
                    icon: PhoneIcon,
                    label: "Phone",
                    value: "+919796657649",
                    href: "tel:+919796657649"
                  },
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
                  {
                    icon: EnvelopeIcon,
                    label: "Email",
                    value: "anmol.ap12@gmail.com",
                    href: "mailto:anmol.ap12@gmail.com"
                  },
                  {
                    icon: MapPinIcon,
                    label: "Location",
<<<<<<< HEAD
                    value: "Pune, Maharashtra, India",
=======
                    value: "Jammu & Kashmir, India",
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
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
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-neural-800/30 border border-neural-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-neural-800/50">
                      <div className="relative">
                        <contact.icon className="w-6 h-6 text-primary-400 group-hover:text-accent-400 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-neural-400 font-mono uppercase tracking-wider">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-lg md:text-xl text-neural-200 hover:text-primary-300 transition-colors duration-300 font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-lg md:text-xl text-neural-200 font-medium">
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
              <p className="text-neural-300 text-sm leading-relaxed">
                Currently accepting new data science consulting opportunities and full-time positions. 
                Response time: Usually within 24 hours.
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
<<<<<<< HEAD
            {/* <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
              Send Message
            </h4> */}
=======
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-display">
              Send Message
            </h4>
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-neural-300 mb-2 font-mono">
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
                  <label className="block text-sm font-medium text-neural-300 mb-2 font-mono">
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
                <label className="block text-sm font-medium text-neural-300 mb-2 font-mono">
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
                <label className="block text-sm font-medium text-neural-300 mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Tell me about your data science needs, project requirements, or any questions you have..."
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
              className="mt-6 pt-6 border-t border-neural-700/50"
            >
              <p className="text-xs text-neural-400 text-center font-mono">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
<<<<<<< HEAD
        {/* <motion.div
=======
        <motion.div
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-neural-900/40 border border-neural-700/50 rounded-2xl backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-data-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-neural-300 font-mono text-sm">
<<<<<<< HEAD
              Let&apos;s turn your data into competitive advantage
            </span>
          </div>
        </motion.div> */}
=======
              Let's turn your data into competitive advantage
            </span>
          </div>
        </motion.div>
>>>>>>> c42810109baddd901e8b383737fde41537b08dcb
      </div>
    </motion.div>
  );
}