import { SHORT_SITE_TITLE } from "@/lib/consts";
import {
  Mail,
  Github,
  MapPin,
  Linkedin,
  Twitter,
  Briefcase,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const heroImageUrl = useMemo(
    () => new URL("../assets/hero-image.jpg", import.meta.url).href,
    []
  );

  const jobTitles = [
    "Platform Engineer",
    "Digital & Technology Solutions Apprentice",
    "Software Engineer in Training",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];

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
        setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
      }
    }
  }, [currentText, isDeleting, currentTitleIndex, jobTitles]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Subtle animated background accents */}
      <motion.div
        className="absolute -top-10 -left-10 w-32 h-32 bg-[#32596c]/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#76aba9]/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />

      {/* Parallax background gradient */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(80%_60%_at_100%_0%,rgba(118,171,169,0.15),transparent),radial-gradient(70%_60%_at_0%_10%,rgba(50,89,108,0.18),transparent)]"
        style={{ y: bgY }}
      />

      <div className="container max-w-5xl mx-auto px-6 md:px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 mb-8">
          {/* Content */}
          <div className="flex-1 w-full max-w-2xl text-center md:text-left mx-auto md:mx-0">
            {/* Name + subtitle */}
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm
              <span className="ml-2 bg-gradient-to-r from-[#32596c] to-[#76aba9] bg-clip-text text-transparent">
                Omer
              </span>
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
                <Briefcase className="w-4 h-4 text-[#32596c]" />
                <span>
                  {currentText}
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-[#32596c] ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-4 h-4 text-[#32596c]" />
                <span>Manchester, United Kingdom</span>
              </li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-4 h-4 text-[#32596c]" />
                <a
                  href="https://github.com/omer111-50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#32596c] transition-colors"
                >
                  GitHub
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="w-4 h-4 text-[#32596c]" />
                <a
                  href="https://www.linkedin.com/in/omer-ali-omer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#32596c] transition-colors"
                >
                  LinkedIn
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3 text-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Twitter className="w-4 h-4 text-[#32596c]" />
                <a
                  href="https://x.com/oaomer_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#32596c] transition-colors"
                >
                  Twitter
                </a>
              </motion.li>
            </motion.ul>
          </div>

          {/* Floating avatar (inline) */}
          <motion.div
            className="flex-shrink-0 self-center md:self-auto"
            style={{ y: avatarY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-48 h-48 md:w-68 md:h-68">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#32596c] via-[#76aba9] to-[#0b1422] blur-lg opacity-70" />
              <div className="absolute inset-[8px] rounded-full bg-white/80 border border-[#32596c]/20 backdrop-blur-sm overflow-hidden">
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
          className="relative rounded-xl border border-[#32596c]/20 bg-white/60 backdrop-blur-sm p-5 md:p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-2 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-[#76aba9] via-[#32596c] to-[#0b1422]" />
          <p className="text-gray-700 leading-relaxed md:text-sm pl-4 text-justify">
            As a Platform Engineer at IBM, I work at the intersection of client
            collaboration and innovative cloud solutions delivering Minimum
            Viable Products that are both efficient and impactful. I thrive on
            solving complex problems, ensuring that the technical structures I
            help design not only meet immediate needs but also set the stage for
            future advancements. Alongside my professional role, I am pursuing a
            degree in Digital and Technology Solutions with a focus on software
            engineering at Manchester Metropolitan University. This journey
            fuels my passion for AI, emerging technologies, and continuous
            learning, allowing me to merge technical expertise with creativity
            to drive innovation.
          </p>
        </motion.div>
      </div>

      {/* Parallax divider that hints next section */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-transparent via-[#32596c]/10 to-[#32596c]/20"
        style={{ y: parallaxY }}
      />
    </section>
  );
}
