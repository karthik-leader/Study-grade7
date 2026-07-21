const subjectButtons = document.querySelectorAll(".subject-btn");
const subjectChip = document.getElementById("subject-chip");
const topicChip = document.getElementById("topic-chip");
const lengthSelect = document.getElementById("length-select");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");
const questionText = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const accuracyEl = document.getElementById("accuracy");
const topicsCoveredEl = document.getElementById("topics-covered");
const summaryPanel = document.getElementById("summary-panel");
const summaryText = document.getElementById("summary-text");
const weakTopicsEl = document.getElementById("weak-topics");

const SUBJECT_LABELS = {
  science: "Sciences",
  mathematics: "Mathematics",
  individuals: "Individuals and Societies"
};

const QUIZZES = {
  science: [
    {
      topic: "Scientific Inquiry",
      question: "Why is repeating an experiment important?",
      options: ["It makes the report longer", "It checks if the results are reliable", "It increases the temperature", "It removes all variables"],
      answer: 1,
      explanation: "Repeated trials help confirm whether results are consistent and reliable."
    },
    {
      topic: "Scientific Inquiry",
      question: "In an experiment testing fertilizer effect on plant growth, what is the dependent variable?",
      options: ["Type of fertilizer", "Amount of sunlight", "Plant height growth", "Type of pot"],
      answer: 2,
      explanation: "The dependent variable is what you measure, here the growth of the plant."
    },
    {
      topic: "Matter",
      question: "Which statement best describes particles in a gas?",
      options: ["They vibrate in fixed positions", "They are close together and flow", "They move freely and are far apart", "They are locked in a rigid pattern"],
      answer: 2,
      explanation: "Gas particles move quickly and are spread far apart."
    },
    {
      topic: "Matter",
      question: "Which process changes a liquid directly into a gas at the surface?",
      options: ["Condensation", "Evaporation", "Freezing", "Sublimation"],
      answer: 1,
      explanation: "Evaporation is the surface process where liquid particles escape into the gas phase."
    },
    {
      topic: "Chemistry Basics",
      question: "What is the difference between an element and a compound?",
      options: ["An element is made of one type of atom; a compound has atoms of different elements bonded", "A compound has one atom type only", "Elements can always be separated physically", "Compounds are always mixtures"],
      answer: 0,
      explanation: "Elements have one atom type, while compounds chemically combine two or more different atom types."
    },
    {
      topic: "Chemistry Basics",
      question: "Which method is best to separate sand from salt water?",
      options: ["Magnetism", "Filtration then evaporation", "Sieving only", "Chromatography"],
      answer: 1,
      explanation: "Filter out sand first, then evaporate water to recover salt."
    },
    {
      topic: "Forces and Motion",
      question: "If balanced forces act on an object, what happens to its motion?",
      options: ["It must speed up", "It must stop", "Its motion does not change", "It must move in a circle"],
      answer: 2,
      explanation: "Balanced forces mean net force is zero, so there is no change in velocity."
    },
    {
      topic: "Forces and Motion",
      question: "Which is an example of contact force?",
      options: ["Gravity", "Magnetic attraction", "Friction", "Electrostatic force"],
      answer: 2,
      explanation: "Friction acts between surfaces touching each other."
    },
    {
      topic: "Energy",
      question: "Energy cannot be created or destroyed. This describes: ",
      options: ["Law of acceleration", "Law of conservation of energy", "Law of mass action", "Theory of evolution"],
      answer: 1,
      explanation: "The conservation law states energy changes form but total energy remains constant."
    },
    {
      topic: "Energy",
      question: "In a flashlight, chemical energy in a battery mostly changes to:",
      options: ["Nuclear energy only", "Light and thermal energy", "Potential energy only", "Sound energy only"],
      answer: 1,
      explanation: "The battery provides electrical energy that becomes light and some heat."
    },
    {
      topic: "Biology Cells",
      question: "Which organelle controls most cell activities?",
      options: ["Cell membrane", "Nucleus", "Ribosome", "Vacuole"],
      answer: 1,
      explanation: "The nucleus contains genetic material and directs cell functions."
    },
    {
      topic: "Biology Cells",
      question: "Why do plant cells have chloroplasts?",
      options: ["For digestion", "For photosynthesis", "For respiration only", "For storing DNA"],
      answer: 1,
      explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis."
    },
    {
      topic: "Human Body Systems",
      question: "What is a major function of the circulatory system?",
      options: ["Breaking down food mechanically", "Transporting oxygen and nutrients", "Producing hormones only", "Detecting light"],
      answer: 1,
      explanation: "Blood carries oxygen, nutrients, and wastes throughout the body."
    },
    {
      topic: "Human Body Systems",
      question: "Which system works most directly with the respiratory system to provide oxygen to cells?",
      options: ["Digestive system", "Skeletal system", "Circulatory system", "Excretory system"],
      answer: 2,
      explanation: "The circulatory system transports oxygen from lungs to body cells."
    },
    {
      topic: "Ecology",
      question: "What role do decomposers play in an ecosystem?",
      options: ["They produce sunlight", "They recycle nutrients from dead organisms", "They consume only plants", "They fix nitrogen in all ecosystems"],
      answer: 1,
      explanation: "Decomposers break down dead matter and return nutrients to the soil."
    },
    {
      topic: "Ecology",
      question: "In a food chain, which group usually has the least available energy?",
      options: ["Producers", "Primary consumers", "Secondary consumers", "Top predators"],
      answer: 3,
      explanation: "Energy decreases at each trophic level, so top predators have the least available."
    },
    {
      topic: "Earth Systems",
      question: "What is the main cause of day and night on Earth?",
      options: ["Earth revolving around the Sun", "The Moon orbiting Earth", "Earth rotating on its axis", "Seasons changing"],
      answer: 2,
      explanation: "Earth rotates once roughly every 24 hours, creating day and night."
    },
    {
      topic: "Earth Systems",
      question: "Which layer of Earth is mostly liquid iron and nickel?",
      options: ["Crust", "Mantle", "Outer core", "Inner core"],
      answer: 2,
      explanation: "The outer core is a liquid metal layer beneath the mantle."
    },
    {
      topic: "Simple Machines",
      question: "A ramp is an example of which simple machine?",
      options: ["Wheel and axle", "Lever", "Inclined plane", "Pulley"],
      answer: 2,
      explanation: "A ramp is an inclined plane, which reduces force needed over a longer distance."
    },
    {
      topic: "Simple Machines",
      question: "Mechanical advantage is best described as:",
      options: ["Output force divided by input force", "Input force divided by output distance", "Total energy multiplied by time", "Power divided by speed"],
      answer: 0,
      explanation: "Mechanical advantage compares how much a machine multiplies force."
    },
    {
      topic: "Environmental Science",
      question: "Which action best supports sustainable resource use?",
      options: ["Using more single-use plastics", "Overfishing to meet demand", "Reducing, reusing, and recycling materials", "Clearing forests rapidly"],
      answer: 2,
      explanation: "The 3Rs reduce waste and conserve natural resources."
    }
  ],
  mathematics: [
    {
      topic: "Integers",
      question: "What is -7 + 12?",
      options: ["-19", "-5", "5", "19"],
      answer: 2,
      explanation: "Adding 12 to -7 gives 5."
    },
    {
      topic: "Integers",
      question: "What is -4 x -6?",
      options: ["-24", "24", "-10", "10"],
      answer: 1,
      explanation: "A negative times a negative gives a positive result."
    },
    {
      topic: "Fractions",
      question: "Simplify 18/24.",
      options: ["3/4", "2/3", "9/12", "6/8"],
      answer: 0,
      explanation: "Divide numerator and denominator by 6 to get 3/4."
    },
    {
      topic: "Fractions",
      question: "What is 2/5 + 1/10?",
      options: ["3/15", "1/2", "2/10", "3/10"],
      answer: 1,
      explanation: "2/5 is 4/10, and 4/10 + 1/10 = 5/10 = 1/2."
    },
    {
      topic: "Decimals",
      question: "Calculate 3.75 + 2.4.",
      options: ["6.15", "6.5", "5.95", "6.25"],
      answer: 0,
      explanation: "Align place values and add to get 6.15."
    },
    {
      topic: "Decimals",
      question: "What is 6.3 - 1.78?",
      options: ["4.52", "5.48", "4.42", "5.52"],
      answer: 0,
      explanation: "6.30 - 1.78 = 4.52."
    },
    {
      topic: "Ratio and Rate",
      question: "A recipe uses 2 cups flour for 3 servings. How much flour is needed for 9 servings?",
      options: ["4 cups", "5 cups", "6 cups", "9 cups"],
      answer: 2,
      explanation: "9 servings is 3 times as many, so flour is 2 x 3 = 6 cups."
    },
    {
      topic: "Ratio and Rate",
      question: "If a car travels 150 km in 3 hours, its average speed is:",
      options: ["45 km/h", "50 km/h", "60 km/h", "75 km/h"],
      answer: 1,
      explanation: "Average speed = distance/time = 150/3 = 50 km/h."
    },
    {
      topic: "Percent",
      question: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      answer: 2,
      explanation: "25% is one quarter, and one quarter of 200 is 50."
    },
    {
      topic: "Percent",
      question: "A shirt costs 80 dollars and is discounted by 15%. What is the discount amount?",
      options: ["10 dollars", "12 dollars", "15 dollars", "20 dollars"],
      answer: 1,
      explanation: "15% of 80 is 0.15 x 80 = 12 dollars."
    },
    {
      topic: "Expressions",
      question: "Which expression represents 5 less than 3x?",
      options: ["5 - 3x", "3x - 5", "3(x - 5)", "5x - 3"],
      answer: 1,
      explanation: "Less than means subtract 5 from 3x."
    },
    {
      topic: "Expressions",
      question: "Simplify: 4a + 3a - 2.",
      options: ["7a - 2", "12a - 2", "7a", "a - 2"],
      answer: 0,
      explanation: "Combine like terms: 4a + 3a = 7a."
    },
    {
      topic: "Equations",
      question: "Solve: x + 9 = 14.",
      options: ["x = 3", "x = 4", "x = 5", "x = 23"],
      answer: 2,
      explanation: "Subtract 9 from both sides to get x = 5."
    },
    {
      topic: "Equations",
      question: "Solve: 3x = 21.",
      options: ["x = 6", "x = 7", "x = 8", "x = 18"],
      answer: 1,
      explanation: "Divide both sides by 3 to get x = 7."
    },
    {
      topic: "Geometry",
      question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
      options: ["13 cm2", "26 cm2", "40 cm2", "80 cm2"],
      answer: 2,
      explanation: "Area = length x width = 8 x 5 = 40 cm2."
    },
    {
      topic: "Geometry",
      question: "The sum of angles in any triangle is:",
      options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
      answer: 1,
      explanation: "Interior angles of a triangle always add to 180 degrees."
    },
    {
      topic: "Volume",
      question: "Find the volume of a cuboid 3 cm x 4 cm x 5 cm.",
      options: ["12 cm3", "20 cm3", "60 cm3", "120 cm3"],
      answer: 2,
      explanation: "Volume = length x width x height = 3 x 4 x 5 = 60 cm3."
    },
    {
      topic: "Statistics",
      question: "Find the mean of 4, 6, 8, 10.",
      options: ["6", "7", "8", "9"],
      answer: 1,
      explanation: "Mean = (4 + 6 + 8 + 10)/4 = 28/4 = 7."
    },
    {
      topic: "Statistics",
      question: "What is the median of 3, 9, 1, 7, 5?",
      options: ["3", "5", "7", "9"],
      answer: 1,
      explanation: "Ordered list is 1, 3, 5, 7, 9, so median is 5."
    },
    {
      topic: "Probability",
      question: "A fair die is rolled. What is the probability of getting an even number?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      answer: 2,
      explanation: "Even outcomes are 2, 4, 6 so probability is 3/6 = 1/2."
    },
    {
      topic: "Probability",
      question: "A bag has 3 red and 2 blue marbles. Probability of selecting a blue marble?",
      options: ["2/5", "3/5", "1/2", "2/3"],
      answer: 0,
      explanation: "Blue outcomes are 2 out of 5 total marbles."
    }
  ],
  individuals: [
    {
      topic: "Historical Thinking",
      question: "What is a primary source?",
      options: ["A modern textbook summary", "An original document or artifact from the time period", "A website article written later", "A history documentary"],
      answer: 1,
      explanation: "Primary sources come directly from the period being studied."
    },
    {
      topic: "Historical Thinking",
      question: "Why do historians compare multiple sources about one event?",
      options: ["To avoid writing conclusions", "To identify bias and build a fuller understanding", "To reduce evidence", "To remove interpretation"],
      answer: 1,
      explanation: "Different perspectives help historians evaluate reliability and bias."
    },
    {
      topic: "Geography Skills",
      question: "Lines of latitude measure distance:",
      options: ["East-west from the Prime Meridian", "North-south from the Equator", "From sea level", "Across mountain ranges"],
      answer: 1,
      explanation: "Latitude shows how far north or south a place is from the Equator."
    },
    {
      topic: "Geography Skills",
      question: "A map scale of 1:100,000 means:",
      options: ["1 cm on map equals 1 km in reality", "1 cm on map equals 100,000 cm in reality", "100,000 cm on map equals 1 cm in reality", "The map has 100,000 symbols"],
      answer: 1,
      explanation: "Scale ratio compares map distance to actual distance."
    },
    {
      topic: "Physical Geography",
      question: "Which process breaks rocks into smaller pieces without moving them far away?",
      options: ["Erosion", "Deposition", "Weathering", "Condensation"],
      answer: 2,
      explanation: "Weathering breaks material down, while erosion transports it."
    },
    {
      topic: "Physical Geography",
      question: "Which biome typically has low rainfall and sparse vegetation?",
      options: ["Tropical rainforest", "Taiga", "Desert", "Temperate grassland"],
      answer: 2,
      explanation: "Deserts are defined by very low precipitation."
    },
    {
      topic: "Human Geography",
      question: "Urbanization means:",
      options: ["People moving from cities to farms", "Growth of cities and urban populations", "Decline of transport systems", "Equal distribution of all populations"],
      answer: 1,
      explanation: "Urbanization is the increasing concentration of people in towns and cities."
    },
    {
      topic: "Human Geography",
      question: "A push factor in migration is best described as:",
      options: ["A reason attracting people to a new place", "A pressure forcing people to leave their home area", "A border law", "A weather map"],
      answer: 1,
      explanation: "Push factors drive people away from where they currently live."
    },
    {
      topic: "Economics",
      question: "Scarcity in economics means:",
      options: ["Everything is free", "Resources are limited but wants are unlimited", "Only money matters", "No one has choices"],
      answer: 1,
      explanation: "Scarcity creates the need to make choices about resource use."
    },
    {
      topic: "Economics",
      question: "Which is an example of opportunity cost?",
      options: ["The tax on a product", "The next best alternative you give up when choosing", "The total amount produced", "The sale price"],
      answer: 1,
      explanation: "Opportunity cost is the value of the forgone alternative."
    },
    {
      topic: "Economics",
      question: "In a simple market model, when demand rises but supply stays the same, price tends to:",
      options: ["Fall", "Stay exactly fixed", "Rise", "Become zero"],
      answer: 2,
      explanation: "Higher demand with unchanged supply usually pushes prices upward."
    },
    {
      topic: "Civics",
      question: "What is a key purpose of a constitution?",
      options: ["To advertise political parties", "To set laws and principles for governing a state", "To replace all local laws daily", "To describe weather patterns"],
      answer: 1,
      explanation: "A constitution outlines core legal and political structures."
    },
    {
      topic: "Civics",
      question: "Why is separation of powers important?",
      options: ["It combines all power in one office", "It prevents abuse by dividing authority among branches", "It removes courts", "It bans elections"],
      answer: 1,
      explanation: "Dividing power creates checks and balances in governance."
    },
    {
      topic: "Globalization",
      question: "Globalization is best described as:",
      options: ["Countries becoming completely isolated", "Growing connections among countries in trade, culture, and technology", "Only local traditions spreading", "The end of migration"],
      answer: 1,
      explanation: "Globalization increases interactions across borders."
    },
    {
      topic: "Globalization",
      question: "One possible challenge of globalization is:",
      options: ["Instant elimination of all inequality", "Loss of some local cultural practices", "No international communication", "No economic change"],
      answer: 1,
      explanation: "Global influences can weaken local traditions and identities in some places."
    },
    {
      topic: "Sustainability",
      question: "Sustainable development aims to:",
      options: ["Use all resources quickly", "Meet present needs without harming future generations' ability to meet theirs", "Stop all economic activity", "Ignore environmental impact"],
      answer: 1,
      explanation: "Sustainability balances current needs with long-term environmental and social health."
    },
    {
      topic: "Sustainability",
      question: "Which policy best supports sustainable cities?",
      options: ["Expanding car-only roads with no public transit", "Increasing green spaces and public transport", "Removing waste systems", "Ignoring air quality"],
      answer: 1,
      explanation: "Transit and green spaces improve environmental quality and livability."
    },
    {
      topic: "Culture and Identity",
      question: "Cultural diffusion refers to:",
      options: ["Cultures never changing", "Spread of cultural beliefs and practices between groups", "One culture existing alone", "Only language loss"],
      answer: 1,
      explanation: "Cultural diffusion happens when ideas, foods, music, and customs spread."
    },
    {
      topic: "Culture and Identity",
      question: "What is ethnocentrism?",
      options: ["Respecting all cultures equally", "Judging other cultures by the standards of your own culture", "Learning new languages", "Comparing economic systems only"],
      answer: 1,
      explanation: "Ethnocentrism can create bias by treating one culture as the norm."
    },
    {
      topic: "Citizenship",
      question: "Active citizenship most strongly includes:",
      options: ["Avoiding community issues", "Participating in community and civic decisions", "Ignoring rights and responsibilities", "Only studying history"],
      answer: 1,
      explanation: "Active citizens engage in community life and democratic processes."
    },
    {
      topic: "Citizenship",
      question: "Which is an example of a civic responsibility?",
      options: ["Spreading misinformation", "Obeying laws and respecting others' rights", "Damaging public spaces", "Avoiding all rules"],
      answer: 1,
      explanation: "Civic responsibility includes following laws and contributing positively to society."
    }
  ]
};

