export default function ProfileLinkButton({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} profile (opens in new tab)`}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm transition hover:border-violet-500 hover:text-violet-500 dark:border-white/20 dark:hover:text-violet-300"
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      {label}
    </a>
  );
}
