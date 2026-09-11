"use client"

import { RISK_CSS, RISK_INK, type RiskLevel } from "@/lib/abnormality"

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  const color = RISK_CSS[risk]
  return (
    <span
      className="abn-risk"
      style={{
        color: RISK_INK[risk],
        background: color,
        borderColor: color,
        boxShadow: `0 0 10px ${color}99`,
      }}
    >
      {risk}
    </span>
  )
}
