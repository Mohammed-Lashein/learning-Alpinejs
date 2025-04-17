import { dropdown } from "./data/dropdown"
import "./style.css"
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// vite commented boilerplate end

import Alpine from "alpinejs"
import { timer } from "./data/timer"
import { dropdownActions } from "./data/dropdownActions"
import { Accordion } from "./data/satoshi/Accordion"
import { Main } from "./data/store/Main"

declare global {
	interface Window {
		Alpine: typeof Alpine
	}
}

window.Alpine = Alpine
Alpine.data("dropdown", dropdown)
Alpine.data("timer", timer)
Alpine.data("dropdownActions", dropdownActions)
Alpine.store("tabs", {
	current: "first",
	items: ["first", "2nd", "3rd"],
})
/* For a dropdown component I think we don't need a store as a start . Using x-data will
be more than enough */
// Alpine.store('selectedAction', {
//   current: null,
// })

// Accordion stuff start
Alpine.store("main", Main)
Alpine.data("Accordion", Accordion)
// Accordion stuff end
Alpine.start()

