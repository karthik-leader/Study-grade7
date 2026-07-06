const topicSelect = document.getElementById("topic-select");
const modeSelect = document.getElementById("mode-select");
const newGameBtn = document.getElementById("new-game-btn");
const submitBtn = document.getElementById("submit-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const answerInput = document.getElementById("answer-input");
const questionText = document.getElementById("question-text");
const feedback = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const timerEl = document.getElementById("timer");
const topicChip = document.getElementById("topic-chip");
const summaryPanel = document.getElementById("summary-panel");
const summaryText = document.getElementById("summary-text");

const TOTAL_QUESTIONS = 10;
const TIMED_SECONDS = 60;

const topicLabels = {
  mixed: "Mixed Practice",
  integers: "Integers",
  fractions: "Fractions",
  decimals: "Decimals",
  equations: "One-Step Equations",
  percent: "Percent"
};

const state = {
  score: 0,
  streak: 0,
  questionIndex: 0,
  totalQuestions: TOTAL_QUESTIONS,
  currentQuestion: null,
  mode: "practice",
  topic: "mixed",
  timeLeft: TIMED_SECONDS,
  timerId: null,
  roundActive: false,
  attempted: 0,
  correct: 0
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToTwo(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x || 1;
}

function simplifyFraction(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
}

function fractionToString(numerator, denominator) {
  if (denominator === 1) {
    return String(numerator);
  }
  return `${numerator}/${denominator}`;
}

function parseAnswer(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return { valid: false };
  }

  if (trimmed.includes("/")) {
    const parts = trimmed.split("/").map((part) => part.trim());
    if (parts.length !== 2) {
      return { valid: false };
    }

    const num = Number(parts[0]);
    const den = Number(parts[1]);
    if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) {
      return { valid: false };
    }

    return {
      valid: true,
      value: num / den
    };
  }

  const numeric = Number(trimmed);
  if (!Number.isFinite(numeric)) {
    return { valid: false };
  }

  return {
    valid: true,
    value: numeric
  };
}

function approximatelyEqual(a, b, tolerance = 0.01) {
  return Math.abs(a - b) <= tolerance;
}

function generateIntegerQuestion() {
  const operation = ["+", "-", "*"][randomInt(0, 2)];
  const a = randomInt(-15, 20);
  const b = randomInt(-15, 20);

  if (operation === "+") {
    return {
      prompt: `${a} + ${b} = ?`,
      answer: a + b,
      explanation: `${a} + ${b} = ${a + b}`
    };
  }

  if (operation === "-") {
    return {
      prompt: `${a} - (${b}) = ?`,
      answer: a - b,
      explanation: `${a} - (${b}) = ${a - b}`
    };
  }

  return {
    prompt: `${a} × ${b} = ?`,
    answer: a * b,
    explanation: `${a} × ${b} = ${a * b}`
  };
}

function generateFractionQuestion() {
  const d1 = randomInt(2, 10);
  const d2 = randomInt(2, 10);
  const n1 = randomInt(1, d1 - 1);
  const n2 = randomInt(1, d2 - 1);

  const operation = ["+", "-"][randomInt(0, 1)];
  const numerator = operation === "+" ? n1 * d2 + n2 * d1 : n1 * d2 - n2 * d1;
  const denominator = d1 * d2;
  const simplified = simplifyFraction(numerator, denominator);

  return {
    prompt: `${n1}/${d1} ${operation} ${n2}/${d2} = ?`,
    answer: simplified.numerator / simplified.denominator,
    explanation: `Simplified answer: ${fractionToString(simplified.numerator, simplified.denominator)}`
  };
}

function generateDecimalQuestion() {
  const a = roundToTwo(randomInt(12, 95) / 10);
  const b = roundToTwo(randomInt(11, 88) / 10);
  const operation = ["+", "-"][randomInt(0, 1)];
  const result = operation === "+" ? a + b : a - b;

  return {
    prompt: `${a.toFixed(1)} ${operation} ${b.toFixed(1)} = ?`,
    answer: roundToTwo(result),
    explanation: `Result: ${roundToTwo(result)}`
  };
}

function generateEquationQuestion() {
  const x = randomInt(-12, 12);
  const a = randomInt(2, 10);
  const b = randomInt(-15, 15);
  const result = a * x + b;

  return {
    prompt: `${a}x + (${b}) = ${result}. Solve for x.`,
    answer: x,
    explanation: `x = ${x}`
  };
}

function generatePercentQuestion() {
  const percent = [10, 15, 20, 25, 40, 50, 75][randomInt(0, 6)];
  const base = randomInt(20, 240);
  const answer = roundToTwo((percent / 100) * base);

  return {
    prompt: `What is ${percent}% of ${base}?`,
    answer,
    explanation: `${percent}% of ${base} = ${answer}`
  };
}

