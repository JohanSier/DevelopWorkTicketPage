interface CustomCursorProps {
  x: number
  y: number
  state: 'reading' | 'ready' | 'restart'
  visible: boolean
}

export default function CustomCursor({ x, y, state, visible }: CustomCursorProps) {
  if (!visible) return null

  const isReady = state === 'ready' || state === 'restart'

  return (
    <>
      {/* Pulsing ring — renders behind the dot */}
      {isReady && (
        <div
          style={{
            position: 'fixed',
            left: x,
            top: y,
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '1.5px solid rgba(255, 255, 255, 0.55)',
            pointerEvents: 'none',
            zIndex: 9998,
            animation: 'cursorPulse 1.3s ease-out infinite',
          }}
        />
      )}

      {/* Core dot */}
      <div
        style={{
          position: 'fixed',
          left: x,
          top: y,
          width: 8,
          height: 8,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          background: isReady ? '#ffffff' : 'rgba(255,255,255,0.28)',
          boxShadow: isReady ? '0 0 8px rgba(255,255,255,0.5)' : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease',
        }}
      />
    </>
  )
}
