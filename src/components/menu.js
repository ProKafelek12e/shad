import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import SwitchMenu from "@/components/switch-mode"
import { ModeToggle } from "@/components/mode"
import Link from "next/link"
  export default function Menu(){
    return (
        <div className="w-full flex justify-center items-start my-5 relative">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mx-5">
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col">
                <Link href="/">
                <NavigationMenuLink>Main</NavigationMenuLink>
                </Link>
                <Link href="/strona1">
                <NavigationMenuLink>zloto</NavigationMenuLink>
                </Link>
                <Link href="/pogoda">
                <NavigationMenuLink>pogoda</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="absolute top-0 right-5">
          {/* <ModeToggle/> */}
          <SwitchMenu/>
        </div>
        </div>
    )
  }