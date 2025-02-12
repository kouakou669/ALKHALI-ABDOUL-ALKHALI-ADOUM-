document.addEventListener('DOMContentLoaded', function() {
    // Données des actualités
    const newsItems = [
        {
            date: "11 Décembre 2024",
            title: "Un Grand Serviteur de la République",
            excerpt: "M. Adoum Alkhali Adoum Salamat, un homme d'affaires et acteur majeur du développement du Tchad, continue son engagement pour le progrès social et économique du pays.",
            tags: ["Leadership", "Développement", "Batha"]
        },
        {
            date: "5 Octobre 2024",
            title: "Un geste de cœur à Ati : Plus de 100 enfants circoncis gratuitement",
            excerpt: "Dans un acte de générosité remarquable, Adoum Alkhali Adoum Salamat, PDG de SADNA, a pris en charge la circoncision gratuite de plus de 100 enfants à Ati, venant en aide aux familles vulnérables de la région.",
            tags: ["Humanitaire", "Santé", "Ati"]
        }
    ];

    let currentIndex = 0;
    const featureNews = document.querySelector('.feature-news');

    function updateFeatureNews() {
        const news = newsItems[currentIndex];
        
        // Préparer le nouveau contenu
        const newContent = `
            <div class="news-content" style="opacity: 0;">
                <div class="news-date">${news.date}</div>
                <div class="news-title">${news.title}</div>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-tags">
                    ${news.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        // Animation de sortie
        const currentContent = featureNews.querySelector('.news-content');
        if (currentContent) {
            currentContent.style.transition = 'opacity 0.5s ease-out';
            currentContent.style.opacity = '0';
            
            setTimeout(() => {
                // Remplacer le contenu
                featureNews.innerHTML = newContent;
                
                // Animation d'entrée
                const newContentElement = featureNews.querySelector('.news-content');
                setTimeout(() => {
                    newContentElement.style.transition = 'opacity 0.5s ease-in';
                    newContentElement.style.opacity = '1';
                }, 50);
            }, 500);
        }

        // Passer à la prochaine actualité
        currentIndex = (currentIndex + 1) % newsItems.length;
    }

    // Initialiser la première actualité
    updateFeatureNews();

    // Changer l'actualité toutes les 40 secondes
    setInterval(updateFeatureNews, 5000);
});

// Animation pour les cartes d'actualité standard
const newsCards = document.querySelectorAll('.news-card:not(.feature-news)');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
