import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, CalendarHeart, FileCheck2, HandHeart, HeartHandshake, Palette, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import DonationCards from '../components/DonationCards'
import Modal from '../components/Modal'
import { newsItems } from '../data'

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<(typeof newsItems)[number] | null>(null)

  const scrollToDonate = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('donate')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-label"><Sparkles size={16} /> Место, где семьям помогают</div>
            <h1>Поддержка, которая даёт <span>крылья</span></h1>
            <p className="hero-lead">Помогаем детям, людям с инвалидностью и их семьям через заботу, общение, занятия и профессиональное сопровождение.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={scrollToDonate}>Помочь сейчас <HandHeart size={20} /></button>
              <Link to="/about" className="text-link">Познакомиться с нами <ArrowRight size={18} /></Link>
            </div>
            <div className="hero-trust"><ShieldCheck size={21} /><span>Открытые документы и отчёты о работе</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob">
              <img src="/images/logo.webp" alt="Семья с крыльями — логотип организации «Крылья поддержки»" />
            </div>
            <div className="handwritten hero-note">Рядом — значит важно</div>
            <svg className="hero-doodle" viewBox="0 0 150 110" aria-hidden="true">
              <path d="M8 95C40 77 43 33 87 18c25-8 44 0 54 11" />
              <path d="M127 16l15 13-18 8" />
            </svg>
          </div>
        </div>
      </section>

      <section className="values-strip" aria-label="Наши принципы">
        <div className="container values-grid">
          <div><HeartHandshake size={26} /><span><strong>Бережно</strong> к каждой истории</span></div>
          <div><UsersRound size={26} /><span><strong>Вместе</strong> с родителями и детьми</span></div>
          <div><FileCheck2 size={26} /><span><strong>Открыто</strong> о помощи и расходах</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="handwritten section-note">Как мы помогаем</span>
              <h2>Поддержка для разных жизненных ситуаций</h2>
            </div>
            <Link to="/programs" className="text-link">Все направления <ArrowRight size={18} /></Link>
          </div>
          <div className="program-grid">
            <article className="program-card">
              <div className="program-icon"><UsersRound size={28} /></div>
              <h3>Семьям и родителям</h3>
              <p>Консультации, группы взаимопомощи и сопровождение в непростой период.</p>
              <Link to="/programs" aria-label="Подробнее о поддержке семей"><ArrowRight size={21} /></Link>
            </article>
            <article className="program-card featured-program">
              <div className="program-icon"><Palette size={28} /></div>
              <h3>Детям и подросткам</h3>
              <p>Творческие занятия, развивающие встречи и праздники в дружелюбной среде.</p>
              <Link to="/programs" aria-label="Подробнее о программах для детей"><ArrowRight size={21} /></Link>
            </article>
            <article className="program-card">
              <div className="program-icon"><HeartHandshake size={28} /></div>
              <h3>Людям с инвалидностью</h3>
              <p>Социальная поддержка, общение и помощь в решении повседневных вопросов.</p>
              <Link to="/programs" aria-label="Подробнее о поддержке людей с инвалидностью"><ArrowRight size={21} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section donation-section" id="donate">
        <div className="container">
          <div className="section-heading donation-heading">
            <span className="handwritten section-note">Ваша помощь имеет значение</span>
            <h2>Выберите, что хотите поддержать</h2>
            <p>Наведите камеру телефона на QR-код выбранного направления. Любая сумма — это вклад в заботу о семьях.</p>
          </div>
          <DonationCards />
          <p className="demo-notice">Сейчас показаны демонстрационные QR-коды. Перед запуском сайта их нужно заменить настоящими ссылками на пожертвования.</p>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="handwritten section-note">Наши последние новости</span>
              <h2>Чем мы жили недавно</h2>
            </div>
            <span className="soft-badge">Примеры публикаций</span>
          </div>
          <div className="news-grid">
            {newsItems.map((news) => (
              <article className="news-card" key={news.id}>
                <div className="news-meta"><span>{news.category}</span><time>{news.date}</time></div>
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
                <button className="text-link" onClick={() => setSelectedNews(news)}>Читать новость <ArrowRight size={18} /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container gallery-preview-grid">
          <div className="gallery-preview-copy">
            <span className="handwritten section-note">Моменты, которые согревают</span>
            <h2>Живые эмоции наших встреч</h2>
            <p>Сохраняем воспоминания о мероприятиях, творческих занятиях и семейных праздниках в фото- и видеоархиве.</p>
            <Link to="/gallery" className="button button-outline">Смотреть медиаархив <ArrowRight size={18} /></Link>
          </div>
          <div className="photo-collage">
            <figure className="collage-main"><img src="/images/creative.jpg" alt="Детское творческое занятие" /><figcaption>Творчество объединяет</figcaption></figure>
            <figure className="collage-small"><img src="/images/family.jpg" alt="Семья на прогулке" /></figure>
            <svg viewBox="0 0 90 70" aria-hidden="true"><path d="M6 55c20 5 17-28 38-24 17 4 5 25 24 19 8-3 11-12 13-21" /></svg>
          </div>
        </div>
      </section>

      <section className="section transparency-section">
        <div className="container transparency-panel">
          <div className="transparency-icon"><FileCheck2 size={34} /></div>
          <div>
            <h2>Доверие начинается с открытости</h2>
            <p>Здесь будут годовые отчёты, устав, публичная оферта и документы о целевом использовании пожертвований.</p>
          </div>
          <Link to="/reports" className="button button-light">Отчёты и документы <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section closing-section">
        <div className="container closing-inner">
          <CalendarHeart size={38} />
          <h2>Давайте делать добро вместе</h2>
          <p>Станьте волонтёром, помогите с организацией события или просто расскажите о нас своим друзьям.</p>
          <Link to="/help" className="button button-primary">Все способы помочь <ArrowRight size={18} /></Link>
        </div>
      </section>

      {selectedNews && (
        <Modal title={selectedNews.title} onClose={() => setSelectedNews(null)}>
          <div className="news-modal-meta">{selectedNews.category} · {selectedNews.date}</div>
          <p className="modal-lead">{selectedNews.summary}</p>
          <p>{selectedNews.text}</p>
          <Link to="/contacts" className="text-link">Задать вопрос организации <ArrowRight size={18} /></Link>
        </Modal>
      )}
    </>
  )
}
