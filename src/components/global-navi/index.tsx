import { ListITems } from '../common/list-items';
import { globalNaviMenuList } from './const';

export const GlobalNavi = () => {
  return (
    <div className="flex items-center text-right justify-end w-full">
      <ListITems listItems={globalNaviMenuList} />
    </div>
  );
};
