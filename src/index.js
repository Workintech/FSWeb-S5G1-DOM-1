const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const menu_a = document.querySelectorAll('header a');
menu_a.forEach((a,i)=>{
  menu_a[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
  a.classList.add('italic')
})

const logo = document.getElementById('logo-img');
logo.setAttribute('src',siteContent.images["logo-img"]);

const header = document.querySelector(".cta-text h1");
header.textContent = siteContent.cta.h1;

const button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta.button;

const cta_img = document.getElementById('cta-img');
cta_img.setAttribute('src',siteContent.images["cta-img"]);

const mainTextHeaders = document.querySelectorAll(".main-content .text-content");
mainTextHeaders.forEach((e,i)=>{
  e.querySelector("h4").textContent = siteContent["ana-içerik"][Object.keys(siteContent["ana-içerik"])[2*i]]
  e.querySelector("p").textContent = siteContent["ana-içerik"][Object.keys(siteContent["ana-içerik"])[2*i+1]]
})

const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src',siteContent.images["accent-img"])

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.iletisim["iletişim-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP.forEach((e,i)=>{
  e.textContent = siteContent.iletisim[Object.keys(siteContent["iletisim"])[i+1]]
})

const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");