import { SHORT_SITE_TITLE } from "@/lib/consts";

export default function Footer() {
  const today = new Date();
  return (
    <footer className="py-8 px-4 pb-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-600 text-center">
      &copy; {today.getFullYear()} {SHORT_SITE_TITLE}. All rights reserved. ✨
    </footer>
  );
}
