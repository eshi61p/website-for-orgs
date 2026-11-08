import { useState } from 'react'
import { Camera, Film, Images, Play } from 'lucide-react'
import Modal from '../components/Modal'
import PageHero from '../components/PageHero'
import { galleryItems } from '../data'

type Filter = 'all' | 'photo' | 'video'

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null)
  const visibleItems = galleryItems.filter((item) => filter === 'all' || item.type === filter)

  return (
    <>
      <PageHero title="Наши события в фотографиях и видео" text="Архив тёплых моментов: творческие мастерские, семейные встречи, праздники и другие события организации." note="Счастье — в маленьких моментах" />
      <section className="section"><div className="container">
        <div className="gallery-toolbar">
          <div className="filter-tabs" role="group" aria-label="Фильтр медиаархива">
            <button className={filter === 'all' ? 'active' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}><Images size={18} />Все материалы</button>
            <button className={filter === 'photo' ? 'active' : ''} aria-pressed={filter === 'photo'} onClick={() => setFilter('photo')}><Camera size={18} />Фотографии</button>
            <button className={filter === 'video' ? 'active' : ''} aria-pressed={filter === 'video'} onClick={() => setFilter('video')}><Film size={18} />Видео</button>
          </div>
          <span>{visibleItems.length} материалов</span>
        </div>
        <p className="demo-notice gallery-notice">Фотографии и события демонстрационные. Замените их настоящими материалами организации и публикуйте изображения детей только с согласия законных представителей.</p>
        <div className="media-grid">
          {visibleItems.map((item, index) => (
            <button className={`media-card media-card-${(index % 3) + 1}`} key={item.id} onClick={() => setSelected(item)} aria-label={`Открыть: ${item.title}`}>
              <img src={item.image} alt={item.alt} />
              <span className="media-overlay">
                <span className="media-type">{item.type === 'video' ? <Play size={17} fill="currentColor" /> : <Camera size={17} />}{item.type === 'video' ? 'Видео' : 'Фото'}</span>
                <strong>{item.title}</strong>
                <small>{item.date}</small>
              </span>
            </button>
          ))}
        </div>
      </div></section>
      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)} wide>
          <div className="media-modal-content">
            <div className="media-modal-image">
              <img src={selected.image} alt={selected.alt} />
              {selected.type === 'video' && <span className="video-demo-icon"><Play size={30} /></span>}
            </div>
            <div className="news-modal-meta">{selected.type === 'video' ? 'Видео' : 'Фотография'} · {selected.date}</div>
            <p>{selected.description}</p>
            {selected.type === 'video' && <p className="form-status">Видеоплеер появится после загрузки настоящего видеофайла или ссылки на запись.</p>}
          </div>
        </Modal>
      )}
    </>
  )
}
