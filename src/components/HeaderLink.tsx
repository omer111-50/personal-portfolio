import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  pathname?: string; // pass the current pathname from the Astro page
};

export default function HeaderLink({
  href,
  className,
  pathname = "/",
  children,
  ...props
}: Props) {
  const cleanPath = pathname.replace(/^\/?(.*)$/, "/$1");
  const subpath = cleanPath.match(/[^/]+/g);
  const isActive = href === cleanPath || href === "/" + (subpath?.[0] || "");
  return (
    <>
      <a
        href={href}
        className={[className, isActive ? "active" : ""]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </a>
      <style>{`
        a {
          display: inline-block;
          text-decoration: none;
        }
        a.active {
          font-weight: bolder;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
