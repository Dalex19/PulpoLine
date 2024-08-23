"use client"
import { useEffect, useState } from 'react';

export function useClientMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add the event listener for changes
    mediaQueryList.addEventListener('change', handleMatchChange);

    // Clean up the event listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
}