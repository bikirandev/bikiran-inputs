# 🔍 UserSearchField

A customizable user search input field with integrated user selection and live search capability, built with React and TypeScript.

---

## 🚀 Usage

### **Basic Example**

```tsx
import React, { useState } from "react";
import UserSearchField from "./UserSearchField";

const Example = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ user: "" });
  const [debouncedValue, setDebouncedValue] = useState("");
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <UserSearchField
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      label="Search User"
      formData={formData}
      setFormData={setFormData}
      setDebouncedValue={setDebouncedValue}
      userData={userData}
      loading={loading}
    />
  );
};

export default Example;
```

---

## 📋 **Props & Customization**

The `UserSearchField` component provides various props for customization.

### **Common Props**

| Prop                | Type                                  | Default     | Description                              | Required? |
| ------------------- | ------------------------------------- | ----------- | ---------------------------------------- | --------- |
| `selectedUser`      | `any`                                 | `null`      | Currently selected user                  | ✅ Yes    |
| `setSelectedUser`   | `(user: any) => void`                 | `undefined` | Callback to set selected user            | ✅ Yes    |
| `label`             | `string`                              | `""`        | Label for the input field                | ✅ Yes    |
| `formData`          | `Record<string, any>`                 | `{}`        | Form data object                         | ✅ Yes    |
| `setFormData`       | `(data: Record<string, any>) => void` | `undefined` | Callback to set form data                | ✅ Yes    |
| `setDebouncedValue` | `(value: string) => void`             | `undefined` | Callback to handle debounced input value | ✅ Yes    |
| `userData`          | `any[]`                               | `[]`        | Array of user data for search results    | ✅ Yes    |
| `loading`           | `boolean`                             | `false`     | Indicator for loading state              | ❌ No     |

---

## 🛠 **Customization & Styling**

You can override styles using the `className` prop on relevant components.

```tsx
<UserSearchField className="custom-user-search" />
```

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com). Feel free to contribute!
