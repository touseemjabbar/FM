'use client';

import React from 'react';
import { motion } from 'framer-motion';

const colors = ['#F65301', '#2897EF']; // Colors to alternate

const Spinner = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    aria-hidden="true"
    className="inline-block"
  >
    <defs>
      <linearGradient id="g" x1="0%" x2="100%">
        <stop offset="0%" stopColor={colors[0]} stopOpacity="0.15" />
        <stop offset="50%" stopColor={colors[1]} stopOpacity="0.45" />
        <stop offset="100%" stopColor={colors[0]} stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="url(#g)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray="31.415, 31.415"
      transform="rotate(-90 25 25)"
    />
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke={colors[0]}
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray="31.415, 31.415"
      transform="rotate(-90 25 25)"
      style={{
        strokeDashoffset: '78',
        transformOrigin: 'center',
        animation: 'spin 1s linear infinite, color-change 1.5s ease-in-out infinite alternate',
      }}
    />
    <style>{`
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes color-change { 0% { stroke: ${colors[0]}; } 100% { stroke: ${colors[1]}; } }
    `}</style>
  </svg>
);

const Dots = ({ size = 24 }) => {
  const dotStyle = {
    width: size / 5,
    height: size / 5,
  };
  return (
    <div className="flex items-end gap-1" aria-hidden="true">
      {colors.map((color, index) => (
        <motion.span
          key={index}
          style={{ ...dotStyle, backgroundColor: color }}
          className="rounded-full inline-block"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: index * 0.15 }}
        />
      ))}
    </div>
  );
};

const Skeleton = ({ width = '100%', height = 12, rounded = true }) => (
  <div
    className={`overflow-hidden relative ${rounded ? 'rounded-md' : ''}`}
    style={{ width, height }}
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-gray-200/60 dark:bg-gray-700/40 animate-pulse" />
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', transform: 'translateX(-100%)', animation: 'shimmer 1.2s infinite' }}
    />
    <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
  </div>
);

const Bar = () => (
  <div className="w-full h-1 rounded-full overflow-hidden bg-gray-200/60 dark:bg-gray-700/40" aria-hidden="true">
    <div
      style={{
        width: '30%',
        height: '100%',
        transform: 'translateX(-10%)',
        animation: 'bar 1.4s infinite',
        background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
      }}
    />
    <style>{`@keyframes bar { 0% { transform: translateX(-30%); } 100% { transform: translateX(130%); } }`}</style>
  </div>
);

export default function Loader({
  variant = 'spinner',
  size = 40,
  className = '',
  text = '',
  fullscreen = false,
  ariaLabel = 'Loading',
  skeletonProps = {},
}) {
  const base = 'inline-flex flex-col items-center justify-center gap-3 text-gray-700 dark:text-gray-200';

  const content = (() => {
    switch (variant) {
      case 'dots':
        return <Dots size={size} />;
      case 'skeleton':
        return <Skeleton {...skeletonProps} />;
      case 'bar':
        return <Bar />;
      case 'spinner':
      default:
        return <Spinner size={size} />;
    }
  })();

  const wrapperClasses = `${base} ${className}`;

  if (fullscreen) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/40 backdrop-blur-sm"
      >
        <div className={wrapperClasses}>{content}{text ? <div className="text-sm opacity-90">{text}</div> : null}</div>
      </div>
    );
  }

  return (
    <div role="status" aria-live="polite" aria-label={ariaLabel} className={wrapperClasses}>
      {content}
      {text ? <div className="text-sm opacity-90">{text}</div> : null}
    </div>
  );
}