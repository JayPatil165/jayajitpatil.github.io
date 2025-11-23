import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  href?: string;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...rest }) => {
  const base = 'btn';
  const styles = variant === 'primary'
    ? 'bg-ink dark:bg-white text-white dark:text-ink shadow-lg hover:shadow-xl hover:scale-105 border border-ink/20 dark:border-white/20'
    : 'bg-white/80 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:border-accent-indigo dark:hover:border-accent-indigo/50';

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
};

export default Button;
