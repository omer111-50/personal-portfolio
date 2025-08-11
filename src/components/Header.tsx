import { SHORT_SITE_TITLE } from "@/lib/consts";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Home, FileText, FolderOpen } from "lucide-react";

type HeaderLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  pathname?: string;
  onClick?: () => void;
};

function HeaderLink({
  href,
  icon: Icon,
  children,
  pathname = "/",
  onClick,
}: HeaderLinkProps) {
  const cleanPath = pathname.replace(/^\/?(.*)$/, "/$1");
  const subpath = cleanPath.match(/[^/]+/g);
  const isActive = href === cleanPath || href === "/" + (subpath?.[0] || "");

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-purple-500/20 text-purple-600 border border-purple-500/30"
          : "text-gray-600 hover:bg-purple-500/10 hover:text-purple-600 hover:border hover:border-purple-500/20"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
      {children}
    </motion.a>
  );
}

type Props = {
  pathname?: string;
};

export default function Header({ pathname = "/" }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/blog", icon: FileText, label: "Blogs" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-500/10">
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.h2
            className="m-0 text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {SHORT_SITE_TITLE}
            </motion.a>
          </motion.h2>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <HeaderLink
                  href={link.href}
                  icon={link.icon}
                  pathname={pathname}
                >
                  {link.label}
                </HeaderLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 space-y-2 border-t border-purple-500/10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <HeaderLink
                      href={link.href}
                      icon={link.icon}
                      pathname={pathname}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </HeaderLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
