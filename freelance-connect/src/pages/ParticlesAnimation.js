import React, { useEffect, useRef } from 'react';

const ParticlesAnimation = () => {
    const canvasRef = useRef(null);
    const particles = [];
    const particleCount = 10;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 0;
            this.speedX = Math.random() * 3 - 0;
            this.speedY = Math.random() * 3 - 0;
        }

        update(canvasWidth, canvasHeight) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
            if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
        }

        draw(ctx) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const initParticles = (canvas) => {
        for (let i = 0; i < particleCount; i++) {
            const particle = new Particle(Math.random() * canvas.width, Math.random() * canvas.height);
            particles.push(particle);
        }
    };

    const animateParticles = (ctx, canvas) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update(canvas.width, canvas.height);
            particle.draw(ctx);
        });
        requestAnimationFrame(() => animateParticles(ctx, canvas));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        initParticles(canvas);
        animateParticles(ctx, canvas);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{ backgroundColor: 'black' }}
        />
    );
};

export default ParticlesAnimation;
