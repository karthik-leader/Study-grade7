"use strict";

const quizBank = {
	sciences: {
		title: "Sciences Quiz",
		questions: [
			{
				q: "Which structure controls activities inside a plant or animal cell?",
				options: ["Cell membrane", "Nucleus", "Cytoplasm", "Cell wall"],
				answer: 1,
				explain: "The nucleus contains DNA and acts like the control center for cell functions."
			},
			{
				q: "What is the main function of chlorophyll in plants?",
				options: ["To absorb light energy", "To store water", "To make roots grow", "To release carbon dioxide"],
				answer: 0,
				explain: "Chlorophyll absorbs light, mainly from the sun, so photosynthesis can happen."
			},
			{
				q: "Which change of state happens when a liquid becomes a gas?",
				options: ["Condensation", "Freezing", "Evaporation", "Melting"],
				answer: 2,
				explain: "Evaporation changes a liquid into gas particles that move farther apart."
			},
			{
				q: "In the particle model, what happens to particles when temperature increases?",
				options: ["They disappear", "They move faster", "They become heavier", "They stop moving"],
				answer: 1,
				explain: "Heating gives particles more kinetic energy, so they move faster."
			},
			{
				q: "Which is an example of a contact force?",
				options: ["Gravity", "Magnetism", "Friction", "Electrostatic force"],
				answer: 2,
				explain: "Friction happens when surfaces touch, so it is a contact force."
			},
			{
				q: "What is balanced when an object moves at constant speed in a straight line?",
				options: ["Only gravity", "Only friction", "Forces", "Temperature"],
				answer: 2,
				explain: "Constant speed in a straight line means resultant force is zero, so forces are balanced."
			},
			{
				q: "Which process in ecosystems returns carbon dioxide to the atmosphere?",
				options: ["Photosynthesis", "Respiration", "Nitrification", "Pollination"],
				answer: 1,
				explain: "Respiration by organisms releases carbon dioxide as glucose is broken down."
			},
			{
				q: "A food chain always starts with:",
				options: ["A top predator", "A decomposer", "A producer", "An omnivore"],
				answer: 2,
				explain: "Producers, such as green plants, make their own food and provide energy for the chain."
			},
			{
				q: "Which energy transfer is most useful in a solar-powered calculator?",
				options: ["Chemical to thermal", "Light to electrical", "Electrical to kinetic", "Sound to thermal"],
				answer: 1,
				explain: "Solar cells convert light energy into electrical energy to power the device."
			},
			{
				q: "When does elastic potential energy increase?",
				options: ["When an object is heated", "When a spring is stretched", "When a battery is used", "When an object is dropped"],
				answer: 1,
				explain: "Stretching or compressing an elastic object stores elastic potential energy."
			},
			{
				q: "What is the role of a control variable in an investigation?",
				options: ["It is measured as a result", "It is changed on purpose", "It is kept the same", "It is ignored"],
				answer: 2,
				explain: "Control variables stay constant to make the test fair and results reliable."
			},
			{
				q: "Which tool is best to measure the volume of an irregular solid?",
				options: ["Thermometer", "Measuring cylinder and water displacement", "Ruler only", "Balance"],
				answer: 1,
				explain: "Water displacement gives the volume of irregular objects by measuring rise in water level."
			},
			{
				q: "Which layer of Earth is mostly liquid iron and nickel?",
				options: ["Crust", "Mantle", "Outer core", "Inner core"],
				answer: 2,
				explain: "The outer core is a liquid metallic layer that helps create Earth's magnetic field."
			},
			{
				q: "Why do we experience day and night on Earth?",
				options: ["Earth orbits the Sun", "Earth rotates on its axis", "The Moon blocks sunlight", "Cloud movement"],
				answer: 1,
				explain: "As Earth rotates, different parts face toward or away from the Sun."
			},
			{
				q: "Which statement about acids and alkalis is correct?",
				options: ["All acids are safe to drink", "Alkalis have pH less than 7", "Acids have pH less than 7", "Neutral solutions have pH 14"],
				answer: 2,
				explain: "Acids are below pH 7, alkalis are above pH 7, and neutral is pH 7."
			},
			{
				q: "What does an indicator do in chemistry?",
				options: ["Adds heat", "Changes color to show pH", "Creates gas", "Measures mass"],
				answer: 1,
				explain: "Indicators are substances that change color depending on acidity or alkalinity."
			},
			{
				q: "Which adaptation helps a cactus survive in dry environments?",
				options: ["Large thin leaves", "Shallow roots only", "Thick waxy stem", "Soft watery skin"],
				answer: 2,
				explain: "A thick waxy stem stores water and reduces water loss by evaporation."
			},
			{
				q: "Which graph is usually best for showing how one continuous variable changes with another?",
				options: ["Pie chart", "Line graph", "Pictogram", "Word cloud"],
				answer: 1,
				explain: "Line graphs clearly show trends between continuous variables, such as time and temperature."
			}
		]
	},
	mathematics: {
		title: "Mathematics Quiz",
		questions: [
			{
				q: "What is the value of -3 + 8?",
				options: ["-11", "5", "11", "-5"],
				answer: 1,
				explain: "Starting at -3 and moving 8 steps right on a number line gives 5."
			},
			{
				q: "Which fraction is equivalent to 3/4?",
				options: ["6/10", "9/12", "12/20", "15/24"],
				answer: 1,
				explain: "Multiply numerator and denominator of 3/4 by 3 to get 9/12."
			},
			{
				q: "What is 25% as a fraction in simplest form?",
				options: ["1/5", "1/4", "2/5", "3/10"],
				answer: 1,
				explain: "25% means 25 out of 100, which simplifies to 1/4."
			},
			{
				q: "Solve: 4x = 28",
				options: ["x = 6", "x = 7", "x = 8", "x = 9"],
				answer: 1,
				explain: "Divide both sides by 4: x = 28 / 4 = 7."
			},
			{
				q: "Simplify: 3a + 2a",
				options: ["5a", "6a", "a^5", "3a^2"],
				answer: 0,
				explain: "Like terms can be combined by adding coefficients: 3 + 2 = 5."
			},
			{
				q: "What is the perimeter of a rectangle with length 9 cm and width 4 cm?",
				options: ["13 cm", "18 cm", "26 cm", "36 cm"],
				answer: 2,
				explain: "Perimeter = 2(length + width) = 2(9 + 4) = 26 cm."
			},
			{
				q: "What is the area of a triangle with base 10 cm and height 6 cm?",
				options: ["30 cm^2", "60 cm^2", "16 cm^2", "40 cm^2"],
				answer: 0,
				explain: "Area of triangle = 1/2 x base x height = 1/2 x 10 x 6 = 30 cm^2."
			},
			{
				q: "A cube has side length 3 cm. What is its volume?",
				options: ["9 cm^3", "18 cm^3", "27 cm^3", "36 cm^3"],
				answer: 2,
				explain: "Volume of cube = side^3 = 3 x 3 x 3 = 27 cm^3."
			},
			{
				q: "Which angle is acute?",
				options: ["120 degrees", "95 degrees", "45 degrees", "180 degrees"],
				answer: 2,
				explain: "An acute angle is greater than 0 degrees and less than 90 degrees."
			},
			{
				q: "What is the sum of interior angles of a triangle?",
				options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
				answer: 1,
				explain: "All triangles have interior angles that add up to 180 degrees."
			},
			{
				q: "The ratio of red to blue marbles is 2:3. If there are 12 blue marbles, how many red marbles are there?",
				options: ["6", "8", "10", "18"],
				answer: 1,
				explain: "If 3 parts = 12, then 1 part = 4, so 2 parts = 8."
			},
			{
				q: "What is the median of 3, 7, 9, 10, 14?",
				options: ["7", "8", "9", "10"],
				answer: 2,
				explain: "The median is the middle value in ordered data, which is 9."
			},
			{
				q: "Which probability is impossible?",
				options: ["0", "1/2", "3/4", "1"],
				answer: 0,
				explain: "A probability of 0 means an event cannot happen."
			},
			{
				q: "Round 8.67 to one decimal place.",
				options: ["8.6", "8.7", "8.67", "9.0"],
				answer: 1,
				explain: "The hundredths digit is 7, so the tenths digit rounds up from 6 to 7."
			},
			{
				q: "What is 0.35 as a percentage?",
				options: ["3.5%", "35%", "350%", "0.35%"],
				answer: 1,
				explain: "Multiply the decimal by 100 to convert to a percent: 35%."
			},
			{
				q: "Solve: y - 5 = 12",
				options: ["y = 7", "y = 17", "y = -7", "y = 60"],
				answer: 1,
				explain: "Add 5 to both sides to isolate y, giving y = 17."
			},
			{
				q: "Which set can form a right triangle?",
				options: ["3, 4, 5", "2, 2, 5", "4, 4, 9", "6, 6, 13"],
				answer: 0,
				explain: "3^2 + 4^2 = 5^2, so this set satisfies the Pythagorean relationship."
			},
			{
				q: "If a notebook costs $4.50, what is the cost of 3 notebooks?",
				options: ["$7.50", "$9.00", "$12.50", "$13.50"],
				answer: 3,
				explain: "Multiply unit price by quantity: 4.50 x 3 = 13.50."
			}
		]
	},
	individualsSocieties: {
		title: "Individuals and Societies Quiz",
		questions: [
			{
				q: "What does a historian mainly use to learn about the past?",
				options: ["Only guesses", "Sources and evidence", "Future predictions", "Opinion polls only"],
				answer: 1,
				explain: "Historians examine primary and secondary sources to make evidence-based conclusions."
			},
			{
				q: "Which is a primary source?",
				options: ["A textbook summary", "A diary written during an event", "A modern documentary", "A website article"],
				answer: 1,
				explain: "A diary from the time of an event is direct evidence from that period."
			},
			{
				q: "What is the purpose of a timeline in history?",
				options: ["To show event order", "To compare map scales", "To measure rainfall", "To calculate profit"],
				answer: 0,
				explain: "Timelines organize events in chronological order to show sequence and change over time."
			},
			{
				q: "Which map type best shows countries and capitals?",
				options: ["Topographic map", "Political map", "Climate map", "Population density map"],
				answer: 1,
				explain: "Political maps focus on borders, countries, cities, and capitals."
			},
			{
				q: "Latitude lines are used to measure:",
				options: ["Distance east or west", "Height above sea level", "Distance north or south", "Road speed"],
				answer: 2,
				explain: "Latitude measures how far north or south a place is from the Equator."
			},
			{
				q: "Why do geographers use map scales?",
				options: ["To color maps", "To show real distance on a smaller map", "To label oceans", "To define climate zones"],
				answer: 1,
				explain: "Scale links map measurements to real-world distances."
			},
			{
				q: "What is scarcity in economics?",
				options: ["Unlimited resources", "Limited resources with unlimited wants", "A type of currency", "A government election"],
				answer: 1,
				explain: "Scarcity means people cannot have everything they want because resources are limited."
			},
			{
				q: "Which is an example of a need rather than a want?",
				options: ["Designer shoes", "Video game console", "Clean drinking water", "Concert ticket"],
				answer: 2,
				explain: "Needs are essential for survival and wellbeing, such as safe water."
			},
			{
				q: "In a market, what usually happens if demand rises but supply stays the same?",
				options: ["Price tends to rise", "Price tends to fall", "Price becomes zero", "Nothing changes"],
				answer: 0,
				explain: "Higher demand with fixed supply often increases competition, raising prices."
			},
			{
				q: "What is a citizen's role in a democracy?",
				options: ["Never participate", "Take part in civic life, such as voting", "Only pay taxes", "Ignore laws"],
				answer: 1,
				explain: "Citizens in democracies can vote, discuss issues, and contribute to community decisions."
			},
			{
				q: "Why are laws important in societies?",
				options: ["They create conflict", "They set rules and protect rights", "They stop all change", "They only help leaders"],
				answer: 1,
				explain: "Laws guide behavior, reduce harm, and help protect fairness and rights."
			},
			{
				q: "Human rights are best described as:",
				options: ["Privileges for a few people", "Rights all people should have", "Rules only for children", "Economic products"],
				answer: 1,
				explain: "Human rights are universal rights and freedoms that belong to everyone."
			},
			{
				q: "What is urbanization?",
				options: ["Growth of cities", "Decrease in trade", "Cooling climate", "End of farming"],
				answer: 0,
				explain: "Urbanization means an increasing number of people live in towns and cities."
			},
			{
				q: "Which factor can push people to migrate from one place to another?",
				options: ["Job loss", "Safer environment", "Both A and B", "No possible factor"],
				answer: 2,
				explain: "Migration can happen for push factors (problems) and pull factors (opportunities)."
			},
			{
				q: "What does sustainability mean?",
				options: ["Using resources without thinking of the future", "Meeting present needs without harming future generations", "Only recycling plastic", "Stopping all development"],
				answer: 1,
				explain: "Sustainability balances current needs with long-term environmental and social health."
			},
			{
				q: "Which activity is part of global interdependence?",
				options: ["International trade", "No communication between countries", "Using only local weather data", "Avoiding all technology"],
				answer: 0,
				explain: "Countries depend on each other through trade, technology, resources, and ideas."
			},
			{
				q: "What is a bias in a source?",
				options: ["A neutral viewpoint", "A one-sided perspective", "A type of map", "A weather pattern"],
				answer: 1,
				explain: "Bias means information may favor one viewpoint, so it should be evaluated critically."
			},
			{
				q: "Why compare multiple sources when studying an issue?",
				options: ["To waste time", "To avoid all opinions", "To gain a more reliable understanding", "To memorize dates only"],
				answer: 2,
				explain: "Comparing sources helps check accuracy, detect bias, and build stronger conclusions."
			}
		]
	}
};

