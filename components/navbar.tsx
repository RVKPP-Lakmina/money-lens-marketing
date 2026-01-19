"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
   const features = [
      {
         title: "Ai Driven Financial Advice",
         description: "Personalized recommendations just for you",
         href: "/#features",
      },
      {
         title: "Smart Investment Planning",
         description: "Data-driven investment insights",
         href: "/#features",
      },
      {
         title: "Credit Card Optimization",
         description: "Maximize your rewards",
         href: "/#features",
      },
      {
         title: "Personalized Portfolio Insights",
         description: "Optimize your investments",
         href: "/#features",
      },
   ];

   return (
      <section className="py-4 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
         <div className="container">
            <nav className="flex items-center justify-between">
               {/* Logo */}
               <Link href="/" className="flex items-center gap-2">
                  <Image
                     src="/logo.png"
                     width={32}
                     height={32}
                     className="max-h-8 w-auto"
                     alt="Money Lens Logo"
                  />
                  <span className="text-xl font-bold hidden md:block">
                     MoneyLens
                  </span>
               </Link>

               {/* Desktop Navigation */}
               <NavigationMenu className="hidden lg:block">
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="/"
                              className={navigationMenuTriggerStyle()}
                           >
                              Home
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>

                     <NavigationMenuItem>
                        <NavigationMenuTrigger>
                           What We Do
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                           <div className="grid w-[600px] grid-cols-2 p-3 gap-2">
                              {features.map((feature, index) => (
                                 <NavigationMenuLink asChild key={index}>
                                    <Link
                                       href={feature.href}
                                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                       <div className="text-sm font-medium leading-none">
                                          {feature.title}
                                       </div>
                                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                          {feature.description}
                                       </p>
                                    </Link>
                                 </NavigationMenuLink>
                              ))}
                           </div>
                        </NavigationMenuContent>
                     </NavigationMenuItem>

                     {/* FIXED: Uses asChild so the Next.js Link component receives the styles and handles the click */}
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="/contact"
                              className={navigationMenuTriggerStyle()}
                           >
                              Contact Us
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>

                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="/#pricing"
                              className={navigationMenuTriggerStyle()}
                           >
                              Pricing
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                  </NavigationMenuList>
               </NavigationMenu>

               {/* Desktop Buttons */}
               <div className="hidden items-center gap-4 lg:flex">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
               </div>

               {/* Mobile Navigation (Sheet) */}
               <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                     <Button variant="outline" size="icon">
                        <MenuIcon className="h-4 w-4" />
                     </Button>
                  </SheetTrigger>
                  <SheetContent
                     side="top"
                     className="max-h-screen overflow-auto"
                  >
                     <SheetHeader>
                        <SheetTitle className="text-left">
                           <Link href="/" className="flex items-center gap-2">
                              <Image
                                 src="/logo.png"
                                 width={32}
                                 height={32}
                                 className="max-h-8 w-auto"
                                 alt="Money Lens Logo"
                              />
                              <span className="text-lg font-bold">
                                 MoneyLens
                              </span>
                           </Link>
                        </SheetTitle>
                     </SheetHeader>
                     <div className="flex flex-col p-4">
                        <Accordion
                           type="single"
                           collapsible
                           className="mb-2 mt-4 w-full"
                        >
                           <AccordionItem
                              value="features"
                              className="border-none"
                           >
                              <AccordionTrigger className="text-base font-medium hover:no-underline py-2">
                                 Features
                              </AccordionTrigger>
                              <AccordionContent>
                                 <div className="grid gap-2 py-2">
                                    {features.map((feature, index) => (
                                       <Link
                                          key={index}
                                          href={feature.href}
                                          className="block rounded-md p-3 text-sm hover:bg-muted transition-colors"
                                       >
                                          <div className="font-medium mb-1">
                                             {feature.title}
                                          </div>
                                          <div className="text-muted-foreground">
                                             {feature.description}
                                          </div>
                                       </Link>
                                    ))}
                                 </div>
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>

                        <div className="flex flex-col gap-4 mt-2">
                           <Link
                              href="/"
                              className="text-base font-medium py-2 hover:text-primary transition-colors"
                           >
                              Home
                           </Link>
                           <Link
                              href="components\contact.tsx"
                              className="text-base font-medium py-2 hover:text-primary transition-colors"
                           >
                              Contact Us
                           </Link>
                           <Link
                              href="/#pricing"
                              className="text-base font-medium py-2 hover:text-primary transition-colors"
                           >
                              Pricing
                           </Link>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                           <Button variant="outline" className="w-full">
                              Sign in
                           </Button>
                           <Button className="w-full">Start for free</Button>
                        </div>
                     </div>
                  </SheetContent>
               </Sheet>
            </nav>
         </div>
      </section>
   );
};

export { Navbar };
