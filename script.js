"use strict";

const quizTopics = [
	{
		id: "scientific-inquiry",
		title: "Scientific Inquiry and Lab Skills",
		description: "Variables, measurement, lab safety, data tables, and drawing evidence-based conclusions.",
		questions: [
			{
				prompt: "In an investigation on plant growth, which factor is the independent variable if students change the amount of sunlight?",
				options: ["The plant height", "The amount of sunlight", "The type of soil", "The number of leaves"],
				answer: 1,
				explanation: "The independent variable is the one deliberately changed by the investigator, which is the amount of sunlight."
			},
			{
				prompt: "Why should students wear safety goggles during many science experiments?",
				options: ["To improve concentration", "To protect their eyes from spills and particles", "To measure temperature better", "To make results more accurate"],
				answer: 1,
				explanation: "Goggles are protective equipment that reduce risk from splashes, broken glass, and flying particles."
			},
			{
				prompt: "Which tool is best for measuring the volume of a liquid accurately?",
				options: ["Meter ruler", "Balance", "Graduated cylinder", "Thermometer"],
				answer: 2,
				explanation: "A graduated cylinder is designed to measure liquid volume using calibrated markings."
			},
			{
				prompt: "What is the dependent variable in an experiment?",
				options: ["The variable kept constant", "The result that is measured or observed", "The equipment list", "The prediction written before the test"],
				answer: 1,
				explanation: "The dependent variable is the outcome that changes in response to the independent variable."
			},
			{
				prompt: "A fair test requires control variables mainly because they help scientists do what?",
				options: ["Finish the experiment faster", "Compare results from different classrooms", "Make sure only one factor is changed", "Use fewer pieces of equipment"],
				answer: 2,
				explanation: "Control variables are kept the same so the effect of the independent variable can be tested clearly."
			},
			{
				prompt: "Which statement is the best scientific conclusion?",
				options: ["I liked this experiment", "The tallest plants received the most sunlight, so the data supports the hypothesis", "My partner wrote neat notes", "The experiment was difficult"],
				answer: 1,
				explanation: "A valid conclusion refers directly to the evidence and states whether the data supports the hypothesis."
			}
		]
	},
	{
		id: "cells-life-processes",
		title: "Cells and Life Processes",
		description: "Cell structure, organization in living things, movement of materials, and major life functions.",
		questions: [
			{
				prompt: "Which cell structure controls the activities of the cell?",
				options: ["Cell membrane", "Nucleus", "Cytoplasm", "Vacuole"],
				answer: 1,
				explanation: "The nucleus contains genetic material and directs the cell's activities."
			},
			{
				prompt: "What is the main function of the cell membrane?",
				options: ["To make food using sunlight", "To support only plant cells", "To control what enters and leaves the cell", "To store the cell's DNA"],
				answer: 2,
				explanation: "The cell membrane acts as a selective barrier for materials entering and leaving the cell."
			},
			{
				prompt: "Which organelle is found in plant cells and helps make food by photosynthesis?",
				options: ["Mitochondrion", "Ribosome", "Chloroplast", "Nucleus"],
				answer: 2,
				explanation: "Chloroplasts contain chlorophyll and capture light energy for photosynthesis."
			},
			{
				prompt: "Cells, tissues, organs, and organ systems are arranged in which order from simplest to most complex?",
				options: ["Organs, tissues, cells, organ systems", "Cells, tissues, organs, organ systems", "Tissues, cells, organ systems, organs", "Cells, organs, tissues, organ systems"],
				answer: 1,
				explanation: "Cells form tissues, tissues form organs, and organs work together in organ systems."
			},
			{
				prompt: "Diffusion is best described as the movement of particles from",
				options: ["Low concentration to high concentration", "High concentration to low concentration", "One organ to another organ", "A solid to a liquid only"],
				answer: 1,
				explanation: "Diffusion is the net movement of particles from a region of higher concentration to lower concentration."
			},
			{
				prompt: "Why do cells need mitochondria?",
				options: ["To release energy from food", "To protect against bacteria", "To produce blood cells", "To absorb water from soil"],
				answer: 0,
				explanation: "Mitochondria are the site of respiration, releasing usable energy from food molecules."
			}
		]
	},
	{
		id: "matter-particles",
		title: "Matter, Particles, and Separation",
		description: "States of matter, particle behavior, physical changes, mixtures, and separation methods.",
		questions: [
			{
				prompt: "Which statement about particles in a gas is correct?",
				options: ["They are packed tightly in fixed positions", "They move freely and spread out to fill the container", "They vibrate in one place only", "They cannot be compressed"],
				answer: 1,
				explanation: "Gas particles move randomly and spread apart, which is why gases fill their containers."
			},
			{
				prompt: "Melting is the change of state from",
				options: ["Gas to liquid", "Liquid to solid", "Solid to liquid", "Liquid to gas"],
				answer: 2,
				explanation: "Melting happens when a solid gains enough energy for its particles to move more freely as a liquid."
			},
			{
				prompt: "Which process can separate an insoluble solid from a liquid?",
				options: ["Condensation", "Filtration", "Evaporation only", "Freezing"],
				answer: 1,
				explanation: "Filtration traps the insoluble solid while the liquid passes through the filter."
			},
			{
				prompt: "What happens to particles when a substance is heated?",
				options: ["They lose all motion", "They move more slowly", "They usually gain kinetic energy and move faster", "They disappear"],
				answer: 2,
				explanation: "Heating increases particle kinetic energy, so particles usually move faster and farther apart."
			},
			{
				prompt: "Salt dissolved in water is an example of",
				options: ["An element", "A pure compound only", "A solution", "A suspension with visible particles"],
				answer: 2,
				explanation: "A solution is a mixture in which the solute dissolves evenly in the solvent."
			},
			{
				prompt: "Which property can help identify a substance without changing it chemically?",
				options: ["Flammability", "Boiling point", "Reactivity with acid", "Ability to rust"],
				answer: 1,
				explanation: "Boiling point is a physical property that can be measured without creating a new substance."
			}
		]
	},
	{
		id: "forces-motion",
		title: "Forces and Motion",
		description: "Balanced and unbalanced forces, speed, friction, gravity, and interpreting motion.",
		questions: [
			{
				prompt: "What happens when the forces acting on an object are balanced?",
				options: ["The object must speed up", "The object changes direction immediately", "There is no overall change in motion caused by force", "The object disappears"],
				answer: 2,
				explanation: "Balanced forces mean the net force is zero, so motion does not change because of the forces."
			},
			{
				prompt: "How is speed calculated?",
				options: ["Distance multiplied by time", "Distance divided by time", "Mass divided by force", "Force multiplied by distance"],
				answer: 1,
				explanation: "Speed is calculated using the formula speed = distance / time."
			},
			{
				prompt: "Which force pulls objects toward the center of Earth?",
				options: ["Magnetism", "Friction", "Gravity", "Air resistance"],
				answer: 2,
				explanation: "Gravity is the attractive force between masses and pulls objects toward Earth."
			},
			{
				prompt: "Why does friction often slow moving objects down?",
				options: ["It acts in the same direction as motion", "It opposes motion between surfaces in contact", "It increases mass", "It removes gravity"],
				answer: 1,
				explanation: "Friction acts opposite to motion and resists the movement of surfaces across each other."
			},
			{
				prompt: "If a car travels 120 km in 2 hours, what is its average speed?",
				options: ["30 km/h", "40 km/h", "60 km/h", "240 km/h"],
				answer: 2,
				explanation: "Average speed = 120 km / 2 h = 60 km/h."
			},
			{
				prompt: "An unbalanced force on a stationary object can cause it to",
				options: ["Remain at rest forever", "Start moving", "Lose all mass", "Become invisible"],
				answer: 1,
				explanation: "A non-zero net force can change motion, so a stationary object can start moving."
			}
		]
	},
	{
		id: "energy",
		title: "Energy, Heat, Light, and Sound",
		description: "Energy transfers, conduction, convection, radiation, and wave behavior in light and sound.",
		questions: [
			{
				prompt: "Which is the best definition of energy?",
				options: ["The amount of matter in an object", "The ability to do work or cause change", "The space an object takes up", "The force pulling toward Earth"],
				answer: 1,
				explanation: "Energy is the ability to do work or bring about change in a system."
			},
			{
				prompt: "Heat transfer through direct contact is called",
				options: ["Conduction", "Convection", "Radiation", "Reflection"],
				answer: 0,
				explanation: "Conduction transfers thermal energy by particle collisions during direct contact."
			},
			{
				prompt: "Why are metal spoons likely to feel hot in a bowl of soup?",
				options: ["Metals are poor conductors", "Metal transfers heat quickly by conduction", "The spoon creates heat", "Sound waves warm the spoon"],
				answer: 1,
				explanation: "Metals are good conductors, so thermal energy moves through them quickly."
			},
			{
				prompt: "Which type of energy transfer can happen through empty space?",
				options: ["Conduction only", "Convection only", "Radiation", "Friction"],
				answer: 2,
				explanation: "Radiation transfers energy by electromagnetic waves and does not need particles or a medium."
			},
			{
				prompt: "What happens to the pitch of a sound when the frequency increases?",
				options: ["The pitch becomes lower", "The pitch becomes higher", "The sound disappears", "The volume always decreases"],
				answer: 1,
				explanation: "Higher frequency sound waves are heard as higher pitch."
			},
			{
				prompt: "A mirror changes the direction of light mainly by",
				options: ["Absorption", "Refraction", "Reflection", "Convection"],
				answer: 2,
				explanation: "Mirrors reflect light, causing it to bounce off the surface."
			}
		]
	},
	{
		id: "earth-space",
		title: "Earth and Space Systems",
		description: "Layers of Earth, rocks, weathering, the solar system, and patterns in day, night, and seasons.",
		questions: [
			{
				prompt: "What causes day and night on Earth?",
				options: ["Earth revolving around the Sun", "Earth rotating on its axis", "The Moon blocking sunlight", "Clouds moving across the sky"],
				answer: 1,
				explanation: "Day and night occur because Earth rotates, turning different regions toward and away from the Sun."
			},
			{
				prompt: "Which layer of Earth is the thin outer solid part where we live?",
				options: ["Inner core", "Outer core", "Mantle", "Crust"],
				answer: 3,
				explanation: "The crust is Earth's thin outermost solid layer."
			},
			{
				prompt: "Weathering is the process that",
				options: ["Forms new stars", "Breaks rocks into smaller pieces", "Creates ocean tides", "Stops erosion completely"],
				answer: 1,
				explanation: "Weathering breaks down rock physically or chemically into smaller pieces."
			},
			{
				prompt: "Which object is a star?",
				options: ["The Moon", "Mars", "The Sun", "Earth"],
				answer: 2,
				explanation: "The Sun is a star because it produces its own light and energy."
			},
			{
				prompt: "The seasons mainly happen because",
				options: ["Earth is closer to the Sun in summer", "The Moon changes shape", "Earth's axis is tilted as it revolves around the Sun", "Cloud cover changes each month"],
				answer: 2,
				explanation: "Earth's tilted axis changes the angle and duration of sunlight during its orbit, creating seasons."
			},
			{
				prompt: "Igneous rocks form when",
				options: ["Sediments are compacted", "Magma or lava cools and solidifies", "Heat and pressure change rock underground", "Rain dissolves minerals"],
				answer: 1,
				explanation: "Igneous rocks are produced when molten rock cools and becomes solid."
			}
		]
	},
	{
		id: "ecosystems",
		title: "Ecosystems and Environment",
		description: "Food chains, habitats, adaptation, resource use, and human impact on the environment.",
		questions: [
			{
				prompt: "In a food chain, which organism usually starts the chain?",
				options: ["Producer", "Top predator", "Decomposer", "Scavenger"],
				answer: 0,
				explanation: "Producers, such as green plants, make their own food and form the base of most food chains."
			},
			{
				prompt: "What is the role of decomposers in an ecosystem?",
				options: ["They make sunlight", "They break down dead matter and recycle nutrients", "They only eat plants", "They increase friction in soil"],
				answer: 1,
				explanation: "Decomposers return nutrients to the environment by breaking down dead organisms and waste."
			},
			{
				prompt: "A structural adaptation is best described as",
				options: ["A learned behavior", "A body feature that helps survival", "A seasonal weather pattern", "A short-term experiment"],
				answer: 1,
				explanation: "Structural adaptations are physical traits that help an organism survive in its environment."
			},
			{
				prompt: "Why is biodiversity important in an ecosystem?",
				options: ["It usually makes ecosystems less stable", "It reduces the need for producers", "It can improve resilience and balance in the ecosystem", "It stops all competition"],
				answer: 2,
				explanation: "Greater biodiversity often supports ecosystem stability and helps systems recover from change."
			},
			{
				prompt: "Which human action most directly helps conserve natural resources?",
				options: ["Using more single-use plastics", "Leaving lights on all day", "Reducing, reusing, and recycling materials", "Cutting all forests for farmland"],
				answer: 2,
				explanation: "Reducing consumption and reusing or recycling materials helps conserve resources and lower waste."
			},
			{
				prompt: "If the number of predators in a habitat drops sharply, what may happen first to the prey population?",
				options: ["It may increase", "It must become extinct", "It will stop feeding", "It always stays the same"],
				answer: 0,
				explanation: "With fewer predators, more prey often survive, so the prey population may rise at first."
			}
		]
	}
];