const state = {
  subject: "science",
  questions: [],
  index: 0,
  score: 0,
  answered: 0,
  correct: 0,
  quizActive: false,
  seenTopics: new Set(),
  topicStats: {}
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setSubject(subject) {
  state.subject = subject;
  subjectChip.textContent = SUBJECT_LABELS[subject];
  feedback.className = "feedback";
  feedback.textContent = "Press Start Quiz to begin a full revision run.";

  subjectButtons.forEach((btn) => {
    const isActive = btn.dataset.subject === subject;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
}

function getQuestionCount() {
  const selected = lengthSelect.value;
  const totalAvailable = QUIZZES[state.subject].length;
  if (selected === "all") {
    return totalAvailable;
  }
  return Math.min(Number(selected), totalAvailable);
}

function buildQuestionSet() {
  const count = getQuestionCount();
  return shuffle(QUIZZES[state.subject]).slice(0, count);
}

function resetTopicStats() {
  state.topicStats = {};
  state.seenTopics = new Set();

  QUIZZES[state.subject].forEach((item) => {
    if (!state.topicStats[item.topic]) {
      state.topicStats[item.topic] = { correct: 0, total: 0 };
    }
  });
}

function updateStats() {
  const total = state.questions.length;
  const accuracy = state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);

  progressEl.textContent = `${state.answered} / ${total}`;
  scoreEl.textContent = String(state.score);
  accuracyEl.textContent = `${accuracy}%`;
  topicsCoveredEl.textContent = String(state.seenTopics.size);
}

function renderOptions(question) {
  optionsEl.innerHTML = "";

  question.options.forEach((optionText, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = optionText;
    button.addEventListener("click", () => submitAnswer(optionIndex));
    optionsEl.appendChild(button);
  });
}

function renderQuestion() {
  if (!state.quizActive) {
    return;
  }

  if (state.index >= state.questions.length) {
    endQuiz();
    return;
  }

  const current = state.questions[state.index];
  questionText.textContent = current.question;
  topicChip.textContent = `Topic: ${current.topic}`;
  feedback.className = "feedback";
  feedback.textContent = "Choose the best answer and review the explanation.";
  nextBtn.hidden = true;
  renderOptions(current);
}

function submitAnswer(selectedIndex) {
  if (!state.quizActive) {
    return;
  }

  const current = state.questions[state.index];
  const isCorrect = selectedIndex === current.answer;
  const optionButtons = optionsEl.querySelectorAll(".option-btn");

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answer) {
      button.classList.add("correct");
    }
    if (!isCorrect && index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  state.answered += 1;
  state.seenTopics.add(current.topic);
  state.topicStats[current.topic].total += 1;

  if (isCorrect) {
    state.correct += 1;
    state.score += 4;
    feedback.className = "feedback correct";
    feedback.textContent = `Correct. ${current.explanation}`;
    state.topicStats[current.topic].correct += 1;
  } else {
    feedback.className = "feedback wrong";
    feedback.textContent = `Not quite. ${current.explanation}`;
  }

  updateStats();
  nextBtn.hidden = false;
}

function buildWeakTopicsList() {
  const ranked = Object.entries(state.topicStats)
    .filter(([, value]) => value.total > 0)
    .map(([topic, value]) => ({
      topic,
      accuracy: Math.round((value.correct / value.total) * 100),
      attempts: value.total
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 4);

  weakTopicsEl.innerHTML = "";

  if (ranked.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No attempts yet.";
    weakTopicsEl.appendChild(li);
    return;
  }

  ranked.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.topic}: ${item.accuracy}% accuracy across ${item.attempts} question(s)`;
    weakTopicsEl.appendChild(li);
  });
}

function startQuiz() {
  state.questions = buildQuestionSet();
  state.index = 0;
  state.score = 0;
  state.answered = 0;
  state.correct = 0;
  state.quizActive = true;

  resetTopicStats();
  summaryPanel.hidden = true;
  restartBtn.disabled = false;

  updateStats();
  renderQuestion();
}

function endQuiz() {
  state.quizActive = false;
  optionsEl.innerHTML = "";
  nextBtn.hidden = true;
  topicChip.textContent = "Topic: complete";

  const accuracy = state.answered === 0 ? 0 : Math.round((state.correct / state.answered) * 100);

  questionText.textContent = "Quiz complete.";
  feedback.className = "feedback";
  feedback.textContent = "Review your summary, then restart or switch subject.";
  summaryText.textContent = `${SUBJECT_LABELS[state.subject]}: ${state.correct}/${state.answered} correct, ${accuracy}% accuracy, score ${state.score}.`;
  buildWeakTopicsList();
  summaryPanel.hidden = false;
}

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSubject(button.dataset.subject);
    if (!state.quizActive) {
      topicChip.textContent = "Topic: -";
      questionText.textContent = "Pick quiz length and press Start Quiz.";
      optionsEl.innerHTML = "";
    }
  });
});

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  state.index += 1;
  renderQuestion();
});

setSubject("science");
updateStats();
