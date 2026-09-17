// Interactive effects & dynamic title highlight
document.addEventListener("DOMContentLoaded", () => {
    console.log("Umut Arda Yelkenci Portfolio Loaded.");

    const cards = document.querySelectorAll('.interest-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(129, 140, 248, 0.5)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
});
