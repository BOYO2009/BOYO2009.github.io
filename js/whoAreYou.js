// Result calculation logic similar to your Google Script code
function calculateResult() {
  const form = document.forms["nbaForm"];
  let answer1 = getRadioButtonAnswer(form["answer1"]);
  let answer2 = getRadioButtonAnswer(form["answer2"]);
  let answer3 = getRadioButtonAnswer(form["answer3"]);
  let answer4 = getRadioButtonAnswer(form["answer4"]);
  let answer5 = getRadioButtonAnswer(form["answer5"]);
  let answer6 = getRadioButtonAnswer(form["answer6"]);
  let answer7 = getRadioButtonAnswer(form["answer7"]);
  let answer8 = getRadioButtonAnswer(form["answer8"]);
  let answer9 = getRadioButtonAnswer(form["answer9"]);

  if (
    [
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
      answer9,
    ].includes(undefined)
  ) {
    alert("Please answer all the questions.");
    return;
  }

  // Players and their corresponding scores
  let people = [
    "Steph Curry",
    "LeBron James",
    "Michael Jordan",
    "Allen Iverson",
    "Shaquille O'Neal",
  ];
  let score = [0, 0, 0, 0, 0];

  // Scoring logic
  if (answer1 == "Taking a shot from 3") score[0]++;
  if (answer1 == "Going for a Layup") score[3]++;
  if (answer1 == "Dunking the ball") score[4]++;
  if (answer1 == "Taking a shot from midrange") score[2]++;

  // Continue applying your scoring logic for all answers...

  // Determine the player with the highest score
  let maxScore = Math.max(...score);
  let playerIndex = score.indexOf(maxScore);
  let playerName = people[playerIndex];

  // Display the result
  document.getElementById(
    "theresult"
  ).innerHTML = `<h3>You are ${playerName}!</h3>`;
}

function getRadioButtonAnswer(radioGroup) {
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      return radioGroup[i].value;
    }
  }
  return undefined;
}
