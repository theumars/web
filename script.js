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


/* Hafif kodlama temalı mouse efekti */
(() => {
    const canvas = document.getElementById("codeCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const symbols = ["</>", "{ }", "01", "const", "if()", "CSS", "JS", "git"];
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let width = 0;
    let height = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        particles = Array.from(
            { length: Math.max(16, Math.floor(width / 65)) },
            () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: 0.12 + Math.random() * 0.22,
                drift: (Math.random() - 0.5) * 0.12,
                text: symbols[Math.floor(Math.random() * symbols.length)],
                alpha: 0.04 + Math.random() * 0.07
            })
        );
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.font = "11px monospace";

        particles.forEach((particle) => {
            const dx = particle.x - mouseX;
            const dy = particle.y - mouseY;
            const distance = Math.hypot(dx, dy);

            if (distance < 130) {
                particle.x += (dx / Math.max(distance, 1)) * 0.45;
                particle.y += (dy / Math.max(distance, 1)) * 0.45;
            }

            particle.y -= particle.speed;
            particle.x += particle.drift;

            if (particle.y < -20) {
                particle.y = height + 20;
                particle.x = Math.random() * width;
            }

            ctx.fillStyle = `rgba(129, 140, 248, ${particle.alpha})`;
            ctx.fillText(particle.text, particle.x, particle.y);
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    resize();
    animate();
})();
