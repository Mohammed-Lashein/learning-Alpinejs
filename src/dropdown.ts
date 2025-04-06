export default (initialState = false) => ({
  isOpen: initialState,
  toggle() {
    this.isOpen = !this.isOpen
  }
})