import { Link } from 'react-router'
import { ArrowRight, Check, Download, FileText, HandHeart, HeartHandshake, Mail, MessageCircle, Gift, Palette, Phone, UserRound, UsersRound } from 'lucide-react'
import DonationCards from '../components/DonationCards'
import PageHero from '../components/PageHero'
import { documents, team } from '../data'

export function About() {
  return (
    <>
      <PageHero
        title="Забота, на которую можно опереться"
        text="Автономная некоммерческая благотворительная организация социальной поддержки инвалидов, семей и детей «Крылья поддержки»."
        note="Семья — это место силы"
      />
      <section className="section about-story">
        <div className="container about-grid">
          <div className="about-photo">
            <img src="/images/family.jpg" alt="Семья с ребёнком проводит время вместе" />
            <span className="handwritten">Вместе — спокойнее и радостнее</span>
          </div>
          <div className="about-copy">
            <h2>Мы создаём пространство поддержки</h2>
            <p>«Крылья поддержки» — организация для тех, кому важно не оставаться один на один с трудностями. Мы объединяем специалистов, волонтёров, родителей и неравнодушных людей.</p>
            <p>Наша задача — помочь каждому участнику почувствовать себя принятым, услышанным и нужным. Поддержка может быть практической, эмоциональной, творческой или просто проявляться в тёплом общении.</p>
            <div className="about-values">
              <span><Check size={18} /> Уважение без оценок</span>
              <span><Check size={18} /> Бережное общение</span>
              <span><Check size={18} /> Конфиденциальность</span>
              <span><Check size={18} /> Открытая работа</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading"><span className="handwritten section-note">Как устроена наша работа</span><h2>От первого обращения до результата</h2></div>
          <div className="steps-grid">
            <article><span>01</span><h3>Знакомимся</h3><p>Выслушиваем семью и вместе определяем, какая поддержка сейчас нужна больше всего.</p></article>
            <article><span>02</span><h3>Подбираем помощь</h3><p>Предлагаем подходящее занятие, консультацию или программу и объясняем условия участия.</p></article>
            <article><span>03</span><h3>Остаёмся на связи</h3><p>Сопровождаем участников, собираем обратную связь и развиваем программы под реальные потребности.</p></article>
          </div>
        </div>
      </section>
      <section className="section"><div className="container centered-cta"><h2>Хотите узнать о нас больше?</h2><p>Познакомьтесь с командой или задайте свой вопрос — мы всегда открыты к общению.</p><Link to="/contacts" className="button button-primary">Связаться с нами <ArrowRight size={18} /></Link></div></section>
    </>
  )
}

