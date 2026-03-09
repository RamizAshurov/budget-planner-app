import { useState, useCallback, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./styles.module.scss";
import clsx from "clsx";

const data = [
  // { x: 0,  label: "Jan", value: 3500  },
  { x: 1,  label: "Jan", value: 4800  },
  { x: 2,  label: "Jan", value: 4200  },
  { x: 3,  label: "Feb", value: 6500  },
  { x: 4,  label: "Feb", value: 10000 },
  { x: 5,  label: "Feb", value: 13500 },
  { x: 6,  label: "Mar", value: 20000 },
  { x: 7,  label: "Mar", value: 22500 },
  { x: 8,  label: "Apr", value: 28000 },
  { x: 9,  label: "Apr", value: 32000 },
  { x: 10, label: "Apr", value: 27000 },
  { x: 11, label: "Apr", value: 24000 },
];

const monthTicks = [
  { x: 1,  label: "Jan" },
  { x: 4,  label: "Feb" },
  { x: 7,  label: "Mar" },
  { x: 10, label: "Apr" },
];

const formatY = (v: number) => {
  if (v === 0)     return "0";
  if (v === 10000) return "10k";
  if (v === 20000) return "20k";
  if (v === 30000) return "30k";
  if (v === 40000) return "40k";
  if (v === 50000) return "50k";
  return "";
};

const MARGIN = { top: 8, right: 16, left: 4, bottom: 0 };
const X_AXIS_HEIGHT = 24;
const CARD_PADDING_TOP = 12;
const CARD_PADDING_BOTTOM = 8;
const CARD_HEIGHT = 229;
const plotTop = CARD_PADDING_TOP + MARGIN.top;
const plotBottom = CARD_HEIGHT - CARD_PADDING_BOTTOM - X_AXIS_HEIGHT;
const highlightHeight = plotBottom - plotTop;

interface DataPoint {
  x: number
  label: string
  value: number
}

interface DotPosType {
  cx: number
  cy: number
  value: number
}

interface ActiveDotPosType {
  cx?: number
  cy?: number
  payload?: DataPoint
}

interface Props {
  className?: string
}

export const Ui = ({ className }: Props) => {
  const [activeX, setActiveX] = useState<number | null>(null);
  const [dotPos, setDotPos] = useState<DotPosType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  const handleMouseMove = useCallback((state: any) => {
    if (state.isTooltipActive && state.activeTooltipIndex !== undefined) {
      setActiveX(state.activeTooltipIndex);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveX(null);
    setDotPos(null);
  }, []);

  const activeDot = useCallback(({ cx = 0, cy = 0, payload }: ActiveDotPosType) => {
    if (!payload) return null;
    setTimeout(() => setDotPos({ cx, cy, value: payload.value }), 0);
    return (
      <g>
        <circle cx={cx} cy={cy} r={9} fill="#1c2333" />
        <circle cx={cx} cy={cy} r={4} fill="#ffffff" />
      </g>
    );
  }, []);

  return (
    <div className={clsx(styles.chart, className)} ref={containerRef}>
      {dotPos && (
        <div
          className={styles.highlight}
          style={{
            left: dotPos.cx,
            top: plotTop,
            height: highlightHeight,
            background: "linear-gradient(to bottom, rgba(255,210,80,0.05) 0%, rgba(255,210,80,0.35) 100%)",
          }}
        />
      )}

      <div className={styles.chartLayer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={MARGIN}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#78b4d4" stopOpacity={0.20} />
                <stop offset="100%" stopColor="#78b4d4" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#dde3ee"
              vertical={false}
            />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 11]}
              ticks={monthTicks.map((m) => m.x)}
              height={X_AXIS_HEIGHT}
              // solid axis line
              axisLine={{ stroke: "#ccd3e0", strokeWidth: 1 }}
              tickLine={false}
              interval={0}
              tick={(props) => {
                const { x, y, payload } = props;
                const found = monthTicks.find((m) => m.x === payload.value);
                if (!found) return null;
                const isActive = activeX !== null && data[activeX]?.label === found.label;
                return (
                  <text
                    x={x} 
                    y={Number(y) + 14}
                    textAnchor="middle"
                    fill={isActive ? "#1c2333" : "#9aa3b2"}
                    fontSize={13}
                    fontWeight={isActive ? 700 : 400}
                    fontFamily="DM Sans, sans-serif"
                  >
                    {found.label}
                  </text>
                );
              }}
            />
            <YAxis
              domain={[0, 55000]}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              tickFormatter={formatY}
              tick={{ fill: "#9aa3b2", fontSize: 12, fontFamily: "DM Sans, sans-serif" }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip content={() => null} cursor={false} />
            <Area
              type="monotoneX"
              dataKey="value"
              stroke="#6aabcf"
              strokeWidth={2.5}
              fill="url(#areaGrad)"
              dot={false}
              activeDot={activeDot}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* Tooltip with arrow pointing down to the dot */}
      {dotPos && (
        <div
          className={styles.tooltipWrap}
          style={{
            left: dotPos.cx,
            top: dotPos.cy - 14,
          }}
        >
          <div className={styles.tooltipBox}>
            ${dotPos.value.toLocaleString()}
          </div>
          <div className={styles.tooltipArrow} />
        </div>
      )}

    </div>
  );
}
