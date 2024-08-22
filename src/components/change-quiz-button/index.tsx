import { MouseEventHandler } from 'react';

type Props = {
  changeQuiz: MouseEventHandler<HTMLDivElement>;
  showButton: boolean;
  text: string;
};

export const ChangeQuizButton = ({ changeQuiz, showButton, text }: Props) => {
  return (
    <div style={{ visibility: showButton ? 'visible' : 'hidden' }}>
      <div
        className="cursor-pointer w-12 h-12 border-2 rounded-full border-slate-300 bg-slate-50 text-blue-400 hover:text-blue-600 text-2xl flex justify-center items-center"
        onClick={changeQuiz}
      >
        {text}
      </div>
    </div>
  );
};
