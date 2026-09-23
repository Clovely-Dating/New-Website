import { Link } from "@tanstack/react-router";
import { CloverMark } from "@/components/CloverMark";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "@/components/SocialIcons";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/clovelyapp", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/clovelyapp/", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@clove_dating", Icon: TikTokIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/clovedating/", Icon: LinkedInIcon },
];

const PRODUCT_LINKS = [
  { label: "How It Works", href: "/#method" },
  { label: "The Coach", href: "/#coach" },
  { label: "Privacy & Safety", href: "/#safety" },
  { label: "Join Today", href: "/#join" },
];

const LEGAL_LINKS = [
  { label: "Terms & Conditions", to: "/terms" as const },
  { label: "Privacy Policy", to: "/privacy" as const },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <CloverMark className="size-9" />
              <span className="font-display text-lg font-bold tracking-tight">Clovely</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Reclaiming human connection from the scroll — personality-first, voice-led dating
              with a relationship coach in your corner.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold text-foreground">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:support@clovely.co"
                  className="transition-colors hover:text-foreground"
                >
                  support@clovely.co
                </a>
              </li>
              <li className="leading-relaxed">
                Clovely Inc.
                <br />
                43200 Business Park Dr.
                <br />
                Temecula, CA 92590
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} Clovely Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
