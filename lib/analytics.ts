/**
 * Analytics utilities for event tracking
 * Fires custom window events for analytics integration
 */

/**
 * Track CTA click events
 * @param location - Where the CTA was clicked (e.g., "hero", "pricing")
 * @param page - Which page (e.g., "/", "/pm")
 */
export function trackCTA(location: string, page: string): void {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('crackhire:cta_click', {
      detail: { location, page, timestamp: Date.now() },
    })
  );

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] cta_click', { location, page });
  }
}

/**
 * Track page view events (for thank-you pages)
 * @param eventName - Event name without prefix
 */
export function trackPageView(eventName: string): void {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent(`crackhire_${eventName}`, {
      detail: { timestamp: Date.now() },
    })
  );

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}`);
  }
}

/**
 * Track thank-you page CTA clicks
 * @param type - "pm" or "waitlist"
 */
export function trackThankYouCTA(type: 'pm' | 'waitlist'): void {
  if (typeof window === 'undefined') return;

  const eventName = `crackhire_thankyou_${type}_cta`;
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: { timestamp: Date.now() },
    })
  );

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}`);
  }
}
