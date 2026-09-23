type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7.2h2.4l.45-2.8h-2.85V9.24c0-.77.24-1.3 1.4-1.3h1.5V5.44c-.26-.03-1.15-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.94H8.2v2.8h2.33V21h2.97Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.2c.7 1.2 1.9 2.1 3.4 2.3v2.5c-1.3 0-2.6-.4-3.6-1.1v6.1c0 2.8-2.3 5-5.1 5-1.1 0-2.2-.4-3-1-1.1-.9-1.8-2.3-1.8-3.9 0-2.8 2.3-5 5.1-5 .3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.3 0-2.4 1.1-2.4 2.5 0 .9.5 1.8 1.3 2.2.4.2.8.3 1.2.3 1.4 0 2.5-1.1 2.5-2.5V2.8h2.5c0 .8.2 1.6.6 2.4Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.25 10.2h3.38V19H5.25v-8.8ZM11.06 10.2h3.24v1.2h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.24 4.04 5.16V19h-3.38v-4.62c0-1.1-.02-2.52-1.53-2.52-1.54 0-1.78 1.2-1.78 2.44V19h-3.38v-8.8Z" />
    </svg>
  );
}
