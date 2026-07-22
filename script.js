
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
          // Fallback to normal behavior on error
          window.location.href = href;
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initForceDownloads();
});
