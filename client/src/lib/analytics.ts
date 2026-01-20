/**
 * Analytics utility for tracking events
 * Supports Google Analytics 4
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track Calendly booking click
 */
export function trackCalendlyClick(location: string): void {
  trackEvent('calendly_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
}

/**
 * Track resume download
 */
export function trackResumeDownload(): void {
  trackEvent('resume_download', {
    event_category: 'engagement',
    event_label: 'resume_pdf',
    value: 1,
  });
}

/**
 * Track section view (scroll tracking)
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, label: string): void {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: label,
    url: url,
  });
}