const quizContainer = document.getElementById("quiz-container");
const topicNav = document.getElementById("quiz-topics");
const revealAllButton = document.getElementById("reveal-all-button");
const topicCount = document.getElementById("topic-count");
const questionCount = document.getElementById("question-count");
const answeredCount = document.getElementById("answered-count");
const overallScore = document.getElementById("overall-score");

function createChoiceName(topicId, questionIndex) {
	return `${topicId}-question-${questionIndex}`;
}

function buildTopicNavigation() {
	topicNav.innerHTML = quizTopics
		.map(
			(topic) => `
				<a class="topic-button" href="#${topic.id}">${topic.title}</a>
			`
		)
		.join("");
}

function buildQuiz() {
	quizContainer.innerHTML = quizTopics
		.map((topic, topicIndex) => {
			const questionMarkup = topic.questions
				.map((question, questionIndex) => {
					const choiceName = createChoiceName(topic.id, questionIndex);
					const optionsMarkup = question.options
						.map(
							(option, optionIndex) => `
								<label class="choice">
									<input type="radio" name="${choiceName}" value="${optionIndex}">
									<span>${option}</span>
								</label>
							`
						)
						.join("");

					return `
						<fieldset class="question-card" data-question data-correct-answer="${question.answer}">
							<legend>${questionIndex + 1}. ${question.prompt}</legend>
							<div class="choices">${optionsMarkup}</div>
							<div class="question-feedback">
								<strong>Answer:</strong> ${question.options[question.answer]}<br>
								<span>${question.explanation}</span>
							</div>
						</fieldset>
					`;
				})
				.join("");

			return `
				<article class="topic-card" id="${topic.id}" data-topic-index="${topicIndex}">
					<header class="topic-header">
						<div class="topic-title-group">
							<h2>${topic.title}</h2>
							<p class="topic-description">${topic.description}</p>
							<span class="topic-meta">${topic.questions.length} questions</span>
						</div>
						<div class="topic-score-wrap">
							<span class="summary-label">Topic Score</span>
							<strong class="topic-score" data-topic-score>0 / ${topic.questions.length}</strong>
						</div>
					</header>
					<div class="question-list">${questionMarkup}</div>
					<footer class="topic-footer">
						<p class="topic-score" data-topic-status>Choose answers, then check this topic.</p>
						<button class="check-button" type="button" data-check-topic="${topicIndex}">Check Answers</button>
					</footer>
				</article>
			`;
		})
		.join("");
}