const state = {
	currentSubject: "sciences",
	currentQuestionIndex: 0,
	score: 0,
	answered: false
};

const subjectButtons = Array.from(document.querySelectorAll(".subject-btn"));
const subjectTitle = document.getElementById("subjectTitle");
const progressText = document.getElementById("progressText");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackStatus = document.getElementById("feedbackStatus");
const feedbackAnswer = document.getElementById("feedbackAnswer");
const feedbackExplanation = document.getElementById("feedbackExplanation");
const nextBtn = document.getElementById("nextBtn");
const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const restartBtn = document.getElementById("restartBtn");

function getSubjectData() {
	return quizBank[state.currentSubject];
}

function resetQuizForSubject(subjectKey) {
	state.currentSubject = subjectKey;
	state.currentQuestionIndex = 0;
	state.score = 0;
	state.answered = false;
	resultPanel.hidden = true;
	subjectButtons.forEach((button) => {
		button.classList.toggle("is-active", button.dataset.subject === subjectKey);
	});
	renderQuestion();
}

function renderQuestion() {
	const subjectData = getSubjectData();
	const question = subjectData.questions[state.currentQuestionIndex];

	subjectTitle.textContent = subjectData.title;
	progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${subjectData.questions.length}`;
	questionText.textContent = question.q;
	optionsList.innerHTML = "";
	feedbackBox.hidden = true;
	nextBtn.disabled = true;
	state.answered = false;

	question.options.forEach((option, index) => {
		const button = document.createElement("button");
		button.type = "button";
		button.className = "option-btn";
		button.textContent = option;
		button.addEventListener("click", () => handleAnswer(index));
		optionsList.appendChild(button);
	});
}

function handleAnswer(selectedIndex) {
	if (state.answered) {
		return;
	}

	const subjectData = getSubjectData();
	const question = subjectData.questions[state.currentQuestionIndex];
	const optionButtons = Array.from(document.querySelectorAll(".option-btn"));
	const isCorrect = selectedIndex === question.answer;

	state.answered = true;
	if (isCorrect) {
		state.score += 1;
	}

	optionButtons.forEach((button, index) => {
		button.disabled = true;
		if (index === question.answer) {
			button.classList.add("is-correct");
		}
		if (index === selectedIndex && index !== question.answer) {
			button.classList.add("is-incorrect");
		}
	});

	feedbackStatus.textContent = isCorrect ? "Correct" : "Not quite yet";
	feedbackStatus.className = `feedback-status ${isCorrect ? "ok" : "bad"}`;
	feedbackAnswer.textContent = `Answer: ${question.options[question.answer]}`;
	feedbackExplanation.textContent = question.explain;
	feedbackBox.hidden = false;
	nextBtn.disabled = false;
}

function showResults() {
	const subjectData = getSubjectData();
	const total = subjectData.questions.length;
	const percent = Math.round((state.score / total) * 100);

	resultTitle.textContent = `${subjectData.title} Completed`;
	resultSummary.textContent = `You scored ${state.score} out of ${total} (${percent}%). Review the explanations and retry to improve.`;
	resultPanel.hidden = false;
}

function goToNextQuestion() {
	const subjectData = getSubjectData();
	if (!state.answered) {
		return;
	}

	const nextIndex = state.currentQuestionIndex + 1;
	if (nextIndex < subjectData.questions.length) {
		state.currentQuestionIndex = nextIndex;
		renderQuestion();
		return;
	}

	showResults();
}

subjectButtons.forEach((button) => {
	button.addEventListener("click", () => {
		resetQuizForSubject(button.dataset.subject);
	});
});

nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", () => {
	resetQuizForSubject(state.currentSubject);
});

resetQuizForSubject("sciences");
