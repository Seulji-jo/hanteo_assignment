import ExternalLink from './ExternalLink';

interface BannerData {
  imgSrc: string;
  title: string;
  linkUrl: string;
  buttonName: string | undefined;
  startAt: string;
  finishAt: string;
}
interface BannerProps {
  bannerData: BannerData;
}

export default function Banner({ bannerData }: BannerProps) {
  const { imgSrc, title, buttonName, linkUrl, startAt, finishAt } = bannerData;
  console.log(new Date());
  return (
    <ExternalLink url={linkUrl}>
      <div className="flex h-full w-full flex-col">
        <div className="grow-4 overflow-hidden">
          <img
            src={imgSrc ? imgSrc : 'https://dummyimage.com/640x16:9'}
            className="w-full object-contain"
          />
        </div>
        <div className="flex grow-1 flex-col gap-2 p-2">
          <div className="title flex gap-5 text-sm">
            <div className="flex-4 truncate">
              {title ? title : '[M COUNTDOWN] 10월 2주차 엠카 사전 투표하기'}
            </div>
            <button className="bo flex-1 rounded-full border border-pink-500 text-pink-500">
              {buttonName ? buttonName : '이동하기'}
            </button>
          </div>
          <span className="self-end text-xs text-neutral-600">
            {startAt} ~ {finishAt}
          </span>
        </div>
      </div>
    </ExternalLink>
  );
}
