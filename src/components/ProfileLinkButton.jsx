export default function ProfileLinkButton({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} profile (opens in new tab)`}
      className="btn-outline py-2"
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      {label}
    </a>
  );
}
