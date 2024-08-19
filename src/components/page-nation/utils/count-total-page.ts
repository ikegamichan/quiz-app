type Props = {
  questions: number;
  questionsPerPage: number;
};

export const countTotalPage = ({ questions, questionsPerPage }: Props) => {
  const totalPages = Math.ceil(questions / questionsPerPage);
  return totalPages;
};
