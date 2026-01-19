"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
} from "@/components/ui/card";
import { Send, Sparkles } from "lucide-react";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      // Add your form submission logic here
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   // --- Animation Variants ---
   const containerVariants: Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
         opacity: 1,
         x: 0,
         transition: { duration: 0.4 },
      },
   };

   return (
      <div className="min-h-screen py-16 lg:py-24 bg-slate-50 flex items-center justify-center">
         <div className="container px-4 sm:px-6 max-w-2xl">
            {/* Header Section */}
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-center mb-10"
            >
               <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-[#156C97] to-teal-500 bg-clip-text text-transparent">
                  Let&apos;s Start a Conversation
               </h1>
               <p className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed">
                  Have a question about Money Lens? Fill out the form below and
                  our team will get back to you within 24 hours.
               </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200/60 overflow-hidden relative">
                  {/* Decorative Top Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 via-teal-500 to-[#156C97]" />

                  <CardHeader className="pb-8 pt-10 text-center">
                     <div className="mx-auto bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="text-[#156C97] w-6 h-6" />
                     </div>
                     <CardTitle className="text-2xl text-slate-800">
                        Send us a Message
                     </CardTitle>
                     <CardDescription>
                        We&apos;re here to help you grow your wealth.
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-10">
                     <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <motion.div variants={itemVariants}>
                           <label
                              htmlFor="name"
                              className="block text-sm font-semibold text-slate-700 mb-2"
                           >
                              Full Name
                           </label>
                           <motion.div whileFocus={{ scale: 1.01 }}>
                              <Input
                                 id="name"
                                 name="name"
                                 type="text"
                                 value={formData.name}
                                 onChange={handleChange}
                                 placeholder="e.g. Pathum Sandeepa"
                                 className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#156C97]/20 transition-all h-12"
                                 required
                              />
                           </motion.div>
                        </motion.div>

                        {/* Email Field */}
                        <motion.div variants={itemVariants}>
                           <label
                              htmlFor="email"
                              className="block text-sm font-semibold text-slate-700 mb-2"
                           >
                              Email Address
                           </label>
                           <motion.div whileFocus={{ scale: 1.01 }}>
                              <Input
                                 id="email"
                                 name="email"
                                 type="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder="name@company.com"
                                 className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#156C97]/20 transition-all h-12"
                                 required
                              />
                           </motion.div>
                        </motion.div>

                        {/* Subject Field */}
                        <motion.div variants={itemVariants}>
                           <label
                              htmlFor="subject"
                              className="block text-sm font-semibold text-slate-700 mb-2"
                           >
                              Subject
                           </label>
                           <motion.div whileFocus={{ scale: 1.01 }}>
                              <Input
                                 id="subject"
                                 name="subject"
                                 type="text"
                                 value={formData.subject}
                                 onChange={handleChange}
                                 placeholder="How can we help?"
                                 className="bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#156C97]/20 transition-all h-12"
                                 required
                              />
                           </motion.div>
                        </motion.div>

                        {/* Message Field */}
                        <motion.div variants={itemVariants}>
                           <label
                              htmlFor="message"
                              className="block text-sm font-semibold text-slate-700 mb-2"
                           >
                              Your Message
                           </label>
                           <motion.div whileFocus={{ scale: 1.01 }}>
                              <textarea
                                 id="message"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 placeholder="Tell us more details..."
                                 rows={5}
                                 className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#156C97]/20 focus-visible:bg-white transition-all resize-none"
                                 required
                              />
                           </motion.div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants} className="pt-2">
                           <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                           >
                              <Button
                                 type="submit"
                                 size="lg"
                                 className="w-full h-12 bg-linear-to-r from-[#156C97] to-teal-600 hover:from-[#115a7f] hover:to-teal-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
                              >
                                 <Send className="w-5 h-5 mr-2" />
                                 Send Message
                              </Button>
                           </motion.div>
                        </motion.div>
                     </form>
                  </CardContent>
               </Card>
            </motion.div>
         </div>
      </div>
   );
}
