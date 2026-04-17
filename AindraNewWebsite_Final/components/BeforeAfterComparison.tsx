import React, { useCallback, useEffect, useRef, useState } from 'react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initialPosition?: number;
}

const clamp = (value: number) => Math.max(0, Math.min(100, value));

const BeforeAfterComparisonComponent: React.FC<BeforeAfterComparisonProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  initialPosition = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(() => clamp(initialPosition));
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next));
  }, []);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      updatePosition(event.clientX);
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [updatePosition],
  );

  useEffect(() => {
    if (!dragging) return;

    const onPointerMove = (event: PointerEvent) => updatePosition(event.clientX);
    const stopDragging = () => setDragging(false);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-sm border border-gray-100 shadow-2xl select-none touch-none ${className}`}
      onPointerDown={onPointerDown}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <img
        src={beforeImage}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <div className="absolute left-4 top-4 z-20 rounded bg-black/20 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm md:left-8 md:top-8 md:px-4 md:text-xl">
        {beforeLabel}
      </div>
      <div className="absolute right-4 top-4 z-20 rounded bg-black/20 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm md:right-8 md:top-8 md:px-4 md:text-xl">
        {afterLabel}
      </div>

      <div className="absolute inset-y-0 z-20 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-white/10 shadow-2xl backdrop-blur-md md:h-12 md:w-12">
          <div className="flex h-full w-full items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeforeAfterComparison = React.memo(BeforeAfterComparisonComponent);
