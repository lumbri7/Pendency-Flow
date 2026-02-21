import type { SVGProps } from 'react';

export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg width="150" height="24" viewBox="0 0 150 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="0" y="19" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" className="fill-primary dark:fill-primary-foreground">
        PendencyFlow
      </text>
    </svg>
  ),
  AppStore: (props: SVGProps<SVGSVGElement>) => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="120" height="40" rx="8" fill="black"/>
      <path d="M26.44 14.39C26.96 13.71 27.35 12.89 27.56 12C26.71 12.28 25.79 12.79 25.04 13.4C24.08 14.15 23.53 15.22 23.53 16.48C23.53 17.78 24.22 18.89 25.21 19.53C25.32 19.59 25.43 19.64 25.54 19.7C25.52 19.7 25.49 19.7 25.47 19.7C25.47 19.7 25.47 19.7 25.47 19.7C24.42 20.25 23.53 21.24 23.53 22.51C23.53 23.97 24.47 25.1 25.73 25.86C26.54 26.35 27.51 26.6 28.53 26.63C28.55 26.63 28.57 26.63 28.59 26.63C28.61 26.63 28.64 26.63 28.66 26.63C29.65 26.57 30.6 26.26 31.39 25.75C32.74 24.93 33.43 23.69 33.43 22.28C33.43 20.6 32.2 19.34 30.34 19.34H28.2V19.26C28.2 19.26 28.2 19.26 28.2 19.25C29.62 19.12 30.73 18.04 30.73 16.51C30.73 15.02 29.74 13.91 28.36 13.57C27.65 13.39 26.85 13.39 26.15 13.6C26.25 13.86 26.35 14.12 26.44 14.39ZM28.42 17.85H27.1V15.01H28.42C29.03 15.01 29.42 15.46 29.42 16.05C29.42 16.64 29.06 17.11 28.53 17.17L28.42 17.85ZM28.2 20.73H29.62C30.31 20.73 30.95 21.31 30.95 22.22C30.95 23.08 30.37 23.72 29.74 23.78L29.62 23.8H28.2V20.73Z" fill="white"/>
      <g clipPath="url(#clip0_105_2)">
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Inter" fontSize="8" fontWeight="500" letterSpacing="0.02em"><tspan x="43" y="19.5">Download on the</tspan></text>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Inter" fontSize="12" fontWeight="bold" letterSpacing="0em"><tspan x="43" y="31.5">App Store</tspan></text>
      </g>
    </svg>
  ),
  PlayStore: (props: SVGProps<SVGSVGElement>) => (
    <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="135" height="40" rx="8" fill="black"/>
        <path d="M21.57 11.23L31.54 16.21L28.24 19.51L21.57 11.23Z" fill="#FFD044"/>
        <path d="M21.57 28.77L31.54 23.79L28.24 20.49L21.57 28.77Z" fill="#FF5656"/>
        <path d="M19 30.29L21.57 28.77L25.13 25.21L19 19.08V30.29Z" fill="#38DDFF"/>
        <path d="M19 9.71002L25.13 14.79L21.57 11.23L19 9.71002Z" fill="#38DDFF"/>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Inter" fontSize="8" fontWeight="500" letterSpacing="0.02em"><tspan x="42" y="19.5">GET IT ON</tspan></text>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Inter" fontSize="12" fontWeight="bold" letterSpacing="0em"><tspan x="42" y="31.5">Google Play</tspan></text>
    </svg>
  ),
};
