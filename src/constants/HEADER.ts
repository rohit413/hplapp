import { Home, Phone, Info, Package, Heart, Globe, Users, Settings, Activity, Shield, FileText, Calendar, Award, BookOpen } from "feather-icons-react";

export const HEADER = {
  LOGO: "/assets/images/logo.png",
  MENU: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      children: [
        {
          name: "Overview",
          url: "/about-overview",
          icon: Info,
        },
        {
          
          name: "The Team",
          url: "/about-directors-management",
          icon: Users,
        },
        {
          name: "Manufacturing Units",
          url: "/about-manufacturing-units",
          icon: Settings,
        },
        {
          name: "Sustainable Development",
          url: "/about-sustainable-development",
          icon: Activity,
        },
        {
          name: "Regulatory Affairs",
          url: "/about-regulatory-affairs",
          icon: Shield,
        },
        {
          name: "Policies",
          url: "/about-policies-notice",
          icon: FileText,
        },
        {
          name: "Events",
          url: "/about-events-trade",
          icon: Calendar,
        },
        {
          name: "Awards",
          url: "/about-award-recognition",
          icon: Award,
        },
        {
          name: "News",
          url: "/about-in-the-news",
          icon: BookOpen,
        },
      ],
      name: "About Us",
      url: "",
      icon: Info,
    },
    {
      name: "Products",
      url: "/products",
      icon: Package,
    },
    {
      children: [
        {
          name: "Overview",
          url: "/esg#overview",
          icon: Info,
        },
        {
          name: "Environment",
          url: "/esg#environment",
          icon: Activity,
        },
        {
          name: "People",
          url: "/esg#people",
          icon: Users,
        },
        {
          name: "CSR",
          url: "/esg#csr",
          icon: Heart,
        },
        {
          name: "Ethics",
          url: "/esg#ethics",
          icon: Shield,
        },
        {
          name: "Sustainable Procurement",
          url: "/esg#sustainable-procurement",
          icon: Package,
        },
        {
          name: "Product Stewardship",
          url: "/esg#product-stewardship",
          icon: Settings,
        },
        {
          name: "Reports & Policies",
          url: "/esg#reports-policies",
          icon: FileText,
        },
        {
          name: "Grievance & Speak-Up",
          url: "/esg#grievance-speak-up",
          icon: Phone,
        },
      ],
      name: "ESG Hub",
      url: "/esg",
      icon: Info,
    },
    {
      name: "CSR",
      url: "/csr",
      icon: Heart,
    },
    {
      name: "Network",
      url: "/global",
      icon: Globe,
    },
    {
      name: "Contact Us",
      url: "/contact-us",
      icon: Phone,
    },
  ],
};
