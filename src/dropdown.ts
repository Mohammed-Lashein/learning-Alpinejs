export default (initialState = false) => ({
  isOpen: initialState,
  toggle() {
    this.isOpen = !this.isOpen
  },
  init() {
    console.log('hello from init method !');
    
  }
})