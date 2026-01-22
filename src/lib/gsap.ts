import type React from 'react';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';

export { gsap };

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(media.matches);
    onChange();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

type UseGsapContextArgs = {
  scope: React.RefObject<Element | null>;
  deps?: React.DependencyList;
  enabled?: boolean;
  setup: () => void | (() => void);
};

export function useGsapContext({
  scope,
  deps = [],
  enabled = true,
  setup,
}: UseGsapContextArgs) {
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!enabled || reducedMotion) return;
    const ctx = gsap.context(() => setup(), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, reducedMotion, scope, ...deps]);
}

export function useInViewOnce<T extends Element>(
  ref: React.RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);
  const stableOptions = useMemo(() => options, [options]);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, stableOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, ref, stableOptions]);

  return inView;
}
