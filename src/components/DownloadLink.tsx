/**
 * Nedlastingslenke for PDF/ZIP.
 *
 * Ren markup-komponent — nedlastinger fanges allerede av GA4s Enhanced
 * Measurement (`file_download`), så her skal det ikke fyres egne events.
 * Se kommentaren i src/lib/analytics.ts.
 */
export default function DownloadLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const isPdf = href.toLowerCase().endsWith(".pdf");

  return (
    <a
      href={href}
      {...(isPdf ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        className ||
        "inline-flex items-center gap-2 text-sm bg-gray-bg text-navy px-4 py-2 rounded-lg hover:bg-navy/10 transition-colors font-medium"
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-4 h-4"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
      {label}
    </a>
  );
}
