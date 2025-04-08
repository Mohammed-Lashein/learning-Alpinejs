export function dropdown (initialState = false) {
  return {
    isOpen: initialState,
    toggle() {
      this.isOpen = !this.isOpen
    },
    init() {
      console.log('hello from init method !');
      
    }
  }
} 