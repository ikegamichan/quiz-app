'use client';

import { Dispatch, SetStateAction } from 'react';

type Props = {
  buttonText: string;
  value: string;
  chooseAnswer: string;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setIsAnswerCorrected: Dispatch<SetStateAction<boolean>>;
  setAnswerValue: Dispatch<SetStateAction<string>>;
};

export const AnswerButton = ({
  buttonText,
  value,
  chooseAnswer,
  setIsClicked,
  setIsAnswerCorrected,
  setAnswerValue,
}: Props) => {
  const isCorrect = value === chooseAnswer;
  const checkingAnswer = () => {
    setIsClicked(true);
    setAnswerValue(buttonText);
    isCorrect ? setIsAnswerCorrected(true) : setIsAnswerCorrected(false);
  };

  return (
    <button
      value={buttonText}
      onClick={checkingAnswer}
      className="gap-2 m-2 p-2 bg-amber-400 border-2 rounded-md min-w-32 box-border hover:bg-sky-700 hover:text-white hover:font-bold transition duration-500 ease-in-out"
    >
      {buttonText}
    </button>
  );
};
