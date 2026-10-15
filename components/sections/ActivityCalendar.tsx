'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface DayData {
  date: string;
  count: number;
  level: number;
}

export const ActivityCalendar: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Generate a realistic 52-week activity calendar for 2026
  const { weeks, totalContributions } = useMemo(() => {
    const result: DayData[][] = [];
    let total = 0;

    const startDate = new Date(2026, 0, 1);
    const dayOfWeek = startDate.getDay(); // 0 is Sunday
    
    // Total 52 weeks
    for (let w = 0; w < 52; w++) {
      const week: DayData[] = [];
      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (w * 7 + d - dayOfWeek));

        const dateStr = currentDate.toISOString().split('T')[0];
        const isWeekend = d === 0 || d === 6;
        const seed = (w * 13 + d * 7 + 17) % 100;
        let count = 0;

        if (isWeekend) {
          if (seed > 65) count = Math.floor((seed % 4) + 1);
        } else {
          if (seed > 20) count = Math.floor((seed % 10) + 1);
        }

        let level = 0;
        if (count === 0) level = 0;
        else if (count <= 2) level = 1;
        else if (count <= 5) level = 2;
        else if (count <= 8) level = 3;
        else level = 4;

        total += count;
        week.push({ date: dateStr, count, level });
      }
      result.push(week);
    }

    return { weeks: result, totalContributions: total };
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return '#0e4429';
      case 2:
        return '#006d32';
      case 3:
        return '#26a641';
      case 4:
        return '#39d353';
      case 0:
      default:
        return 'hsl(0, 0%, 22%)';
    }
  };

  const handleMouseEnter = (day: DayData, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredDay(day);
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  return (
    <motion.section 
      id="activity"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-6 pb-8 px-4 xs:px-8 border-b border-dashed border-white/10"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-1">
        <h2 className="text-2xl xs:text-3xl text-neutral-100 italic font-instrument font-normal">
          Engineering & GitHub Activity
        </h2>
        <span className="text-xs text-neutral-400 font-mono">
          {totalContributions.toLocaleString()} commits & contributions
        </span>
      </div>

      <p className="mb-6 max-w-2xl text-sm leading-6 text-neutral-400">
        Consistency in shipping: code commits, open source contributions, and architecture designs.
      </p>

      {/* Calendar SVG Grid Container */}
      <div className="my-4 overflow-x-auto invisible-scrollbar pb-2 pt-1">
        <div className="min-w-[690px] p-4 rounded-xl bg-neutral-900/40 border border-white/5 relative">
          <svg width="685" height="110" viewBox="0 0 685 110" className="overflow-visible block mx-auto">
            {weeks.map((week, wIndex) => (
              <g key={wIndex} transform={`translate(${wIndex * 13}, 0)`}>
                {week.map((day, dIndex) => (
                  <rect
                    key={dIndex}
                    x="0"
                    y={dIndex * 13 + 12}
                    width="10"
                    height="10"
                    rx="2"
                    ry="2"
                    fill={getCellColor(day.level)}
                    className="transition-colors hover:stroke-white/40 cursor-pointer"
                    style={{ stroke: 'rgba(255, 255, 255, 0.04)', strokeWidth: '1px' }}
                    onMouseEnter={(e) => handleMouseEnter(day, e)}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                ))}
              </g>
            ))}
          </svg>

          {/* Legend and Footer */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 font-mono">
            <span>Engineering contributions in 2026</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: 'hsl(0, 0%, 22%)' }} />
              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: '#0e4429' }} />
              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: '#006d32' }} />
              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: '#26a641' }} />
              <span className="h-2.5 w-2.5 rounded-xs" style={{ backgroundColor: '#39d353' }} />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tooltip */}
      {hoveredDay && (
        <div
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full px-2.5 py-1 text-[11px] font-mono text-neutral-200 bg-neutral-900 border border-white/20 rounded shadow-xl"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
        >
          {hoveredDay.count > 0 
            ? `${hoveredDay.count} contributions on ${hoveredDay.date}`
            : `No contributions on ${hoveredDay.date}`}
        </div>
      )}
    </motion.section>
  );
};
