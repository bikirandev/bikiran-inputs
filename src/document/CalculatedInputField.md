# 🧮 CalculationInputField

A customizable input field component with built-in calculation support, built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import CalculationInputField from "./CalculationInputField";

const Example = () => {
  const [formData, setFormData] = useState({ amount: "" });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <CalculationInputField
        label="Enter Amount"
        name="amount"
        formData={formData}
        onChange={handleChange}
        calculate
        currency="$"
      />
    </div>
  );
};

export default Example;
```

---

## 📋 **Props & Customization**

The `CalculationInputField` component provides various props for customization.

### **Common Props**

| Prop        | Type                                                | Default            | Description                        | Required? |
| ----------- | --------------------------------------------------- | ------------------ | ---------------------------------- | --------- |
| `label`     | `string`                                            | `"Type something"` | Label for the input field          | ✅ Yes    |
| `type`      | `string`                                            | `"text"`           | Input type                         | ❌ No     |
| `name`      | `string`                                            | `""`               | Name attribute for the input field | ✅ Yes    |
| `formData`  | `Record<string, string>`                            | `{}`               | Form data object                   | ✅ Yes    |
| `onChange`  | `(ev: React.ChangeEvent<HTMLInputElement>) => void` | `undefined`        | Change event handler               | ✅ Yes    |
| `onBlur`    | `() => void`                                        | `undefined`        | Blur event handler                 | ❌ No     |
| `className` | `string`                                            | `""`               | Additional CSS classes             | ❌ No     |
| `disabled`  | `boolean`                                           | `false`            | Disables the input field           | ❌ No     |
| `required`  | `boolean`                                           | `false`            | Marks the field as required        | ❌ No     |
| `readOnly`  | `boolean`                                           | `false`            | Sets the field as read-only        | ❌ No     |
| `calculate` | `boolean`                                           | `false`            | Enables calculation feature        | ❌ No     |
| `unit`      | `string`                                            | `""`               | Unit to display beside the input   | ❌ No     |
| `currency`  | `string`                                            | `""`               | Currency symbol to display         | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<CalculationInputField className="custom-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
