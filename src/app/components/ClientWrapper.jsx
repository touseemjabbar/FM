'use client';

import { useState, useEffect, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smoothly transition on route change
    startTransition(() => setLoading(true));
  }, [pathname]);

  useEffect(() => {
    if (!isPending) {
      setLoading(false);
    }
  }, [isPending]);

  return loading ? <Loader variant="spinner" size={60} text="Loading..." fullscreen /> : children;
}
