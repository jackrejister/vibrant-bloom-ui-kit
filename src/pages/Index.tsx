
import { LuminanceProvider } from "@/components/LuminanceProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/luminance-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/luminance-card";
import { Badge } from "@/components/ui/luminance-badge";
import { motion } from "framer-motion";
import { Moon, Sun, Heart, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        <Card className="border-luminance-teal-500">
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ThemeSwitcher />
      <div className="container mx-auto pt-20 px-4">
        <Hero />
        <ButtonShowcase />
        <BadgeShowcase />
        <CardShowcase />
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Made with <Heart className="inline-block h-4 w-4 text-luminance-coral-500" /> by Luminance UI Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