function getSelectedAnswer(questionCard) {
	const selected = questionCard.querySelector("input:checked");
	return selected ? Number(selected.value) : null;
}

function updateSummary() {
	const questionCards = Array.from(document.querySelectorAll("[data-question]"));
	const answered = questionCards.filter((card) => getSelectedAnswer(card) !== null).length;
	const correct = questionCards.filter((card) => card.classList.contains("correct")).length;

	topicCount.textContent = String(quizTopics.length);
	questionCount.textContent = String(questionCards.length);
	answeredCount.textContent = String(answered);
	overallScore.textContent = `${correct} / ${questionCards.length}`;
}

function revealTopic(topicIndex) {
	const topicCard = document.querySelector(`[data-topic-index="${topicIndex}"]`);
	const questionCards = Array.from(topicCard.querySelectorAll("[data-question]"));
	let correctCount = 0;

	questionCards.forEach((questionCard) => {
		const selectedAnswer = getSelectedAnswer(questionCard);
		const correctAnswer = Number(questionCard.dataset.correctAnswer);

		questionCard.classList.add("revealed");
		questionCard.classList.remove("correct", "incorrect");

		if (selectedAnswer === correctAnswer) {
			correctCount += 1;
			questionCard.classList.add("correct");
			return;
		}

		questionCard.classList.add("incorrect");
	});

	topicCard.querySelector("[data-topic-score]").textContent = `${correctCount} / ${questionCards.length}`;

	const statusText = correctCount === questionCards.length
		? "Perfect score for this topic."
		: `Reviewed ${questionCards.length} questions. Correct answers: ${correctCount}.`;

	topicCard.querySelector("[data-topic-status]").textContent = statusText;
	updateSummary();
}

function revealAllTopics() {
	quizTopics.forEach((_, topicIndex) => revealTopic(topicIndex));
}

function attachEvents() {
	quizContainer.addEventListener("click", (event) => {
		const button = event.target.closest("[data-check-topic]");

		if (!button) {
			return;
		}

		revealTopic(Number(button.dataset.checkTopic));
	});

	quizContainer.addEventListener("change", () => {
		updateSummary();
	});

	revealAllButton.addEventListener("click", revealAllTopics);
}

buildTopicNavigation();
buildQuiz();
attachEvents();
updateSummary();
