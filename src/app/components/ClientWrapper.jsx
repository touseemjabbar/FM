// 'use client';

// import { useState, useEffect, useTransition } from 'react';
// import { usePathname } from 'next/navigation';
// import Loader from './Loader';

// export default function ClientWrapper({ children }) {
//   const pathname = usePathname();
//   const [isPending, startTransition] = useTransition();

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Smoothly transition on route change
//     startTransition(() => setLoading(true));
//   }, [pathname]);

//   useEffect(() => {
//     if (!isPending) {
//       setLoading(false);
//     }
//   }, [isPending]);

//   return loading ? <Loader variant="spinner" size={60} text="Loading..." fullscreen /> : children;
// }
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initial mount - show loader on first load
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds initial loading

    return () => clearTimeout(timer);
  }, []);

  // Route change - show loader when navigating
  useEffect(() => {
    if (mounted) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800); // 0.8 seconds for route changes

      return () => clearTimeout(timer);
    }
  }, [pathname, mounted]);

  // Prevent hydration mismatch - don't render until client-side
  if (!mounted) {
    return null;
  }

  // Show loader or children
  if (loading) {
    return <Loader variant="spinner" size={60} text="Loading..." fullscreen />;
  }

  return <>{children}</>;
}