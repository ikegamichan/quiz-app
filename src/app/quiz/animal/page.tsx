'use client';
import { AnswerButtons } from '@/components/answer-buttons';
import { ChangeQuizButton } from '@/components/change-quiz-button';
import { ChooseAnswer } from '@/components/choose-answer';
import { globalNaviMenuList } from '@/components/global-navi/const';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { animalQuizList } from './const/animal-quiz-list';

export default function Page() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerValue, setAnswerValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isAnswerCorrected, setIsAnswerCorrected] = useState(false);

  const goToNextQuiz = () => {
    setQuestionNumber(questionNumber + 1);
    setIsClicked(false);
  };
  const backToPreviousQuiz = () => {
    setQuestionNumber(questionNumber - 1);
    setIsClicked(false);
  };
  const showNextButton = questionNumber + 1 !== animalQuizList.length;
  const showPreviousButton = questionNumber !== 0;
  const chooseCorrectAnswer = isClicked && isAnswerCorrected;
  const chooseWrongAnswer = isClicked && !isAnswerCorrected;
  const clickAnswer = chooseCorrectAnswer || chooseWrongAnswer;

  const pathName = usePathname();

  const currentPageName = globalNaviMenuList.map((item) => {
    if (pathName === item.path) {
      return item.name;
    }
  });

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 10rem)',
        textAlign: 'center',
        width: '90%',
        margin: '0 auto',
      }}
    >
      <div className="text-left font-bold text-xl mt-4">{currentPageName}</div>
      <div>
        <div className="w-full select-none">
          <div className="mx-auto px-4 py-1 w-fit mb-8 border-2 rounded-xl border-orange-500 bg-orange-100 mt-4">
            だい <span className="text-3xl">{questionNumber + 1}</span> もん
          </div>
          <div className="w-full mb-8 flex  items-center justify-around">
            <div className="ml-4">
              <ChangeQuizButton
                changeQuiz={backToPreviousQuiz}
                showButton={showPreviousButton}
                text={'<'}
              />
            </div>
            <div className="mr-4">
              <ChangeQuizButton
                changeQuiz={goToNextQuiz}
                showButton={showNextButton}
                text={'>'}
              />
            </div>
          </div>
          <div>
            <div>{animalQuizList[questionNumber].question}</div>
            <div className="flex gap-4 pt-2 items-center justify-center mb-4">
              <AnswerButtons
                answers={animalQuizList[questionNumber].answers}
                chooseAnswer={animalQuizList[questionNumber].trueAnswer}
                setIsClicked={setIsClicked}
                setIsAnswerCorrected={setIsAnswerCorrected}
                setAnswerValue={setAnswerValue}
              />
            </div>
          </div>
        </div>

        <ChooseAnswer
          chooseCorrectAnswer={chooseCorrectAnswer}
          chooseWrongAnswer={chooseWrongAnswer}
          answerValue={answerValue}
          clickAnswer={clickAnswer}
        />
      </div>
    </div>
  );
}
