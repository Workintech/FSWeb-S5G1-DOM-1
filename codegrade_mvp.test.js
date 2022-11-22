const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  server.listen()
  document.body.innerHTML = `
    <div class="container">
    <header>
      <nav>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </nav>
      <img id="logo-img" class="logo" alt="Bir Şirket Sitesi logo">
    </header>
    <section class="cta">
      <div class="cta-text">
        <h1></h1>
        <button></button>
      </div>
      <img id="cta-img" alt="Bir kod parçası resmi">
    </section>
    <section class="main-content">
      <div class="top-content">
        <div class="text-content">
          <h4></h4>
          <p></p>
        </div>
        <div class="text-content">
          <h4></h4>
          <p></p>
        </div>
      </div>
      <img class="middle-img" id="middle-img" alt="Ekran boyunca bir kod parçası resmi">
      <div class="bottom-content">
        <div class="text-content">
          <h4></h4>
          <p></p>
        </div>
        <div class="text-content">
          <h4></h4>
          <p></p>
        </div>
        <div class="text-content">
          <h4></h4>
          <p></p>
        </div>
      </div>
    </section>
    <section class="contact">
      <h4></h4>
      <p></p>
      <p></p>
      <p></p>
    </section>
    <footer>
      <a href="#"></a>
    </footer>
  </div>
  `
  require('./src/index.js')
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('metin içerikleri', () => {
  test('[1] header menü linkleri doğru kelimeleri içeriyor', () => {
    expect(screen.getByText('Servisler', { selector: 'nav a' }))
    expect(screen.getByText('Ürünler', { selector: 'nav a' }))
    expect(screen.getByText('Vizyon', { selector: 'nav a' }))
    expect(screen.getByText('Özellikler', { selector: 'nav a' }))
    expect(screen.getByText('Hakkımızda', { selector: 'nav a' }))
    expect(screen.getByText('İletişim', { selector: 'nav a' }))
  })
  test('[2] cta elementleri doğru kelimeleri içeriyor', () => {
    expect(screen.getByText('Bu DOM Mükemmel'))
    expect(screen.getByText('Başlayın'))
  })
  test('[3] ana içerik başlığı doğru kelimeyi içeriyor', () => {
    expect(screen.getByText(
      'Özellikler',
      { selector: '.top-content .text-content:nth-of-type(1) h4' }
    ))
    expect(screen.getByText(
      'Hakkında',
      { selector: '.top-content .text-content:nth-of-type(2) h4' }
    ))
  })
  test('[4] ana içerik paragrafları doğru metinleri içeriyor', () => {
    expect(screen.getByText(
      /Özellikler içeriği elementum magna eros/,
      { selector: '.top-content .text-content p' }
    ))
    expect(screen.getByText(
      /Hakkında içeriği elementum magna eros/,
      { selector: '.top-content .text-content p' }
    ))
  })
  test('[5] aşağıdaki başlıklar doğru kelimeleri içeriyor', () => {
    expect(screen.getByText(
      'Servisler',
      { selector: '.bottom-content .text-content h4' }
    ))
    expect(screen.getByText(
      'Ürünler',
      { selector: '.bottom-content .text-content h4' }
    ))
    expect(screen.getByText(
      'Vizyon',
      { selector: '.bottom-content .text-content h4' }
    ))
  })
  test('[6] bottom content headings contain the correct text', () => {
    expect(screen.getByText(
      /Servisler içeriği elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
    expect(screen.getByText(
      /Ürünler içeriği elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
    expect(screen.getByText(
      /Vizyon içeriği elementum magna eros/,
      { selector: '.bottom-content .text-content p' }
    ))
  })
  test('[7] iletişim bilgileri doğru kelimeleri içeriyor', () => {
    expect(screen.getByText(
      'İletişim',
      { selector: 'section.contact h4' }
    ))
    expect(screen.getByText(
      '100 numara Bilmem ne sokak Ankara\'da bir semt, Türkiye',
      { selector: 'section.contact p' }
    ))
    expect(screen.getByText('+90 (123) 456-7899',
      { selector: 'section.contact p' }
    ))
    expect(screen.getByText(
      'satis@birsirketsitesi.com.tr',
      { selector: 'section.contact p' }
    ))
  })
  test('[8] copyright bilgisi doğru kelimeleri içeriyor', () => {
    expect(screen.getByText(
      /Copyright Bir Şirket Sitesi 2022/,
      { selector: 'footer a' }
    ))
  })
})
describe('img sources', () => {
  test('[9] üstteki logo img src si doğru', () => {
    expect(screen.getByAltText(/Bir Şirket Sitesi logo/))
      .toHaveAttribute('src', 'http://localhost:9000/img/logo.png')
  })
  test('[10] cta img src si doğru', () => {
    expect(screen.getByAltText(/Bir kod parçası resmi/))
      .toHaveAttribute('src', 'http://localhost:9000/img/cta.png')
  })
  test('[11] ortadaki img doğru src ye sahip', () => {
    expect(screen.getByAltText(/Ekran boyunca bir kod parçası resmi/))
      .toHaveAttribute('src', 'http://localhost:9000/img/accent.png')
  })
})
describe('class isimleri', () => {
  test('[12] menü linklerinin class\'ı italic', () => {
    // screen.getAllByText(/[\s\S]*/, { selector: 'nav a' }) // TODO: research which
    for (let link of document.querySelectorAll('nav a')) {
      expect(link).toHaveAttribute('class', 'italic')
    }
  })
  test('[13] class\'ı italic olan başka link yok', () => {
    expect(document.querySelector('footer a')).not.toHaveAttribute('class', 'italic')
  })
  test('[14] footerdaki linkin class\'ı bold', () => {
    const link = document.querySelector('footer a')
    expect(link).toHaveAttribute('class', 'bold')
  })
  test('[15] class\'ı bold olan başka link yok', () => {
    for (let link of document.querySelectorAll('nav a')) {
      expect(link).not.toHaveAttribute('class', 'bold')
    }
  })
})
