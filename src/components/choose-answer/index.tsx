type Props = {
  chooseCorrectAnswer: boolean;
  chooseWrongAnswer: boolean;
  answerValue: string;
  clickAnswer: boolean;
};

export const ChooseAnswer = (props: Props) => {
  const { chooseCorrectAnswer, chooseWrongAnswer, answerValue, clickAnswer } =
    props;

  return (
    <div style={{ visibility: clickAnswer ? 'visible' : 'hidden' }}>
      {chooseCorrectAnswer && (
        <div className="text-xl font-bold mt-4">
          せいかい！すごいぞ！
          <div>つぎのもんだいにすすもう！</div>
        </div>
      )}
      {chooseWrongAnswer && (
        <div className="mt-4">
          <div>「{answerValue}」ではないよ！</div>
          <div>もういちどかんがえてみて！</div>
        </div>
      )}
    </div>
  );
};
