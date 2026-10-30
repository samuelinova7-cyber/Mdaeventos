import React, { useEffect, useRef } from 'react';

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = 42;
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
      color: 'gold' | 'purple' | 'amber';
    }

    const particles: Particle[] = [];
    const colors = ['gold', 'purple', 'amber'] as const;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.8 + 1,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: -Math.random() * 0.55 - 0.2, // Drifting upwards like glowing embers
        opacity: Math.random() * 0.5 + 0.2,
        maxOpacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Pulse opacity
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Color styling
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        let colorString = `rgba(245, 158, 11, ${p.opacity})`; // amber
        if (p.color === 'purple') {
          colorString = `rgba(168, 85, 247, ${p.opacity * 0.9})`;
        } else if (p.color === 'gold') {
          colorString = `rgba(253, 224, 71, ${p.opacity})`;
        }

        ctx.fillStyle = colorString;
        ctx.shadowColor = p.color === 'purple' ? '#a855f7' : '#f59e0b';
        ctx.shadowBlur = p.size * 5;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
};
