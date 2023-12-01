import React from "react";

export default function CircularProgress(
  props: React.PropsWithoutRef<{
    percentage: number;
    r: number;
    cx: number;
    cy: number;
  }>,
) {
  // https://nikitahl.com/svg-circle-progress
  const { r, cx, cy, percentage } = props;
  const strokeDashArray = 2 * Math.PI * r;
  const strokeDashOffset = (strokeDashArray * (100.0 - percentage)) / 100.0;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle
        r={r}
        cx={cx}
        cy={cy}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth="12px"
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      ></circle>
      <circle
        r={r}
        cx={cx}
        cy={cy}
        fill="transparent"
        stroke={"hsl(var(--primary))"}
        strokeLinecap="round"
        strokeWidth="12px"
        strokeDasharray={strokeDashArray + "px"}
        strokeDashoffset={strokeDashOffset + "px"}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
          // animationName: "progress",
          // animationDuration: "1s",
        }}
      ></circle>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="hsl(var(--primary))"
        fontSize="40px"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
}
