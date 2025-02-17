# bik-inputs

A reusable, customizable, and accessible input component library for React applications. Supports multiple input types with various customizations.

## 📦 Installation

```sh
npm install bik-inputs
```

or

```sh
yarn add bik-inputs
```

---

## Dependencies

**clsx**
**Tailwind CSS**
**input-otp**

## 📌 Note:

This library utilizes Tailwind CSS for styling. The colors displayed in the input fields can be customized by modifying the primary and secondary colors in your Tailwind configuration file. To ensure proper styling, make sure to define primary and secondary-700 in your Tailwind theme settings.

## 🚀 Usage

### **Basic Example**

```tsx
import React from "react";
import { AnimatedInputField } from "bik-inputs";

const App = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <AnimatedInputField
      label="Username"
      name="username"
      formData={formData}
      onChange={handleChange}
    />
  );
};

export default App;
```

---

## 🎨 **Available Input Fields**

```tsx
<PhoneInputField placeholder="Enter your phone number" />
<AnimatedInputField placeholder="Animated Input" />
<CalculationInputField placeholder="Calculation Input" />
<EmailInputField placeholder="Enter your email" />
<AnimatedTextArea placeholder="Animated Text Area" />
<ValidationInputField placeholder="Validation Input" />
<UserSearchField placeholder="Search User" />
<OTPInputField value="" handleOnChange={handleOnChange} />
```

---

## 📋 **Props & Customization**

Each component has its own set of props for customization. Check the documentation for details on each input field's specific properties.

### **Common Props**

| Prop        | Type                     | Default     | Description                 | Required |
| ----------- | ------------------------ | ----------- | --------------------------- | -------- |
| `label`     | `string`                 | `""`        | Label for the input field   | ✅ Yes   |
| `type`      | `string`                 | `"text"`    | Input type                  | ❌ No    |
| `name`      | `string`                 | `""`        | Input name                  | ✅ Yes   |
| `formData`  | `Record<string, string>` | `{}`        | Form data storage           | ✅ Yes   |
| `onChange`  | `(e: any) => void`       | `undefined` | Change event handler        | ✅ Yes   |
| `onBlur`    | `() => void`             | `undefined` | Blur event handler          | ❌ No    |
| `className` | `string`                 | `""`        | Additional CSS classes      | ❌ No    |
| `disabled`  | `boolean`                | `false`     | Disables the input field    | ❌ No    |
| `required`  | `boolean`                | `false`     | Marks the field as required | ❌ No    |
| `readOnly`  | `boolean`                | `false`     | Sets the field as read-only | ❌ No    |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop.

```tsx
<AnimatedInputField className="custom-input" />
```

---

## 🔗 **More Details**

For more details, visit the [GitHub repository](https://github.com/bikirandev/7501NPM-Bikiran-Inputs/tree/main/src/document).

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
