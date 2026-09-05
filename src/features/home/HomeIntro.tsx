import "./HomeIntro.css"

const prompts = ["Who", "What", "Where", "Why", "When"]

export default function HomeIntro() {
  return (
    <section className="home-intro" aria-label="Five W framework">
      <h1 className="home-intro__title">5W’s</h1>
      <div className="home-intro__tags" aria-label="Framework prompts">
        {prompts.map((prompt, index) => (
          <span className={`home-intro__tag home-intro__tag--${index + 1}`} key={prompt}>
            {prompt}
          </span>
        ))}
      </div>
    </section>
  )
}
