
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
npm install luminance-ui framer-motion
```

or

```bash
yarn add luminance-ui framer-motion
```

## Quick Start

```jsx
import React from 'react';
import { LuminanceProvider } from 'luminance-ui';
import { Button } from 'luminance-ui';

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

### Basic Components
- **Button**: Multiple variants, sizes, with optional icons and animations
- **Badge**: Status indicators with various styles and colors
- **Card**: Flexible container for grouping related content

### Form Components
- **Form**: Structured forms with animated transitions
- **Input**: Text input fields with customizable styling
- **Checkbox**: Interactive checkboxes for boolean selections
- **Select**: Dropdown menus for selecting options
- **Switch**: Toggle switches for binary options

### Navigation Components
- **Tabs**: Tabbed interface for content organization
- **Accordion**: Collapsible content sections

### Data Display
- **Avatar**: User profile pictures with fallback support
- **Progress**: Visualize progress of tasks and operations
- **Slider**: Range selection control

### Feedback Components
- **Toast**: Notifications that appear temporarily
- **Tooltip**: Informational text that appears on hover

### Layout Components
- **Carousel**: Slideshow for cycling through elements
- **Separator**: Visual dividers between content

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

## Component Examples

### Button Component

```jsx
import { Button } from 'luminance-ui';
import { Star } from 'lucide-react';

export function ButtonExample() {
  return (
    <div className="flex space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" leftIcon={<Star className="w-4 h-4" />}>
        With Icon
      </Button>
      <Button variant="primary" useMotion={true}>
        With Animation
      </Button>
    </div>
  );
}
```

### Form Component

```jsx
import { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, Input, Button } from 'luminance-ui';

export function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form handling logic
  };

  return (
    <Form variant="card" onSubmit={handleSubmit} useMotion={true}>
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormDescription>We'll never share your email.</FormDescription>
      </FormField>
      
      <FormField>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <FormMessage>Password must be at least 8 characters.</FormMessage>
      </FormField>
      
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}
```

### Card Component

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'luminance-ui';

export function CardExample() {
  return (
    <Card variant="primary" useMotion={true}>
      <CardHeader>
        <CardTitle>Feature Card</CardTitle>
        <CardDescription>This is a description of the feature</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card contains content about a specific feature. The card can be animated with Framer Motion.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Learn More</Button>
      </CardFooter>
    </Card>
  );
}
```

### Toast Usage

```jsx
import { Button, toast } from 'luminance-ui';

export function ToastExample() {
  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
      variant: "success",
    });
  };

  return (
    <Button onClick={showToast}>
      Show Toast
    </Button>
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
