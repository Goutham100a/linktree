
import React from 'react';
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  name: string;
  className?: string;
}

const ProfileAvatar = ({ name, className }: ProfileAvatarProps) => {
  return (
    <div className="relative">
      <div className={cn(
        "w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl bg-white text-gray-700 border-4 border-gray-300 shadow-lg animate-float old-ui-avatar overflow-hidden",
        className
      )}>
        <img 
          src="https://mir-s3-cdn-cf.behance.net/user/115/b8eb26464831253.67cefad487f2d.jpg" 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
