
const navToggle = document.getElementById('navToggle');
const navlinks = document.getElementById('navlinks');

navToggle.addEventListener('click', () => {
  const open = navlinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navlinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


const sections = document.querySelectorAll('main .section');
const navItems = document.querySelectorAll('.navlinks a');

const setActive = (id) => {
  navItems.forEach(link => {
    link.classList.toggle('active', link.dataset.target === id);
  });
};

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

sections.forEach(section => spy.observe(section));


const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));


const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = form.name.value.trim();

    status.style.color = "var(--ink)";
    status.textContent = "Envoi en cours...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.style.color = "var(--mint-ink)";
        status.textContent = `Merci ${name} ! Ton message a bien été envoyé.`;
        form.reset();
      } else {
        status.style.color = "var(--coral-ink)";
        status.textContent = "Oups ! Il y a eu un problème lors de l'envoi du message.";
      }
    } catch (error) {
      status.style.color = "var(--coral-ink)";
      status.textContent = "Oups ! Il y a eu un problème de connexion.";
    }
  });
}



function createStars() {
  const container = document.createElement('div');
  container.className = 'stars-bg';

  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 4}s`;

    star.innerHTML = `
      <svg viewBox="0 0 24 24" fill="var(--coral-ink)" width="14" height="14">
        <path d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z"/>
      </svg>
    `;

    container.appendChild(star);
  }

  document.body.appendChild(container);

  const navlinks = document.getElementById('navlinks');
  if (navlinks) {
    navlinks.appendChild(container.cloneNode(true));
  }
}


function initForceDownloads() {
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', async (e) => {
      const href = link.getAttribute('href');
      if (href && href.endsWith('.pdf')) {
        e.preventDefault();
        try {
          const response = await fetch(href);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          const tempLink = document.createElement('a');
          tempLink.href = blobUrl;
          tempLink.download = link.getAttribute('download') || 'download.pdf';
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
          URL.revokeObjectURL(blobUrl);
        } catch (err) {
          window.location.href = href;
        }
      }
    });
  });
}

function initLightbox() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".modal-close");
  const prevBtn = document.querySelector(".modal-prev");
  const nextBtn = document.querySelector(".modal-next");

  let currentGalleryImages = [];
  let currentIndex = 0;

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll('.design-gallery').forEach(gallery => {
      const images = Array.from(gallery.querySelectorAll('img'));

      images.forEach((img, index) => {
        img.addEventListener('click', function (e) {
          e.stopPropagation();
          currentGalleryImages = images;
          currentIndex = index;
          showModalImage();
        });
      });
    });

    function showModalImage() {
      modal.style.display = "flex";
      modal.offsetWidth;
      modal.classList.add("show");
      modalImg.src = currentGalleryImages[currentIndex].src;
    }

    function showNext(e) {
      if (e) e.stopPropagation();
      if (currentGalleryImages.length === 0) return;
      currentIndex = (currentIndex + 1) % currentGalleryImages.length;
      modalImg.src = currentGalleryImages[currentIndex].src;
    }

    function showPrev(e) {
      if (e) e.stopPropagation();
      if (currentGalleryImages.length === 0) return;
      currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
      modalImg.src = currentGalleryImages[currentIndex].src;
    }

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);


    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains("show")) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeModal();
    });

    const closeModal = () => {
      modal.classList.remove("show");
      setTimeout(() => modal.style.display = "none", 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
}

function initExpandGallery() {
  document.querySelectorAll('.more-images-overlay').forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      this.style.display = 'none';

      const gallery = this.closest('.design-gallery');
      if (gallery) {
        gallery.querySelectorAll('.hidden-img').forEach(img => {
          img.classList.remove('hidden-img');
          img.classList.add('expanded-img');
        });

        let voirMoinsContainer = gallery.nextElementSibling;
        if (!voirMoinsContainer || !voirMoinsContainer.classList.contains('voir-moins-container')) {
          voirMoinsContainer = document.createElement('div');
          voirMoinsContainer.className = 'voir-moins-container';
          voirMoinsContainer.style.display = 'flex';
          voirMoinsContainer.style.justifyContent = 'center';
          voirMoinsContainer.style.marginTop = '20px';

          const btn = document.createElement('button');
          btn.className = 'btn btn-ghost';
          btn.textContent = 'Voir moins';
          voirMoinsContainer.appendChild(btn);

          gallery.parentNode.insertBefore(voirMoinsContainer, gallery.nextSibling);

          btn.addEventListener('click', () => {
            gallery.querySelectorAll('.expanded-img').forEach(img => {
              img.classList.add('hidden-img');
              img.classList.remove('expanded-img');
            });
            overlay.style.display = '';
            voirMoinsContainer.style.display = 'none';


            const y = gallery.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          });
        }
        voirMoinsContainer.style.display = 'flex';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initForceDownloads();
  initLightbox();
  initExpandGallery();
});
