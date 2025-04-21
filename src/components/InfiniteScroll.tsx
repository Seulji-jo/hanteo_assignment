import { ReactNode, useEffect, useRef } from 'react';
import { InfiniteScrollEndHandler } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectObserver';

interface InfiniteScrollProps {
  disabled?: boolean;
  rootMargin?: string;
  onEnd?: InfiniteScrollEndHandler;
  children: ReactNode;
}

export default function InfiniteScroll({
  disabled,
  rootMargin = '0px',
  onEnd,
  children,
}: InfiniteScrollProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current || !scrollRootRef.current) return;

    const disconnect = useIntersectionObserver(
      targetRef.current,
      entry => {
        if (entry.isIntersecting && !disabled) {
          onEnd?.();
        }
      },
      {
        root: scrollRootRef.current, // ✅ 여기서 실제 DOM 넘김
        rootMargin,
      }
    );

    return () => {
      disconnect?.(); // 옵저버 정리
    };
  }, [disabled, rootMargin, onEnd]);

  return (
    <div ref={scrollRootRef} className="flex-1 overflow-auto">
      {children}
      {!disabled && <div ref={targetRef} style={{ height: 1 }} />}
    </div>
  );
}
