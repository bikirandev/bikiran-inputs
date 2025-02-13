# 📞 PhoneInputField

A customizable phone input field component built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import PhoneInputField from "./PhoneInputField";

const Example = () => {
  const [formData, setFormData] = useState<{ phone: string }>({ phone: "" });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <PhoneInputField
        label="Enter Phone Number"
        name="phone"
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

The `PhoneInputField` component provides various props for customization.

### **Common Props**

| Prop           | Type                                                | Default            | Description                        | Required? |
| -------------- | --------------------------------------------------- | ------------------ | ---------------------------------- | --------- |
| `label`        | `string`                                            | `"Type something"` | Label for the input field          | ✅ Yes    |
| `type`         | `string`                                            | `"text"`           | Input type                         | ❌ No     |
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
<PhoneInputField className="custom-phone-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
