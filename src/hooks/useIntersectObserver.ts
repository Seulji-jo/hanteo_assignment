export type UseIntersectionObserverCallback = (
  entry: IntersectionObserverEntry
) => void;

export function useIntersectionObserver(
  ref: Element,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): () => void {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(callback);
  }, options);

  observer.observe(ref);

  return () => {
    observer.disconnect();
  };
}
