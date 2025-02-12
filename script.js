// Animation pour les cartes d'actualité
document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');
    
    // Ajouter un effet de survol smooth
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Animation pour les liens sociaux
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
