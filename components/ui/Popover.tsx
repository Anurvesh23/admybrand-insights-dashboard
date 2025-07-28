import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const Popover = ({ children, content, align = 'center', contentClassName }: { children: ReactNode, content: ReactNode, align?: 'start' | 'center' | 'end', contentClassName?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const alignClasses = { 
    start: "left-0", 
    center: "left-1/2 -translate-x-1/2", 
    end: "right-0" 
  };

  return (
    <div className="relative" ref={popoverRef}>
      <div onClick={() => setIsOpen(v => !v)} className="cursor-pointer">{children}</div>
      {isOpen && (
        <div className={cn("absolute z-50 w-auto mt-2 rounded-md border bg-popover text-popover-foreground shadow-md outline-none", alignClasses[align], contentClassName)}>
          {content}
        </div>
      )}
    </div>
  );
};
