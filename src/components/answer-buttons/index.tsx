import { Dispatch, SetStateAction } from 'react';
import { AnswerButton } from '../answer-button';

type Props = {
  answers: string[];
  chooseAnswer: string;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  setIsAnswerCorrected: Dispatch<SetStateAction<boolean>>;
  setAnswerValue: Dispatch<SetStateAction<string>>;
};

export const AnswerButtons = ({
  answers,
  chooseAnswer,
  setIsClicked,
  setIsAnswerCorrected,
  setAnswerValue,
}: Props) => {
  return answers.map((item, idx) => {
    return (
      <AnswerButton
        buttonText={item}
        key={idx}
        value={item}
        chooseAnswer={chooseAnswer}
        setIsClicked={setIsClicked}
        setIsAnswerCorrected={setIsAnswerCorrected}
        setAnswerValue={setAnswerValue}
      />
    );
  });
};
