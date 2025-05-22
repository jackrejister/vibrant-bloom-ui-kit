
import { useState } from "react";
import { LuminanceProvider } from "@/components/LuminanceProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/luminance-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/luminance-card";
import { Badge } from "@/components/ui/luminance-badge";
import { motion } from "framer-motion";

import { Moon, Sun, Heart, Star, ChevronRight, Plus } from "lucide-react";

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
        <Button size="lg" variant="outline" useMotion rightIcon={<ChevronRight className="h-4 w-4" />}>
          View Documentation
        </Button>
      </div>
    </motion.div>
  );
};

const ButtonShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Button Component</CardTitle>
        <CardDescription>Highly customizable buttons with multiple variants, sizes, and animations</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="teal">Teal</Button>
        <Button variant="purple">Purple</Button>
        <Button variant="amber">Amber</Button>
        <Button variant="coral">Coral</Button>
        <Button variant="mint">Mint</Button>
        <Button variant="softPrimary">Soft Primary</Button>
        <Button variant="softTeal">Soft Teal</Button>
        <Button variant="softPurple">Soft Purple</Button>
      </CardContent>
      <CardContent className="flex flex-wrap gap-4">
        <Button variant="gradient">Gradient</Button>
        <Button variant="gradientPurple">Purple Gradient</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">Button Sizes</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="default">Default</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="xl">Extra Large</Button>
        <Button variant="primary" size="icon"><Plus className="h-4 w-4" /></Button>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">Button Rounded Variants</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        <Button variant="primary" rounded="none">Square</Button>
        <Button variant="primary" rounded="sm">Small</Button>
        <Button variant="primary" rounded="default">Default</Button>
        <Button variant="primary" rounded="lg">Large</Button>
        <Button variant="primary" rounded="xl">XL</Button>
        <Button variant="primary" rounded="full">Full</Button>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">Button Animations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        <Button variant="primary" animation="subtle">Subtle</Button>
        <Button variant="primary" animation="bounce">Bounce</Button>
        <Button variant="primary" animation="glow">Glow</Button>
        <Button variant="primary" useMotion>Framer Motion</Button>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">Button States</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-4">
        <Button variant="primary" isLoading>Loading</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" leftIcon={<Heart className="h-4 w-4" />}>Left Icon</Button>
        <Button variant="primary" rightIcon={<ChevronRight className="h-4 w-4" />}>Right Icon</Button>
      </CardContent>
    </Card>
  );
};

const CardShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Card Component</CardTitle>
        <CardDescription>Flexible card components with various styles and animations</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Basic card with default styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card. You can put any content here.</p>
          </CardContent>
        </Card>
        
        <Card variant="primary">
          <CardHeader>
            <CardTitle>Primary Card</CardTitle>
            <CardDescription>Card with primary color styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has a primary color scheme.</p>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>Card with elevated shadow</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has an elevated shadow effect.</p>
          </CardContent>
        </Card>
        
        <Card variant="teal" animation="hover">
          <CardHeader>
            <CardTitle>Teal Card with Hover</CardTitle>
            <CardDescription>Teal card with hover animation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has a teal color scheme and hover animation.</p>
          </CardContent>
        </Card>
        
        <Card variant="purple" useMotion>
          <CardHeader>
            <CardTitle>Purple Card with Motion</CardTitle>
            <CardDescription>Card with framer-motion integration</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses framer-motion for enhanced animations.</p>
          </CardContent>
        </Card>
        
        <Card variant="glass" animation="glow">
          <CardHeader>
            <CardTitle>Glass Card</CardTitle>
            <CardDescription>Card with glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has a glass effect with glow animation.</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

const BadgeShowcase = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Badge Component</CardTitle>
        <CardDescription>Versatile badge components for statuses and labels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="teal">Teal</Badge>
          <Badge variant="purple">Purple</Badge>
          <Badge variant="amber">Amber</Badge>
          <Badge variant="coral">Coral</Badge>
          <Badge variant="mint">Mint</Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="subtlePrimary">Subtle Primary</Badge>
          <Badge variant="subtleTeal">Subtle Teal</Badge>
          <Badge variant="subtlePurple">Subtle Purple</Badge>
          <Badge variant="subtleAmber">Subtle Amber</Badge>
          <Badge variant="subtleCoral">Subtle Coral</Badge>
          <Badge variant="subtleMint">Subtle Mint</Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="default" variant="primary">Default</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
          <Badge size="xl" variant="primary">Extra Large</Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge dotted variant="primary">Status</Badge>
          <Badge dotted variant="subtleTeal">Active</Badge>
          <Badge dotted variant="subtleCoral">Pending</Badge>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge animation="pulse" variant="primary">Pulse</Badge>
          <Badge animation="bounce" variant="teal">Bounce</Badge>
          <Badge animation="glow" variant="purple">Glow</Badge>
          <Badge useMotion variant="amber">Motion</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <LuminanceProvider defaultTheme="dark">
      <div className="min-h-screen pb-20 bg-background">
        <ThemeSwitcher />
        <div className="container mx-auto pt-20 px-4">
          <Hero />
          <ButtonShowcase />
          <CardShowcase />
          <BadgeShowcase />
          
          <div className="text-center mt-20">
            <p className="text-muted-foreground">
              Built with React, Tailwind CSS and Framer Motion. 
              Fully customizable with Tailwind classes.
            </p>
          </div>
        </div>
      </div>
    </LuminanceProvider>
  );
};

export default Index;
