# Input Components

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

## 🚀 Usage

### **Basic Example**

```tsx
import React from "react";
import { PhoneInputField } from "bik-inputs";

const App = () => {
  return (
    <div>
      <PhoneInputField placeholder="Enter your phone number" />
    </div>
  );
};

export default App;
```

### **Available Input Fields**

```tsx
<PhoneInputField placeholder="Enter your phone number" />
<AnimatedInputField placeholder="Animated Input" />
<CalculationInputField placeholder="Calculation Input" />
<EmailInputField placeholder="Enter your email" />
<AnimatedTextArea placeholder="Animated Text Area" />
<ValidationInputField placeholder="Validation Input" />
<UserSearchField placeholder="Search User" />
<OTPInputField value="" handleOnChange={(val) => console.log(val)} disabled={false} />
```

---

## 🎨 **Input Field Variants**

This package provides multiple input fields for different use cases.

| Component               | Description                         |
| ----------------------- | ----------------------------------- |
| `PhoneInputField`       | Input field for phone numbers       |
| `AnimatedInputField`    | Input field with animations         |
| `CalculationInputField` | Input for calculations              |
| `EmailInputField`       | Input for email addresses           |
| `AnimatedTextArea`      | Animated text area                  |
| `ValidationInputField`  | Input with validation support       |
| `UserSearchField`       | Search field for users              |
| `OTPInputField`         | One-time password (OTP) input field |

---

## Props

### **Common Props**

| Prop          | Type                      | Default     | Description              |
| ------------- | ------------------------- | ----------- | ------------------------ |
| `value`       | `string`                  | `""`        | Input value              |
| `placeholder` | `string`                  | `""`        | Placeholder text         |
| `onChange`    | `(value: string) => void` | `undefined` | Change event handler     |
| `className`   | `string`                  | `""`        | Additional CSS classes   |
| `disabled`    | `boolean`                 | `false`     | Disables the input field |

### **PhoneInputField Props**

| Prop           | Type                              | Default     | Description                    |
| -------------- | --------------------------------- | ----------- | ------------------------------ |
| `label`        | `string`                          | `""`        | Label for the input field      |
| `type`         | `string`                          | `"text"`    | Input type                     |
| `autoComplete` | `string`                          | `""`        | Autocomplete attribute         |
| `name`         | `string`                          | `""`        | Input name                     |
| `formData`     | `Record<string, string>`          | `{}`        | Form data storage              |
| `onChange`     | `(ev: TInputChangeEvent) => void` | `undefined` | Change event handler           |
| `onBlur`       | `() => void`                      | `undefined` | Blur event handler             |
| `className`    | `string`                          | `""`        | Additional CSS classes         |
| `disabled`     | `boolean`                         | `false`     | Disables the input field       |
| `required`     | `boolean`                         | `false`     | Marks the field as required    |
| `readOnly`     | `boolean`                         | `false`     | Sets the field as read-only    |
| `hasCountry`   | `boolean`                         | `false`     | Enables country code selection |

---

## 🛠 **Custom Styles**

You can override styles using the `className` prop.

```tsx
<PhoneInputField className="custom-input" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
