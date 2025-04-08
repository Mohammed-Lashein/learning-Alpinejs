# Here I document my notes on learning from the docs along with problems I encountered with their solutions 

**Note 1**  
The below code will throw an error saying `Illegal Invocation`
```html
<div
    x-data="{open: false}"
    x-text='open'
  >
    <span x-text='open'></span>
  </div> 
```

**Reason :**  You can't add `x-text` to a nested element . 
By default `x-text` modifies the `innerText` property of an element thus the parent children will be modified . 

It seems that you can't use `x-text` on a parent and a child at the same time . 
___

**Note 2**
Any call to `Alpine.data()` should come before `Alpine.start()`  
**Note 3**
Some notes about `Alpine.data()` cb fn :   
- It can be called as a normal function within `x-data` (it won't cause re-rendering issues present in react)
- If the returned object by the cb has `init` method, Alpine will  call it automatically before rendering the component . 
Which component ?  
=> Our html component . 

**Note 4**
In the docs for `Alpine.data()`, they used `<template>` tag . This is the 1st time I use it .  
Some notes about it (till I study it) :   
1. Its contents aren't rendered by the browser but instead stored in a document fragment (another mystery to solve)
2. It shows its contents only when we tell it to using js 
That's why in this code : 
```html
 <section>
    <div x-data='{enabled: false}'>
      <button @click='enabled = !enabled' class='btn'>toggle timer</button>
      <template x-if='enabled'>
        <span
          x-data='timer'
          x-text='counter'
        ></span>
      </template>
    </div>
```
when `enabled` became true, the element appeared since the value of that property changed with the help of js . 
___
**Note 5**
`x-text` replaces the innerText of an element . In other words, if the element having this attribute has children, they will be replaced with the value returned by `x-text`
```html
<strong x-data='{greeting: "hello"}' x-text='greeting'>
    <span>
      hi
    </span>
  </strong>
```
The above piece of code will render '**hello**' and will ignore the span 