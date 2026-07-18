import { useState, useEffect, useRef } from 'react'
import SheetSection from '../../components/layout/SheetSection.jsx'
import { personalInfo } from '../../data/personalInfo.js'
import './About.css'

const STAT_TAGS = ['React', 'Node', 'Spring Boot', 'PostgreSQL']

const STAGES = [
  {
    id: 'arch',
    file: 'architecture.config.js',
    accent: '#ffd166',
    status: 'Planificando arquitectura',
    code: [
      [{ c: 'cm', t: '// Diseño la estructura antes de picar código' }],
      [{ c: 'kw', t: 'const ' }, { c: 'pl', t: 'arquitectura = {' }],
      [{ c: 'pl', t: '  patron: ' }, { c: 'str', t: "'feature-first'" }, { c: 'pl', t: ',' }],
      [{ c: 'pl', t: '  capas: [' }, { c: 'str', t: "'ui'" }, { c: 'pl', t: ', ' }, { c: 'str', t: "'dominio'" }, { c: 'pl', t: ', ' }, { c: 'str', t: "'datos'" }, { c: 'pl', t: ']' }],
      [{ c: 'pl', t: '}' }],
      [{ c: 'kw', t: 'export default ' }, { c: 'pl', t: 'arquitectura' }],
    ],
    desc: 'Antes de escribir código, diseño la arquitectura del proyecto. Separo responsabilidades por capas, identifico los dominios del negocio y organizo la estructura para que escalar no sea una pesadilla. No me gusta improvisar: prefiero un plano sólido antes que construir sobre arena.',
    cmd: 'mkdir src/{components,hooks,services}',
    output: '✓ estructura lista',
  },
  {
    id: 'front',
    file: 'Frontend.jsx',
    accent: '#00ffff',
    status: 'React 19 · Vite · Tailwind · Zustand',
    code: [
      [{ c: 'kw', t: 'import ' }, { c: 'pl', t: '{ useState } ' }, { c: 'kw', t: 'from ' }, { c: 'str', t: "'react'" }],
      [{ c: 'cm', t: '// Interfaces modernas y reactivas' }],
      [{ c: 'kw', t: 'function ' }, { c: 'fn', t: 'App' }, { c: 'pl', t: '() {' }],
      [{ c: 'pl', t: '  return <Interfaz stack=' }, { c: 'str', t: '"React 19 + Vite + Tailwind"' }, { c: 'pl', t: ' />' }],
      [{ c: 'pl', t: '}' }],
    ],
    desc: 'Construyo interfaces con React 19, Vite y Tailwind. Me acoplo al ecosistema del proyecto: si usan Zustand, lo adopto; si prefieren Redux, me adapto. Lo importante es que la UI sea clara, reactiva y que el usuario sienta fluidez en cada interacción.',
    cmd: 'npm create vite@latest',
    output: '✓ 1.240 módulos listos',
  },
  {
    id: 'back',
    file: 'api.server.js',
    accent: '#a56bff',
    status: 'Node · Express · Spring Boot · C#',
    code: [
      [{ c: 'cm', t: '// APIs REST robustas y documentadas' }],
      [{ c: 'pl', t: 'app.' }, { c: 'fn', t: 'get' }, { c: 'pl', t: '(' }, { c: 'str', t: "'/api/v1/recursos'" }, { c: 'pl', t: ', controlador)' }],
      [{ c: 'pl', t: 'app.' }, { c: 'fn', t: 'use' }, { c: 'pl', t: '(cors(), authMiddleware)' }],
      [{ c: 'cm', t: '// Node.js · Express · Spring Boot · C#' }],
    ],
    desc: 'Diseño APIs REST con Node.js, Express, Spring Boot o C#. No importa el lenguaje: lo que importa es la estructura limpia, la documentación clara y que el endpoint responda cuando tiene que responder. Me acoplo al stack del equipo sin perder las buenas prácticas.',
    cmd: 'npm run dev:server',
    output: '✓ escuchando en :4000',
  },
  {
    id: 'deploy',
    file: 'docker-compose.yml',
    accent: '#4ade80',
    status: 'Docker · PostgreSQL · CI/CD',
    code: [
      [{ c: 'kw', t: 'services' }, { c: 'pl', t: ':' }],
      [{ c: 'pl', t: '  app:' }],
      [{ c: 'pl', t: '    build: .' }],
      [{ c: 'pl', t: '    ports: [' }, { c: 'str', t: '"3000:3000"' }, { c: 'pl', t: ']' }],
      [{ c: 'pl', t: '  db:' }],
      [{ c: 'pl', t: '    image: ' }, { c: 'str', t: 'postgres:16' }],
    ],
    desc: 'Contenerizo con Docker, configuro PostgreSQL o MongoDB y despliego. No soy DevOps de profesión, pero sé lo suficiente para dejar todo funcionando en producción. Si el proyecto necesita CI/CD, lo implemento. Me acoplo a la infraestructura que ya existe.',
    cmd: 'docker compose up -d',
    output: '✓ 2 contenedores activos',
  },
]

