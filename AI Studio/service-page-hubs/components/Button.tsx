import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
  
  const variants = {
    primary: "bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600 text-white shadow-lg shadow-slate-500/30 border border-transparent",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm",
    outline: "bg-transparent text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800",
    dark: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 shadow-lg",
    blue: "bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white shadow-lg shadow-sky-500/30 border border-transparent" // Special for specific buttons
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Allow custom variant string if needed for one-offs
  const variantClass = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <button className={`${baseStyles} ${variantClass} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;