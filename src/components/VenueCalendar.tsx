"use client";

import { useMemo, useState } from "react";

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

export default function VenueCalendar({ embedUrl }: { embedUrl: string }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const today = useMemo(() => new Date(), []);
  const targetMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + monthOffset, 1),
    [today, monthOffset]
  );
  const nextMonth = useMemo(
    () => new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 1),
    [targetMonth]
  );
  const monthLabel = targetMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const calendarUrl = useMemo(() => {
    const url = new URL(embedUrl);
    url.searchParams.set("mode", "MONTH");
    url.searchParams.set(
      "dates",
      `${formatDate(targetMonth)}/${formatDate(nextMonth)}`
    );
    return url.toString();
  }, [embedUrl, targetMonth, nextMonth]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 px-6 py-4 bg-warm-white border-b border-cream-dark">
        <button
          type="button"
          onClick={() => setMonthOffset((offset) => offset - 1)}
          aria-label="Previous month"
          className="rounded-full bg-brown-deep px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-burgundy"
        >
          ← Previous
        </button>
        <p className="font-serif text-xl text-text-dark">{monthLabel}</p>
        <button
          type="button"
          onClick={() => setMonthOffset((offset) => offset + 1)}
          aria-label="Next month"
          className="rounded-full bg-brown-deep px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-burgundy"
        >
          Next →
        </button>
      </div>
      <div className="relative">
        <iframe
          title="The Schäffler availability calendar"
          src={calendarUrl}
          loading="lazy"
          className="w-full h-[620px] border-0 bg-white pointer-events-none"
        />
        <div aria-hidden="true" className="absolute inset-0" />
      </div>
      {monthOffset !== 0 && (
        <div className="flex justify-center border-t border-cream-dark bg-warm-white px-6 py-3">
          <button
            type="button"
            onClick={() => setMonthOffset(0)}
            className="text-sm font-bold text-gold-dark underline underline-offset-4 hover:text-burgundy"
          >
            Back to this month
          </button>
        </div>
      )}
    </div>
  );
}
