# 🔢 OTPInputField

A customizable OTP input field component built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import OTPInputField from "./OTPInputField";

const Example = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleResend = () => {
    console.log("Resend OTP");
  };

  return (
    <div>
      <OTPInputField
        value={otp}
        handleOnChange={handleChange}
        reSend={handleResend}
        maxLength={6}
      />
    </div>
  );
};

export default Example;
```

---

## 📋 **Props & Customization**

The `OTPInputField` component provides various props for customization.

### **Common Props**

| Prop             | Type                      | Default     | Description                         | Required? |
| ---------------- | ------------------------- | ----------- | ----------------------------------- | --------- |
| `value`          | `string`                  | `""`        | Current value of OTP input field    | ✅ Yes    |
| `handleOnChange` | `(value: string) => void` | `undefined` | Callback when OTP value changes     | ✅ Yes    |
| `disabled`       | `boolean`                 | `false`     | Disables the input field            | ❌ No     |
| `reSend`         | `() => void`              | `undefined` | Callback function for resending OTP | ❌ No     |
| `maxLength`      | `number`                  | `6`         | Maximum length of OTP input         | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop on `InputOTPSlot`.

```tsx
<InputOTPSlot className="custom-otp-slot" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
