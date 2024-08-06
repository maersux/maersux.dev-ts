import { IconLink } from '@/components/iconLink';
import { MainHeading } from '@/components/header';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-12 md:p-24">
      <div className="w-96 max-w-[90%] flex flex-col gap-8">
        <MainHeading />
        <div className="flex flex-row items-center gap-4">
          <IconLink username="maersux" size={32} platform="github" />
          <IconLink username="maersux" size={32} platform="twitch" />
        </div>
      </div>
    </main>
  );
}
