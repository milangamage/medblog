'use client'
import { useEffect, useState } from 'react';
import isBrowser from '@/utils/isBrowser';

interface ResponsiveConfig {
  sm: number;
  md: number;
  isMobile: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxxl: number;
}

interface Info {
  [key: string]: boolean;
}

const subscribers: Set<() => void> = new Set();
let info: Info | undefined;
let responsiveConfig: ResponsiveConfig = {
  sm: 430,
  md: 768,
  isMobile: 1024,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  xxxxl: 1920,
};

function handleResize() {
  const oldInfo = info;
  calculate();
  if (oldInfo === info) return;
  for (const subscriber of subscribers) {
    subscriber();
  }
}

let listening = false;

function calculate() {
  const width = window.innerWidth;
  const newInfo: Info = {};
  let shouldUpdate = false;
  for (const key of Object.keys(responsiveConfig)) {
    newInfo[key] = width >= responsiveConfig[key as keyof ResponsiveConfig];
    if (newInfo[key] !== info?.[key]) {
      shouldUpdate = true;
    }
  }
  if (shouldUpdate) {
    info = newInfo;
  }
}

export function configResponsive(config: ResponsiveConfig) {
  responsiveConfig = config;
  if (info) calculate();
}

export default function useResponsive() {
  if (isBrowser && !listening) {
    info = {};
    calculate();
    window.addEventListener('resize', handleResize);
    listening = true;
  }

  const [state, setState] = useState<Info | undefined>(info);

  useEffect(() => {
    if (!isBrowser) return;

    if (!listening) {
      window.addEventListener('resize', handleResize);
    }

    const subscriber = () => {
      setState(info);
    };

    subscribers.add(subscriber);

    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        window.removeEventListener('resize', handleResize);
        listening = false;
      }
    };
  }, []);

  return { screenSize: state, isMobile: !state?.lg };
}
