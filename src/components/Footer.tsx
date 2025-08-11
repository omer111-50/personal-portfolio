import { SHORT_SITE_TITLE } from "@/lib/consts";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Code,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/omer111-50" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/omer-ali-omer/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/oaomer_",
    },
    { name: "Email", icon: Mail, url: "mailto:omerali0446@gmail.com" },
  ];

  return (
    <footer className="relative py-8 bg-gradient-to-br from-background via-purple-50/5 to-muted/30 backdrop-blur-sm overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Full-width horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="container max-w-5xl mx-auto px-6 md:px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {SHORT_SITE_TITLE}. All rights
            reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:text-purple-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Made with */}
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Made with
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <Code className="w-4 h-4" />
            </motion.div>
            and
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
