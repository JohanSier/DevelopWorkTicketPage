import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import WorkTicketPage from './features/work-ticket/WorkTicketPage'
import TemplatesPage from './features/templates/TemplatesPage'
import CallFlow from './features/call-flow/CallFlow'
import TimeRule from './features/time-rule/TimeRule'
import HomeIntro from './features/home/HomeIntro'
import CommandsButton from './imports/Button-1'
import RetroComputerPage from './features/commands/RetroComputerPage'

type Page = 'home' | 'work-ticket' | 'templates' | 'escalations' | 'commands'

// ── Nav icons ─────────────────────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function TicketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function TemplatesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h6M8 12h6M8 16h4" />
      <path d="M18 7h2v14H8v-1" opacity=".65" />
    </svg>
  )
}

function EscalationsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* head */}
      <circle cx="10" cy="7" r="3" />
      {/* shoulders */}
      <path d="M3 21v-1a7 7 0 0 1 10.16-6.25" />
      {/* upward arrow at top-right */}
      <path d="M18 14v-6m0 0-3 3m3-3 3 3" />
    </svg>
  )
}

// ── Bottom navigation ─────────────────────────────────────────────────────────
function BottomNav({ current, onNavigate }: { current: Page; onNavigate: (p: Page) => void }) {
  const [isTemplatesHovered, setIsTemplatesHovered] = useState(false)
  const closeCommandsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const keepCommandsOpen = () => {
    if (closeCommandsTimeout.current) clearTimeout(closeCommandsTimeout.current)
    setIsTemplatesHovered(true)
  }

  const scheduleCommandsClose = () => {
    if (closeCommandsTimeout.current) clearTimeout(closeCommandsTimeout.current)
    closeCommandsTimeout.current = setTimeout(() => setIsTemplatesHovered(false), 260)
  }

  const items: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'work-ticket', label: 'Work Ticket', icon: <TicketIcon /> },
    { id: 'templates', label: 'Templates', icon: <TemplatesIcon /> },
    { id: 'escalations', label: 'Escalations', icon: <EscalationsIcon /> },
  ]

  return (
    <nav
      onMouseLeave={scheduleCommandsClose}
      style={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#0a0a0a',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        padding: '6px 8px',
        gap: 2,
        zIndex: 1000,
        fontFamily: "'Lato', sans-serif",
        boxShadow: '0 0 0 1px rgba(255,255,255,0.62), 0 8px 32px rgba(0,0,0,0.7), 0 0 26px rgba(255,255,255,0.34)',
        whiteSpace: 'nowrap',
      }}
    >
      {items.map(({ id, label, icon }) => {
        const active = current === id
        const navigationButton = (
          <button
            onClick={() => onNavigate(id)}
            onMouseEnter={() => { if (id === 'templates') keepCommandsOpen(); else setIsTemplatesHovered(false) }}
            onFocus={() => { if (id === 'templates') keepCommandsOpen() }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              background: active ? 'rgba(255,255,255,0.12)' : 'none',
              border: 'none',
              borderRadius: 40,
              cursor: 'pointer',
              color: active ? '#ffffff' : 'rgba(255,255,255,0.35)',
              padding: '7px 13px',
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
          >
            {icon}
            <span
              style={{
                fontSize: 10,
                fontStyle: 'italic',
                letterSpacing: '0.06em',
                fontWeight: active ? 700 : 400,
                transition: 'font-weight 0.2s ease',
              }}
            >
              {label}
            </span>
          </button>
        )

        if (id !== 'templates') return <div key={id}>{navigationButton}</div>

        return (
          <div className="templates-nav-anchor" key={id}>
            {navigationButton}
            <div
              className={`commands-nav-slot ${isTemplatesHovered ? 'is-visible' : ''}`}
              onMouseEnter={keepCommandsOpen}
              aria-hidden={!isTemplatesHovered}
            >
              <button
                type="button"
                className={`commands-nav-button ${current === 'commands' ? 'is-active' : ''}`}
                tabIndex={isTemplatesHovered ? 0 : -1}
                aria-label="Commands and TS"
                onClick={() => onNavigate('commands')}
              >
                <CommandsButton />
              </button>
            </div>
          </div>
        )
      })}
    </nav>
  )
}

// ── Home page (preserved exactly) ────────────────────────────────────────────
function HomePage() {
  const [hovering, setHovering] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [isCallFlowHovered, setIsCallFlowHovered] = useState(false)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top })
  }

  const mask = `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, #000 72px, transparent 120px)`

  const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: '#060608',
  }
  const dots: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'radial-gradient(circle at center, rgba(255, 255, 255, 0.16) 1.2px, transparent 1.4px)',
    backgroundPosition: 'center',
    backgroundSize: '18px 18px',
  }
  const dotsHover: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'radial-gradient(circle at center, rgba(255, 255, 255, 0.56) 2.16px, transparent 2.36px)',
    backgroundPosition: 'center',
    backgroundSize: '18px 18px',
    opacity: hovering ? 1 : 0,
    maskImage: mask,
    WebkitMaskImage: mask,
  }

  return (
    <div
      style={container}
      onPointerEnter={() => setHovering(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovering(false)}
    >
      <div style={dots} />
      <div style={dotsHover} />
      <HomeIntro />
      <TimeRule hidden={isCallFlowHovered} />
      <CallFlow onHoverChange={setIsCallFlowHovered} />
    </div>
  )
}

// ── Escalations placeholder ───────────────────────────────────────────────────
function EscalationsPage() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontStyle: 'italic',
          fontSize: 18,
          letterSpacing: '0.9px',
          color: 'rgba(255,255,255,0.25)',
        }}
      >
        Escalations — coming soon
      </p>
    </div>
  )
}

// ── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home')

  const content =
    page === 'home' ? <HomePage /> :
    page === 'work-ticket' ? <WorkTicketPage /> :
    page === 'templates' ? <TemplatesPage /> :
    page === 'commands' ? <RetroComputerPage /> :
    <EscalationsPage />

  return (
    <>
      {content}
      <BottomNav current={page} onNavigate={setPage} />
    </>
  )
}
