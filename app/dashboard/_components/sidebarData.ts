import {
  AddCircle,
  Barcode,
  Folder,
  Home2,
  Icon,
  MagicStar,
  MessageQuestion,
  Messages2,
  PresentionChart,
  Profile2User,
  Setting2,
} from "iconsax-react";

interface SidebarDataProps {
  icon: Icon;
  label: string;
  href: string;
}

export const sidebarData: SidebarDataProps[] = [
  { icon: Home2, label: "Dashboard", href: "/dashboard/home" },
  { icon: Messages2, label: "Interactions", href: "/dashboard/interactions" },
  { icon: Profile2User, label: "Contacts", href: "/dashboard/contacts" },
  { icon: AddCircle, label: "New Testvid", href: "/dashboard/new-testvid" },
  {
    icon: MagicStar,
    label: "AI Integrations",
    href: "/dashboard/integrations",
  },
  { icon: PresentionChart, label: "Analytis", href: "/dashboard/analytics" },
];

export const foldersData: SidebarDataProps = {
  icon: Folder,
  label: "Folders",
  href: "/dashboard/folders",
};

export const accountHelpData: SidebarDataProps[] = [
  { icon: MessageQuestion, label: "Get Help", href: "/help" },
  { icon: Setting2, label: "Account Settings", href: "/dashboard/settings" },
];
