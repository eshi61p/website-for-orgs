import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  text: string
  note?: string
  children?: ReactNode
}

export default function PageHero({ title, text, note, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <h1>{title}</h1>
          <p className="page-lead">{text}</p>
          {children}
        </div>
        {note && <div className="handwritten page-note">{note}</div>}
      </div>
      <svg className="page-doodle" viewBox="0 0 180 70" aria-hidden="true">
        <path d="M4 51c29-37 51 13 78-17 20-22 31-28 47-12 14 15 24 19 47 3" />
      </svg>
    </section>
  )
}
