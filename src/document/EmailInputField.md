# 📧 EmailInputField

A customizable animated email input field component built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import EmailInputField from "./EmailInputField";

const Example = () => {
  const [formData, setFormData] = useState<{ email: string }>({ email: "" });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <EmailInputField
        label="Enter Email"
        name="email"
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

## 📋 **Props & Customization**

The `EmailInputField` component provides various props for customization.

### **Common Props**

| Prop           | Type                                                | Default            | Description                        | Required? |
| -------------- | --------------------------------------------------- | ------------------ | ---------------------------------- | --------- |
| `label`        | `string`                                            | `"Type something"` | Label for the input field          | ✅ Yes    |
| `type`         | `string`                                            | `"text"`           | Input type (should be email)       | ❌ No     |
| `name`         | `string`                                            | `""`               | Name attribute for the input field | ✅ Yes    |
| `formData`     | `Record<string, string>`                            | `{}`               | Object storing input values        | ✅ Yes    |
| `onChange`     | `(ev: React.ChangeEvent<HTMLInputElement>) => void` | `undefined`        | Change event handler               | ✅ Yes    |
| `onBlur`       | `() => void`                                        | `undefined`        | Blur event handler                 | ❌ No     |
| `className`    | `string`                                            | `""`               | Additional CSS classes             | ❌ No     |
| `disabled`     | `boolean`                                           | `false`            | Disables the input field           | ❌ No     |
| `required`     | `boolean`                                           | `false`            | Marks the field as required        | ❌ No     |
| `readOnly`     | `boolean`                                           | `false`            | Sets the field as read-only        | ❌ No     |
| `autoComplete` | `string`                                            | `"off"`            | Enables autocomplete feature       | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<EmailInputField className="custom-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
