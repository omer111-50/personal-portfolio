import { SHORT_SITE_TITLE } from "@/lib/consts";
import type { AnchorHTMLAttributes } from "react";

type HeaderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  pathname?: string; // pass the current pathname from the Astro page
};

function HeaderLink({
  href,
  className,
  pathname = "/",
  children,
  ...props
}: HeaderLinkProps) {
  const cleanPath = pathname.replace(/^\/?(.*)$/, "/$1");
  const subpath = cleanPath.match(/[^/]+/g);
  const isActive = href === cleanPath || href === "/" + (subpath?.[0] || "");
  return (
    <a
      href={href}
      className={`inline-block text-decoration-none ${
        isActive ? "font-bold " : ""
      } ${className || ""}`}
      {...props}
    >
      {children}
    </a>
  );
}

type Props = {
  pathname?: string;
};

export default function Header({ pathname = "/" }: Props) {
  return (
    <header className="m-0 px-4 bg-white shadow-md">
      <nav className="flex items-center justify-between">
        <h2 className="m-0 text-base">
          <a href="/" className="text-decoration-none">
            {SHORT_SITE_TITLE}
          </a>
        </h2>
        <div className="flex items-center space-x-2">
          <HeaderLink
            href="/"
            pathname={pathname}
            className="px-2 py-4 text-gray-600 border-b-4 border-transparent hover:border-blue-600"
          >
            Home
          </HeaderLink>
          <HeaderLink
            href="/blog"
            pathname={pathname}
            className="px-2 py-4 text-gray-600 border-b-4 border-transparent hover:border-blue-600"
          >
            Blog
          </HeaderLink>
          <HeaderLink
            href="/projects"
            pathname={pathname}
            className="px-2 py-4 text-gray-600 border-b-4 border-transparent hover:border-blue-600"
          >
            Projects
          </HeaderLink>
        </div>
      </nav>
    </header>
  );
}
