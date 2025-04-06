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