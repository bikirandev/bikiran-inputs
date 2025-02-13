# ✅ ValidationInputField

A customizable input field component with real-time validation and status indicators, built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import ValidationInputField from "./ValidationInputField";

const Example = () => {
  const [formData, setFormData] = useState<{ username: string }>({
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState<boolean | undefined>(undefined);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
    setLoading(true);
    setTimeout(() => {
      setValid(ev.target.value.length > 3);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ValidationInputField
        label="Username"
        name="username"
        formData={formData}
        onChange={handleChange}
        required
        loading={loading}
        valid={valid}
      />
    </div>
  );
};

export default Example;
```

---

## 📋 **Props & Customization**

The `ValidationInputField` component provides various props for customization.

### **Common Props**

| Prop          | Type                                                | Default            | Description                        | Required? |
| ------------- | --------------------------------------------------- | ------------------ | ---------------------------------- | --------- |
| `label`       | `string`                                            | `"Type something"` | Label for the input field          | ✅ Yes    |
| `type`        | `string`                                            | `"text"`           | Input type                         | ❌ No     |
| `name`        | `string`                                            | `""`               | Name attribute for the input field | ✅ Yes    |
| `formData`    | `Record<string, string>`                            | `{}`               | Object storing input values        | ✅ Yes    |
| `onChange`    | `(ev: React.ChangeEvent<HTMLInputElement>) => void` | `{}`               | Change event handler               | ✅ Yes    |
| `onBlur`      | `() => void`                                        | `undefined`        | Blur event handler                 | ❌ No     |
| `className`   | `string`                                            | `""`               | Additional CSS classes             | ❌ No     |
| `disabled`    | `boolean`                                           | `false`            | Disables the input field           | ❌ No     |
| `required`    | `boolean`                                           | `false`            | Marks the field as required        | ❌ No     |
| `readOnly`    | `boolean`                                           | `false`            | Sets the field as read-only        | ❌ No     |
| `loading`     | `boolean`                                           | `false`            | Displays loading indicator         | ❌ No     |
| `valid`       | `boolean or undefined`                              | `undefined`        | Indicates input validity           | ❌ No     |
| `loadingIcon` | `React.ReactNode`                                   | `undefined`        | Custom loading icon                | ❌ No     |
| `alertIcon`   | `React.ReactNode`                                   | `undefined`        | Custom alert icon                  | ❌ No     |
| `tickIcon`    | `React.ReactNode`                                   | `undefined`        | Custom tick icon                   | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop on relevant components.

```tsx
<ValidationInputField className="custom-validation-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
