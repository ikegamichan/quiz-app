export const animalQuizList = [
  {
    question: 'いちばん あしのはやい どうぶつは どれだ？',
    answers: ['ライオン', 'チーター', 'オオカミ'],
    trueAnswer: 'チーター',
  },
  {
    question: 'あかいあせをかく どうぶつは どれだ？',
    answers: ['サイ', 'ゾウ', 'カバ'],
    trueAnswer: 'カバ',
  },
  {
    question: 'モーとなく どうぶつは どれだ？',
    answers: ['キリン', 'ゾウ', 'ブタ'],
    trueAnswer: 'キリン',
  },
  {
    question: 'モーとなく どうぶつは どれだ？②',
    answers: ['カメ', 'ウシ', 'ウマ'],
    trueAnswer: 'ウシ',
  },
  {
    question: 'いつもかたあしでたっている ピンクのとりは どれだ？',
    answers: ['カラス', 'フラミンゴ', 'ツル'],
    trueAnswer: 'フラミンゴ',
  },
  {
    question:
      'フラミンゴが とぶときにひつような じょそうきょりは なんメートル？',
    answers: ['15メートル', '25メートル', '35メートル'],
    trueAnswer: '25メートル',
  },
  {
    question: 'フラミンゴが いつもかたあしで たっているのはなんで？',
    answers: ['さむいから', 'あしが1ぽんしかないから', 'バランスがとれるから'],
    trueAnswer: 'さむいから',
  },
  {
    question: 'ゴリラは すきなあいてに どんなアピールをする？',
    answers: ['はなをプレゼントする', 'うんこをなげる', 'うたっておどる'],
    trueAnswer: 'うんこをなげる',
  },
  {
    question: 'つちをてでほって つちのなかでくらす どうぶつは なんだ？',
    answers: ['キツネ', 'たぬき', 'モグラ'],
    trueAnswer: 'モグラ',
  },
  {
    question: 'おおきなとおぼえで なかまをよぶ どうぶつはなんだ？',
    answers: ['シカ', 'ロバ', 'オオカミ'],
    trueAnswer: 'オオカミ',
  },
  {
    question:
      'うまににていて うまよりせがひくい みみがおおきいどうぶつは なんだ？',
    answers: ['ウマ', 'ロバ', 'シカ', 'うさぎ'],
    trueAnswer: 'ロバ',
  },
  {
    question: 'コアラは 1にちに なんじかんくらいねる？',
    answers: ['20じかん', '22じかん', '16じかん'],
    trueAnswer: '22じかん',
  },
  {
    question: 'うまれたてのフラミンゴは なにいろ？',
    answers: ['あお', 'しろ', 'ちゃいろ'],
    trueAnswer: 'しろ',
  },
  {
    question: 'ジャイアントパンダのゆびは なんほん？',
    answers: ['5ほん', '6ぽん', '7ほん'],
    trueAnswer: '7ほん',
  },
  {
    question: 'ゾウはどうやってねてる？',
    answers: ['たったままねる', 'よこになってねる', 'ねない'],
    trueAnswer: 'たったままねる',
  },
  {
    question: 'ラクダのコブのなかみは？',
    answers: ['みず', 'しぼう', 'きんにく'],
    trueAnswer: 'しぼう',
  },
  {
    question: 'サメのはは なんほんいれかわる？',
    answers: ['10ぽん', '100ぽん', '1,000ぼん', 'むげん'],
    trueAnswer: 'むげん',
  },
  {
    question: 'クラゲのからだの90パーセントは なにでできている？',
    answers: ['すいぶん', 'ほね', 'ひふ'],
    trueAnswer: 'すいぶん',
  },
  {
    question: 'なまこのからだの90パーセントは なにでできている？',
    answers: ['すいぶん', 'ほね', 'ひふ'],
    trueAnswer: 'すいぶん',
  },
].map((item, idx) => ({
  id: idx + 1,
  ...item,
}));
