"use client";

import React, { useRef, useEffect } from 'react';

interface GridPoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<GridPoint[]>([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const columns = 40;
    const rows = 12;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initPoints();
    };

    const initPoints = () => {
      const points: GridPoint[] = [];
      const spacingX = canvas.width / (columns - 1);
      const spacingY = canvas.height / (rows - 1);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const x = col * spacingX;
          const y = row * spacingY;
          points.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
      pointsRef.current = points;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const influenceRadius = 150;
      const pushStrength = 30;
      const returnStrength = 0.08;
      const friction = 0.85;

      pointsRef.current.forEach(point => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influenceRadius && dist > 0) {
          const force = (1 - dist / influenceRadius) * pushStrength;
          const angle = Math.atan2(dy, dx);
          point.vx -= Math.cos(angle) * force * 0.1;
          point.vy -= Math.sin(angle) * force * 0.1;
        }

        point.vx += (point.baseX - point.x) * returnStrength;
        point.vy += (point.baseY - point.y) * returnStrength;

        point.vx *= friction;
        point.vy *= friction;

        point.x += point.vx;
        point.y += point.vy;
      });

      ctx.strokeStyle = 'rgba(180, 180, 180, 0.15)';
      ctx.lineWidth = 0.5;

      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        for (let col = 0; col < columns; col++) {
          const point = pointsRef.current[row * columns + col];
          if (col === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      for (let col = 0; col < columns; col++) {
        ctx.beginPath();
        for (let row = 0; row < rows; row++) {
          const point = pointsRef.current[row * columns + col];
          if (row === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      pointsRef.current.forEach(point => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const distFromBase = Math.sqrt(
          Math.pow(point.x - point.baseX, 2) + 
          Math.pow(point.y - point.baseY, 2)
        );
        
        let alpha = 0.2;
        let radius = 1.5;
        
        if (dist < influenceRadius) {
          const intensity = 1 - dist / influenceRadius;
          alpha = 0.2 + intensity * 0.6;
          radius = 1.5 + intensity * 2;
        }
        
        if (distFromBase > 1) {
          alpha = Math.min(0.9, alpha + distFromBase * 0.02);
        }

          ctx.beginPath();
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    container.addEventListener('mousemove', handleMouseMove as any, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove as any);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <footer className="relative w-full bg-[#F7F7F7] overflow-hidden">
      <div className="w-full h-[1px] dashed-border-h opacity-50" />

        <div
          ref={containerRef}
          className="relative w-full min-h-[500px] pb-12 cursor-crosshair overflow-hidden"
        >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />

        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            zIndex: 0,
          }}
        />

          {/* Creative Persen Typography */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Bottom left Persen - coming onto the screen */}
            <div 
              className="absolute select-none"
              style={{ 
                color: '#E8E8E8',
                fontSize: 'clamp(100px, 20vw, 300px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 0.85,
                left: '-5%',
                bottom: '-8%',
              }}
            >
              Persen
            </div>
            
            {/* Top right Persen - going off the screen, upside down */}
            <div 
              className="absolute select-none"
              style={{ 
                color: '#E8E8E8',
                fontSize: 'clamp(100px, 20vw, 300px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 0.85,
                right: '-8%',
                top: '-10%',
                transform: 'rotate(180deg)',
              }}
            >
              Persen
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
