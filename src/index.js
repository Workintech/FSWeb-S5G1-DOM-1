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

let navLinks = document.querySelectorAll("nav a");
let linkText = ["Servisler", "Ürünler", "Vizyon", "Özellikler", "Hakkımızda", "İletişim"];
navLinks.forEach((link, index) => {
  link.style.fontStyle = 'italic'
  link.textContent = linkText[index]
});

let logoElement = document.getElementById("logo-img");
logoElement.setAttribute("src", "http://localhost:9000/img/logo.png");

let h1Element = document.querySelector(".cta-text h1")
h1Element.textContent = "Bu DOM Mükemmel";

let buttonElement = document.querySelector(".cta-text button");
buttonElement.textContent = "Başlayın";

let sectionCtaImg = document.getElementById("cta-img");
sectionCtaImg.setAttribute("src", "http://localhost:9000/img/cta.png");

let h4Elements = document.querySelectorAll(".text-content h4");
let pElements = document.querySelectorAll(".text-content p");

let h4Texts = ["Özellikler", "Hakkında", "Servisler", "Ürünler", "Vizyon"]
let pTexts = 
["Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
"Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
"Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
"Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
"Vizyon İçerğiği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."]

h4Elements.forEach ((element, index) => {
  element.textContent = h4Texts[index]
});

pElements.forEach((element, index) => {
  element.textContent = pTexts[index]
});

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");

let contacth4Element = document.querySelector(".contact h4");
h1Element.textContent = "İletişim";

let contactPElements = document.querySelectorAll(".contact p");
let contactInfosTexts = [
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
  "+90 (123) 456-7899",
  "satis@birsirketsitesi.com.tr"]

contactPElements.forEach((element, index) => {
  element.textContent = contactInfosTexts[index]
});