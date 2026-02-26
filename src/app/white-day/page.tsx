import { meongiB } from '@/src/app/fonts';
import Icon from '@/src/components/common/icon/icon';

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center bg-[#FFFBE8] sm:items-start">
        <h1
          className={`${meongiB.className} text-main-title select-none text-[#B5644E] w-full pt-25 text-center`}
        >
          Sweet
          <br />
          Letter
        </h1>

        <Icon
          name="heartPrimary"
          width={40}
          height={38}
          style={{
            position: 'absolute',
            top: 214,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <Icon
          name="heartSecondary"
          width={40}
          height={38}
          style={{
            position: 'absolute',
            top: 269,
            right: '35%',
          }}
        />
        <Icon
          name="candy"
          width={281}
          height={261}
          style={{
            position: 'absolute',
            top: 288,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </main>
    </div>
  );
}
