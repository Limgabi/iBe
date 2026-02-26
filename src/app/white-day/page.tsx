import { meongiB } from '@/src/app/fonts';
import Icon from '@/src/components/common/icon/icon';
import InquiryButton from '@/src/components/common/inquiry/inquiry-button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center bg-[#FFFBE8] sm:items-start">
        <h1
          className={`${meongiB.className} text-main-title select-none text-[#B5644E] w-full pt-25 text-center`}
        >
          Sweet
          <br />
          Letter
        </h1>

        <div className="relative w-full h-86.75">
          <Icon
            name="heartPrimary"
            width={40}
            height={38}
            style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <Icon
            name="heartSecondary"
            width={40}
            height={38}
            style={{ position: 'absolute', top: 55, right: '35%' }}
          />
          <Icon
            name="candy"
            width={281}
            height={261}
            style={{
              position: 'absolute',
              top: 74,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
        <div className="w-full py-10 flex flex-col gap-7 items-center">
          <p className="font-semibold text-base leading-[160%] text-[#B5644E] text-center">
            소중한 사람에게
            <br />
            달콤함을 선물해보세요!
          </p>

          <button className="w-fit  flex gap-1 items-center text-[#ffffff] text-button px-6 py-3 rounded-[365px] bg-[#B5644E] cursor-pointer">
            <span>선물 보내기</span>
            <Icon name="gift" width={16} height={16} />
          </button>
        </div>
        <InquiryButton theme="white-day" />
      </main>
    </div>
  );
}
