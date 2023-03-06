export const useIntersectionObserver = () => {
 
  const intersectionRoot = (callback: IntersectionObserverCallback, rootMargin?: string, threshold?: number) =>  { Array
    const options = {
      rootMargin: rootMargin ?? "0px",
      threshold: threshold ?? 0,
    };
    let observer = new IntersectionObserver(callback, options);
    return observer;
  }
  
  return {
    intersectionRoot,
  }
}