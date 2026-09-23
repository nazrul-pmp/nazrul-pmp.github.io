const navToggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav');if(navToggle&&nav){navToggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(isOpen));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));}document.getElementById('year').textContent=new Date().getFullYear();const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce||!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}else{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}


// Certificate/training image lightbox
const lightbox = document.getElementById('certificate-lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      lightboxImg.src = button.dataset.lightbox;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  };
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}
