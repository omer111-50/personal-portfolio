import { SHORT_SITE_TITLE } from "@/lib/consts";
import { Github, MapPin, Linkedin, Twitter, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { JOB_TITLES, HERO_DESCRIPTION, SOCIAL_LINKS } from "@/lib/consts";
import BrandBackdrop from "@/components/BrandBackdrop";

export default function Hero() {
  const heroImageUrl = useMemo(
    () => new URL("../assets/hero-image.jpg", import.meta.url).href,
    []
  );

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = JOB_TITLES[currentTitleIndex];

    if (!isDeleting) {
      if (currentText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % JOB_TITLES.length);
      }
    }
  }, [currentText, isDeleting, currentTitleIndex, JOB_TITLES]);

  return (
    <section className="relative overflow-hidden bg-background">
      <BrandBackdrop intensity={1} />

      <div className="container max-w-5xl mx-auto px-6 md:px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 mb-8">
          {/* Content */}
          <div className="flex-1 w-full max-w-2xl text-center md:text-left mx-auto md:mx-0">
            {/* Name + subtitle */}
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="brand-gradient-text">Omer OA</span>
            </motion.h1>

            {/* Meta list */}
            <motion.ul
              className="space-y-3 max-w-max mx-auto md:mx-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <li className="flex items-center gap-3 text-gray-700">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>
                  {currentText}
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
              </li>
              <motion.li
                className="flex items-center gap-3 text-gray-700 "
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="hover:text-primary transition-colors">
                  Manchester, United Kingdom
                </span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-4 h-4 text-primary" />
                <a
                  href={
                    SOCIAL_LINKS.find((link) => link.name === "GitHub")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="w-4 h-4 text-primary" />
                <a
                  href={
                    SOCIAL_LINKS.find((link) => link.name === "LinkedIn")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Twitter className="w-4 h-4 text-primary" />
                <a
                  href={
                    SOCIAL_LINKS.find((link) => link.name === "Twitter")?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </motion.li>
            </motion.ul>
          </div>

          {/* Floating avatar (inline) */}
          <motion.div
            className="flex-shrink-0 self-center md:self-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-48 h-48 md:w-68 md:h-68">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary blur-lg opacity-70" />
              <div className="absolute inset-[8px] rounded-full bg-white/80 border border-primary/20 backdrop-blur-sm overflow-hidden ring-glow">
                <img
                  src={heroImageUrl}
                  alt={`${SHORT_SITE_TITLE} portrait`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gradient callout - full width */}
        <motion.div
          className="relative rounded-xl p-5 md:p-6 glass-panel hover-raise"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-2 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-tertiary" />
          <p className="text-gray-700 leading-relaxed md:text-md pl-4 text-justify">
            {HERO_DESCRIPTION}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
