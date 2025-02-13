# 📝 AnimatedInputField

## 🚀 Usage

### **Basic Example**

### **Usage for AnimatedInputField**

```tsx
import React, { useState } from "react";
import { AnimatedInputField } from "bik-inputs";

const Example = () => {
  const [formData, setFormData] = useState({ username: "" });

  const handleChange = (ev: any) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <AnimatedInputField
        label="Enter Username"
        name="username"
        formData={formData}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Example;
```

---

---

## 📋 **Props & Customization**

Each component has its own set of props for customization. Check the documentation for details on each input field's specific properties.

### **Common Props**

| Prop        | Type                  | Default     | Description                 | Required? |
| ----------- | --------------------- | ----------- | --------------------------- | --------- |
| `label`     | `string`              | `""`        | Label for the input field   | ✅ Yes    |
| `type`      | `string`              | `"text"`    | Input type                  | ❌ No     |
| `name`      | `string`              | `""`        | Input name                  | ✅ Yes    |
| `formData`  | `Record<string, any>` | `{}`        | Form data storage           | ✅ Yes    |
| `onChange`  | `(ev: any) => void`   | `undefined` | Change event handler        | ✅ Yes    |
| `onBlur`    | `() => void`          | `undefined` | Blur event handler          | ❌ No     |
| `className` | `string`              | `""`        | Additional CSS classes      | ❌ No     |
| `disabled`  | `boolean`             | `false`     | Disables the input field    | ❌ No     |
| `required`  | `boolean`             | `false`     | Marks the field as required | ❌ No     |
| `readOnly`  | `boolean`             | `false`     | Sets the field as read-only | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<AnimatedInputField className="custom-input" />
```

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
