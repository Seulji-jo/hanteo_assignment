import { ReactNode } from 'react';

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[45px] w-full gap-3 overflow-hidden rounded-md bg-white">
      <div className="flex-1 overflow-hidden rounded-md">
        <img
          src=" https://dummyimage.com/100x4:3"
          className="object-fit object-center"
        />
      </div>
      <div className="flex flex-4 flex-wrap content-center">{children}</div>
    </div>
  );
}
