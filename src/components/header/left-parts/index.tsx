'use client';

import { PATHS } from '@/const/paths';
import { useRouter } from 'next/navigation';

export const LeftParts = () => {
  const { push } = useRouter();
  return (
    <div
      className=" font-bold text-xl mx-6 text-nowrap cursor-pointer"
      onClick={() => {
        push(PATHS.ROOT);
      }}
    >
      TOP
    </div>
  );
};
