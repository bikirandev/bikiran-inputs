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
      <PhoneInputField
        label="Phone Number"
        type="tel" // optional
        autoComplete="off" // optional
        name="phone"
        formData={formData}
        onChange={(ev) => setFormData({ ...formData, phone: ev.target.value })}
        onBlur={handleBlur} // optional
        className="input-phone"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Enter your phone number"
      />
      <AnimatedInputField
        label="Username"
        type="text" // optional
        autoComplete="off" // optional
        name="username"
        formData={formData}
        onChange={(ev) =>
          setFormData({ ...formData, username: ev.target.value })
        }
        onBlur={handleBlur} // optional
        className="animated-input"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Animated Input"
      />
      <CalculationInputField
        label="Promo Code"
        type="text" // optional
        autoComplete="off" // optional
        name="promoCode"
        formData={formData}
        onChange={(ev) => calculateDiscount(ev.target.value)}
        onBlur={handleBlur} // optional
        className="input-calculation"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Calculation Input"
      />
      <EmailInputField
        label="Email Address"
        type="email" // optional
        autoComplete="email" // optional
        name="email"
        formData={formData}
        onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}
        onBlur={handleBlur} // optional
        className="input-email"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Enter your email"
      />
      <AnimatedTextArea
        label="Your Feedback"
        name="feedback"
        formData={formData}
        onChange={(ev) =>
          setFormData({ ...formData, feedback: ev.target.value })
        }
        onBlur={handleBlur} // optional
        className="animated-textarea"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Animated Text Area"
      />
      <ValidationInputField
        label="Password"
        type="password" // optional
        autoComplete="new-password" // optional
        name="password"
        formData={formData}
        onChange={(ev) =>
          setFormData({ ...formData, password: ev.target.value })
        }
        onBlur={handleBlur} // optional
        className="input-password"
        disabled={false} // optional
        required={true} // optional
        readOnly={false} // optional
        placeholder="Enter a strong password"
      />
      <UserSearchField
        label="Search User"
        type="text" // optional
        autoComplete="off" // optional
        name="userSearch"
        formData={formData}
        onChange={(ev) => searchUser(ev.target.value)}
        onBlur={handleBlur} // optional
        className="input-user-search"
        disabled={false} // optional
        required={false} // optional
        readOnly={false} // optional
        placeholder="Search User"
      />
      <OTPInputField
        value={otp}
        handleOnChange={(val) => setOtp(val)}
        disabled={false} // optional
        reSend={handleResendOTP} // optional
        placeholder="Enter OTP"
      />
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

### **AnimatedInputField Props**

| Prop           | Type                     | Default     | Description                 |
| -------------- | ------------------------ | ----------- | --------------------------- |
| `label`        | `string`                 | `""`        | Label for the input field   |
| `type`         | `string`                 | `undefined` | Input type                  |
| `autoComplete` | `string`                 | `undefined` | Autocomplete attribute      |
| `name`         | `string`                 | `""`        | Input name                  |
| `formData`     | `Record<string, string>` | `{}`        | Form data storage           |
| `onChange`     | `(ev: any) => void`      | `undefined` | Change event handler        |
| `onBlur`       | `() => void`             | `undefined` | Blur event handler          |
| `className`    | `string`                 | `""`        | Additional CSS classes      |
| `disabled`     | `boolean`                | `false`     | Disables the input field    |
| `required`     | `boolean`                | `false`     | Marks the field as required |
| `readOnly`     | `boolean`                | `false`     | Sets the field as read-only |

### **AnimatedTextArea Props**

| Prop        | Type                     | Default     | Description               |
| ----------- | ------------------------ | ----------- | ------------------------- |
| `label`     | `string`                 | `""`        | Label for the input field |
| `name`      | `string`                 | `""`        | Input name                |
| `formData`  | `Record<string, string>` | `{}`        | Form data storage         |
| `onChange`  | `(ev: any) => void`      | `undefined` | Change event handler      |
| `className` | `string`                 | `""`        | Additional CSS classes    |
| `disabled`  | `boolean`                | `false`     | Disables the input field  |

### **CalculationInputField Props**

| Prop           | Type                     | Default     | Description                    |
| -------------- | ------------------------ | ----------- | ------------------------------ |
| `label`        | `string`                 | `""`        | Label for the input field      |
| `type`         | `string`                 | `"text"`    | Input type                     |
| `autoComplete` | `string`                 | `"off"`     | Autocomplete attribute         |
| `calculate`    | `boolean`                | `false`     | Enables calculation mode       |
| `name`         | `string`                 | `""`        | Input name                     |
| `formData`     | `Record<string, string>` | `{}`        | Form data storage              |
| `onChange`     | `(ev: any) => void`      | `undefined` | Change event handler           |
| `onBlur`       | `() => void`             | `undefined` | Blur event handler             |
| `className`    | `string`                 | `""`        | Additional CSS classes         |
| `disabled`     | `boolean`                | `false`     | Disables the input field       |
| `required`     | `boolean`                | `false`     | Marks the field as required    |
| `readOnly`     | `boolean`                | `false`     | Sets the field as read-only    |
| `unit`         | `string`                 | `""`        | Unit to display (e.g., kg, cm) |
| `currency`     | `string`                 | `""`        | Currency symbol (e.g., $, €)   |

### **OtpInputField Props**

| Prop             | Type                      | Default     | Description                           |
| ---------------- | ------------------------- | ----------- | ------------------------------------- |
| `disabled`       | `boolean`                 | `false`     | Disables the OTP input field          |
| `value`          | `string`                  | `""`        | The value of the OTP input            |
| `handleOnChange` | `(value: string) => void` | `undefined` | Handler for OTP input changes         |
| `reSend`         | `() => void`              | `undefined` | Callback for resending OTP (optional) |

### **EmailInputField Props**

| Prop           | Type                     | Default     | Description                                    |
| -------------- | ------------------------ | ----------- | ---------------------------------------------- |
| `label`        | `string`                 | `""`        | Label for the email input field                |
| `type`         | `string`                 | `"text"`    | Input type (should be `email` for email input) |
| `autoComplete` | `string`                 | `"off"`     | Autocomplete attribute                         |
| `name`         | `string`                 | `""`        | Input name                                     |
| `formData`     | `Record<string, string>` | `{}`        | Form data storage                              |
| `onChange`     | `(ev: any) => void`      | `undefined` | Change event handler                           |
| `onBlur`       | `() => void`             | `undefined` | Blur event handler                             |
| `className`    | `string`                 | `""`        | Additional CSS classes                         |
| `disabled`     | `boolean`                | `false`     | Disables the input field                       |
| `required`     | `boolean`                | `false`     | Marks the field as required                    |
| `readOnly`     | `boolean`                | `false`     | Sets the field as read-only                    |

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
