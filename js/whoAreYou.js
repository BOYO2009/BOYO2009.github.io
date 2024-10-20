// Result calculation logic similar to your Google Script code
function calculateResult() {
  console.log("calculateResult function called");
  const form = document.forms["nbaForm"];
  console.log("form:", form);
  let answer1 = getRadioButtonAnswer(form["answer1"]);
  console.log("answer1:", answer1);
  let answer2 = getRadioButtonAnswer(form["answer2"]);
  console.log("answer2:", answer2);
  let answer3 = getRadioButtonAnswer(form["answer3"]);
  console.log("answer3:", answer3);
  let answer4 = getRadioButtonAnswer(form["answer4"]);
  console.log("answer4:", answer4);
  let answer5 = getRadioButtonAnswer(form["answer5"]);
  console.log("answer5:", answer5);
  let answer6 = getRadioButtonAnswer(form["answer6"]);
  console.log("answer6:", answer6);
  let answer7 = getRadioButtonAnswer(form["answer7"]);
  console.log("answer7:", answer7);
  let answer8 = getRadioButtonAnswer(form["answer8"]);
  console.log("answer8:", answer8);
  let answer9 = getRadioButtonAnswer(form["answer9"]);
  console.log("answer9:", answer9);

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

  // Scoring logic for answer1
  if (answer1 == "Taking a shot from 3") score[0]++;
  if (answer1 == "Going for a Layup") score[3]++;
  if (answer1 == "Dunking the ball") score[4]++;
  if (answer1 == "Taking a shot from midrange") score[2]++;

  // Scoring logic for answer2
  if (answer2 == "Shoot") score[0]++;
  if (answer2 == "Get past the opponent, and make a layup") score[2]++;
  if (answer2 == "Run through everyone, and do a layup or dunk") score[4]++;
  if (answer2 == "Fake a shot, and pass") score[1]++;

  // Scoring logic for answer3
  if (answer3 == "Stay under the hoop, and dunk it when you get the ball") score[4]++;
  if (answer3 =="Shake off you defender, get the ball from a pass, and then shoot from midrange") score[2]++;
  if (answer3 == "Get a screen from a teammate, and shoot a 3 from one of the corners") score[0]++;
  if (answer3 == "Shake off your defender, get the ball from a pass, and then go in for a layup, or a floater") score[3]++;

  // Scoring logic for answer4
  if (answer4 == "A Point Guard") score[3]++;
  if (answer4 == "A Shooting Guard") score[2]++;
  if (answer4 == "A Center") score[4]++;
  if (answer4 == "A Small Forward") score[1]++; 

  // Scoring logic for answer5
  if (answer5 == "Yes") score[0]++;
  if (answer5 == "No") score[4]++;  

  // Scoring logic for answer6
  if (answer6 == "Break their ankles") score[3]++;
  if (answer6 == "Pass to a teammate, and then get the ball back after shaking them off, and then go for a layup") score[1]++;
  if (answer6 == "Dribble a bit, and then shoot") score[0]++;
  if (answer6 == "Do a number of passes before getting the ball and either shooting, or going in for a layup") score[2]++;

  // Scoring logic for answer7  
  if (answer7 == "Run as fast as you can while dribbling, and go for a dunk, or a layup") score[2]++;
  if (answer7 == "Pass to your teammates, and let them shoot, or go for a layup") score[1]++;
  if (answer7 == "Run as fast as you can while dribbling, go to a certain spot on the court, and shoot a midrange") score[3]++;
  if (answer7 == "Run as fast as you can while dribbling, go to a certain spot on the court, and shoot a 3") score[0]++; 

  // Scoring logic for answer8
  if (answer8 == "Golden State Warriors") score[0]++;
  if (answer8 == "Los Angeles Lakers") score[4]++;
  if (answer8 == "Chicago Bulls") score[2]++;
  if (answer8 == "Philadelphia 70 Sixers") score[3]++;

  // Scoring logic for answer9
  if (answer9 == "3") score[3]++;
  if (answer9 == "6") score[1]++;
  if (answer9 == "34") score[4]++;
  if (answer9 == "23") score[2]++;
  if (answer9 == "30") score[0]++;

  // Continue applying your scoring logic for all answers...

  // Determine the player with the highest score
  let maxScore = Math.max(...score);
  console.log("maxScore:", maxScore);
  let playerIndex = score.indexOf(maxScore);
  console.log("playerIndex:", playerIndex);
  let playerName = people[playerIndex];
  console.log("playerName:", playerName);

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
