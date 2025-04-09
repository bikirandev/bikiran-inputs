# bik-inputs

## Overview

bik-inputs is a reusable, customizable, and accessible input component library for React applications. It supports multiple input types with built-in animations and enhanced UX features, styled using Tailwind CSS.

⚠️ Important Note: This library uses Tailwind CSS for styling. To ensure proper theming, define primary and secondary color palettes (especially primary-700 and secondary-700) in your Tailwind configuration.

## Features

- Support for multiple input types (email, phone, date, OTP, etc.)

- Animated labels and textareas

- Easily customizable via Tailwind CSS

- Validation and calculation-ready input fields

- Built-in accessibility support

## Available Components

Each input type is available as an independent component:

1. [AnimatedInputField]()
2. [AnimatedSelectField]()
3. [AnimatedTextField]()
4. [CalculationInputField]()
5. [DateInputField]()
6. [EmailInputField]()
7. [InputField]()
8. [OTPInputField]()
9. [PhoneInputField]()
10. [Select]()
11. [UserSearchField]()
12. [ValidationInputField]()

## Props

Each component may have its own specific props, but the following are common across many of them:

Prop | Type | Description
label | string | label for the input field
name | string | label for the input field
formData | Record<string, any> | label for the input field
onChange | (e: any) => void | label for the input field

# Getting Started

## Installation

Install the package via _npm_:

```
npm install @bikiran/inputs

```

or via _yarn_:

```
yarn add @bikiran/inputs

```

## How It Works

This package is designed to seamlessly inherit your project’s Tailwind CSS theme. It automatically uses your existing:

- Primary/secondary colors
- Font families
- Spacing scale
- Other design tokens

No extra configuration is needed—just ensure your `tailwind.config.js` is properly set up.

## Example

Your `tailwind.config.js` should define colors using CSS variables like this:

```
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "var(--primary)",
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        500: "var(--primary-500)",
        700: "var(--primary-700)",
        900: "var(--primary-900)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        50: "var(--secondary-50)",
        100: "var(--secondary-100)",
        300: "var(--secondary-300)",
        500: "var(--secondary-500)",
        700: "var(--secondary-700)",
        900: "var(--secondary-900)",
      },
    },
  },
}

```

This setup allows all components to automatically inherit your color scheme across different shades.

## Basic Usage

1. Import Components

```
import {AnimatedInputField} from  "@bikiran/inputs"

```

## Documentation

For complete documentation and usage examples, please see: [Components Documentation](https://github.com/bikirandev/bikiran-inputs/wiki)

Here's just the "How to Contribute" section in Markdown:

## 🤝 How to Contribute

We welcome contributions! To contribute to the package :

1. Fork the repository and clone your fork locally.
2. Create a new branch for your feature or bugfix:

```
git checkout -b my-feature-name

```

3. Make your changes in supporting files.
4. If you’re adding a feature or behavior, consider updating the docs or usage example.
5. Commit your changes:

```
git commit -m "feat: add awesome feature"
```

6.Push to your fork:

```
git push origin my-feature-name
```

7.Open a Pull Request with a clear title and description.

## 🧪 Before submitting:

- Run and test the component in your app.
- Check for console errors or style breakages.
- Use consistent naming and follow the existing code style.

Thanks for your contribution! ❤️

## License

MIT License

## Author

Develop by [Bikiran](https://www.bikiran.com/)
