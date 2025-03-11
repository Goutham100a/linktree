
import React from 'react';
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface LinktreeItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const LinktreeItem = ({ href, label, icon, delay }: LinktreeItemProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="old-ui-button"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-center gap-3">
        <div className="old-ui-icon">
          {icon}
        </div>
        <span className="font-medium text-lg">{label}</span>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-600 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
};

export default LinktreeItem;
