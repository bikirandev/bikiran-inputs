# 📝 AnimatedTextArea

A customizable animated textarea component built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import AnimatedTextArea from "./AnimatedTextArea";

const Example = () => {
  const [formData, setFormData] = useState({ message: "" });

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <AnimatedTextArea
        label="Enter Message"
        name="message"
        formData={formData}
        onChange={handleChange}
      />
    </div>
  );
};

export default Example;
```

---

## 📋 **Props & Customization**

The `AnimatedTextArea` component provides various props for customization.

### **Common Props**

| Prop           | Type                                                   | Default            | Description                     | Required? |
| -------------- | ------------------------------------------------------ | ------------------ | ------------------------------- | --------- |
| `label`        | `string`                                               | `"Type something"` | Label for the input field       | ✅ Yes    |
| `name`         | `string`                                               | `""`               | Name attribute for the textarea | ✅ Yes    |
| `formData`     | `Record<string, any>`                                  | `{}`               | Form data object                | ✅ Yes    |
| `onChange`     | `(ev: React.ChangeEvent<HTMLTextAreaElement>) => void` | `undefined`        | Change event handler            | ✅ Yes    |
| `className`    | `string`                                               | `""`               | Additional CSS classes          | ❌ No     |
| `disabled`     | `boolean`                                              | `false`            | Disables the textarea           | ❌ No     |
| `autoComplete` | `string`                                               | `off`              | Sets the auto complete off      | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<AnimatedTextArea className="custom-textarea" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
