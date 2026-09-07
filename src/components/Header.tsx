import { Menu, X } from 'lucide-react'

type HeaderProps = { open: boolean; onToggle: () => void; onNavigate: () => void }

export function Header({ open, onToggle, onNavigate }: HeaderProps) {
  const links = ['About', 'Skills', 'Experience', 'Education', 'Activities', 'Contact']
  return <header className="nav-wrap"><nav className="nav container"><a className="wordmark" href="#home">LB<span>.</span></a><button className="menu-button" onClick={onToggle} aria-label="Toggle menu">{open ? <X size={20} /> : <Menu size={20} />}</button><div className={`nav-links ${open ? 'open' : ''}`}>{links.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={onNavigate}>{item}</a>)}<a className="nav-cta" href="#contact" onClick={onNavigate}>Let&apos;s talk <span>↗</span></a></div></nav></header>
}
