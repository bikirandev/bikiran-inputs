# Button Component

A reusable, customizable, and accessible button component for React applications. Supports multiple variants, loading states, and additional customizations.

## 📦 Installation

```sh
npm install bik-button
```

or

```sh
yarn add bik-button
```

---

## 🚀 Usage

### **Basic Example**

```tsx
import React from "react";
import { Button } from "bik-button";

const App = () => {
  return (
    <div>
      <Button title="Click Me" onClick={() => alert("Button Clicked")} />
    </div>
  );
};

export default App;
```

### **Using Variants**

```tsx
<Button variant="primary">Primary</Button>
<Button variant="primary-line">Primary Line</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="secondary-line">Secondary Line</Button>
<Button variant="blue">Blue</Button>
<Button variant="red">Red</Button>
<Button variant="green">Green</Button>
<Button variant="yellow-outline">Yellow Outline</Button>
```

### **Button with Icon**

```tsx
<Button variant="primary">
  <span>🚀 Launch</span>
</Button>
```

### **Loading State**

```tsx
<Button variant="primary" loading>
  Loading...
</Button>
```

### **Disabled State**

```tsx
<Button variant="primary" disabled>
  Disabled
</Button>
```

---

## 🎨 **Variants**

The button supports multiple styles. Use the `variant` prop to define a style.

| Variant                   | Description                    |
| ------------------------- | ------------------------------ |
| `primary`                 | Solid primary button (default) |
| `primary-line`            | Outlined primary button        |
| `secondary`               | Solid secondary button         |
| `secondary-line`          | Outlined secondary button      |
| `secondary-line-bordered` | Bordered secondary button      |
| `blue`                    | Solid blue button              |
| `blue-line`               | Outlined blue button           |
| `blue-line-bordered`      | Bordered blue button           |
| `red`                     | Solid red button               |
| `red-line`                | Outlined red button            |
| `red-line-bordered`       | Bordered red button            |
| `pink`                    | Solid pink button              |
| `pink-outline`            | Outlined pink button           |
| `pink-outline-bordered`   | Bordered pink button           |
| `green`                   | Solid green button             |
| `green-outline`           | Outlined green button          |
| `gray`                    | Gray button                    |
| `yellow-outline`          | Outlined yellow button         |

---

## Props

| Prop        | Type                                          | Default     | Description                       |
| ----------- | --------------------------------------------- | ----------- | --------------------------------- |
| `title`     | `string`                                      | `""`        | Text inside the button            |
| `children`  | `ReactNode`                                   | `null`      | Any React element inside button   |
| `type`      | `"button" \| "submit" \| "reset"`             | `"button"`  | Button type                       |
| `variant`   | `TVariant`                                    | `"primary"` | Button style (see variants table) |
| `onClick`   | `(ev: MouseEvent<HTMLButtonElement>) => void` | `undefined` | Click event handler               |
| `className` | `string`                                      | `""`        | Additional CSS classes            |
| `disabled`  | `boolean`                                     | `false`     | Disables the button               |
| `loading`   | `boolean`                                     | `false`     | Shows loading spinner             |

---

## 🛠 **Custom Styles**

You can override styles using the `className` prop.

```tsx
<Button className="custom-button">Custom Styled Button</Button>
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
