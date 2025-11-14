/**
 * Reports Web Vitals metrics to the provided callback.
 *
 * @param {Function} onPerfEntry - Callback to handle performance metrics.
 */
const reportWebVitals = async (onPerfEntry) => {
  if (typeof onPerfEntry !== "function") return;

  try {
    const webVitals = await import("web-vitals");

    const metrics = {
      CLS: webVitals.getCLS,
      FID: webVitals.getFID,
      FCP: webVitals.getFCP,
      LCP: webVitals.getLCP,
      TTFB: webVitals.getTTFB,
    };

    Object.entries(metrics).forEach(([name, metricFn]) => {
      try {
        metricFn((metric) => {
          console.log(`Reported ${name}:`, metric);
          onPerfEntry(metric);
        });
      } catch (err) {
        console.error(`Error reporting ${name}:`, err);
      }
    });
  } catch (error) {
    console.error("Failed to load web-vitals module:", error);
  }
};

export default reportWebVitals;
