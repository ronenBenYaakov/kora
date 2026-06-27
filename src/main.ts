import './style.css'

type Capability = {
  eyebrow: string
  title: string
  body: string
}

type Signal = {
  value: string
  label: string
}

const capabilities: Capability[] = [
  {
    eyebrow: 'Embedded control',
    title: 'Firmware and motion code for real machine behavior',
    body: 'Kora writes controller-side code for tool changers, axis coordination, spindle supervision, IO maps, safety interlocks, and production-specific automation.'
  },
  {
    eyebrow: 'Linux kernel modules',
    title: 'Deterministic paths between hardware and user space',
    body: 'Custom LKMs, driver adaptations, interrupt handling, and low-latency interfaces give CNC builders a controlled bridge into encoders, drives, panels, and field hardware.'
  },
  {
    eyebrow: 'CNC integration',
    title: 'Retrofits, OEM platforms, and shop-floor reliability',
    body: 'From one-off machine upgrades to repeatable OEM controller stacks, Kora turns messy machine requirements into maintainable code that can be diagnosed and shipped.'
  },
  {
    eyebrow: 'Hardening',
    title: 'Code that survives coolant, operators, and long shifts',
    body: 'Watchdogs, recovery states, fault logging, calibration tools, and service diagnostics are built in so machines fail clearly and return to work quickly.'
  }
]

const signals: Signal[] = [
  { value: '24 us', label: 'sample interrupt budget engineered on recent retrofit work' },
  { value: '11', label: 'control buses and field IO families handled in production code' },
  { value: '6 wk', label: 'typical path from machine audit to first hardware-in-loop build' }
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Kora home">
      <span class="brand-mark" aria-hidden="true"></span>
      <span>kora</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#systems">Systems</a>
      <a href="#kernel">LKMs</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-action" href="#contact">Start a technical review</a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="kicker">Embedded systems code for CNC machines, fixtures, and industrial motion</p>
          <h1 id="hero-title">Machine code for the metal-cutting edge.</h1>
          <p class="hero-intro">
            Kora builds the low-level software that lets CNC machines move with confidence:
            controller firmware, Linux kernel modules, device drivers, real-time interfaces,
            safety state machines, and diagnostics for builders and serious retrofit teams.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="#contact">Discuss a machine</a>
            <a class="secondary-action" href="#systems">View capabilities</a>
          </div>
        </div>

        <div class="machine-panel" aria-label="CNC control telemetry illustration">
          <div class="scope-topline">
            <span>servo loop</span>
            <strong>locked</strong>
          </div>
          <div class="trace-window">
            <div class="trace trace-a"></div>
            <div class="trace trace-b"></div>
            <div class="axis-block axis-x">X</div>
            <div class="axis-block axis-y">Y</div>
            <div class="axis-block axis-z">Z</div>
          </div>
          <div class="panel-readouts">
            <div><span>IRQ</span><strong>18.7 us</strong></div>
            <div><span>Jitter</span><strong>3.1 us</strong></div>
            <div><span>Spindle</span><strong>12k</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section class="signal-band" aria-label="Engineering signals">
      ${signals.map((signal) => `
        <div class="signal">
          <strong>${signal.value}</strong>
          <span>${signal.label}</span>
        </div>
      `).join('')}
    </section>

    <section class="section systems" id="systems" aria-labelledby="systems-title">
      <div class="section-heading">
        <p class="kicker">What Kora ships</p>
        <h2 id="systems-title">Code close enough to the machine to matter.</h2>
      </div>
      <div class="capability-grid">
        ${capabilities.map((capability) => `
          <article class="capability-card">
            <span>${capability.eyebrow}</span>
            <h3>${capability.title}</h3>
            <p>${capability.body}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="kernel-section" id="kernel" aria-labelledby="kernel-title">
      <div class="kernel-copy">
        <p class="kicker">Linux kernel module work</p>
        <h2 id="kernel-title">When the controller cannot wait on generic software.</h2>
        <p>
          Kora designs kernel-space components for CNC systems that need predictable hardware access,
          isolated timing behavior, and clear fault boundaries. The result is a smaller, sharper
          control stack that operators and maintainers can actually reason about.
        </p>
      </div>
      <div class="kernel-list" aria-label="Kernel module deliverables">
        <div><span>01</span> PCIe, EtherCAT-adjacent, GPIO, encoder, and custom board interfaces</div>
        <div><span>02</span> Interrupt paths, ring buffers, DMA handoff, and user-space APIs</div>
        <div><span>03</span> Test harnesses, tracepoints, logs, and recovery paths for field support</div>
      </div>
    </section>

    <section class="workflow" aria-labelledby="workflow-title">
      <div class="section-heading narrow">
        <p class="kicker">Engagement model</p>
        <h2 id="workflow-title">A practical path from cabinet wiring to production cuts.</h2>
      </div>
      <div class="workflow-rail">
        <article>
          <span>Audit</span>
          <p>Machine constraints, controller architecture, IO, timing, safety behavior, and maintenance realities are mapped before code decisions are made.</p>
        </article>
        <article>
          <span>Prototype</span>
          <p>A small hardware-in-loop build proves latency, drive communication, fault handling, and operator-facing behavior on the bench.</p>
        </article>
        <article>
          <span>Commission</span>
          <p>The final build is installed with diagnostics, documentation, and a support path that fits the machine’s service environment.</p>
        </article>
      </div>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p class="kicker">Technical intake</p>
        <h2 id="contact-title">Bring the machine problem.</h2>
        <p>
          Send the controller type, machine class, timing constraints, and what currently fails.
          Kora responds with the first engineering questions, not a generic sales script.
        </p>
      </div>
      <form class="contact-form" name="kora-inquiry">
        <label>
          Work email
          <input type="email" name="email" placeholder="engineering@company.com" required>
        </label>
        <label>
          Machine or controller
          <input type="text" name="machine" placeholder="5-axis mill, gantry router, retrofit lathe">
        </label>
        <label>
          What needs to change?
          <textarea name="message" rows="4" placeholder="Driver work, LKM, motion behavior, safety logic, diagnostics..."></textarea>
        </label>
        <button type="submit">Send technical brief</button>
      </form>
    </section>
  </main>
`

const form = document.querySelector<HTMLFormElement>('.contact-form')

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  const button = form.querySelector<HTMLButtonElement>('button')

  if (button) {
    button.textContent = 'Brief noted'
    button.disabled = true
  }
})
