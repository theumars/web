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


/* Hafif kodlama temalı arka plan mouse efekti */
(() => {
    const canvas = document.getElementById("codeCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const symbols = ["</>", "{ }", "01", "const", "if()", "CSS", "JS", "git"];
    let particles = [], mouseX = -1000, mouseY = -1000, width = 0, height = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        particles = Array.from({length: Math.max(16, Math.floor(width / 65))}, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: .12 + Math.random() * .22,
            drift: (Math.random() - .5) * .12,
            text: symbols[Math.floor(Math.random() * symbols.length)],
            alpha: .04 + Math.random() * .07
        }));
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.font = "11px monospace";
        particles.forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distance = Math.hypot(dx, dy);
            if (distance < 130) {
                p.x += (dx / Math.max(distance, 1)) * .45;
                p.y += (dy / Math.max(distance, 1)) * .45;
            }
            p.y -= p.speed;
            p.x += p.drift;
            if (p.y < -20) {
                p.y = height + 20;
                p.x = Math.random() * width;
            }
            ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`;
            ctx.fillText(p.text, p.x, p.y);
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    resize();
    animate();
})();
