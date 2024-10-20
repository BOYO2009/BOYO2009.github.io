function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html").setSandboxMode(
    HtmlService.SandboxMode.IFRAME
  );
}

// Use this code for Google Docs, Forms, or new Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .createMenu("Dialog")
    .addItem("Open", "openDialog")
    .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile("index.html").setSandboxMode(
    HtmlService.SandboxMode.IFRAME
  );
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .showModalDialog(html, "Dialog title");
}

function debugit() {
  var sheet = SpreadsheetApp.getActiveSheet(); // Identifies the sheet
  var lastRow = sheet.getLastRow(); // reads The last row of data
  var numRows = 1; // Number of rows to process. Set to 1, will only look at the last submission.
  // Fetch the data
  var dataRange = sheet.getRange(lastRow, 1, numRows, 20); // Selects the data for the last row and columns 1 to 10
  var data = dataRange.getValues();
  // Makes the row of data
  var row = data[0];
  var params = [];
  p = 0;
  while (row[2 + p].length > 0 || row[2 + p] > 0) {
    params[p] = row[2 + p];
    p++;
  }
  // if you have 4 questions, you need 4 statements (params[0] -> params[3]) below
  // if you have more questions continues the sequence (e.g 6 Qs add ,params[4],params[5])
  postit(
    params[0],
    params[1],
    params[2],
    params[3],
    params[4],
    params[5],
    params[6],
    params[7],
    params[8]
  );
}

function postit(
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  answer7,
  answer8,
  answer9
) {
  var dataS = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = dataS.getSheetByName("Sheet1");
  var lastRow = sheet.getLastRow() + 1;
  // The row below the last row of data

  sheet.getRange(lastRow, 1).setValue(new Date()); // adds the time
  var useremail = Session.getActiveUser().getEmail();
  sheet.getRange(lastRow, 2).setValue(useremail); // adds the EMAIL
  // Writes in the form entries
  // repeat for each answer sent
  //  add one to the number each time for a new column
  sheet.getRange(lastRow, 3).setValue(answer1);
  sheet.getRange(lastRow, 4).setValue(answer2);
  sheet.getRange(lastRow, 5).setValue(answer3);
  sheet.getRange(lastRow, 6).setValue(answer4);
  sheet.getRange(lastRow, 7).setValue(answer5);
  sheet.getRange(lastRow, 8).setValue(answer6);
  sheet.getRange(lastRow, 9).setValue(answer7);
  sheet.getRange(lastRow, 10).setValue(answer8);
  sheet.getRange(lastRow, 11).setValue(answer9);

  //    LIST OF POSSIBILITIES
  //                  0              1               2               3                4
  var people = [
    "Steph Curry",
    "Lebron James",
    "Micheal Jordan",
    "Allen Iverson",
    "Shaquille O'Neal",
  ];
  // You need as many zeros as things in list
  var score = [0, 0, 0, 0, 0]; // 5 zeros, because 5 people in my list, you may need to add more

  // You will score point for the answer that matches the person
  // score[..]++ means add one

  if (answer1 == "Going for a Layup") {
    score[3]++; // means add one to the score of people[2] in the list = Ringo
  }
  if (answer1 == "Taking a shot from midrange") {
    score[2]++;
  }
  if (answer1 == "Taking a shot from 3") {
    score[0]++;
  }
  if (answer1 == "Dunking the ball") {
    score[4]++;
  }

  if (answer2 == "Shoot") {
    score[0]++;
  }
  if (answer2 == "Get past the opponent, and make a layup") {
    score[2]++;
  }
  if (answer2 == "Run through everyone, and do a layup or dunk") {
    score[4]++;
  }
  if (answer2 == "Fake a shot, and pass") {
    score[1]++;
  }

  if (answer3 == "Stay under the hoop, and dunk it when you get the ball") {
    score[4]++;
  }
  if (
    answer3 ==
    "Shake off you defender, get the ball from a pass, and then shoot from midrange"
  ) {
    score[2]++;
  }
  if (
    answer3 ==
    "Get a screen from a teammate, and shoot a 3 from one of the corners"
  ) {
    score[0]++;
  }
  if (
    answer3 ==
    "Shake off your defender, get the ball from a pass, and then go in for a layup, or a floater"
  ) {
    score[3]++;
  }

  if (answer4 == "A Point Guard") {
    score[3]++;
  }
  if (answer4 == "A Shooting Guard") {
    score[2]++;
  }
  if (answer4 == "A Center") {
    score[4]++;
  }
  if (answer4 == "A Small Forward") {
    score[1]++;
  }

  if (answer5 == "Yes") {
    score[0]++;
  }
  if (answer5 == "No") {
    score[4]++;
  }

  if (answer6 == "Break their ankles") {
    score[3]++;
  }
  if (
    answer6 ==
    "Pass to a teammate, and then get the ball back after shaking them off, and then go for a layup"
  ) {
    score[1]++;
  }
  if (answer6 == "Dribble a bit, and then shoot") {
    score[0]++;
  }
  if (
    answer6 ==
    "Do a number of passes before getting the ball and either shooting, or going in for a layup"
  ) {
    score[2]++;
  }

  if (
    answer7 ==
    "Run as fast as you can while dribbling, and go for a dunk, or a layup"
  ) {
    score[2]++;
  }
  if (
    answer7 == "Pass to your teammates, and let them shoot, or go for a layup"
  ) {
    score[1]++;
  }
  if (
    answer7 ==
    "Run as fast as you can while dribbling, go to a certain spot on the court, and shoot a midrange"
  ) {
    score[3]++;
  }
  if (
    answer7 ==
    "Run as fast as you can while dribbling, go to a certain spot on the court, and shoot a 3"
  ) {
    score[0]++;
  }

  if (answer8 == "San Francisco Warriors") {
    score[0]++;
  }
  if (answer8 == "Los Angeles Lakers") {
    score[4]++;
  }
  if (answer8 == "Philadelphia 70 Sixers") {
    score[3]++;
  }
  if (answer8 == "Cleveland Cavaliers") {
    score[1]++;
  }
  if (answer8 == "Chicago Bulls") {
    score[2]++;
  }

  if (answer9 == "3") {
    score[3]++;
  }
  if (answer9 == "6") {
    score[1]++;
  }
  if (answer9 == "34") {
    score[4]++;
  }
  if (answer9 == "23") {
    score[2]++;
  }
  if (answer9 == "30") {
    score[0]++;
  }

  var message = "Thanks for filling in my form! <br/><br/>";

  // Summarise the answers and work out who had the most
  biggest = -1; // will score the best score
  var best_id; // will be the ID of the best one
  for (i = 0; i <= 4; i++) {
    // 4, because there are 4 things in my list - you will need to change this number
    message = message + people[i] + " likeness score is " + score[i] + "<br/>";
    if (score[i] > biggest) {
      best_id = i;
      biggest = score[i];
    }
  }

  //  This bit writes the result in the 14th column of your sheet
  sheet.getRange(lastRow, 14).setValue(people[best_id]);

  // Let's announce the winner
  message = message + "<br/>It looks like you are " + people[best_id];

  // This is the bit that sends EMAILs (optional)
  //  this sets the message to HTML (don't change)
  var advancedArgs = { htmlBody: message };
  //  The sends the EMAIL to the student's EMAIL, you will have to allow it the first time you run. Remove the “//” from in front if you want it to post an EMAIL
  MailApp.sendEmail(useremail, "Survey results ", message, advancedArgs);

  // Sent the results message back to the webpage ....
  return message;
}
