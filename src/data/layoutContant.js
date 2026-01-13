import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

// header contant

export const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Service",
    path: "/service",
  },
  {
    id: 3,
    label: "Process",
    path: "/process",
  },
  {
    id: 4,
    label: "Contact",
    path: "/contact",
  },
];

// footer contant

export const ourService = [
  "Software Development",
  "Digital Marketing",
  "Intership",
  "Website Development",
];

export const exploreMore = ["Home", "About", "Services", "Contact"];

export const contactDetails = [
  {
    id: 1,
    label: "Address",
    value: "1234 Street Name, City, State, 12345",
    Icon: MapPin,
  },
  {
    id: 2,
    label: "Phone",
    value: "+251 63787888686886",
    Icon: Phone,
  },
  {
    id: 3,
    label: "Email",
    value: "info@infisq.com",
    Icon: Mail,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/infisq/",
    Icon: Linkedin,
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://www.instagram.com/infisqtech/",
    Icon: Instagram,
  },
  {
    id: 3,
    label: "Mail",
    url: "mailto:info@infisq.com",
    Icon: Mail,
  },
];
