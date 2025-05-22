
import { LuminanceProvider } from "@/components/LuminanceProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/luminance-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/luminance-card";
import { Badge } from "@/components/ui/luminance-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Moon, Sun, Heart, Star, ChevronRight, Plus, Settings, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/luminance-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 fixed top-4 right-4">
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
  );
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16"
    >
      <Badge variant="subtlePrimary" size="lg" className="mb-4">
        Luminance UI v1.0
      </Badge>
      <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-luminance-primary-500 to-luminance-purple-500 bg-clip-text text-transparent">
        Luminance UI
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        A feature-rich, modern React component library with subtle animations,
        extensive color palettes, and fully customizable themes.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" variant="primary" useMotion leftIcon={<Star className="h-4 w-4" />}>
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          useMotion
          rightIcon={<ChevronRight className="h-4 w-4" />}
          asChild
        >
          <Link to="/docs">View Documentation</Link>
        </Button>
      </div>
    </motion.div>
  );
};

const ButtonShowcase = () => {
  const showToast = () => {
    toast({
      title: "Toast Message",
      description: "This is a toast notification from Luminance UI",
    });
  };
  
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Button Component</CardTitle>
        <CardDescription>
          Highly customizable buttons with multiple variants, sizes, and animations
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link Button</Button>
        <Button onClick={showToast}>Show Toast</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button useMotion>With Motion</Button>
      </CardContent>
    </Card>
  );
};

const BadgeShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Badge Component</CardTitle>
        <CardDescription>
          Status indicators and labels with multiple variants
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="subtlePrimary">Subtle Primary</Badge>
        <Badge variant="subtleSecondary">Subtle Secondary</Badge>
        <Badge variant="subtleAccent">Subtle Accent</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge useMotion>Motion Badge</Badge>
        <Badge size="lg">Large Badge</Badge>
      </CardContent>
    </Card>
  );
};

const CardShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Card Component</CardTitle>
        <CardDescription>
          Versatile containers for related content
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card useMotion>
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>With hover animations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses Framer Motion for hover effects.</p>
          </CardContent>
        </Card>
        <Card className="border-luminance-teal-500" variant="secondary">
          <CardHeader>
            <CardTitle>Customized Card</CardTitle>
            <CardDescription>With custom border color</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can be customized with Tailwind classes.</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

const FormShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Form Components</CardTitle>
        <CardDescription>Input controls for user data</CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-6">
          <FormField className="mb-4">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="example@email.com" />
            </FormControl>
            <FormMessage />
          </FormField>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">Accept terms</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <label htmlFor="notifications" className="text-sm text-muted-foreground">Enable notifications</label>
              </div>
              
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
            
            <div>
              <Form variant="bordered" className="h-full" useMotion>
                <FormField>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" />
                  </FormControl>
                </FormField>
                <div className="mt-4 flex justify-end">
                  <Button variant="primary" size="sm">Submit</Button>
                </div>
              </Form>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

const InteractiveComponentsShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Interactive Components</CardTitle>
        <CardDescription>
          Components that enhance user interaction
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Accordion</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Luminance UI?</AccordionTrigger>
                <AccordionContent>
                  Luminance UI is a feature-rich React component library with animations, extensive color palettes, and customizable themes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How to customize themes?</AccordionTrigger>
                <AccordionContent>
                  Use the ThemeProvider component to set your preferred color palette and theme settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Tabs</h3>
            <Tabs defaultValue="tab1">
              <TabsList className="w-full">
                <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-4 bg-muted/30 rounded-md mt-2">
                Tab content 1
              </TabsContent>
              <TabsContent value="tab2" className="p-4 bg-muted/30 rounded-md mt-2">
                Tab content 2
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Popover</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Popover Content</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the popover content that appears when triggered.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">AlertDialog</h3>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MiscComponentsShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Additional Components</CardTitle>
        <CardDescription>
          Various other useful UI elements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Avatar</h3>
              <div className="flex space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-luminance-primary-500">LU</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Separator</h3>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Before</h4>
                <Separator />
                <h4 className="text-sm font-medium">After</h4>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">ScrollArea</h3>
              <ScrollArea className="h-[150px] rounded-md border p-4">
                <div className="space-y-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="p-2 rounded bg-muted/20">
                      Scroll content item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ThemeSwitcher />
      <div className="container mx-auto pt-20 px-4">
        <Hero />
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Component Showcase</h2>
          <p className="text-muted-foreground">Explore the rich variety of Luminance UI components</p>
        </div>
        
        <ButtonShowcase />
        <BadgeShowcase />
        <CardShowcase />
        <FormShowcase />
        <InteractiveComponentsShowcase />
        <MiscComponentsShowcase />
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Made with <Heart className="inline-block h-4 w-4 text-luminance-coral-500" /> by Luminance UI Team
          </p>
          <Button variant="link" asChild className="mt-2">
            <Link to="/docs">View Full Documentation →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
