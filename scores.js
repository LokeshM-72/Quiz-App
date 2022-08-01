const ScoresList = document.getElementById("ScoresList");
const Scores = JSON.parse(localStorage.getItem("highScores")) || [];

ScoresList.innerHTML = Scores
  .map(score => {
    return `<li class="score">${score.name} - ${score.score}</li>`;
  })
  .join("");
