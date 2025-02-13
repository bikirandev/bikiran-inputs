# 🔤 InputField

A reusable input field component built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import { InputField } from "./InputField";

const Example = () => {
  const [formData, setFormData] = useState<{ username: string }>({
    username: "",
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <InputField
        label="Enter Username"
        name="username"
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

The `InputField` component provides various props for customization.

### **Common Props**

| Prop           | Type                                                | Default     | Description                        | Required? |
| -------------- | --------------------------------------------------- | ----------- | ---------------------------------- | --------- |
| `label`        | `string`                                            | `""`        | Label for the input field          | ✅ Yes    |
| `type`         | `string`                                            | `"text"`    | Input type                         | ❌ No     |
| `name`         | `string`                                            | `""`        | Name attribute for the input field | ✅ Yes    |
| `formData`     | `Record<string, string>`                            | `{}`        | Object storing input values        | ✅ Yes    |
| `onChange`     | `(ev: React.ChangeEvent<HTMLInputElement>) => void` | `undefined` | Change event handler               | ✅ Yes    |
| `onBlur`       | `() => void`                                        | `undefined` | Blur event handler                 | ❌ No     |
| `className`    | `string`                                            | `""`        | Additional CSS classes             | ❌ No     |
| `disabled`     | `boolean`                                           | `false`     | Disables the input field           | ❌ No     |
| `autoComplete` | `string`                                            | `"off"`     | Enables autocomplete feature       | ❌ No     |
| `placeholder`  | `string`                                            | `""`        | Placeholder text                   | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<InputField className="custom-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
