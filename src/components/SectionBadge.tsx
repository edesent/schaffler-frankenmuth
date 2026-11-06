interface Props {
  number: number;
  name: string;
  purpose: string;
  /** Tone influences badge contrast over dark vs light section backgrounds. */
  tone?: "light" | "dark";
}

export default function SectionBadge({ number, name, purpose, tone = "light" }: Props) {
  const isDark = tone === "dark";
  const padded = String(number).padStart(2, "0");

  return (
    <div className="flex justify-center mb-10">
      <div
        className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border text-[11px] font-semibold tracking-[0.18em] uppercase ${
          isDark
            ? "border-gold/40 bg-white/5 text-gold-light"
            : "border-gold-dark/30 bg-cream-dark/60 text-brown"
        }`}
      >
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
            isDark ? "bg-gold text-brown-deep" : "bg-brown-deep text-gold-light"
          }`}
        >
          {padded}
        </span>
        <span className="whitespace-nowrap">{name}</span>
        <span
          className={`hidden sm:inline-block w-1 h-1 rounded-full ${
            isDark ? "bg-gold/50" : "bg-brown/40"
          }`}
        />
        <span
          className={`hidden sm:inline-block normal-case tracking-normal text-[12px] font-normal ${
            isDark ? "text-white/70" : "text-text-light"
          }`}
        >
          {purpose}
        </span>
      </div>
    </div>
  );
}
