import Link from "next/link"
import { CalendarDays } from "lucide-react"

export interface ColumnCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  dateLabel: string
  thumbnailAlt: string
}

export function ColumnCard({
  slug,
  title,
  excerpt,
  category,
  date,
  dateLabel,
  thumbnailAlt,
}: ColumnCardProps) {
  return (
    <article className="group bg-card border border-border rounded-sm overflow-hidden transition-shadow hover:shadow-md">
      {/* Thumbnail */}
      <div className="w-full aspect-[16/9] bg-secondary flex items-center justify-center border-b border-border">
        <div className="text-center space-y-2 text-muted-foreground">
          <div className="mx-auto h-10 w-10 md:h-12 md:w-12 rounded-full bg-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground/60"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <p className="text-xs md:text-sm">{thumbnailAlt}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
        {/* Category & Date */}
        <div className="flex items-center justify-between">
          <span className="inline-block px-2.5 py-0.5 text-[10px] md:text-xs font-medium bg-accent/10 text-accent rounded-sm">
            {category}
          </span>
          <time
            dateTime={date}
            className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground"
          >
            <CalendarDays className="h-3 w-3" />
            {dateLabel}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-sm md:text-lg font-bold text-foreground leading-snug text-balance group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs md:text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        {/* Read more link */}
        <Link
          href={`/column/${slug}`}
          className="inline-flex items-center text-xs md:text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-auto pt-1"
        >
          {'続きを読む'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-3 w-3 md:h-4 md:w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
