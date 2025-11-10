import { Columns, House, LucideToolCase, Warehouse, Image, HardHat, BadgeQuestionMark, BookA } from "lucide-react";

export const headerData = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about", 
        submenu: [
            { title: "Gallery", href: "/gallery", icon: Image },
            { title: "Careers", href: "/careers", icon: HardHat },
            { title: "FAQS", href: "/faq", icon: BadgeQuestionMark },
            { title: "About Us", href: "/about", icon: BookA },
        ],
    },
    { title: "Services", href: "/services",
        submenu: [
            { title: "Roofing", href: "/roofing", icon: House },
            { title: "Gutters", href: "/gutters", icon: Columns },
            { title: "Siding", href: "/siding", icon: Warehouse },
            { title: "Repairs", href: "/repairs", icon: LucideToolCase },
        ],
     },
    { title: "Financing", href: "/financing" },
    { title: "Contact", href: "/contact" },
]