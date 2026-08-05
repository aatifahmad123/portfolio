import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, Loader2 } from "lucide-react";

interface ColorEntry {
  name: string;
  hex: string;
}

// Convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

// Convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

// Convert HSV to RGB
const hsvToRgb = (
  h: number,
  s: number,
  v: number
): { r: number; g: number; b: number } => {
  let r = 0,
    g = 0,
    b = 0;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

// Convert RGB to XYZ color space
const rgbToXyz = (r: number, g: number, b: number): { x: number; y: number; z: number } => {
  // Normalize RGB values to 0-1
  let rN = r / 255;
  let gN = g / 255;
  let bN = b / 255;

  // Apply gamma correction
  rN = rN > 0.04045 ? Math.pow((rN + 0.055) / 1.055, 2.4) : rN / 12.92;
  gN = gN > 0.04045 ? Math.pow((gN + 0.055) / 1.055, 2.4) : gN / 12.92;
  bN = bN > 0.04045 ? Math.pow((bN + 0.055) / 1.055, 2.4) : bN / 12.92;

  // Scale to 100
  rN *= 100;
  gN *= 100;
  bN *= 100;

  // Convert to XYZ using sRGB matrix
  return {
    x: rN * 0.4124564 + gN * 0.3575761 + bN * 0.1804375,
    y: rN * 0.2126729 + gN * 0.7151522 + bN * 0.0721750,
    z: rN * 0.0193339 + gN * 0.1191920 + bN * 0.9503041,
  };
};

// Convert XYZ to CIE Lab color space
const xyzToLab = (x: number, y: number, z: number): { l: number; a: number; b: number } => {
  // D65 illuminant reference values
  const refX = 95.047;
  const refY = 100.0;
  const refZ = 108.883;

  let xN = x / refX;
  let yN = y / refY;
  let zN = z / refZ;

  const epsilon = 0.008856;
  const kappa = 903.3;

  xN = xN > epsilon ? Math.pow(xN, 1 / 3) : (kappa * xN + 16) / 116;
  yN = yN > epsilon ? Math.pow(yN, 1 / 3) : (kappa * yN + 16) / 116;
  zN = zN > epsilon ? Math.pow(zN, 1 / 3) : (kappa * zN + 16) / 116;

  return {
    l: 116 * yN - 16,
    a: 500 * (xN - yN),
    b: 200 * (yN - zN),
  };
};

// Convert hex to CIE Lab
const hexToLab = (hex: string): { l: number; a: number; b: number } => {
  const rgb = hexToRgb(hex);
  const xyz = rgbToXyz(rgb.r, rgb.g, rgb.b);
  return xyzToLab(xyz.x, xyz.y, xyz.z);
};

// Calculate Delta E (CIE76) color difference
const calculateDeltaE = (lab1: { l: number; a: number; b: number }, lab2: { l: number; a: number; b: number }): number => {
  return Math.sqrt(
    Math.pow(lab1.l - lab2.l, 2) +
    Math.pow(lab1.a - lab2.a, 2) +
    Math.pow(lab1.b - lab2.b, 2)
  );
};

// Calculate color similarity using Delta E (0-100%)
const calculateSimilarity = (hex1: string, hex2: string): number => {
  const lab1 = hexToLab(hex1);
  const lab2 = hexToLab(hex2);

  const deltaE = calculateDeltaE(lab1, lab2);

  // Delta E interpretation:
  // 0-1: Not perceptible by human eyes
  // 1-2: Perceptible through close observation
  // 2-10: Perceptible at a glance
  // 11-49: Colors are more similar than opposite
  // 100+: Colors are exact opposites

  // Max meaningful Delta E is around 100 (opposite colors)
  const maxDeltaE = 100;
  const similarity = Math.max(0, ((maxDeltaE - deltaE) / maxDeltaE) * 100);

  return Math.round(similarity);
};

// Confetti particle component
const ConfettiParticle = ({ delay, color }: { delay: number; color: string }) => {
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  const randomDuration = 3.5 + Math.random() * 1.5; // Slower: 3.5-5s
  
  return (
    <div
      className="absolute w-2 h-2 rounded-sm pointer-events-none"
      style={{
        left: `${randomX}%`,
        top: '-10px',
        backgroundColor: color,
        transform: `rotate(${randomRotation}deg)`,
        animation: `confetti-fall ${randomDuration}s ease-out ${delay}s forwards`,
      }}
    />
  );
};

const ColorGuesserGame = () => {
  const [colors, setColors] = useState<ColorEntry[]>([]);
  const [currentColor, setCurrentColor] = useState<ColorEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [displayScore, setDisplayScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const confettiColors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7', '#3b82f6', '#22c55e'];

  // Color picker state (HSV)
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0.5);
  const [brightness, setBrightness] = useState(0.5);

  const squareRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const [isDraggingSquare, setIsDraggingSquare] = useState(false);
  const [isDraggingHue, setIsDraggingHue] = useState(false);

  // Fetch colors
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch(
          "https://unpkg.com/color-name-list/dist/colornames.json"
        );
        const data: ColorEntry[] = await response.json();
        setColors(data);
        pickRandomColor(data);
      } catch (error) {
        console.error("Failed to fetch colors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchColors();
  }, []);

  const pickRandomColor = (colorList: ColorEntry[] = colors) => {
    if (colorList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * colorList.length);
    setCurrentColor(colorList[randomIndex]);
    setRevealed(false);
    setScore(null);
    setDisplayScore(0);
    setShowConfetti(false);
    // Reset picker to center
    setHue(Math.random());
    setSaturation(0.5);
    setBrightness(0.5);
  };

  const guessedRgb = hsvToRgb(hue, saturation, brightness);
  const guessedHex = rgbToHex(guessedRgb.r, guessedRgb.g, guessedRgb.b);

  // Animate score counting up
  useEffect(() => {
    if (score === null) return;
    
    const duration = 2000; // 2 second animation
    const startTime = performance.now();
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (score - startValue) * easeOutQuart);
      
      setDisplayScore(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Trigger confetti after animation completes for high scores
        if (score >= 90) {
          setShowConfetti(true);
        }
      }
    };
    
    requestAnimationFrame(animate);
  }, [score]);

  const handleReveal = () => {
    if (!currentColor) return;
    const similarity = calculateSimilarity(guessedHex, currentColor.hex);
    setDisplayScore(0);
    setScore(similarity);
    setRevealed(true);
  };

  const handleNextRound = () => {
    pickRandomColor();
  };

  // Square picker handlers
  const handleSquareInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!squareRef.current) return;
      const rect = squareRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
      setSaturation(x / rect.width);
      setBrightness(1 - y / rect.height);
    },
    []
  );

  const handleSquareMouseDown = (e: React.MouseEvent) => {
    setIsDraggingSquare(true);
    handleSquareInteraction(e.clientX, e.clientY);
  };

  const handleSquareTouchStart = (e: React.TouchEvent) => {
    setIsDraggingSquare(true);
    handleSquareInteraction(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Hue slider handlers
  const handleHueInteraction = useCallback(
    (clientX: number) => {
      if (!hueRef.current) return;
      const rect = hueRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setHue(x / rect.width);
    },
    []
  );

  const handleHueMouseDown = (e: React.MouseEvent) => {
    setIsDraggingHue(true);
    handleHueInteraction(e.clientX);
  };

  const handleHueTouchStart = (e: React.TouchEvent) => {
    setIsDraggingHue(true);
    handleHueInteraction(e.touches[0].clientX);
  };

  // Global mouse/touch move and up handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingSquare) {
        handleSquareInteraction(e.clientX, e.clientY);
      }
      if (isDraggingHue) {
        handleHueInteraction(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingSquare) {
        handleSquareInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
      if (isDraggingHue) {
        handleHueInteraction(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingSquare(false);
      setIsDraggingHue(false);
    };

    if (isDraggingSquare || isDraggingHue) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDraggingSquare, isDraggingHue, handleSquareInteraction, handleHueInteraction]);

  const hueColor = rgbToHex(...Object.values(hsvToRgb(hue, 1, 1)) as [number, number, number]);

  if (loading) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  const isHighScore = score !== null && score >= 90;

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <ConfettiParticle
              key={i}
              delay={i * 0.05}
              color={confettiColors[i % confettiColors.length]}
            />
          ))}
        </div>
      )}
      
      {/* Add confetti keyframes via style tag */}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(400px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <CardContent className="space-y-6 pt-6">
        {/* Color Name */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {currentColor?.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            What is your guess?
          </p>
        </div>

        {/* Color Picker */}
        <div className="flex flex-col items-center gap-4">
          {/* Saturation/Brightness Square */}
          <div
            ref={squareRef}
            className="relative w-48 h-48 rounded cursor-crosshair select-none touch-none"
            style={{
              background: `linear-gradient(to top, #000, transparent),
                           linear-gradient(to right, #fff, ${hueColor})`,
            }}
            onMouseDown={handleSquareMouseDown}
            onTouchStart={handleSquareTouchStart}
          >
            {/* Picker handle */}
            <div
              className="absolute w-4 h-4 border-2 border-background rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-md"
              style={{
                left: `${saturation * 100}%`,
                top: `${(1 - brightness) * 100}%`,
                backgroundColor: guessedHex,
              }}
            />
          </div>

          {/* Hue Slider */}
          <div
            ref={hueRef}
            className="relative w-48 h-4 rounded cursor-pointer select-none touch-none"
            style={{
              background:
                "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
            }}
            onMouseDown={handleHueMouseDown}
            onTouchStart={handleHueTouchStart}
          >
            {/* Hue handle */}
            <div
              className="absolute w-4 h-4 border-2 border-background rounded-full -translate-x-1/2 top-0 pointer-events-none shadow-md"
              style={{
                left: `${hue * 100}%`,
                backgroundColor: hueColor,
              }}
            />
          </div>
        </div>

        {/* Result Display */}
        {revealed && currentColor && (
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded border border-border mx-auto"
                style={{ backgroundColor: guessedHex }}
              />
              <p className="text-xs text-muted-foreground mt-1">Your guess</p>
              <p className="text-xs font-mono text-foreground mt-0.5">{guessedHex.toUpperCase()}</p>
            </div>
            <div className="text-center w-20">
              <p className="text-2xl font-bold text-primary tabular-nums"
              >
                {displayScore}%
              </p>
              <p className="text-xs text-muted-foreground">match</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded border border-border mx-auto"
                style={{ backgroundColor: currentColor.hex }}
              />
              <p className="text-xs text-muted-foreground mt-1">Actual</p>
              <p className="text-xs font-mono text-foreground mt-0.5">{currentColor.hex.toUpperCase()}</p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-center">
          {!revealed ? (
            <button
              onClick={handleReveal}
              className="inline-flex items-center gap-2 px-8 py-2 border border-border rounded-lg text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm font-medium"
            >
              Reveal
            </button>
          ) : (
            <button
              onClick={handleNextRound}
              className="inline-flex items-center gap-2 px-8 py-2 border border-border rounded-lg text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm font-medium"
            >
              <RotateCcw className="h-4 w-4" />
              Next Color
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorGuesserGame;
