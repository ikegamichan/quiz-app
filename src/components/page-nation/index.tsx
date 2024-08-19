import { Dispatch, SetStateAction } from 'react';

type Props = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const PageNation = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleCurrentPage = (clickNumber: number) => {
    setCurrentPage(clickNumber);
  };

  const currentPageStyle =
    'flex cursor-pointer justify-center items-center bg-indigo-300 rounded-full w-10 h-10 font-bold';
  const notCurrentPageStyle =
    ' flex cursor-pointer justify-center items-center w-10 h-10 rounded-full border-solid border-2 border-indigo-200';

  return (
    <div className="flex justify-center align-middle gap-2">
      {pageNumbers.map((number) => {
        return (
          <div
            key={number}
            className={
              number === currentPage ? currentPageStyle : notCurrentPageStyle
            }
            onClick={() => {
              handleCurrentPage(number);
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};