function generateQuestionByTopic(topic) {
  switch (topic) {
    case "integers":
      return generateIntegerQuestion();
    case "fractions":
      return generateFractionQuestion();
    case "decimals":
      return generateDecimalQuestion();
    case "equations":
      return generateEquationQuestion();
    case "percent":
      return generatePercentQuestion();
    default: {
      const generators = [
        generateIntegerQuestion,
        generateFractionQuestion,
        generateDecimalQuestion,
        generateEquationQuestion,
        generatePercentQuestion
      ];
      return generators[randomInt(0, generators.length - 1)]();
    }
  }
}

function updateHud() {
  scoreEl.textContent = String(state.score);
  streakEl.textContent = String(state.streak);
  currentQuestionEl.textContent = String(state.questionIndex);
  totalQuestionsEl.textContent = String(state.totalQuestions);
  timerEl.textContent = state.mode === "timed" ? `${state.timeLeft}s` : "--";
  topicChip.textContent = topicLabels[state.topic];
}

function setRoundActive(active) {
  state.roundActive = active;
  answerInput.disabled = !active;
  submitBtn.disabled = !active;
}

function loadNextQuestion() {
  if (!state.roundActive) {
    return;
  }

  if (state.mode === "practice" && state.questionIndex >= state.totalQuestions) {
    endRound();
    return;
  }

  state.currentQuestion = generateQuestionByTopic(state.topic);
  state.questionIndex += 1;
  questionText.textContent = state.currentQuestion.prompt;
  answerInput.value = "";
  answerInput.focus();
  feedback.className = "feedback";
  feedback.textContent = "Think it through and submit your answer.";
  updateHud();
}

function addScore(isCorrect) {
  if (!isCorrect) {
    state.streak = 0;
    return;
  }

  state.streak += 1;
  const streakBonus = state.streak >= 3 ? 5 : 0;
  state.score += 10 + streakBonus;
}

function submitCurrentAnswer() {
  if (!state.roundActive || !state.currentQuestion) {
    return;
  }

  const parsed = parseAnswer(answerInput.value);
  if (!parsed.valid) {
    feedback.className = "feedback wrong";
    feedback.textContent = "Enter a valid number, decimal, or fraction like 3/4.";
    return;
  }

  const isCorrect = approximatelyEqual(parsed.value, state.currentQuestion.answer);
  state.attempted += 1;
  if (isCorrect) {
    state.correct += 1;
  }

  addScore(isCorrect);
  updateHud();

  if (isCorrect) {
    feedback.className = "feedback correct";
    feedback.textContent = "Correct! Great work.";
  } else {
    feedback.className = "feedback wrong";
    feedback.textContent = `Not quite. ${state.currentQuestion.explanation}`;
  }

  window.setTimeout(() => {
    if (state.roundActive) {
      loadNextQuestion();
    }
  }, 800);
}

function endRound() {
  setRoundActive(false);
  clearInterval(state.timerId);
  state.timerId = null;

  const accuracy = state.attempted === 0 ? 0 : Math.round((state.correct / state.attempted) * 100);
  const message = state.mode === "timed"
    ? `Time's up. You answered ${state.correct} correctly out of ${state.attempted} attempts (${accuracy}% accuracy). Final score: ${state.score}.`
    : `You completed ${state.totalQuestions} questions with ${state.correct} correct answers (${accuracy}% accuracy). Final score: ${state.score}.`;

  questionText.textContent = "Round complete.";
  feedback.className = "feedback";
  feedback.textContent = "Choose your settings and play again.";
  summaryText.textContent = message;
  summaryPanel.hidden = false;
}

function startTimer() {
  clearInterval(state.timerId);
  state.timeLeft = TIMED_SECONDS;
  updateHud();

  state.timerId = window.setInterval(() => {
    state.timeLeft -= 1;
    updateHud();

    if (state.timeLeft <= 0) {
      endRound();
    }
  }, 1000);
}

function startNewGame() {
  state.score = 0;
  state.streak = 0;
  state.questionIndex = 0;
  state.currentQuestion = null;
  state.mode = modeSelect.value;
  state.topic = topicSelect.value;
  state.attempted = 0;
  state.correct = 0;

  summaryPanel.hidden = true;
  setRoundActive(true);
  updateHud();

  if (state.mode === "timed") {
    startTimer();
  } else {
    clearInterval(state.timerId);
    state.timerId = null;
    state.timeLeft = TIMED_SECONDS;
  }

  loadNextQuestion();
}

newGameBtn.addEventListener("click", startNewGame);
playAgainBtn.addEventListener("click", startNewGame);
submitBtn.addEventListener("click", submitCurrentAnswer);
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitCurrentAnswer();
  }
});

topicSelect.addEventListener("change", () => {
  topicChip.textContent = topicLabels[topicSelect.value];
});

updateHud();
topicChip.textContent = topicLabels[topicSelect.value];
