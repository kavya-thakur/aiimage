import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 mt-10"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold gradient-text mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact <span className="gradient-text">Us</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-700 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Have questions, feedback, or want to collaborate? Fill out the form
        below and our team will get back to you soon!
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        className="glass-card p-8 max-w-xl w-full flex flex-col gap-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Name</label>
          <motion.input
            whileFocus={{ scale: 1.03, borderColor: "var(--accent)" }}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent2)] transition-all"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Email</label>
          <motion.input
            whileFocus={{ scale: 1.03, borderColor: "var(--accent)" }}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent2)] transition-all"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.03, borderColor: "var(--accent)" }}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent2)] transition-all min-h-[100px]"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 py-3 px-8 rounded-xl font-bold text-lg bg-gradient-to-r from-[#3a8dde] to-[#6f3ad6] text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent2)]"
          type="submit"
        >
          {submitted ? "Thank you!" : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
