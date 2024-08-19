'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  listItemName: string;
  path: string;
  mouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
  mouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
  children?: ReactNode;
};

export const ListItem = ({
  listItemName,
  path,
  mouseOver,
  mouseLeave,
  children,
}: Props) => {
  const { push } = useRouter();
  return (
    <div
      className="cursor-pointer px-2 py-1"
      onClick={() => {
        push(path);
      }}
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    >
      {listItemName}
      {children}
    </div>
  );
};
