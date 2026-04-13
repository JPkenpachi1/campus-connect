import { NavLink, Feature } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Careers", href: "/careers" },
];

export const TRUSTED_BY = ["Forbes", "Intel", "VISA", "Nike", "Google", "Intel"];

export const FEATURES: Feature[] = [
  {
    icon: "qr",
    title: "QR transfer, a piece of cake!",
    description: "Send money instantly using QR codes.",
  },
  {
    icon: "transaction",
    title: "Access to transaction detail in a second",
    description: "Get full transaction history at a glance.",
  },
  {
    icon: "card",
    title: "Control card spend, before it happens.",
    description: "Set limits and block cards in real time.",
  },
];
