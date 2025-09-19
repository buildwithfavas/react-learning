# React

## 1. What is React
- JS Library for creating UI  
- Works by Components to render (reusable)  
- React apps are made out of components.  
- A component is a piece of the UI (user interface) that has its own logic and appearance.  
- A component can be as small as a button, or as large as an entire page.  

## 2. What is JSX
- JSX (JavaScript Extension Syntax) - It lets us write HTML directly inside JS (but not pure HTML or pure JS).  
- JSX is internally transpiled to JS by **Babel tool**.  

## 3. Set up Local Environment
- Create-React-App v/s Vite  
- `npm create vite@latest`  
- `npm run dev` //to start the server  

## 4. Understanding our App
- Entry point is **index.html** having a `div` with `id="root"` and script to **main.jsx**  
- Inside **main.jsx** the **App.jsx** is assigned to `id => root` through DOM  

## 5. Re-write App
- Change statements inside function of **App.jsx** component with button, para, heading etc. and see the working  

## 6. Our 1st Component
- Create a component  
- Component is a reusable & independent piece of code.  
- Create components as separate modules, do export and import  

## 7. Import-Export
**Import:**
```js
import Title from "./Title.jsx";
```

**Default Export:**
```js
export default Title;
```

**Named Export:**
```js
export { Title };
import { Title } from "./Title.jsx";
```

- In summary:  
  - **Named exports** are useful when you want to export multiple values and import them with their specific names.  
  - **Default exports** are handy for exporting a single value and giving it a custom name when importing.  

## 8. Writing Markup in JSX
1. Return a single root element  
2. Close all the tags  
3. camelCase most of the things  

## 9. React Fragment
- Fragments let you group a list of children without adding extra nodes to the DOM.  
- Example:  
```jsx
<>
  child nodes here
</>
```

## 10. JSX with Curly Braces
```jsx
function Title() { 
  return <p>2 * 2 = {2*2}</p>;
}

function Title() { 
  let msg = "hello world!";
  return <p>message says {msg}</p>;
}
```

## 11. Structuring Components
- Create **Title** and **Description** component  
- Create **Product** component having child nodes Title and Description components  
- Create **ProductTab** component having child nodes Product components  
- Flow → ProductTab => Product => Title & Description  

## 12. Style Components
```js
import "./Product.css"; 
export default function Product() {
  return (
    <div className="Product">
      <h4>Product</h4>
      <p>Product Description</p>
    </div>
  );
}
```

**CSS**
```css
.Product {
  border: 1px solid white;
  margin-bottom: 5px;
  border-radius: 14px;
}
```

- Webpack provides the functionality to import and export CSS files.  

## 13. React Props
- Props are the information that you pass to a JSX tag.  

```jsx
<Product title="phone" price="30k" />
<Product title="laptop" price={40000} />
```

```jsx
export default function Product({ title, price }) {
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
}
```

## 14. Passing Arrays or Objects to Props
```jsx
features={["fast", "reliable"]}   // Array
features={{ a: "fast", b: "reliable" }} // Object
```

## 15. Rendering Arrays
- Use `map` function and transform to list  

## 16. Conditionals
```jsx
{price >= 10000 ? <p>Discount : 5%</p> : null}
{price >= 10000 && <p>Discount : 5%</p>}
```

## 17. Dynamic Component Styling
```js
let styles = { backgroundColor: isDiscount ? "pink" : "" };
```

## 18. Activity
- Pass prop `userName` and `textColor` and show a message.  

## 19. Install React Developer Tools  

## 20. Practical → Create Amazon Cards 
