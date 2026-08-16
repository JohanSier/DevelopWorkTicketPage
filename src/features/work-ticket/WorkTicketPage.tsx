import { useState, useRef, useCallback, useEffect, type CSSProperties, type MouseEvent } from 'react'
import { workTicketDialogue } from './data/workTicketDialogue'
import DialogueBlock from './components/DialogueBlock'
import CustomCursor from './components/CustomCursor'
import SimulationPicker from './components/SimulationPicker'

type CursorState = 'reading' | 'ready' | 'restart'

export default function WorkTicketPage() {
  const [hasSelectedSimulation, setHasSelectedSimulation] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 })
  const [inZone, setInZone] = useState(false)
  const [cursorReady, setCursorReady] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const dialogueRefs = useRef<(HTMLDivElement | null)[]>([])
  const readyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isFinished = activeIndex >= workTicketDialogue.length - 1 && isTypingComplete

  const cursorState: CursorState = !cursorReady ? 'reading' : isFinished ? 'restart' : 'ready'

  // Auto-scroll to active dialogue
  useEffect(() => {
    const el = dialogueRefs.current[activeIndex]
    if (!el || !containerRef.current) return
    const container = containerRef.current
    const elCenter = el.offsetTop + el.offsetHeight / 2
    container.scrollTo({ top: elCenter - container.clientHeight / 2, behavior: 'smooth' })
  }, [activeIndex])

  // Delay cursor ready state slightly after typing finishes
  useEffect(() => {
    if (readyTimerRef.current) clearTimeout(readyTimerRef.current)
    if (isTypingComplete) {
      readyTimerRef.current = setTimeout(() => setCursorReady(true), 260)
    } else {
      setCursorReady(false)
    }
    return () => {
      if (readyTimerRef.current) clearTimeout(readyTimerRef.current)
    }
  }, [isTypingComplete])

  const checkZone = useCallback((clientX: number): boolean => {
    const w = window.innerWidth
    const colWidth = Math.min(680, w * 0.82)
    const left = (w - colWidth) / 2
    return clientX >= left && clientX <= left + colWidth
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setInZone(checkZone(e.clientX))
    },
    [checkZone]
  )

  const handleMouseLeave = useCallback(() => setInZone(false), [])

  const advance = useCallback(() => {
    if (isFinished) {
      setActiveIndex(0)
      setIsTypingComplete(false)
      setSkipAnimation(false)
      setCursorReady(false)
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setActiveIndex((prev) => Math.min(prev + 1, workTicketDialogue.length - 1))
      setIsTypingComplete(false)
      setSkipAnimation(false)
      setCursorReady(false)
    }
  }, [isFinished])

  const goBack = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
      setIsTypingComplete(true)
      setSkipAnimation(true)
      setCursorReady(true)
    }
  }, [activeIndex])

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!checkZone(e.clientX)) return
      if (!isTypingComplete) {
        // Complete current typewriter instantly on click
        setSkipAnimation(true)
        return
      }
      advance()
    },
    [checkZone, isTypingComplete, advance]
  )

  const handleTypingComplete = useCallback(() => setIsTypingComplete(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'ArrowLeft' || e.key === 'Backspace') && document.activeElement === document.body) {
        e.preventDefault()
        goBack()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goBack])

  if (!hasSelectedSimulation) {
    return <SimulationPicker onSelectTrackpad={() => setHasSelectedSimulation(true)} />
  }

  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#000000',
    cursor: inZone ? 'none' : 'default',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
  }

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <CustomCursor x={cursorPos.x} y={cursorPos.y} state={cursorState} visible={inZone} />

      {/* Conversation column */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 620,
          margin: '0 auto',
          padding: '80px 28px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }}
      >
        {/* Title */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '22.5px',
            letterSpacing: '0.9px',
            color: 'rgba(255,255,255,0.38)',
            textAlign: 'center',
            margin: 0,
            marginBottom: -16,
            userSelect: 'none',
          }}
        >
          Example of Working a Ticket
        </p>

        {/* Render dialogues 0..activeIndex */}
        {workTicketDialogue.slice(0, activeIndex + 1).map((entry, i) => (
          <DialogueBlock
            key={entry.id}
            ref={(el) => {
              dialogueRefs.current[i] = el
            }}
            entry={entry}
            state={i === activeIndex ? 'active' : 'completed'}
            skipAnimation={i === activeIndex ? skipAnimation : false}
            onTypingComplete={i === activeIndex ? handleTypingComplete : undefined}
          />
        ))}

        {/* End-of-conversation hint */}
        {isFinished && (
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.22)',
              textAlign: 'center',
              margin: 0,
              marginTop: -24,
              animation: 'fadeSlideIn 0.6s ease forwards',
              opacity: 0,
              userSelect: 'none',
            }}
          >
            Click to restart
          </p>
        )}
      </div>

      {/* Back button */}
      {activeIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goBack()
          }}
          style={{
            position: 'fixed',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.2)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'Lato', sans-serif",
            fontStyle: 'italic',
            fontWeight: 400,
            padding: '8px 16px',
            zIndex: 100,
            transition: 'color 0.2s ease',
            userSelect: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
        >
          ← back
        </button>
      )}
    </div>
  )
}
