import { Building2, CalendarHeart, Heart } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

const donations = [
  {
    title: 'Поддержать ребёнка',
    description: 'На занятия, консультации и индивидуальную помощь детям.',
    value: 'https://example.org/donate/child',
    icon: Heart,
  },
  {
    title: 'Поддержать организацию',
    description: 'На аренду, материалы и ежедневную работу команды.',
    value: 'https://example.org/donate/organization',
    icon: Building2,
  },
  {
    title: 'Помочь с мероприятиями',
    description: 'На праздники, мастер-классы и семейные встречи.',
    value: 'https://example.org/donate/events',
    icon: CalendarHeart,
  },
]

export default function DonationCards() {
  return (
    <div className="donation-grid">
      {donations.map(({ title, description, value, icon: Icon }) => (
        <article className="donation-card" key={title}>
          <div className="donation-icon"><Icon size={25} strokeWidth={1.7} /></div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="qr-wrap" aria-label={`Демонстрационный QR-код: ${title}`}>
            <QRCodeSVG value={value} size={144} bgColor="#fffdfb" fgColor="#4b3338" level="M" />
            <span>демо QR</span>
          </div>
          <small>Наведите камеру телефона</small>
        </article>
      ))}
    </div>
  )
}
