"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HandHeart, LayoutDashboard, PlusCircle, ScrollText, User, Sparkles, FolderKanban, ShoppingBasket } from "lucide-react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const donorNavItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/donate", icon: PlusCircle, label: "New Donation" },
  { href: "/dashboard/listings", icon: FolderKanban, label: "My Listings" },
  { href: "/dashboard/match-tool", icon: Sparkles, label: "AI Matcher" },
  { href: "/dashboard/profile", icon: User, label: "Profile" },
];

const recipientNavItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/dashboard/browse", icon: ShoppingBasket, label: "Browse Food" },
    { href: "/dashboard/requests", icon: ScrollText, label: "My Requests" },
    { href: "/dashboard/profile", icon: User, label: "Profile" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  // In a real app, you'd get the user's role from a session or context
  const userRole = 'donor'; // or 'recipient'

  const navItems = userRole === 'donor' ? donorNavItems : recipientNavItems;

  return (
    <Sidebar>
        <SidebarHeader>
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
                <HandHeart className="h-6 w-6 text-primary" />
                <span className="font-headline">WasteNotWantNot</span>
            </Link>
        </SidebarHeader>
        <SidebarContent className="p-4">
            <SidebarMenu>
                {navItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                        <Link href={item.href}>
                            <SidebarMenuButton
                                isActive={pathname === item.href}
                                tooltip={{children: item.label, side: "right"}}
                            >
                                <item.icon />
                                <span>{item.label}</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
            <div className="mt-auto">
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <p className="px-2 py-1 text-xs text-muted-foreground">For Recipients</p>
                    </SidebarMenuItem>
                    {recipientNavItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <Link href={item.href}>
                                <SidebarMenuButton
                                    isActive={pathname === item.href}
                                    tooltip={{children: item.label, side: "right"}}
                                >
                                    <item.icon />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </div>
        </SidebarContent>
    </Sidebar>
  );
}
