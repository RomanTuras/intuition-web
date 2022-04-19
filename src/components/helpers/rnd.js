//Randomize Helper

export default {
  getAnswers(numberQuestions, rangeAnswers) {
    let answers = [];
    for (let i=0; i<numberQuestions; i++) {
      answers.push(this.getRandomInt(rangeAnswers))
    }
    return answers;
  },
  getFourAnswersFromNine() {
    const allowedAnswersFourOfNine = 4;
    let answers = new Array(9);
    answers.fill(1, 0, 9);
    let i = 0;
    while (i < allowedAnswersFourOfNine) {
      let index = this.getRandomInt(answers.length - 1);
      if (answers[index] !== 0) {
        answers[index] = 0;
        i++;
      }
    }
    return answers;
  },
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}