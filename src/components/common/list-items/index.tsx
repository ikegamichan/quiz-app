'use client';

import { useState } from 'react';
import { ListItem } from '../list-item';

type Props = {
  listItems: { id: number; name: string; path: string }[];
};
export const ListITems = ({ listItems }: Props) => {
  const subMenuItems = [
    { id: 1, name: 'どうぶつ' },
    { id: 2, name: 'うみのいきもの' },
    { id: 3, name: 'むし' },
  ];

  const animalQuizTitle = 'いきものクイズ';

  const [isMouseOver, setIsMouseOver] = useState(false);
  const mouseOver = () => {
    setIsMouseOver(true);
  };
  const mouseLeave = () => {
    setIsMouseOver(false);
  };

  return listItems.map((menu) => {
    return menu.name === animalQuizTitle ? (
      <div key={menu.id}>
        <div className="relative">
          <ListItem
            listItemName={menu.name}
            path={menu.path}
            mouseOver={mouseOver}
            mouseLeave={mouseLeave}
          >
            {isMouseOver && (
              <div className="absolute p-4 left-0 rounded-sm  bg-slate-600 text-slate-100 ml-2 cursor-default">
                <div className="flex text-nowrap gap-4">
                  {subMenuItems.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="p-4 border border-slate-200 bg-slate-600 rounded-sm cursor-pointer"
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </ListItem>
        </div>
      </div>
    ) : (
      <ListItem key={menu.id} listItemName={menu.name} path={menu.path} />
    );
  });
};
