import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'beginner' | 'advanced';
}

export const Badge = ({ children, variant }: BadgeProps) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    beginner: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};