import React from 'react'

interface InfoPopupProps {
  isOpen: boolean
  onClose: () => void
}

const InfoPopup: React.FC<InfoPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="drawEditor__infoPopup">
      <div className="drawEditor__infoPopup__modal">
        {/* Header */}
        <div className="drawEditor__infoPopup__header">
          <h2 className="drawEditor__infoPopup__header__title">📖 Návod k použití DrawEditor</h2>
          <button onClick={onClose} className="drawEditor__infoPopup__header__closeBtn">
            ×
          </button>
        </div>

        {/* Content */}
        <div className="drawEditor__infoPopup__content">
          {/* Základní kroky */}
          <section>
            <h3>🚀 Základní kroky</h3>
            <ol className="drawEditor__infoPopup__stepsList">
              <li>
                <span className="drawEditor__infoPopup__stepsList__number">1</span>
                <span>
                  <strong>Vyberte obrázek</strong> v poli nad editorem
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__stepsList__number">2</span>
                <span>
                  <strong>Vytvořte vrstvu</strong> vybráním &ldquo;Nový záznam&rdquo; a zadáním
                  názvu
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__stepsList__number">3</span>
                <span>
                  <strong>Začněte kreslení</strong> kliknutím na &ldquo;Začít kreslení&rdquo;
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__stepsList__number">4</span>
                <span>
                  <strong>Klikejte na obrázek</strong> pro vytvoření bodů polygonu (min. 3 body)
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__stepsList__number">5</span>
                <span>
                  <strong>Ukončete kreslení</strong> kliknutím na &ldquo;Ukončit kreslení&rdquo;
                </span>
              </li>
            </ol>
          </section>

          {/* Ovládání */}
          <section>
            <h3>🎮 Ovládání</h3>
            <div className="drawEditor__infoPopup__controlsGrid">
              <div className="drawEditor__infoPopup__controlsGrid__column">
                <div className="drawEditor__infoPopup__controlsGrid__row">
                  <span className="drawEditor__infoPopup__controlsGrid__key">Klik</span>
                  <span className="drawEditor__infoPopup__controlsGrid__description">
                    Přidat bod při kreslení
                  </span>
                </div>
                <div className="drawEditor__infoPopup__controlsGrid__row">
                  <span className="drawEditor__infoPopup__controlsGrid__key">Drag</span>
                  <span className="drawEditor__infoPopup__controlsGrid__description">
                    Posun obrázku (panning)
                  </span>
                </div>
                <div className="drawEditor__infoPopup__controlsGrid__row">
                  <span className="drawEditor__infoPopup__controlsGrid__key">ALT + Scroll</span>
                  <span className="drawEditor__infoPopup__controlsGrid__description">
                    Zoom obrázku
                  </span>
                </div>
              </div>
              <div className="drawEditor__infoPopup__controlsGrid__column">
                <div className="drawEditor__infoPopup__controlsGrid__row">
                  <span className="drawEditor__infoPopup__controlsGrid__key">Backspace</span>
                  <span className="drawEditor__infoPopup__controlsGrid__description">
                    Smazat poslední bod
                  </span>
                </div>
                <div className="drawEditor__infoPopup__controlsGrid__row">
                  <span className="drawEditor__infoPopup__controlsGrid__key">Delete</span>
                  <span className="drawEditor__infoPopup__controlsGrid__description">
                    Zrušit výběr polygonu
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Editace */}
          <section>
            <h3>✏️ Editace polygonů</h3>
            <ul className="drawEditor__infoPopup__editList">
              <li>
                <span className="drawEditor__infoPopup__editList__bullet">•</span>
                <span>
                  <strong>Klikněte na polygon</strong> pro jeho výběr
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__editList__bullet">•</span>
                <span>
                  <strong>Táhněte body</strong> (malé kruhy) pro úpravu tvaru
                </span>
              </li>
              <li>
                <span className="drawEditor__infoPopup__editList__bullet">•</span>
                <span>
                  <strong>Propojte vrstvu s kolekcí</strong> pomocí reference selectoru
                </span>
              </li>
            </ul>
          </section>

          {/* Tipy */}
          <section>
            <h3>💡 Tipy</h3>
            <div className="drawEditor__infoPopup__tips">
              <p>
                <strong>💾 Automatické ukládání:</strong> Data se ukládají automaticky při každé
                změně
              </p>
              <p>
                <strong>🎯 Přesné klikání:</strong> Body mají velkou klikací oblast pro snadnou
                editaci
              </p>
              <p>
                <strong>📱 Organizace:</strong> Používejte vrstvy pro organizaci různých typů
                objektů (budovy, patra, byty)
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="drawEditor__infoPopup__footer">
          <button onClick={onClose} className="w-full">
            Rozumím, zavřít návod
          </button>
        </div>
      </div>
    </div>
  )
}

export default InfoPopup
