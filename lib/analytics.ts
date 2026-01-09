/**
 * Analytics utilities for CTA tracking
 * Fires custom window events for analytics integration
 */

interface CTAEventDetail {
  location: string;
  page: string;
  timestamp: number;
}

/**
 * Track CTA click events
 * Fires: window.dispatchEvent(new CustomEvent("crackhire:cta_click", { detail }))
 * 
 * @param location - Where on the page the CTA was clicked (e.g., "hero", "pricing", "footer")
 * @param page - Which page the click occurred on (e.g., "/", "/pm")
 */
export function trackCTA(location: string, page: string): void {
  if (typeof window === 'undefined') return;

  const detail: CTAEventDetail = {
    location,
    page,
    timestamp: Date.now(),
  };

  window.dispatchEvent(
    new CustomEvent('crackhire:cta_click', { detail })
  );

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[CrackHire Analytics]', detail);
  }
}
