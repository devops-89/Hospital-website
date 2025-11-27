import { Clock, Mail, Phone } from "lucide-react";

export const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Care Services",
    href: "/care-services",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+1(555)123-4567",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "support@yourcompany.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon-Fri, 9am–5pm",
  },
];
