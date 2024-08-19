import { LeftParts } from './left-parts';
import { RightParts } from './right-parts';

export const Header = () => {
  return (
    <div className=" w-full flex items-center px-6 h-20 bg-slate-400">
      <LeftParts />
      <RightParts />
    </div>
  );
};
