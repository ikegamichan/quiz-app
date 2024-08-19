'use client';

import { useState } from 'react';
import { ListItem } from '../list-item';

type Props = {
  listItems: { id: number; name: string; path: string }[];
};
export const ListITems = ({ listItems }: Props) => {
  const animalQuizTitle = 'いきものクイズ';
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const mouseEnter = () => {
    setIsMouseEnter(true);
  };

  const mouseLeave = () => {
    setIsMouseEnter(false);
  };

  return listItems.map((menu) => {
    return menu.name === animalQuizTitle ? (
      <div>
        <div className="relative">
          <ListItem
            key={menu.id}
            listItemName={menu.name}
            path={menu.path}
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
          />

          {isMouseEnter && (
            <div className="absolute right-1/3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-transparent border-b-stone-600">
              <div className="absolute top-4 -left-6 border rounded-md border-stone-600 bg-stone-600 text-stone-50 solid p-4 w-60">
                <div>どうぶつクイズ</div>
                <div>うみのいきものクイズ</div>
                <div>むしクイズ</div>
              </div>
            </div>
          )}
        </div>
      </div>
    ) : (
      <ListItem key={menu.id} listItemName={menu.name} path={menu.path} />
    );
  });
};
