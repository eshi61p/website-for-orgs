import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ArrowUpRight, Eye, Heart, Menu, X } from 'lucide-react'
import { navItems } from '../data'

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [accessible, setAccessible] = useState(() => localStorage.getItem('accessible-version') === 'true')
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('a11y', accessible)
    localStorage.setItem('accessible-version', String(accessible))
  }, [accessible])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Крылья поддержки — на главную">
            <img src="/images/logo.webp" alt="Логотип Крылья поддержки" />
            <span className="brand-name">Крылья поддержки
              <small>забота о семьях и детях</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="a11y-toggle icon-button"
              aria-label={accessible ? 'Выключить доступную версию' : 'Включить доступную версию'}
              aria-pressed={accessible}
              title="Доступная версия"
              onClick={() => setAccessible((value) => !value)}
            >
              <Eye size={21} />
            </button>
            <Link to="/help" className="button button-primary header-cta">Помочь <Heart size={17} /></Link>
            <button
              className="mobile-toggle icon-button"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            <div className="container mobile-nav-inner">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
                  {item.label}<ArrowUpRight size={18} />
                </NavLink>
              ))}
              <Link to="/help" className="button button-primary">Как помочь <Heart size={18} /></Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/images/logo.webp" alt="" />
              <span className="brand-name">Крылья поддержки<small>АНО социальной поддержки</small></span>
            </Link>
            <p>Помогаем детям, взрослым с инвалидностью и семьям чувствовать поддержку, заботу и уверенность в завтрашнем дне.</p>
          </div>
          <div>
            <h2 className="footer-title">Организация</h2>
            <Link to="/about">О нас</Link>
            <Link to="/programs">Направления помощи</Link>
            <Link to="/team">Наша команда</Link>
            <Link to="/gallery">Фото и видео</Link>
          </div>
          <div>
            <h2 className="footer-title">Важное</h2>
            <Link to="/help">Как помочь</Link>
            <Link to="/reports">Отчёты и документы</Link>
            <Link to="/reports">Политика конфиденциальности</Link>
            <Link to="/contacts">Вопросы и контакты</Link>
          </div>
          <div className="footer-contact">
            <h2 className="footer-title">Связаться</h2>
            <p>Телефон, почту и ссылку на группу VK нужно добавить перед публикацией сайта.</p>
            <Link to="/contacts" className="text-link">Контакты организации <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 «Крылья поддержки»</span>
          <span>Демо-версия: имена, новости, контакты и QR-коды — заготовки.</span>
        </div>
      </footer>
    </div>
  )
}
