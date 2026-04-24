import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const FRAME_COUNT = 9;
const FRAME_PATH = '/ezgif-6a30850ca2629e8d-jpg/frame_';

const getFrameMotion = (rawIdx: number) => {
  const t = (rawIdx / (FRAME_COUNT - 1)) * Math.PI * 5;
  const offsetX = Math.sin(t) * 35;
  const scale = 1.0 - Math.abs(Math.sin(t)) * 0.03;
  return { offsetX, scale };
};

const ScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.0005
  });

  // Preload frames
  useEffect(() => {
    const loaded: HTMLImageElement[] = [];
    let count = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${i.toString().padStart(3, '0')}.jpeg`;
      img.onload = () => { count++; if (count === FRAME_COUNT) setIsLoaded(true); };
      img.onerror = () => { count++; if (count === FRAME_COUNT) setIsLoaded(true); };
      loaded.push(img);
    }
    setImages(loaded);
  }, []);

  // Frame index logic
  const frameIndex = useTransform(smoothProgress, [0, 0.95], [0, FRAME_COUNT - 1]);

  // Canvas draw with zig-zag — responsive scaling
  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || !images.length) return;

      const rawIdx = frameIndex.get();
      const idx = Math.min(Math.max(Math.floor(rawIdx), 0), FRAME_COUNT - 1);

      // Debug logging as requested
      console.log(`Scroll Progress: ${smoothProgress.get().toFixed(3)} | Frame Index: ${idx}`);

      const img = images[idx];
      if (!img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, w, h);

      // We maintain the aspect ratio and ensure the image covers the screen (full width/height)
      const { offsetX: rawOffsetX, scale: depthScale } = getFrameMotion(rawIdx);
      const offsetX = rawOffsetX * Math.min(w / 1200, 1);

      // Cover logic to ensure image fills screen
      const imageAspect = img.width / img.height;
      const canvasAspect = w / h;

      let drawW, drawH;
      if (canvasAspect > imageAspect) {
        drawW = w;
        drawH = w / imageAspect;
      } else {
        drawH = h;
        drawW = h * imageAspect;
      }

      const finalScale = depthScale;
      drawW *= finalScale;
      drawH *= finalScale;

      const x = (w - drawW) / 2 + offsetX;
      const y = (h - drawH) / 2;

      ctx.drawImage(img, x, y, drawW, drawH);
    };

    const unsub = frameIndex.on("change", draw);
    if (isLoaded) draw();
    const onResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      draw();
    };
    window.addEventListener('resize', onResize);
    return () => { unsub(); window.removeEventListener('resize', onResize); };
  }, [isLoaded, images, frameIndex, smoothProgress]);

  // Text animation (Removed opacity transition)
  const contentY = useTransform(smoothProgress, [0, 0.1], [0, -20]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">

        {/* Canvas animation */}
        <div className="absolute inset-0">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center pt-14">
          <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-16 lg:px-28">
            <motion.div
              style={{ y: contentY }}
              className="max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-3 sm:mb-4"
              >
                Sri Venkateswara Service Centre
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-text mb-4 sm:mb-5"
              >
                Fast & Trusted{' '}Appliance Repair{' '}
                <span className="text-primary">in Tirupati</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-text-secondary text-[15px] sm:text-lg leading-relaxed mb-2 sm:mb-3 max-w-md"
              >
                Same-Day Doorstep Service for AC, Refrigerator, Washing Machine & More
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-text-tertiary text-xs sm:text-sm mb-7 sm:mb-8"
              >
                Expert technicians · Genuine spare parts · Affordable pricing
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <a href="tel:9182763811" className="btn-primary gap-2 text-[15px] py-4 sm:py-3.5 justify-center">
                  <Phone size={16} /> Call Now
                </a>
                <a href="#booking" className="btn-secondary gap-2 text-[15px] py-4 sm:py-3.5 justify-center bg-white/80 backdrop-blur">
                  Book Service <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollHero;
