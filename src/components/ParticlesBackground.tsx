import { useEffect, useRef } from "react";

interface Orb {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  pulseSpeed?: number;
}

interface CodeLine {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  maxOpacity: number;
  size: number;
  color: string;
  delay: number;
  charIndex: number;
  typingSpeed: number;
}

const CODE_SNIPPETS = [
  'const app = express();',
  'function render() {',
  '  return <Component />;',
  'import React from "react";',
  'const [state, setState] = useState();',
  'useEffect(() => {}, []);',
  'export default App;',
  '<div className="flex">',
  'async function fetchData() {',
  '  const res = await fetch(url);',
  'if (loading) return <Spinner />;',
  'npm install react-router',
  'git commit -m "update"',
  'const styles = tw`p-4 m-2`;',
  'border-radius: 0.75rem;',
  'display: grid;',
  'console.log("Hello World");',
  'SELECT * FROM users;',
  'CREATE TABLE projects;',
  'docker build -t app .',
  '} catch (error) {',
  'return res.json();',
  '.then(data => setData(data))',
  'type Props = { id: string }',
  'interface User { name: string }',
  '@apply flex items-center;',
  'transition: all 0.3s ease;',
  'background: linear-gradient(...)',
  'const router = useRouter();',
  'onClick={() => handleClick()}',
];

