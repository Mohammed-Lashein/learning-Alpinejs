import { AlpineComponent } from "alpinejs"

type dropdownActionsType = {
  open: boolean,
  currentAction: null | string,
  onDropdownElementClick: Function
  // init: Function
}

export function dropdownActions(): AlpineComponent<dropdownActionsType> {
  return {
    open: false,
    currentAction: null,
  onDropdownElementClick(e: Event) {
    const target = e.target as HTMLElement
    this.currentAction = target.innerText!;
    this.open = !this.open
  console.log(this.open);
  console.log(this.currentAction)
},
  }
}