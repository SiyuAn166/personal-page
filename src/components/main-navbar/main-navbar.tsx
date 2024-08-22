'use client'
import React from "react";
import classNames from "classnames";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image} from "@nextui-org/react";
import { navItems } from "./main-navbar-data";
import Contact from "../about/contact";

const MainNavBar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    return (
        <div className={classNames(
            "flex items-center justify-between",
            "w-full",
        )}>
            <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
                <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                    <NavbarBrand className="justify-end md:justify-start">
                        <Link href="/" color="foreground">
                            {/* <Image alt="Siyu An" src={`/sa.png`} width={50} height={50}
                            className="rounded-full"/> */}
                            {/* <Logo/> */}
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                
                <NavbarContent className="hidden md:flex gap-10" justify="center">
                    {navItems.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link href={item.link} key={`${item}-${index}`} 
                            className="text-blue-500 font-sans relative p-2 rounded-full bg-white bg-opacity-0 hover:bg-opacity-30 hover:backdrop-blur-md transition duration-300">
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                    <Contact/>
                </NavbarContent>
                <NavbarMenu>
                    {navItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link href={item.link} key={`${item}-${index}`}>
                                    {item.name}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    
                </NavbarMenu>
            </Navbar>
        </div>
    )

    
}

export default MainNavBar;