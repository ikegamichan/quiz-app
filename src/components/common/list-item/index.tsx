'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

type Props = {
  listItemName: string;
  path: string;
  mouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
  mouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
};

export const ListItem = ({
  listItemName,
  path,
  mouseEnter,
  mouseLeave,
}: Props) => {
  const { push } = useRouter();
  return (
    <div
      className="cursor-pointer px-2 py-1"
      onClick={() => {
        push(path);
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {listItemName}
    </div>
  );
};
