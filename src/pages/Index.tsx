
import { useState, useEffect } from 'react';
import LinktreeItem from '@/components/LinktreeItem';
import ProfileAvatar from '@/components/ProfileAvatar';
import RetroBackground from '@/components/RetroBackground';
import { Briefcase, Linkedin, Instagram, MessageCircle, Palette } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const links = [
    { 
      href: "https://gouthamshetty.framer.website/", 
      label: "My Portfolio", 
      icon: <Briefcase className="w-5 h-5" />,
      delay: 1
    },
    { 
      href: "https://www.behance.net/gouthamj2", 
      label: "Behance", 
      icon: <Palette className="w-5 h-5" />,
      delay: 2
    },
    { 
      href: "https://www.linkedin.com/in/goutham-j-shetty-681b752a5/", 
      label: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      delay: 3
    },
    { 
      href: "https://www.instagram.com/gjs100_/?__pwa=1", 
      label: "Instagram", 
      icon: <Instagram className="w-5 h-5" />,
      delay: 4
    },
    { 
      href: "https://wa.me/919995688916", 
      label: "WhatsApp", 
      icon: <MessageCircle className="w-5 h-5" />,
      delay: 5
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12">
      <RetroBackground />

      <div className={`w-full max-w-md flex flex-col items-center space-y-6 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Window Title Bar - Classic OS Style */}
        <div className="w-full border border-gray-400 rounded-t-md shadow-md bg-gray-100">
          <div className="window-title">
            <span >GouthamShetty.exe</span>
            <div className="window-controls">
              <div className="window-control bg-red-500"></div>
              <div className="window-control bg-yellow-500"></div>
              <div className="window-control bg-green-500"></div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="p-6 bg-gray-100 border-t border-gray-300">
            {/* Profile Section */}
            <div className="flex flex-col items-center space-y-4">
              <ProfileAvatar name="Goutham Shetty" />
              
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-pixel tracking-tight text-gray-700 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                  GOUTHAM SHETTY
                </h1>
                
                <div className="inline-block bg-gray-300 px-3 py-1 rounded-sm shadow-inner animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  <p className="text-sm font-medium text-gray-700">UX/UI Designer</p>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="w-full space-y-3 mt-6">
              {links.map((link, index) => (
                <LinktreeItem
                  key={index}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  delay={link.delay}
                />
              ))}
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="py-1 px-2 bg-gray-300 border-t border-gray-400 text-xs text-gray-700 flex justify-between rounded-b-sm">
            <span>Status: Online</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
