"use strict";

// Create a random number between 1 - 20;
let correctNumber = Math.floor(Math.random() * 20 + 1);
let score = Number($(".score").text());

// after a guess input the check the guess against the number
$(".check").on("click", function () {
  const guessNumber = $(".guess").val();
  // if guess > number lower score by 1 and change .message .text to "📈 Too High!"
  if (
    guessNumber > correctNumber &&
    score !== 0 &&
    guessNumber <= 20 &&
    guessNumber >= 1
  ) {
    score--;
    $(".message").text("📈 Too High!");
    // if guess < number lower score by 1 and change .message .text to "📉 Too Low!"
  } else if (
    guessNumber < correctNumber &&
    score !== 0 &&
    guessNumber <= 20 &&
    guessNumber >= 1
  ) {
    score--;
    $(".message").text("📉 Too Low!");
    // if guess = number change .message .text to "🎉 Correct Number!" and flash color
  } else if (guessNumber == correctNumber) {
    $(".message").text("🎉 Correct Number!");
    $("body").css("background-color", "#60b347");
    $(".number").text(guessNumber);
    // if .score .innerHtml > .highscore .innerHtml
    let highScore = Number($(".highscore").text());
    if (score > highScore) {
      highScore = score;
      $(".highscore").text(highScore);
    }
    // if score = 0 change .message .text to "💥 Game Over You Lost!"
  } else if (score == 0) {
    $(".message").text("💥 Game Over You Lost!");
  } else {
    $(".message").text("⛔️ No number!");
  }

  $(".score").text(score);
});

// set again button to reset the game, but leaving the highScore
$(".again").on("click", function () {
  correctNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  $(".score").text(score);
  $(".guess").val("");
  $(".message").text("Start guessing...");
  $("body").css("background-color", "#222");
  $(".number").text("?");
});
