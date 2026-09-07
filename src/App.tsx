import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { activities, education, experience, languages, profile, skills } from './data'
import { Header } from './components/Header'
import { SectionLabel } from './components/SectionLabel'
import './App.css'

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (!form.get('name') || !form.get('email') || !form.get('message')) { setError('Please complete every field.'); return }
    console.log(Object.fromEntries(form)); setError(''); setSent(true); event.currentTarget.reset()
  }
  return <div className="site-shell">
    <Header open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
    <main>
      <section className="hero container" id="home"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Open to meaningful opportunities</p><h1>Backend logic.<br /><em>Human</em> outcomes.</h1><p className="hero-text">I&apos;m {profile.name}, a {profile.title.toLowerCase()} building dependable systems and thoughtful digital experiences.</p><div className="hero-actions"><a className="button primary" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a><a className="text-link" href={profile.cv} download>Download CV <Download size={15} /></a></div></div><div className="hero-art" aria-hidden="true"><div className="code-orbit orbit-one" /><div className="code-orbit orbit-two" /><div className="art-core">LB<span>.</span></div><span className="art-label label-one">API / SYSTEMS</span><span className="art-label label-two">BUILD → LEARN</span></div><div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div></section>
      <motion.section className="intro section container" id="about" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><SectionLabel number="01">About</SectionLabel><div className="intro-content"><h2>Curious by nature.<br /><span>Precise by practice.</span></h2><p>{profile.summary}</p><div className="contact-facts"><span><MapPin size={15} /> {profile.location}</span><span><Phone size={15} /> {profile.phone}</span></div></div></motion.section>

      <section className="section skills-section" id="skills"><div className="container"><SectionLabel number="02">Technology</SectionLabel><div className="section-heading"><h2>A practical toolkit<br /><span>for complex work.</span></h2><p>Backend-first, full-stack capable, always learning.</p></div><div className="skills-grid">{skills.map((skill, index) => <motion.div className="skill-badge" key={skill.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * .04 }}><span className="skill-icon">{skill.name.slice(0, 2).toUpperCase()}</span><span><strong>{skill.name}</strong><small>{skill.group}</small></span></motion.div>)}</div></div></section>

      <section className="section experience-section" id="experience"><div className="container"><SectionLabel number="03">Experience</SectionLabel><div className="section-heading"><h2>Work that keeps<br /><span>me moving forward.</span></h2></div><div className="timeline">{experience.map((item, index) => <motion.article className="timeline-item" key={`${item.company}-${item.role}`} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * .04 }}><div className="timeline-period">{item.period}</div><div className="timeline-dot" /><div className="timeline-detail"><p className="role-label">{item.location}</p><h3>{item.role}</h3><strong>{item.company}</strong>{item.responsibilities.length > 0 && <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>}</div></motion.article>)}</div></div></section>

      <section className="section split-section" id="education"><div className="container split-grid"><div><SectionLabel number="04">Education</SectionLabel><div className="section-heading"><h2>The foundation<br /><span>underneath it all.</span></h2></div></div><div className="info-card"><BriefcaseBusiness size={22} /><p className="card-period">{education[0].period}</p><h3>{education[0].degree}</h3><p>{education[0].school}</p><small>{education[0].location}</small></div></div></section>

      <section className="section activities-section" id="activities"><div className="container split-grid"><div><SectionLabel number="05">Beyond the desk</SectionLabel><div className="section-heading"><h2>Learning is<br /><span>part of the work.</span></h2></div></div><div className="activity-list">{activities.map((activity) => <div className="activity" key={activity}><span>↗</span>{activity}</div>)}<div className="language-row">{languages.map((language) => <div key={language.name}><strong>{language.name}</strong><small>{language.level}</small></div>)}</div></div></div></section>

      <section className="contact section" id="contact"><div className="container contact-grid"><div><SectionLabel number="06">Contact</SectionLabel><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>Have a project in mind, a problem to untangle, or an opportunity to discuss? Reach out.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a></div><form onSubmit={handleSubmit}><label>Name<input name="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" placeholder="you@company.com" /></label><label>Message<textarea name="message" placeholder="Tell me a little about your project..." rows={4} /></label><button className="button primary" type="submit">Send message <Send size={15} /></button>{sent && <p className="form-success"><Check size={15} /> Thanks, I&apos;ll be in touch.</p>}{error && <p className="form-error">{error}</p>}</form></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} {profile.name}</span><div className="socials"><a href="https://github.com" aria-label="GitHub"><Code2 size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div><span>{profile.location} · Software Engineer</span></footer>
  </div>
}

export default App
