import { FormEvent, useState } from "react"
import robotLogo from "../../imports/robot-1.svg"
import OrangeStickyNote from "../../imports/🟠OrangeStickyNote"
import "./RetroComputerPage.css"

const bootLines = [
  "Checking connections...",
  "EGA connector initialized",
  "Booting up...",
  "",
  "Hard Disk System Configuration:",
  "  A: Hard Disk, 4.8 Mbytes",
  "  B: Hard Disk, Floppy Size",
  "  C: Floppy Disk",
  "",
  "IBM Personal Computer",
  "Version 1.23 Copyright IBM Corp 1984",
]

export default function RetroComputerPage() {
  const [screenOn, setScreenOn] = useState(true)
  const [centralUnitOn, setCentralUnitOn] = useState(true)
  const [history, setHistory] = useState(bootLines)
  const [command, setCommand] = useState("")

  const toggleScreen = () => {
    if (screenOn) {
      setHistory((lines) => [...lines, "Disconnecting..."])
      setScreenOn(false)
      return
    }

    setScreenOn(true)
    setHistory(centralUnitOn ? [...bootLines] : ["Checking connections..."])
  }

  const toggleCentralUnit = () => {
    const nextState = !centralUnitOn
    setCentralUnitOn(nextState)
    if (!screenOn) return

    setHistory(nextState ? [...bootLines] : ["Checking connections..."])
  }

  const submitCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!command.trim()) return
    setHistory((lines) => [...lines, `A> ${command}`, "Command not supported yet."])
    setCommand("")
  }

  return (
    <main className="retro-page">
      <section className="retro-computer" aria-label="Interactive retro computer">
        <div className="center">
          <div className="screenBackground"><div className="behind" /></div>
          <div className="screenBox">
            <div className="frame">
              <div className={`screenBox2 ${screenOn ? "screenEffect" : ""}`}>
                <div className="screenBox3">
                  <div className="screen">
                    {screenOn && (
                      <div className="output" tabIndex={0} role="log" aria-label="Computer terminal output">
                        {centralUnitOn ? (
                          <>
                            {history.map((line, index) => <div key={`${line}-${index}`}>{line || "\u00a0"}</div>)}
                            <form onSubmit={submitCommand} className="terminal-form">
                              <span>A&gt;&nbsp;</span>
                              <input className="terminalInput" value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Terminal command" autoComplete="off" />
                            </form>
                          </>
                        ) : <div className="popup">NO SIGNAL</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bottomFrame">
                <div className="fan" />
                <img className="logo robot-logo" src={robotLogo} alt="BeginningIT robot logo" />
                <button className="powerButton monitor-power" type="button" onClick={toggleScreen} aria-label="Toggle monitor power"><span className="powerIcon" /></button>
                <span className={`powerLight ${screenOn ? "lightOn" : "lightOff"}`} />
              </div>
            </div>
          </div>
          <div className="screenFoot" />
          <div className="computer">
            <div className="computerFrame">
              <div className="computerFan1" /><div className="computerFan2" />
              <div className="screw1" /><div className="screw2" />
              <div className="computerFrame2"><div className="floppy"><div className="fingerGrip" /><div className="slot" /></div><div className="socket1" /><div className="socket2" /></div>
              <div className="screw3" /><div className="screw4" /><div className="screw5" />
              <div className="powerButton">
                <div className="buttonSlide"><button className={`computerButton ${centralUnitOn ? "computerButtonOn" : "computerButtonOff"}`} type="button" onClick={toggleCentralUnit} aria-label="Toggle computer power" /></div>
                <span className="offIndicator" /><span className="onIndicator" />
              </div>
              <span className={`powerLight ${centralUnitOn ? "lightOn" : "lightOff"}`} />
            </div>
          </div>
        </div>
        <aside className="retro-sticky-note" aria-label="When it might be useful">
          <div className="retro-sticky-note__art"><OrangeStickyNote /></div>
          <strong>When it might be useful:</strong>
        </aside>
      </section>
    </main>
  )
}
