import { AlpineComponent } from "alpinejs"

type timer = {
  timer: null|number|NodeJS.Timeout,
  counter: number,
  /* init and destory will get inferred by ts . I created this type
  specifically because setting timer initially to null then changing
  its value to a number threw an error */
  // init: Function
}
export function timer(): AlpineComponent<timer> {
  return {
    timer : null,
    counter: 0,
    init() {
       // Register an event handler that references the component instance
      //  I don't understand what does that - from alpine docs - mean !
      /* 
        Explanation arrived : 
        the component instance is what this is referring to
      */
      this.timer = setInterval(() => {
        console.log(`increased counter to ${++this.counter}`);
      }, 1000)
    },
    destroy() {
      /* 
      - Will be called automatically when a component is destroyed
      - An example where a component is destroyed is when using one inside an x-if
      */
      console.log('hello from destroy method');
      
      // The below code will throw ts error because clearInterval(id: number|undefined)
      // clearInterval(this.timer)
      
      // We should narrow the type so that we don't get compile error 
      if(this.timer != null) {
        clearInterval(this.timer)
      }
    }
  }
} 