import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Image from 'next/image';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';

import { UserIcon } from './icons';

import { siteConfig } from '@/config/site';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="text-tvblue" />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-center items-center gap-1" href="/">
            <Image alt="logo" height={150} src="/tvl_logo.svg" width={150} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="text-tvblue" justify="end">
        <p className="opacity-50">Janice de Vries</p>
        <UserIcon />
      </NavbarContent>

      <NavbarMenu className="max-w-7xl mx-auto no-scrollbar bg-transparent blur-0">
        <div className="mx-4 mt-2 flex flex-col justify-start gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
