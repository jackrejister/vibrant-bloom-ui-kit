
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/luminance-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/luminance-card";
import { Badge } from "@/components/ui/luminance-badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormDescription, FormField, FormLabel, FormMessage } from "@/components/ui/luminance-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { Code, Copy, Moon, Sun, AlertTriangle, Info, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const { theme, setTheme } = useTheme();
  
  const showToast = () => {
    toast({
      title: "Toast Notification",
      description: "This is an example of a toast notification",
    });
  };

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
          <TabsTrigger value="showcase">Component Showcase</TabsTrigger>
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
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Components</h2>
            <Button variant="outline" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>

          {/* Button Component */}
          <Card id="button">
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
                <Button variant="destructive">Destructive</Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Copy className="h-4 w-4" /></Button>
                <Button useMotion>With Motion</Button>
                <Button leftIcon={<Check />}>With Icon</Button>
                <Button onClick={showToast}>Show Toast</Button>
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

          {/* Card Component */}
          <Card id="card">
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Container for related content and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Default Card</CardTitle>
                    <CardDescription>This is an example of a card component</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the content area of the card. You can place any content here.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
                
                <Card useMotion className="w-full" variant="primary">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>With motion effects and primary variant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card has hover animations enabled via useMotion prop.</p>
                  </CardContent>
                </Card>
              </div>
              
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
    <Card variant="primary" useMotion>
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

          {/* Badge Component */}
          <Card id="badge">
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>Compact status indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
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
              
              <div className="flex flex-wrap gap-2">
                <Badge size="sm">Small</Badge>
                <Badge>Default</Badge>
                <Badge size="lg">Large</Badge>
                <Badge useMotion>With Motion</Badge>
              </div>
              
              <h4 className="font-medium mt-6 mb-2">Usage</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { Badge } from 'luminance-ui/badge';

export default function App() {
  return (
    <Badge variant="primary" size="lg" useMotion>
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

          {/* Form Components */}
          <Card id="form">
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>Form elements and inputs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Form variant="bordered" className="p-4">
                    <FormField className="mb-4">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" />
                      </FormControl>
                      <FormDescription>Please enter your full name.</FormDescription>
                    </FormField>
                    
                    <FormField className="mb-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@email.com" />
                      </FormControl>
                      <FormMessage>Please enter a valid email address.</FormMessage>
                    </FormField>
                    
                    <Button variant="primary">Submit</Button>
                  </Form>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Checkbox</h4>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms1" />
                      <label htmlFor="terms1" className="text-sm">Accept terms and conditions</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing1" checked />
                      <label htmlFor="marketing1" className="text-sm">Receive marketing emails</label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Radio Group</h4>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <label htmlFor="option-one">Option One</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <label htmlFor="option-two">Option Two</label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Switch</h4>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <label htmlFor="airplane-mode" className="text-sm">Airplane Mode</label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Select</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mt-6 mb-2">Usage</h4>
              <div className="bg-secondary/50 p-4 rounded-md relative">
                <pre className="text-sm">
                  <code>{`import { Form, FormField, FormLabel, FormControl } from 'luminance-ui/form';
import { Input } from 'luminance-ui/input';
import { Button } from 'luminance-ui/button';

export default function MyForm() {
  return (
    <Form variant="bordered" useMotion>
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" />
        </FormControl>
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}`}</code>
                </pre>
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
              
              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Tip</AlertTitle>
                <AlertDescription>
                  You can use the useTheme hook to access and modify the current theme in any component.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="showcase" className="space-y-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Component Showcase</h2>
            <Button variant="outline" onClick={showToast}>Show Toast</Button>
          </div>
          
          {/* Interactive Components */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog & AlertDialog</CardTitle>
              <CardDescription>Modal dialog components</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-6">
              <div>
                <h4 className="font-medium mb-2">Dialog</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog description. You can provide additional context here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Dialog content goes here. This can contain any React components.</p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Continue</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">AlertDialog</h4>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Item</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
          
          {/* Accordion & HoverCard */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion & HoverCard</CardTitle>
              <CardDescription>Expandable content and hover information</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Accordion</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styling that matches your theme.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">HoverCard</h4>
                <div className="flex items-center justify-center">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">Hover over me</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>LU</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@luminance-ui</h4>
                          <p className="text-sm">
                            The all-in-one React UI component library with animations and theming support.
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              Joined December 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Tables and Data Display */}
          <Card>
            <CardHeader>
              <CardTitle>Table & Pagination</CardTitle>
              <CardDescription>Data display components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Table>
                <TableCaption>A list of recent transactions.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Product A</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell><Badge variant="primary">Complete</Badge></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm"><Info className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Product B</TableCell>
                    <TableCell>$125.00</TableCell>
                    <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm"><Info className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Product C</TableCell>
                    <TableCell>$350.00</TableCell>
                    <TableCell><Badge variant="secondary">Processing</Badge></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm"><Info className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div>
                <h4 className="font-medium mb-4">Pagination</h4>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
          
          {/* Alerts and Feedback */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts & Popover</CardTitle>
              <CardDescription>Notification and information components</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium mb-2">Alerts</h4>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with important details.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong! Please try again later.
                  </AlertDescription>
                </Alert>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium mb-2">Popover</h4>
                <div className="flex items-center justify-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">More Information</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Popover Title</h4>
                        <p className="text-sm text-muted-foreground">
                          This is a popover component that can be used to show additional information or actions.
                        </p>
                        <Button size="sm" variant="subtle">Dismiss</Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* ScrollArea */}
          <Card>
            <CardHeader>
              <CardTitle>ScrollArea</CardTitle>
              <CardDescription>Custom scrollable area</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="p-2 rounded bg-muted/20">
                      Scroll item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
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
