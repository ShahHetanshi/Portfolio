
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData);

    toast({
      title: "Message Sent! ✨",
      description: "Thanks for reaching out! I'll get back to you soon.",
      variant: "default",
      duration: 4000,
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <Mail size={18} />, text: "hetushah2812@gmail.com", href: "mailto:hetushah2812@gmail.com" },
    { icon: <MapPin size={18} />, text: "Ahmedabad, Gujarat, India" },
  ];

  const cardVariants = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.7, delay: i * 0.1 }
    })
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
       <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-xl max-h-xl bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl opacity-40 -z-10 animate-blob"
        style={{ animationDelay: '0.3s' }}
      />
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      >
        Let's <span className="text-primary">Connect</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
        <motion.div 
          className="space-y-6"
          variants={cardVariants} 
          custom={0} 
          initial="offscreen" 
          whileInView="onscreen" 
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
            Have a project in mind or just want to say hi?
          </h3>
          <p className="text-md sm:text-lg text-foreground/60 dark:text-foreground/50 leading-relaxed">
            I'm always excited to discuss new ideas, collaborations, or opportunities. Fill out the form, or reach out via my contact details. Let's create something amazing together!
          </p>
          <div className="space-y-4 pt-2">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 group"
                variants={cardVariants} custom={index + 1} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}
              >
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-foreground/70 dark:text-foreground/60 text-sm sm:text-base hover:text-primary transition-colors duration-200">{item.text}</a>
                ) : (
                  <span className="text-foreground/70 dark:text-foreground/60 text-sm sm:text-base">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-card/60 dark:bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-border/20 space-y-5 card-hover-subtle"
          variants={cardVariants} 
          custom={0.5} 
          initial="offscreen" 
          whileInView="onscreen" 
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 py-5 text-sm border-border/40 focus:border-primary focus:ring-primary/40 bg-background/60 dark:bg-card/40 placeholder:text-foreground/50"
              placeholder="Your Name"
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-10 py-5 text-sm border-border/40 focus:border-primary focus:ring-primary/40 bg-background/60 dark:bg-card/40 placeholder:text-foreground/50"
              placeholder="Your Email Address"
            />
          </div>
          
          <div className="relative">
             <MessageSquare className="absolute left-3.5 top-5 transform -translate-y-0.5 h-4 w-4 text-foreground/40" />
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="pl-10 pt-3.5 pb-3.5 text-sm min-h-[100px] border-border/40 focus:border-primary focus:ring-primary/40 bg-background/60 dark:bg-card/40 placeholder:text-foreground/50"
              placeholder="Your Message..."
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full group text-base py-5 rounded-lg bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/30"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <motion.svg 
                  className="animate-spin -ml-1 mr-2.5 h-4.5 w-4.5 text-primary-foreground" 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  initial={{rotate:0}} animate={{rotate:360}} transition={{duration:1, repeat:Infinity, ease:"linear"}}
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </motion.svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-4.5 w-4.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
