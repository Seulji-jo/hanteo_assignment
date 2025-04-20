import { ReactNode, useCallback, useMemo, useState } from 'react';
import Content from './Content';
import { InfiniteScrollEndHandler } from '../types';
import InfiniteScroll from './InfiniteScroll';

export default function PageLayout({
  title,
  maxInfinite = 5,
  children,
}: {
  title: string;
  maxInfinite?: number;
  children?: ReactNode;
}) {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const contentList = useMemo(
    () =>
      Array.from({ length: count * 10 }).map((_, i) => (
        <Content key={i}>
          <span>{`content ${i + 1}`}</span>
        </Content>
      )),
    [count]
  );

  const handleEnd = useCallback<InfiniteScrollEndHandler>(() => {
    if (isLoading || count >= maxInfinite) return; // 멈추는 조건
    setIsLoading(true);

    setTimeout(() => {
      setCount(prev => prev + 1);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, count]);

  return (
    <div className="flex flex-1 flex-col gap-3 overflow-auto p-[15px]">
      <h2>{title}</h2>
      {/* <InfiniteScroll disabled={count >= 3} onEnd={handleEnd} rootMargin="0px">
        <div className="flex flex-col gap-3">{contentList}</div>
      </InfiniteScroll> */}
      <InfiniteScroll onEnd={handleEnd} disabled={count >= maxInfinite}>
        <div className="flex flex-col gap-5">
          {contentList}
          {isLoading && <div className="py-4 text-center">로딩 중...</div>}
        </div>
      </InfiniteScroll>
      {children}
    </div>
  );
}
