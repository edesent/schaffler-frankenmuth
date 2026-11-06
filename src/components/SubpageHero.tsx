interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SubpageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="relative pt-40 pb-24 bg-brown-deep overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/venue/legacy-reception-hall.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-brown-deep/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,85,0.2),transparent_65%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-light mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-white leading-[.95] tracking-[-.04em]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif italic text-lg md:text-xl text-white/75 mt-5 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="w-20 h-[3px] bg-gold mx-auto mt-8 rounded" />
      </div>
    </header>
  );
}
