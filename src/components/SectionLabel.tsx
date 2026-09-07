type SectionLabelProps = { number: string; children: string }

export function SectionLabel({ number, children }: SectionLabelProps) {
  return <div className="section-kicker">{number} / {children}</div>
}