export function Programs() {
  const programs = [
    { icon: UsersRound, title: 'Поддержка семей', text: 'Консультации, родительские встречи и группы взаимопомощи.', items: ['Индивидуальные обращения', 'Семейные консультации', 'Тёплые родительские встречи'] },
    { icon: Palette, title: 'Занятия для детей', text: 'Творчество, развитие и общение в комфортной атмосфере.', items: ['Творческие мастерские', 'Развивающие занятия', 'Детские праздники'] },
    { icon: HeartHandshake, title: 'Социальное сопровождение', text: 'Поддержка взрослых и детей с инвалидностью в повседневной жизни.', items: ['Помощь с обращениями', 'Сопровождение специалиста', 'Инклюзивные мероприятия'] },
    { icon: Gift, title: 'Адресная помощь', text: 'Поддержка конкретной семьи после изучения её ситуации.', items: ['Определение потребностей', 'Сбор необходимых материалов', 'Отчёт о переданной помощи'] },
  ]
  return (
    <>
      <PageHero title="Направления помощи" text="У каждой семьи своя история. Поэтому мы предусмотрели несколько форм поддержки — от творческих встреч до сопровождения специалиста." note="Помощь начинается с разговора" />
      <section className="section"><div className="container programs-list">
        {programs.map(({ icon: Icon, title, text, items }) => (
          <article className="program-row" key={title}>
            <div className="program-row-icon"><Icon size={30} /></div>
            <div><h2>{title}</h2><p>{text}</p></div>
            <ul>{items.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
          </article>
        ))}
      </div></section>
      <section className="section soft-section"><div className="container centered-cta"><h2>Не знаете, какое направление выбрать?</h2><p>Свяжитесь с нами по почте, по телефону или через группу ВКонтакте — координатор поможет выбрать подходящее направление.</p><Link to="/contacts" className="button button-primary">Попросить о поддержке <ArrowRight size={18} /></Link></div></section>
    </>
  )
}

export function Team() {
  return (
    <>
      <PageHero title="Люди, которые рядом" text="Знакомьтесь с командой организации: сотрудниками и специалистами, которые отвечают за программы, мероприятия и поддержку семей." note="Добро делают люди" />
      <section className="section"><div className="container">
        <p className="demo-notice team-notice">Ниже показан макет карточек команды. Имена демонстрационные — замените их и добавьте настоящие фотографии сотрудников.</p>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className={`portrait-placeholder ${person.color}`}>
                <UserRound size={60} strokeWidth={1.2} />
                <strong>{person.initials}</strong>
                <span>Место для фотографии</span>
              </div>
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </div></section>
      <section className="section soft-section"><div className="container centered-cta"><h2>Хотите работать с нами?</h2><p>Организации могут понадобиться специалисты и волонтёры. Расскажите о себе и о том, как вы хотите помогать.</p><Link to="/contacts?topic=volunteer" className="button button-primary">Написать нам <ArrowRight size={18} /></Link></div></section>
    </>
  )
}

export function Reports() {
  return (
    <>
      <PageHero title="Отчёты и документы" text="Публикуем документы организации, отчёты о деятельности и правила использования пожертвований — чтобы помощь была понятной и прозрачной." note="Открытость — часть заботы" />
      <section className="section"><div className="container reports-grid">
        <div>
          <h2 className="content-title">Документы организации</h2>
          <div className="document-list">
            {documents.map((doc) => (
              <a className="document-row" href={doc.href} download key={doc.title}>
                <span className="document-icon"><FileText size={24} /></span>
                <span><strong>{doc.title}</strong><small>{doc.note}</small></span>
                <Download size={21} />
              </a>
            ))}
          </div>
          <p className="demo-notice">Все файлы сейчас демонстрационные. Перед публикацией замените их действующими документами организации.</p>
        </div>
        <aside className="reports-aside">
          <h2>Что стоит публиковать регулярно</h2>
          <ul>
            <li><Check size={18} /> Годовой отчёт о деятельности</li>
            <li><Check size={18} /> Сведения о поступлениях и расходах</li>
            <li><Check size={18} /> Отчёты по завершённым сборам</li>
            <li><Check size={18} /> Устав и регистрационные документы</li>
            <li><Check size={18} /> Публичную оферту и правила возврата</li>
          </ul>
          <p>Точный состав обязательной отчётности и сроки лучше уточнить у бухгалтера или юриста, который сопровождает организацию.</p>
        </aside>
      </div></section>
    </>
  )
}

export function Help() {
  return (
    <>
      <PageHero title="У добра есть разные формы" text="Можно поддержать ребёнка, работу организации или мероприятия. А ещё — подарить своё время, профессиональные навыки или необходимые материалы." note="Спасибо, что вы здесь" />
      <section className="section donation-section" id="donate"><div className="container">
        <div className="section-heading"><h2>Пожертвовать через QR-код</h2><p>Выберите направление и наведите камеру телефона на код.</p></div>
        <DonationCards />
        <p className="demo-notice">Демонстрационные QR-коды ведут на example.org. Для реальных пожертвований замените ссылки в компоненте DonationCards.</p>
      </div></section>
      <section className="section"><div className="container">
        <div className="section-heading"><span className="handwritten section-note">Не только деньги</span><h2>Как ещё можно помочь</h2></div>
        <div className="help-options">
          <article><HandHeart size={29} /><h3>Стать волонтёром</h3><p>Помочь на мероприятии, подготовить материалы или провести занятие.</p><Link to="/contacts?topic=volunteer" className="text-link">Оставить заявку <ArrowRight size={18} /></Link></article>
          <article><Gift size={29} /><h3>Передать материалы</h3><p>Подарить товары для творчества или предметы для организации событий.</p><Link to="/contacts?topic=items" className="text-link">Уточнить список <ArrowRight size={18} /></Link></article>
          <article><UsersRound size={29} /><h3>Стать партнёром</h3><p>Поддержать программу от имени компании или помочь профессиональными навыками.</p><Link to="/contacts?topic=partner" className="text-link">Обсудить партнёрство <ArrowRight size={18} /></Link></article>
        </div>
      </div></section>
    </>
  )
}

export function Contacts() {
  return (
    <>
      <PageHero title="Давайте поговорим" text="Свяжитесь с нами любым удобным способом: по электронной почте, по телефону или через группу ВКонтакте." note="Мы открыты к общению" />
      <section className="section"><div className="container contacts-single">
        <div className="contact-details">
          <h2>Контакты организации</h2>
          <div><Mail size={23} /><span><strong>Электронная почта</strong>Добавьте официальный адрес почты</span></div>
          <div><Phone size={23} /><span><strong>Телефон</strong>Добавьте рабочий номер организации</span></div>
          <div><MessageCircle size={23} /><span><strong>Группа ВКонтакте</strong>Добавьте ссылку на официальную группу организации</span></div>
          <p className="demo-notice">Контактные данные пока не заполнены. Перед публикацией замените эти подсказки настоящей почтой, телефоном и ссылкой на группу VK.</p>
        </div>
      </div></section>
      <section className="section soft-section"><div className="container faq-container">
        <div className="section-heading"><span className="handwritten section-note">Коротко о важном</span><h2>Частые вопросы</h2></div>
        <details><summary>Кто может обратиться за поддержкой?<span>+</span></summary><p>Дети, взрослые с инвалидностью и семьи, которым нужна социальная поддержка. Конкретные условия участия в программах нужно будет добавить после утверждения.</p></details>
        <details><summary>Как устроено пожертвование через QR-код?<span>+</span></summary><p>После наведения камеры откроется страница платёжного сервиса. В рабочей версии здесь должны быть настоящие ссылки, сумма назначения и ссылка на публичную оферту.</p></details>
        <details><summary>Можно ли помочь без денежного пожертвования?<span>+</span></summary><p>Да. Можно стать волонтёром, предложить профессиональную помощь или передать необходимые материалы после согласования с командой.</p></details>
        <details><summary>Где посмотреть отчёты организации?<span>+</span></summary><p>В разделе «Отчёты и документы». Сейчас там демонстрационные PDF-файлы, показывающие будущую структуру раздела.</p></details>
      </div></section>
    </>
  )
}

export function NotFound() {
  return <section className="section"><div className="container centered-cta not-found"><span className="handwritten">Похоже, мы свернули не туда</span><h1>Страница не найдена</h1><p>Вернитесь на главную — там собраны все основные разделы сайта.</p><Link to="/" className="button button-primary">На главную <ArrowRight size={18} /></Link></div></section>
}
