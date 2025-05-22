
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/luminance-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/luminance-card";
import { Badge } from "@/components/ui/luminance-badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, Moon, Sun } from "lucide-react";

const Documentation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Luminance UI Documentation</h1>
        <div className="flex items-center gap-2">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="icon"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-5 w-5" />
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <Moon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <p className="text-xl text-muted-foreground mb-10">
        Comprehensive documentation for the Luminance UI component library.
      </p>

      <Tabs defaultValue="getting-started" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="theming">Theming</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>How to install Luminance UI in your project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <code className="text-sm">npm install luminance-ui</code>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => navigator.clipboard.writeText("npm install luminance-ui")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <h4 className="font-medium mt-6 mb-2">Basic Setup</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { LuminanceProvider } from 'luminance-ui';
import { Button } from 'luminance-ui/button';

const App = () => {
  return (
    <LuminanceProvider defaultTheme="dark">
      <Button>Click me</Button>
    </LuminanceProvider>
  );
};`}</code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => navigator.clipboard.writeText(`import { LuminanceProvider } from 'luminance-ui';
import { Button } from 'luminance-ui/button';

const App = () => {
  return (
    <LuminanceProvider defaultTheme="dark">
      <Button>Click me</Button>
    </LuminanceProvider>
  );
};`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Interactive button component with variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              
              <h4 className="font-medium mt-4">Usage</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { Button } from 'luminance-ui/button';

export default function App() {
  return (
    <Button variant="primary" size="lg" leftIcon={<Icon />}>
      Click Me
    </Button>
  );
}`}</code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => navigator.clipboard.writeText(`import { Button } from 'luminance-ui/button';

export default function App() {
  return (
    <Button variant="primary" size="lg" leftIcon={<Icon />}>
      Click Me
    </Button>
  );
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Container for related content and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Example Card</CardTitle>
                  <CardDescription>This is an example of a card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the content area of the card. You can place any content here.</p>
                </CardContent>
              </Card>
              
              <h4 className="font-medium mt-6 mb-2">Usage</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from 'luminance-ui/card';

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        Content goes here
      </CardContent>
    </Card>
  );
}`}</code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>Compact status indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="subtlePrimary">Subtle Primary</Badge>
                <Badge variant="subtleSecondary">Subtle Secondary</Badge>
                <Badge variant="subtleAccent">Subtle Accent</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              
              <h4 className="font-medium mt-6 mb-2">Usage</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { Badge } from 'luminance-ui/badge';

export default function App() {
  return (
    <Badge variant="primary" size="lg">
      New
    </Badge>
  );
}`}</code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Customization</CardTitle>
              <CardDescription>Customizing the Luminance UI theme</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Custom Theme Provider</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { LuminanceProvider } from 'luminance-ui';

// Custom color palette
const customColors = {
  primary: "blue",
  secondary: "purple",
  accent: "teal",
  muted: "gray",
};

function App() {
  return (
    <LuminanceProvider 
      defaultTheme="dark" 
      colorPalette={customColors}
    >
      {/* Your application */}
    </LuminanceProvider>
  );
}`}</code>
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <h4 className="font-medium mt-6 mb-2">Available Themes</h4>
              <p className="mb-2">Luminance UI comes with three theme options:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><code className="bg-secondary/30 px-1 rounded">light</code> - Light mode</li>
                <li><code className="bg-secondary/30 px-1 rounded">dark</code> - Dark mode (default)</li>
                <li><code className="bg-secondary/30 px-1 rounded">system</code> - Follows system preference</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-10" />

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">NPM Package Configuration</h2>
        <Card>
          <CardHeader>
            <CardTitle>Package.json Configuration</CardTitle>
            <CardDescription>Key settings for publishing to NPM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary/50 p-4 rounded-md relative">
              <pre className="text-sm">
                <code>{`{
  "name": "luminance-ui",
  "version": "1.0.0",
  "description": "A feature-rich, modern React component library with subtle animations, extensive color palettes, and fully customizable themes.",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "rollup -c",
    "prepare": "npm run build"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "keywords": [
    "react",
    "ui",
    "components",
    "design-system",
    "tailwindcss",
    "framer-motion"
  ],
  "author": "Your Name",
  "license": "MIT"
}`}</code>
              </pre>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-2"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <h4 className="font-medium mt-6 mb-2">Package Structure</h4>
            <div className="bg-secondary/50 p-4 rounded-md">
              <pre className="text-sm">
                <code>{`luminance-ui/
├── dist/             # Built files
├── src/              # Source code
│   ├── components/   # Component files
│   ├── hooks/        # Hooks
│   ├── lib/          # Utility functions
│   └── index.ts      # Main export file
├── package.json
├── rollup.config.js  # Build configuration
└── tsconfig.json     # TypeScript configuration`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10" />

      <footer className="text-center py-8 text-muted-foreground">
        <p>Luminance UI • MIT License • Created with 💜</p>
      </footer>
    </div>
  );
};

export default Documentation;
