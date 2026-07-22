const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Lovasoa
html = html.replace(/<div class="design-gallery">[\s\S]*?ETU3637-S6-J412\.jpg" alt="Lovasoa Brand Identity 12" loading="lazy">[\s]*<\/div>/, 
`<div class="design-gallery new-layout">
            <img src="images/Lovasoa/ETU3637-S6-J4.jpg" alt="Lovasoa Brand Identity 1" loading="lazy">
            <img src="images/Lovasoa/ETU3637-S6-J42.jpg" alt="Lovasoa Brand Identity 2" loading="lazy">
            <img src="images/Lovasoa/ETU3637-S6-J43.jpg" alt="Lovasoa Brand Identity 3" loading="lazy">
            
            <div class="more-images-wrapper">
              <img src="images/Lovasoa/ETU3637-S6-J44.jpg" alt="Lovasoa Brand Identity 4" loading="lazy">
              <div class="more-images-overlay">+8 Voir plus</div>
            </div>

            <img src="images/Lovasoa/ETU3637-S6-J45.jpg" alt="Lovasoa Brand Identity 5" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J46.jpg" alt="Lovasoa Brand Identity 6" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J47.jpg" alt="Lovasoa Brand Identity 7" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J48.jpg" alt="Lovasoa Brand Identity 8" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J49.jpg" alt="Lovasoa Brand Identity 9" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J410.jpg" alt="Lovasoa Brand Identity 10" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J411.jpg" alt="Lovasoa Brand Identity 11" loading="lazy" class="hidden-img">
            <img src="images/Lovasoa/ETU3637-S6-J412.jpg" alt="Lovasoa Brand Identity 12" loading="lazy" class="hidden-img">
          </div>`);

// Velo
html = html.replace(/<div class="design-gallery">[\s\S]*?Web 1920 – 17\.png" alt="Vélos Design" loading="lazy" class="span-w2">[\s]*<\/div>/,
`<div class="design-gallery new-layout">
            <img src="images/Velo/Volohany.png" alt="Vélos Design Accueil" loading="lazy">
            <img src="images/Velo/Web 1920 – 1.png" alt="Vélos Design Login" loading="lazy">
            <img src="images/Velo/Web 1920 – 3.png" alt="Vélos Design Modèles" loading="lazy">
            
            <div class="more-images-wrapper">
              <img src="images/Velo/Web 1920 – 4.png" alt="Vélos Design Caractéristiques" loading="lazy">
              <div class="more-images-overlay">+13 Voir plus</div>
            </div>

            <img src="images/Velo/Web 1920 – 5.png" alt="Vélos Design Accessoires" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 6.png" alt="Vélos Design Panier" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 7.png" alt="Vélos Design Checkout" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 8.png" alt="Vélos Design Contact" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 9.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 10.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 11.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 12.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 13.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 14.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 15.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 16.png" alt="Vélos Design" loading="lazy" class="hidden-img">
            <img src="images/Velo/Web 1920 – 17.png" alt="Vélos Design" loading="lazy" class="hidden-img">
          </div>`);

// Packaging
html = html.replace(/<div class="design-gallery">[\s\S]*?Capture d'écran 2026-07-22 193434\.png" alt="Aperçu Packaging" loading="lazy" class="span-h2">[\s]*<\/div>/,
`<div class="design-gallery new-layout">
            <img src="images/Packaging/TsarainaSigaraVolohany.jpg" alt="Packaging Tsaraina Sigara Volohany" loading="lazy">
            <img src="images/Packaging/TsarainaSigara.jpg" alt="Packaging Tsaraina Sigara" loading="lazy">
            <img src="images/Packaging/Tracé paquet boston.png" alt="Tracé paquet boston" loading="lazy">
            
            <div class="more-images-wrapper">
              <img src="images/Packaging/NA.jpg" alt="Packaging NA" loading="lazy">
              <div class="more-images-overlay">+1 Voir plus</div>
            </div>

            <img src="images/Packaging/Capture d'écran 2026-07-22 193434.png" alt="Aperçu Packaging" loading="lazy" class="hidden-img">
          </div>`);

// Communication
html = html.replace(/<div class="design-gallery">[\s\S]*?3637-tsiky-Bannière\.jpg" alt="Bannière Communication" loading="lazy" class="span-w4">[\s]*<\/div>/,
`<div class="design-gallery new-layout">
            <img src="images/Com/3637-Tsiky-Affichee.jpg" alt="Affiche Communication" loading="lazy">
            <img src="images/Com/3637-Tsiky-Panneau.jpg" alt="Panneau Communication" loading="lazy">
            <img src="images/Com/3637-Tsiky-A4.jpg" alt="Affiche A4 Communication" loading="lazy">
            <img src="images/Com/3637-tsiky-Bannière.jpg" alt="Bannière Communication" loading="lazy">
          </div>`);

fs.writeFileSync('index.html', html);
console.log('index.html updated');
