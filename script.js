// Animation simple au chargement
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site Chromatium chargé !');

    // Faire apparaître les cartes progressivement
    const cartes = document.querySelectorAll('.carte');
    cartes.forEach((carte, index) => {
        carte.style.opacity = '0';
        carte.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            carte.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            carte.style.opacity = '1';
            carte.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    // Changer la couleur du header au défilement
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'linear-gradient(90deg, #0d1b5e, #1cb9b5)';
        } else {
            header.style.background = 'linear-gradient(90deg, #1a2980, #26d0ce)';
        }
    });
});
