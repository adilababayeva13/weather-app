import classes from './index.module.scss'

export default function Section() {
  return (
    <section className={classes.section}>
      <div>
        <h1>Baku, AZ</h1>
        <p>Clear sky</p>
        <span>7°C</span>
        <p>Feels like 5°C</p>
        <ul>
          <li>3.1m/s SSE</li>·<li>Humidity:87%</li>·<li>Visibility:10.0km</li>
        </ul>
      </div>
      <figure>
        <img
          src="https://raw.githubusercontent.com/lipis/flag-icons/a108610f6372e5ba4c8a8f80cab39f88c676a742/flags/4x3/az.svg"
          alt="az"
        />
      </figure>
    </section>
  )
}
