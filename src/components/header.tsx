"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  drawerGroups,
  drawerUtilityLinks,
  shopColumns,
  shopPromo,
  trendingPromos,
  type ShopColumn,
} from "@/components/header-data";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

type MenuVariant = "shop" | "trending";

export function Header() {
  const [menu, setMenu] = useState<MenuVariant | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menu) return;
    const handleClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menu]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  const toggleMenu = (variant: MenuVariant) =>
    setMenu((current) => (current === variant ? null : variant));

  const toggleGroup = (label: string) =>
    setOpenGroup((current) => (current === label ? null : label));

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header ref={headerRef} className="relative bg-white">
      <div className="flex h-[84px] items-center justify-between px-5 md:h-20 md:px-12">
        <Link href="/" aria-label="Stanley 1913 Home" className="shrink-0">
          <Icon name="logo-full" size={24} className="h-10 w-[227px] fill-ink" />
        </Link>

        <nav aria-label="Menu" className="hidden md:block">
          {/* 
          <ul className="flex items-center gap-6">
            <li>
              <button
                type="button"
                aria-expanded={menu === "shop"}
                onClick={() => toggleMenu("shop")}
                className="flex items-center gap-1 text-[14px] font-normal text-ink"
              >
                Shop
                <Icon
                  name="chevron-down"
                  size={12}
                  className={cn(
                    "fill-ink transition-transform duration-200",
                    menu === "shop" && "rotate-180"
                  )}
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={menu === "trending"}
                onClick={() => toggleMenu("trending")}
                className="flex items-center gap-1 text-[14px] font-normal text-ink"
              >
                Trending
                <Icon
                  name="chevron-down"
                  size={12}
                  className={cn(
                    "fill-ink transition-transform duration-200",
                    menu === "trending" && "rotate-180"
                  )}
                />
              </button>
            </li>
            <li>
              <a
                href="https://www.stanley1913.com/collections/stanley-create-custom"
                onClick={() => setMenu(null)}
                className="text-[14px] font-normal text-ink"
              >
                Customize
              </a>
            </li>
            <li>
              <a
                href="/collections/sale"
                onClick={() => setMenu(null)}
                className="text-[14px] font-normal text-ink"
              >
                Sale
              </a>
            </li>
          </ul>
          */}
        </nav>

        <div className="flex items-center gap-4">
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="hidden items-center md:flex"
          >
            <div className="flex items-center rounded-full border border-smoke px-4 transition-colors focus-within:border-ink/20 focus-within:bg-smoke">
              <input
                type="search"
                placeholder="What are you looking for?"
                aria-label="Search"
                className="w-52 bg-transparent py-2 text-[14px] text-ink placeholder:text-gray-2 focus:outline-none"
              />
              <button type="submit" aria-label="Search">
                <Icon name="search" size={16} className="fill-ink" />
              </button>
            </div>
          </form>
          <button type="button" aria-label="Search" className="md:hidden">
            <Icon name="search" size={24} className="fill-ink" />
          </button>
          <button type="button" aria-label="Cart">
            <Icon name="bag" size={24} className="fill-ink" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="md:hidden"
          >
            <Icon name="hamburger" size={24} className="fill-ink" />
          </button>
        </div>
      </div>

      {menu && (
        <div className="absolute left-0 top-[76px] z-30 w-full bg-white">
          {menu === "shop" ? (
            <div className="flex h-[522px] pl-10">
              {shopColumns.map((column) => (
                <MegaMenuColumn key={column.title} column={column} />
              ))}
              <a href={shopPromo.href} className="ml-auto block w-[390px]">
                <img
                  src={shopPromo.src}
                  alt={shopPromo.alt}
                  className="h-[358px] w-full object-cover"
                />
                <span className="mt-2 block text-[14px] font-normal text-ink">
                  {shopPromo.caption}
                </span>
              </a>
            </div>
          ) : (
            <div className="flex h-[522px] items-center justify-end gap-9 pl-10">
              {trendingPromos.map((promo) => (
                <a key={promo.src} href={promo.href} className="block h-[358px] w-[257px]">
                  <img src={promo.src} alt={promo.alt} className="h-full w-full object-cover" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300",
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <aside
        aria-label="Menu"
        aria-hidden={!drawerOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-white transition-transform duration-300",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-end border-b border-smoke px-5 py-4">
          <button type="button" aria-label="Close menu" onClick={closeDrawer}>
            <Icon name="close" size={24} className="fill-ink" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto" aria-label="Menu">
          <ul>
            {drawerGroups.map((group) => {
              const expanded = openGroup === group.label;
              return (
                <li key={group.label} className="border-b border-smoke">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => toggleGroup(group.label)}
                    className="flex w-full items-center justify-between px-5 py-4 text-[14px] font-normal text-ink"
                  >
                    {group.label}
                    <Icon
                      name="chevron-down"
                      size={16}
                      className={cn(
                        "fill-ink transition-transform duration-300",
                        expanded && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded && (
                    <ul className="px-5 pb-4">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={closeDrawer}
                            className="block py-2 pl-3 text-[14px] font-normal text-gray-2"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="border-b border-smoke">
              <a
                href="https://www.stanley1913.com/collections/stanley-create-custom"
                onClick={closeDrawer}
                className="block px-5 py-4 text-[14px] font-normal text-ink"
              >
                Customize
              </a>
            </li>
            <li className="border-b border-smoke">
              <a
                href="/collections/sale"
                onClick={closeDrawer}
                className="block px-5 py-4 text-[14px] font-normal text-ink"
              >
                Sale
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-3 border-t border-smoke px-5 py-6 text-[14px] font-normal text-ink">
          {drawerUtilityLinks.map((item) => (
            <a key={item.label} href={item.href} onClick={closeDrawer}>
              {item.label}
            </a>
          ))}

          <button
            type="button"
            aria-label="Select Location and Language USA"
            className="flex items-center gap-1"
          >
            <Icon name="location" size={16} className="fill-ink" />
            USA
            <Icon name="chevron-down" size={12} className="fill-ink" />
          </button>
        </div>
      </aside>
    </header>
  );
}

function MegaMenuColumn({ column }: { column: ShopColumn }) {
  return (
    <div className="mr-9 w-[257px] pb-12 pl-12 pt-6">
      <p className="mb-5 text-[14px] font-normal text-ink">{column.title}</p>
      <ul>
        {column.links.map((item) => (
          <li key={item.label} className="mb-5">
            <a
              href={item.href}
              className="text-[14px] font-normal leading-[19.6px] text-ink hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {column.logoImage && (
        <img
          src={column.logoImage.src}
          alt={column.logoImage.alt}
          className="mt-2 h-6 w-auto"
        />
      )}
    </div>
  );
}
