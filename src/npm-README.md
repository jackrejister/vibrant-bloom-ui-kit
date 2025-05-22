
# Luminance UI

<p align="center">
  <img src="https://your-website.com/luminance-ui-logo.png" alt="Luminance UI" width="200" />
</p>

<p align="center">
  A feature-rich, modern React component library with subtle animations, extensive color palettes, and fully customizable themes.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/luminance-ui">
    <img src="https://img.shields.io/npm/v/luminance-ui.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/luminance-ui">
    <img src="https://img.shields.io/npm/dm/luminance-ui.svg" alt="npm downloads" />
  </a>
  <a href="https://github.com/yourusername/luminance-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/luminance-ui.svg" alt="license" />
  </a>
</p>

## Features

- 🎨 **Rich Color System**: Extensive color palette with primary, secondary, accent, and neutral colors, each with multiple shades
- 🌓 **Dark Mode Support**: Built-in theme provider with light, dark, and system modes
- ✨ **Subtle Animations**: Powered by Framer Motion for delightful micro-interactions
- 🧩 **Comprehensive Components**: Form controls, navigation, data display, feedback, and more
- 🎛️ **Variants & Customization**: Multiple variants for each component with full Tailwind CSS customization
- 📱 **Responsive Design**: Mobile-first components that work on all screen sizes
- 🔍 **Accessibility**: ARIA compliant with keyboard navigation support
- 🚀 **Type Safety**: Full TypeScript support with component prop types

## Installation

```bash
npm install luminance-ui
```

or

```bash
yarn add luminance-ui
```

## Quick Start

```jsx
import React from 'react';
import { LuminanceProvider } from 'luminance-ui';
import { Button } from 'luminance-ui/button';

const App = () => {
  return (
    <LuminanceProvider defaultTheme="dark">
      <div className="p-4">
        <Button variant="primary">Click me</Button>
      </div>
    </LuminanceProvider>
  );
};

export default App;
```

## Available Components

Luminance UI includes a wide range of components:

- Buttons
- Cards
- Badges
- Form inputs
- Tabs
- Accordions
- Modals
- Toasts
- And much more!

## Theming

Customize the theme with the `LuminanceProvider`:

```jsx
import { LuminanceProvider } from 'luminance-ui';

// Custom color palette
const customColors = {
  primary: "blue",
  secondary: "teal",
  accent: "purple",
  muted: "neutral",
};

function App() {
  return (
    <LuminanceProvider 
      defaultTheme="dark" 
      colorPalette={customColors}
      storageKey="my-app-theme"
    >
      {/* Your application */}
    </LuminanceProvider>
  );
}
```

## Documentation

For comprehensive documentation and examples, visit [our documentation site](https://luminance-ui.com/docs).

## License

Luminance UI is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Luminance UI is inspired by Material Design, Tailwind CSS, shadcn/ui, and other great component libraries.

---

<p align="center">Made with ❤️ for React developers</p>
