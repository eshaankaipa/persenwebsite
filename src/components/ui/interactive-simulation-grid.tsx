"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface InteractiveSimulationGridProps {
  columns?: number;
  rows?: number;
}

interface GridPoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export function InteractiveSimulationGrid({ 
  columns = 30, 
  rows = 15 
}: InteractiveSimulationGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<GridPoint[]>([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        initPoints();
      }
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
        ctx.fillStyle = `rgba(100, 100, 100, ${alpha})`;
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
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [columns, rows]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
