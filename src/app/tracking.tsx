'use client';

import { useEffect } from 'react';

export default function ClientScript() {
  useEffect(() => {
    const matomoScript = document.createElement('script');
    matomoScript.async = true;
    matomoScript.src = 'https://analytics.maersux.dev/js/container_z4cXSLfk.js';
    const firstScript = document.head.firstChild;
    document.head.insertBefore(matomoScript, firstScript)
  }, []);

  return null;
}
