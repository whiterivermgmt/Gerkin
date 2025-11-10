"use client";

import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href?: string;
}

const data: ContactItemData[] = [
  {
    title: "Local Pros",
    subtitle: "Bedford, IN",
    icon: <MapPin className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />,
  },
  {
    title: "Call Us",
    subtitle: "(812)-583-1318",
    href: "tel:8125831318",
    icon: <Phone className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />,
  },
  {
    title: "Email Us",
    subtitle: "gerkinconstruction@gmail.com",
    href: "mailto:gerkinconstruction@gmail.com",
    icon: <Mail className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />,
  },
  {
    title: "Our Hours",
    subtitle: "Mon - Fri: 8am - 5pm",
    icon: <Clock className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />,
  },
];

const FooterTop = () => {
  return (
    <div className="relative py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <ContactCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

interface ContactCardProps {
  item: ContactItemData;
}

const ContactCard = ({ item }: ContactCardProps) => {
  const Wrapper: React.ElementType = item.href ? "a" : "div";

  return (
    <Wrapper
      href={item.href}
      className="group block bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-white/10 rounded-full p-3 transition-all group-hover:bg-white/20">
          {item.icon}
        </div>
        <h4 className="font-semibold text-white text-lg transition-colors">{item.title}</h4>
        <p className="text-gray-300 text-sm transition-colors">{item.subtitle}</p>
      </div>
    </Wrapper>
  );
};

export default FooterTop;
