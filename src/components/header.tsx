'use client';

import { TypeAnimation } from 'react-type-animation';
import { FC } from 'react';

export const MainHeading: FC = () => {
  return (
    <h1 className="flex flex-col gap-2 text-3xl md:text-6xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-800 to-fuchsia-400">
        Hi, I am
      </span>
      <TypeAnimation
        sequence={[
          'marcel',
          2000,
          'maersux',
          2000
        ]}
        wrapper="span"
        speed={25}
        repeat={Infinity}
      />
    </h1>
  );
};