function About() {
  const [activeId, setActiveId] = useState(STAGES[0].id)
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const timeoutsRef = useRef([])

  const stage = STAGES.find((s) => s.id === activeId)

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    setTyped('')
    setShowOutput(false)

    const cmd = stage.cmd
    let i = 0

    const typeNext = () => {
      i += 1
      setTyped(cmd.slice(0, i))
      if (i < cmd.length) {
        timeoutsRef.current.push(setTimeout(typeNext, 28))
      } else {
        timeoutsRef.current.push(setTimeout(() => setShowOutput(true), 350))
      }
    }

    timeoutsRef.current.push(setTimeout(typeNext, 200))

    return () => timeoutsRef.current.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])

  return (
    <SheetSection id="sobre-mi" index={3}>
      <div className="about">
        <div className="about__constellation" aria-hidden="true">
          <div className="about__constellation-line" style={{ top: '15%', left: '10%', width: '180px', transform: 'rotate(25deg)' }} />
          <div className="about__constellation-line" style={{ top: '40%', right: '5%', width: '140px', transform: 'rotate(-15deg)' }} />
          <div className="about__constellation-line" style={{ bottom: '25%', left: '30%', width: '200px', transform: 'rotate(40deg)' }} />
        </div>

        {/* LEFT: Fake IDE */}
        <div className="about__ide">
          <h2 className="about__ide-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="8 6 2 12 8 18" />
              <polyline points="16 6 22 12 16 18" />
            </svg>
            Cómo trabajo
          </h2>

          <div className="ide" style={{ '--accent': stage.accent }}>
            <div className="ide__titlebar">
              <span className="ide__dot ide__dot--red" />
              <span className="ide__dot ide__dot--yellow" />
              <span className="ide__dot ide__dot--green" />
            </div>

            <div className="ide__tabs">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  className={`ide__tab ${s.id === activeId ? 'ide__tab--active' : ''}`}
                  style={{ '--tab-accent': s.accent }}
                  onClick={() => setActiveId(s.id)}
                >
                  <span className="ide__tab-dot" />
                  {s.file}
                </button>
              ))}
            </div>

            <div className="ide__body" key={stage.id}>
              <div className="ide__gutter">
                {stage.code.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="ide__code">
                {stage.code.map((line, i) => (
                  <div key={i} className="ide__line" style={{ animationDelay: `${i * 55}ms` }}>
                    {line.map((tok, j) => (
                      <span key={j} className={`tok tok--${tok.c}`}>{tok.t}</span>
                    ))}
                  </div>
                ))}
              </pre>
            </div>

            <div className="ide__desc" style={{ '--desc-accent': stage.accent }}>
              {stage.desc}
            </div>

            <div className="ide__terminal">
              <span className="ide__prompt">❯</span>
              <span className="ide__cmd">{typed}</span>
              <span className="ide__cursor" />
              {showOutput && <div className="ide__output">{stage.output}</div>}
            </div>

            <div className="ide__statusbar">
              <span>● main</span>
              <span>{stage.status}</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Stats Card */}
        <div className="about__stats">
          <div className="about__card">
            <div className="about__hero-stat">
              <div className="about__hero-stat-value">
                {personalInfo.facts.find(f => f.label === 'Experiencia')?.value.split(' ').slice(0, 2).join(' ') || '1+ Año'}
              </div>
              <span className="about__hero-stat-label">Experiencia</span>
            </div>

            <dl className="about__card-facts">
              {personalInfo.facts
                .filter(f => f.label !== 'Experiencia')
                .map((fact) => (
                  <div key={fact.label} className="about__card-fact">
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.label === 'Stack' ? (
                        <div className="about__tags">
                          {STAT_TAGS.map((tag) => (
                            <span key={tag} className="about__tag">{tag}</span>
                          ))}
                        </div>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export default About
