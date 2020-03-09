export const scoreString = score => `Score: ${score}`;

function collectStar(score, scoreText) {
  return function (player, star) {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText(scoreString(score));
    if(score === 120){
      alert('나머지 한개는 먹을 수 없을 것이다 휴먼\n포기해라!');
    }
    if(score === 130){
      alert('대체 무슨 꼼수를..');
    }
  }
}

export default collectStar;