const CODE_COLORS = [
  "hsla(185, 95%, 55%, ALPHA)",   // cyan
  "hsla(140, 70%, 55%, ALPHA)",   // green
  "hsla(45, 90%, 60%, ALPHA)",    // yellow
  "hsla(270, 70%, 65%, ALPHA)",   // purple
  "hsla(199, 89%, 48%, ALPHA)",   // blue
  "hsla(340, 75%, 55%, ALPHA)",   // pink
];

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Ambient gradient orbs
    const orbs: Orb[] = [
      { cx: canvas.width * 0.2, cy: canvas.height * 0.3, rx: 250, ry: 180, angle: 0, speed: 0.002, size: 200, color: "hsla(185, 95%, 55%, 0.04)" },
      { cx: canvas.width * 0.8, cy: canvas.height * 0.2, rx: 300, ry: 200, angle: Math.PI, speed: -0.0015, size: 250, color: "hsla(320, 80%, 55%, 0.035)" },
      { cx: canvas.width * 0.5, cy: canvas.height * 0.5, rx: 200, ry: 250, angle: Math.PI / 2, speed: 0.003, size: 180, color: "hsla(270, 70%, 50%, 0.03)", pulseSpeed: 0.015 },
      { cx: canvas.width * 0.6, cy: canvas.height * 0.7, rx: 180, ry: 150, angle: 0, speed: 0.0025, size: 160, color: "hsla(199, 89%, 48%, 0.03)" },
    ];

    // Scrolling code lines
    const codeLines: CodeLine[] = [];
    const lineCount = Math.min(40, Math.floor(canvas.width / 35));
    
    for (let i = 0; i < lineCount; i++) {
      const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      codeLines.push({
        text: snippet,
        x: Math.random() * canvas.width * 0.9,
        y: Math.random() * canvas.height,
        speed: 4 + Math.random() * 6,
        opacity: 0,
        maxOpacity: 0.22 + Math.random() * 0.2,
        size: 12 + Math.random() * 5,
        color: CODE_COLORS[Math.floor(Math.random() * CODE_COLORS.length)],
        delay: Math.random() * 30,
        charIndex: 0,
        typingSpeed: 4 + Math.random() * 6,
      });
    }

    // Scroll-triggered code bursts
    const codeBursts: { text: string; x: number; y: number; opacity: number; life: number; maxLife: number; color: string; size: number }[] = [];
    let lastScrollY = 0;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 15) {
        const count = Math.min(Math.floor(delta / 25), 4);
        for (let i = 0; i < count; i++) {
          const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          codeBursts.push({
            text: snippet,
            x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
            y: window.scrollY + window.innerHeight * (0.2 + Math.random() * 0.6),
            opacity: 0.25 + Math.random() * 0.15,
            life: 0,
            maxLife: 80 + Math.random() * 60,
            color: CODE_COLORS[Math.floor(Math.random() * CODE_COLORS.length)],
            size: 12 + Math.random() * 4,
          });
        }
      }
      lastScrollY = window.scrollY;
      const newHeight = document.documentElement.scrollHeight;
      if (canvas.height !== newHeight) {
        canvas.height = newHeight;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw ambient orbs
      for (const orb of orbs) {
        orb.angle += orb.speed;
        const ox = orb.cx + Math.cos(orb.angle) * orb.rx;
        const oy = orb.cy + Math.sin(orb.angle) * orb.ry;
        const pulseFactor = orb.pulseSpeed ? 1 + 0.15 * Math.sin(frame * 0.015 * (orb.pulseSpeed / 0.015)) : 1;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.size * pulseFactor);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.size * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw scrolling code lines with typing effect
      for (const cl of codeLines) {
        if (frame < cl.delay) continue;

        // Typing animation
        cl.charIndex += cl.typingSpeed;
        if (cl.charIndex > cl.text.length + 30) {
          // Reset with new snippet
          cl.charIndex = 0;
          cl.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          cl.x = Math.random() * canvas.width * 0.9;
          cl.color = CODE_COLORS[Math.floor(Math.random() * CODE_COLORS.length)];
        }

        const displayText = cl.text.substring(0, Math.min(Math.floor(cl.charIndex), cl.text.length));
        const isTyping = cl.charIndex <= cl.text.length;

        // Fade based on typing state
        const targetOpacity = cl.charIndex > cl.text.length + 15 
          ? cl.maxOpacity * (1 - (cl.charIndex - cl.text.length - 15) / 15)
          : cl.maxOpacity;
        cl.opacity += (targetOpacity - cl.opacity) * 0.05;

        cl.y -= cl.speed;
        if (cl.y < -30) {
          cl.y = canvas.height + 30;
          cl.x = Math.random() * canvas.width * 0.9;
          cl.charIndex = 0;
          cl.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, cl.opacity);
        ctx.font = `${cl.size}px 'Courier New', monospace`;
        ctx.fillStyle = cl.color.replace("ALPHA", String(cl.opacity));
        ctx.shadowBlur = 8;
        ctx.shadowColor = cl.color.replace("ALPHA", "0.4");
        ctx.fillText(displayText, cl.x, cl.y);

        // Blinking cursor
        if (isTyping && Math.floor(frame / 20) % 2 === 0) {
          const cursorX = cl.x + ctx.measureText(displayText).width + 2;
          ctx.fillStyle = cl.color.replace("ALPHA", String(cl.opacity * 1.5));
          ctx.fillRect(cursorX, cl.y - cl.size + 2, 2, cl.size);
        }
        ctx.restore();
      }

      // Draw scroll-triggered code bursts
      for (let i = codeBursts.length - 1; i >= 0; i--) {
        const b = codeBursts[i];
        b.life++;
        const progress = b.life / b.maxLife;
        const fadeIn = progress < 0.15 ? progress / 0.15 : 1;
        const fadeOut = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;

        ctx.save();
        ctx.globalAlpha = b.opacity * fadeIn * fadeOut;
        ctx.font = `bold ${b.size}px 'Courier New', monospace`;
        ctx.fillStyle = b.color.replace("ALPHA", String(b.opacity * fadeIn * fadeOut));
        ctx.shadowBlur = 12;
        ctx.shadowColor = b.color.replace("ALPHA", "0.6");
        ctx.fillText(b.text, b.x, b.y);
        ctx.restore();

        b.y -= 0.6;
        if (b.life >= b.maxLife) codeBursts.splice(i, 1);
      }

      // Subtle vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.25,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.7
      );
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "hsla(225, 50%, 3%, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
};

export default ParticlesBackground;
