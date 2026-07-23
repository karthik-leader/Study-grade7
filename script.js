"use strict";

const quizBank = {
	sciences: {
		title: "MYP Grade 7 Sciences Quiz",
		questions: [
			// ===== CELL BIOLOGY & MICROSCOPY =====
			{
				q: "Which structure controls activities inside a plant or animal cell?",
				options: ["Cell membrane", "Nucleus", "Cytoplasm", "Cell wall"],
				answer: 1,
				explain: "The nucleus contains DNA and controls all cell functions and activities."
			},
			{
				q: "What is the main function of the cell membrane?",
				options: ["Store energy", "Control entry and exit of substances", "Make proteins", "Store water"],
				answer: 1,
				explain: "The cell membrane is selectively permeable, controlling what enters and leaves the cell."
			},
			{
				q: "In plant cells, what is the function of the cell wall?",
				options: ["Control cell activity", "Support and protect", "Absorb sunlight", "Break down waste"],
				answer: 1,
				explain: "The rigid cell wall provides structural support and protection for plant cells."
			},
			{
				q: "Where are mitochondria found?",
				options: ["Only in plant cells", "In both plant and animal cells", "Only in prokaryotes", "In the nucleus"],
				answer: 1,
				explain: "Mitochondria are found in both plant and animal cells, they produce energy."
			},
			{
				q: "What is the function of mitochondria?",
				options: ["Make proteins", "Release energy from food", "Store DNA", "Absorb light"],
				answer: 1,
				explain: "Mitochondria break down glucose to release energy in the form of ATP."
			},
			{
				q: "What is the function of ribosomes?",
				options: ["Release energy", "Store water", "Make proteins", "Control reproduction"],
				answer: 2,
				explain: "Ribosomes are the sites where proteins are synthesized from amino acids."
			},
			{
				q: "Which organelle contains chlorophyll in plant cells?",
				options: ["Mitochondrion", "Ribosome", "Chloroplast", "Cell wall"],
				answer: 2,
				explain: "Chloroplasts contain chlorophyll and carry out photosynthesis in plant cells."
			},
			{
				q: "What is the function of chlorophyll?",
				options: ["Store starch", "Absorb light energy", "Break down glucose", "Support the cell"],
				answer: 1,
				explain: "Chlorophyll is a green pigment that absorbs light energy for photosynthesis."
			},
			{
				q: "Where is the vacuole in a plant cell and what does it do?",
				options: ["In nucleus; controls activity", "In cytoplasm; stores water and nutrients", "In chloroplast; makes food", "In cell wall; gives support"],
				answer: 1,
				explain: "The large central vacuole stores water, nutrients, and maintains cell turgor pressure."
			},
			{
				q: "What is the difference between prokaryotic and eukaryotic cells?",
				options: ["Prokaryotes have no nucleus; eukaryotes have a nucleus", "Eukaryotes are smaller", "Prokaryotes are animals", "No real difference"],
				answer: 0,
				explain: "Prokaryotes (bacteria) lack a membrane-bound nucleus; eukaryotes have one."
			},
			{
				q: "What can you observe with a light microscope that you cannot with the naked eye?",
				options: ["Individual cells", "Whole organs", "Entire organisms", "Bones"],
				answer: 0,
				explain: "Light microscopes magnify small objects like cells to visible sizes."
			},
			{
				q: "How does magnification help in observing cells?",
				options: ["It changes the actual size", "It makes small objects appear larger", "It adds color", "It slows down movement"],
				answer: 1,
				explain: "Magnification makes small structures like organelles visible for detailed study."
			},

			// ===== GENETICS & VARIATION =====
			{
				q: "What is DNA?",
				options: ["An organelle", "A molecule that carries genetic information", "A type of protein", "A sugar molecule"],
				answer: 1,
				explain: "DNA (deoxyribonucleic acid) contains genetic instructions for all living organisms."
			},
			{
				q: "What are chromosomes made of?",
				options: ["Proteins only", "DNA and proteins", "Fats", "Carbohydrates"],
				answer: 1,
				explain: "Chromosomes consist of DNA wrapped around protein structures called histones."
			},
			{
				q: "What is a gene?",
				options: ["A whole chromosome", "A segment of DNA that codes for a trait", "A type of cell", "A protein structure"],
				answer: 1,
				explain: "A gene is a specific section of DNA that codes for a particular trait or protein."
			},
			{
				q: "What is variation in a population?",
				options: ["All individuals are identical", "Differences in traits among individuals", "Change in chromosome number", "Mutation in all organisms"],
				answer: 1,
				explain: "Variation refers to natural differences in characteristics between individuals."
			},
			{
				q: "What causes genetic variation?",
				options: ["Environment only", "Genes only", "Combination of genes from parents", "Age of organism"],
				answer: 2,
				explain: "Genetic variation comes from inheriting different combinations of genes from parents."
			},
			{
				q: "What is a dominant trait?",
				options: ["A rare characteristic", "The trait that appears when at least one dominant allele is present", "A mutation", "A harmful gene"],
				answer: 1,
				explain: "A dominant trait is expressed even when only one copy of the dominant allele is present."
			},
			{
				q: "What is a recessive trait?",
				options: ["A very common trait", "Appears only when two recessive alleles are present", "Disappears with age", "Always harmful"],
				answer: 1,
				explain: "A recessive trait only shows when an organism has two copies of the recessive allele."
			},
			{
				q: "In reproduction, how does offspring inherit genetic material?",
				options: ["From one parent only", "From both parents equally", "Randomly from environment", "Created new each time"],
				answer: 1,
				explain: "Offspring inherit genetic material from both biological parents."
			},
			{
				q: "What is sexual reproduction?",
				options: ["One parent produces identical offspring", "Two parents produce genetically different offspring", "Cells split equally", "No genetic mixing"],
				answer: 1,
				explain: "Sexual reproduction involves two parents contributing genetic material, creating variation."
			},
			{
				q: "What is asexual reproduction?",
				options: ["Requires two parents", "One parent produces genetically identical offspring", "Creates variation", "Produces unfertilized eggs"],
				answer: 1,
				explain: "Asexual reproduction produces genetically identical offspring from one parent."
			},

			// ===== EVOLUTION & NATURAL SELECTION =====
			{
				q: "What is evolution?",
				options: ["Change in species over long time periods", "Individual growth", "Seasonal changes", "Daily behavior changes"],
				answer: 0,
				explain: "Evolution is the gradual change in species characteristics over many generations."
			},
			{
				q: "Who proposed the theory of natural selection?",
				options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Marie Curie"],
				answer: 1,
				explain: "Charles Darwin developed the theory of evolution through natural selection."
			},
			{
				q: "What is natural selection?",
				options: ["Humans choosing traits", "Organisms with beneficial traits survive and reproduce more", "Random changes in genes", "Planned breeding"],
				answer: 1,
				explain: "Natural selection is the process where organisms with advantageous traits survive and pass them on."
			},
			{
				q: "What is an adaptation?",
				options: ["A temporary change", "A trait that helps an organism survive in its environment", "A disease", "A learned behavior only"],
				answer: 1,
				explain: "An adaptation is a feature that helps an organism survive and reproduce in its environment."
			},
			{
				q: "What is an example of a structural adaptation?",
				options: ["Learning to hunt", "Migrating to warmer climates", "A bear's thick fur", "Changing diet seasonally"],
				answer: 2,
				explain: "A bear's thick fur is a physical adaptation that provides insulation against cold."
			},
			{
				q: "What is an example of a behavioral adaptation?",
				options: ["Growing taller", "A lion's mane", "Birds migrating south in winter", "Developing larger eyes"],
				answer: 2,
				explain: "Migration is a behavioral adaptation where animals move to different locations seasonally."
			},
			{
				q: "What is extinction?",
				options: ["Temporary absence", "Permanent disappearance of a species", "Change in appearance", "Evolution of a new species"],
				answer: 1,
				explain: "Extinction is when the last member of a species dies, and the species no longer exists."
			},
			{
				q: "What can cause extinction?",
				options: ["Only climate change", "Environmental changes, loss of habitat, disease, or competition", "Only human activity", "Never happens naturally"],
				answer: 1,
				explain: "Extinction can result from various factors including environmental change, habitat loss, or disease."
			},
			{
				q: "What is evidence for evolution?",
				options: ["Only fossil records", "Fossils, comparative anatomy, DNA similarities, and living organisms", "Only living organisms", "Only recent observations"],
				answer: 1,
				explain: "Multiple lines of evidence support evolution: fossils, DNA, anatomy, and direct observation."
			},

			// ===== MATTER & ATOMIC STRUCTURE =====
			{
				q: "What is matter?",
				options: ["Only solids", "Anything that has mass and takes up space", "Only invisible things", "Pure substances only"],
				answer: 1,
				explain: "Matter is anything that has mass and occupies space—solids, liquids, and gases."
			},
			{
				q: "What is an element?",
				options: ["A mixture of substances", "A pure substance made of only one type of atom", "A compound", "A state of matter"],
				answer: 1,
				explain: "An element is a pure substance consisting of atoms of only one type."
			},
			{
				q: "What is the smallest unit of matter?",
				options: ["Molecule", "Cell", "Atom", "Electron"],
				answer: 2,
				explain: "An atom is the smallest unit of matter that retains the properties of an element."
			},
			{
				q: "What is an atom made of?",
				options: ["Only electrons", "Protons, neutrons, and electrons", "Only molecules", "Only nucleus"],
				answer: 1,
				explain: "Atoms consist of protons and neutrons in the nucleus, with electrons orbiting."
			},
			{
				q: "Where is most of the mass of an atom located?",
				options: ["In electrons", "In the nucleus", "Spread evenly", "In the electron shells"],
				answer: 1,
				explain: "The nucleus contains protons and neutrons, which account for nearly all atomic mass."
			},
			{
				q: "What is a compound?",
				options: ["A single element", "A substance made of two or more elements chemically bonded", "A mixture", "A pure metal"],
				answer: 1,
				explain: "A compound is formed when two or more elements combine chemically in fixed proportions."
			},
			{
				q: "What is a mixture?",
				options: ["Elements bonded together", "A substance with a fixed composition", "Two or more substances mixed but not chemically bonded", "Always a liquid"],
				answer: 2,
				explain: "A mixture contains two or more substances that can be separated physically."
			},
			{
				q: "What is the difference between a mixture and a compound?",
				options: ["No difference", "Compounds have fixed ratios; mixtures can have varying ratios", "Mixtures are always gases", "Compounds are always liquids"],
				answer: 1,
				explain: "In compounds, elements bond in fixed ratios; in mixtures, proportions can vary."
			},
			{
				q: "How many states of matter are there?",
				options: ["Two", "Three", "Four", "Five"],
				answer: 2,
				explain: "Three main states are solid, liquid, and gas; plasma is sometimes considered a fourth."
			},
			{
				q: "What defines a solid?",
				options: ["Particles far apart and moving freely", "Definite shape and volume", "No defined shape or volume", "Only in cold temperatures"],
				answer: 1,
				explain: "Solids have a fixed shape and volume with particles tightly packed and vibrating."
			},
			{
				q: "What defines a liquid?",
				options: ["Fixed shape and volume", "Defined volume but takes shape of container", "No mass or volume", "Always clear"],
				answer: 1,
				explain: "Liquids have a definite volume but take the shape of their container."
			},
			{
				q: "What defines a gas?",
				options: ["Fixed shape and volume", "No definite shape or volume; spreads to fill container", "Denser than solids", "Always invisible"],
				answer: 1,
				explain: "Gases have no fixed shape or volume and expand to fill any container."
			},

			// ===== CHEMICAL REACTIONS & EQUATIONS =====
			{
				q: "What is a chemical reaction?",
				options: ["A physical change only", "A process where substances change into new substances", "Heating something", "Mixing without change"],
				answer: 1,
				explain: "A chemical reaction transforms reactants into new products with different properties."
			},
			{
				q: "What is a sign that a chemical reaction has occurred?",
				options: ["Change in temperature", "Change in color", "Production of gas or precipitate", "Any of the above"],
				answer: 3,
				explain: "Evidence of chemical reactions includes temperature change, color change, gas production, or precipitate formation."
			},
			{
				q: "What is a physical change?",
				options: ["Substance changes into a new substance", "Change in appearance or state without forming new substances", "Always involves energy", "Creates new elements"],
				answer: 1,
				explain: "Physical changes alter appearance but do not create new substances (e.g., melting, dissolving)."
			},
			{
				q: "Is melting a physical or chemical change?",
				options: ["Chemical change", "Physical change", "Both equally", "Neither"],
				answer: 1,
				explain: "Melting is a physical change; the substance is still the same, just in a different state."
			},
			{
				q: "Is rusting of iron a physical or chemical change?",
				options: ["Physical change", "Chemical change", "Both", "Neither"],
				answer: 1,
				explain: "Rusting is a chemical reaction where iron combines with oxygen to form a new substance."
			},
			{
				q: "What does a chemical equation show?",
				options: ["Only physical changes", "Reactants and products of a chemical reaction", "Temperature only", "Atoms disappearing"],
				answer: 1,
				explain: "A chemical equation uses symbols to show reactants, products, and their quantities."
			},
			{
				q: "What is the law of conservation of mass?",
				options: ["Mass is created in reactions", "Mass is destroyed in reactions", "Mass cannot be created or destroyed in reactions", "Mass changes daily"],
				answer: 2,
				explain: "In chemical reactions, mass is conserved; reactants and products have equal total mass."
			},
			{
				q: "What is a reactant?",
				options: ["A product formed", "A substance that starts a reaction", "A chemical element", "A container"],
				answer: 1,
				explain: "Reactants are the starting substances in a chemical reaction."
			},
			{
				q: "What is a product?",
				options: ["The starting material", "A substance formed in a reaction", "An element", "A gas only"],
				answer: 1,
				explain: "Products are the new substances formed as a result of a chemical reaction."
			},
			{
				q: "What is combustion?",
				options: ["Melting", "A reaction where a substance burns in oxygen releasing heat and light", "Freezing", "Evaporation"],
				answer: 1,
				explain: "Combustion is a rapid chemical reaction with oxygen that releases energy as heat and light."
			},

			// ===== ACIDS, BASES & SOLUTIONS =====
			{
				q: "What is an acid?",
				options: ["A substance with pH greater than 7", "A substance with pH less than 7", "Always a liquid", "Only found in metals"],
				answer: 1,
				explain: "Acids are substances with pH less than 7 that taste sour and turn blue litmus red."
			},
			{
				q: "What is a base (alkali)?",
				options: ["A substance with pH less than 7", "A substance with pH greater than 7", "Always a gas", "Only found in plants"],
				answer: 1,
				explain: "Bases are substances with pH greater than 7 that feel slippery and turn red litmus blue."
			},
			{
				q: "What is pH?",
				options: ["Temperature scale", "Scale measuring acidity or alkalinity (0-14)", "Measure of density", "Amount of matter"],
				answer: 1,
				explain: "pH is a scale from 0-14 indicating how acidic or basic a substance is."
			},
			{
				q: "What pH is neutral?",
				options: ["pH 0", "pH 7", "pH 14", "pH -7"],
				answer: 1,
				explain: "A neutral solution has pH 7, neither acidic nor alkaline."
			},
			{
				q: "What is a neutralization reaction?",
				options: ["Acid becoming stronger", "Acid and base reacting to form salt and water", "Base disappearing", "Temperature increasing"],
				answer: 1,
				explain: "Neutralization occurs when an acid and base react to form a salt and water."
			},
			{
				q: "What is a solution?",
				options: ["Only a gas", "A homogeneous mixture where a solute dissolves in a solvent", "A physical change", "Only salt and water"],
				answer: 1,
				explain: "A solution is a uniform mixture where one substance (solute) dissolves in another (solvent)."
			},
			{
				q: "What is a solute?",
				options: ["The liquid in a solution", "The substance being dissolved", "A container", "Only a solid"],
				answer: 1,
				explain: "The solute is the substance that dissolves in the solvent."
			},
			{
				q: "What is a solvent?",
				options: ["The substance being dissolved", "The liquid or medium in which a solute dissolves", "A gas", "A chemical reaction"],
				answer: 1,
				explain: "The solvent is the medium (usually liquid) that dissolves the solute."
			},
			{
				q: "What does dissolving mean?",
				options: ["Melting", "Breaking apart into individual particles and spreading evenly", "Evaporating", "Freezing"],
				answer: 1,
				explain: "Dissolving is when particles of a substance spread evenly throughout a solvent."
			},
			{
				q: "What is an indicator?",
				options: ["A thermometer", "A substance that changes color to show pH", "A scale", "A measuring tool"],
				answer: 1,
				explain: "Indicators change color in acids and bases, helping identify pH levels."
			},

			// ===== STATES OF MATTER & PROPERTIES =====
			{
				q: "What is a physical property?",
				options: ["A characteristic that describes what happens when a substance reacts", "A characteristic of matter that can be observed without changing it", "Only color", "Only hardness"],
				answer: 1,
				explain: "Physical properties (color, density, melting point) describe matter without changing it."
			},
			{
				q: "What is a chemical property?",
				options: ["How something looks", "How something reacts with other substances", "Always invisible", "Only for metals"],
				answer: 1,
				explain: "Chemical properties describe how a substance reacts or changes into new substances."
			},
			{
				q: "What is density?",
				options: ["How heavy something is", "Mass per unit volume", "Size only", "Temperature only"],
				answer: 1,
				explain: "Density is the ratio of mass to volume, measured as mass per unit volume."
			},
			{
				q: "Which has greater density: a solid or a liquid?",
				options: ["Liquid always", "Solid usually", "Always the same", "Depends on the substance"],
				answer: 3,
				explain: "Usually solids have greater density, but not always (e.g., ice is less dense than water)."
			},
			{
				q: "What is the particle model of matter?",
				options: ["Matter is made of solid blocks", "All matter is made of tiny particles in constant motion", "Particles are stationary", "Only gases have particles"],
				answer: 1,
				explain: "The particle model explains matter as consisting of tiny particles with space between them."
			},
			{
				q: "In the particle model, what happens when a substance is heated?",
				options: ["Particles disappear", "Particles move faster and farther apart", "Particles stop moving", "New particles form"],
				answer: 1,
				explain: "Heating increases particle movement and energy, causing them to move faster and farther apart."
			},
			{
				q: "In the particle model, what happens when a substance is cooled?",
				options: ["Particles move faster", "Particles move slower and closer together", "Particles disappear", "Particles multiply"],
				answer: 1,
				explain: "Cooling decreases particle energy, causing them to move slower and pack more tightly."
			},
			{
				q: "What is diffusion?",
				options: ["Particles stopping", "Movement of particles from high concentration to low concentration", "Only in solids", "Heat transfer only"],
				answer: 1,
				explain: "Diffusion is the spreading of particles from areas of high concentration to low concentration."
			},
			{
				q: "What is evaporation?",
				options: ["Gas becoming liquid", "Liquid becoming gas at the surface", "Solid becoming liquid", "Cooling process"],
				answer: 1,
				explain: "Evaporation is when particles escape from the surface of a liquid and become gas."
			},
			{
				q: "What is condensation?",
				options: ["Liquid becoming solid", "Gas becoming liquid", "Solid becoming gas", "A heating process"],
				answer: 1,
				explain: "Condensation is when gas particles slow down and form a liquid."
			},
			{
				q: "What is melting?",
				options: ["Liquid becoming gas", "Solid becoming liquid", "Gas becoming solid", "Breaking apart"],
				answer: 1,
				explain: "Melting occurs when a solid is heated and its particles gain energy to form a liquid."
			},
			{
				q: "What is freezing?",
				options: ["Liquid becoming gas", "Liquid becoming solid", "Solid becoming liquid", "Heating process"],
				answer: 1,
				explain: "Freezing is when a liquid cools and particles slow down to form a solid."
			},
			{
				q: "What is sublimation?",
				options: ["Liquid to solid", "Solid directly becoming gas without melting first", "Gas to liquid", "Only in water"],
				answer: 1,
				explain: "Sublimation is when a solid transforms directly into a gas without becoming a liquid."
			},

			// ===== ENERGY & STORES =====
			{
				q: "What is energy?",
				options: ["Only heat", "The ability to do work or cause change", "Only movement", "Only from electricity"],
				answer: 1,
				explain: "Energy is the capacity to do work or cause changes in matter."
			},
			{
				q: "What is kinetic energy?",
				options: ["Energy stored in position", "Energy of movement", "Energy in a battery", "Energy of heat only"],
				answer: 1,
				explain: "Kinetic energy is possessed by moving objects and depends on mass and velocity."
			},
			{
				q: "What is potential energy?",
				options: ["Energy of motion", "Stored energy due to position or condition", "Energy of light", "Energy in plants"],
				answer: 1,
				explain: "Potential energy is stored energy that could be released (gravitational, elastic, chemical)."
			},
			{
				q: "What is gravitational potential energy?",
				options: ["Energy of falling objects", "Energy stored due to height", "Energy in the center of Earth", "Only in liquids"],
				answer: 1,
				explain: "Gravitational potential energy increases with height and mass."
			},
			{
				q: "What is elastic potential energy?",
				options: ["Energy of sound", "Energy stored in stretched or compressed objects", "Energy in rubber only", "Energy of waves"],
				answer: 1,
				explain: "Elastic potential energy is stored in stretched springs, elastic bands, or compressed objects."
			},
			{
				q: "What is chemical energy?",
				options: ["Energy from electricity", "Energy stored in chemical bonds", "Energy from heat", "Energy from light only"],
				answer: 1,
				explain: "Chemical energy is stored in chemical bonds and released during chemical reactions."
			},
			{
				q: "What is the law of conservation of energy?",
				options: ["Energy is created constantly", "Energy cannot be created or destroyed, only transferred", "Energy disappears over time", "Energy doubles in reactions"],
				answer: 1,
				explain: "Energy is conserved in all processes; it changes form but the total amount remains constant."
			},
			{
				q: "What is energy transfer?",
				options: ["Energy disappearing", "Energy moving from one object to another", "Energy being created", "Only heat movement"],
				answer: 1,
				explain: "Energy transfer is the movement of energy from one object or system to another."
			},
			{
				q: "What is energy transformation?",
				options: ["Energy disappearing", "Energy changing from one form to another", "Energy increasing", "Only sound changing"],
				answer: 1,
				explain: "Energy transformation is when energy changes from one form (e.g., kinetic to potential)."
			},
			{
				q: "What happens to energy during a collision?",
				options: ["All lost", "Transferred and transformed into other forms (sound, heat, deformation)", "Created anew", "Only increases"],
				answer: 1,
				explain: "During collisions, kinetic energy transfers to heat, sound, deformation, and other forms."
			},

			// ===== HEAT & TEMPERATURE =====
			{
				q: "What is temperature?",
				options: ["The total energy of all particles", "The average kinetic energy of particles", "Only measured in Celsius", "Amount of heat always"],
				answer: 1,
				explain: "Temperature measures the average kinetic energy of particles in a substance."
			},
			{
				q: "What is heat?",
				options: ["Same as temperature", "Energy transferred from hot to cold objects", "Only from fire", "Only in liquids"],
				answer: 1,
				explain: "Heat is thermal energy transferred from higher temperature to lower temperature."
			},
			{
				q: "How does heat transfer between objects in contact?",
				options: ["By light only", "By conduction (direct contact)", "By air only", "Heat doesn't transfer"],
				answer: 1,
				explain: "Conduction is heat transfer through direct contact between materials."
			},
			{
				q: "What is convection?",
				options: ["Heat transfer by direct contact", "Heat transfer by movement of fluids (liquids or gases)", "Heat transfer by light", "No heat transfer"],
				answer: 1,
				explain: "Convection transfers heat through movement of fluids in currents."
			},
			{
				q: "What is radiation?",
				options: ["Heat transfer by contact", "Heat transfer by electromagnetic waves (light)", "Transfer by fluids", "Only from sun"],
				answer: 1,
				explain: "Radiation is heat transfer through electromagnetic waves without needing a medium."
			},
			{
				q: "Which method of heat transfer occurs in a vacuum?",
				options: ["Conduction", "Convection", "Radiation", "None of them"],
				answer: 2,
				explain: "Only radiation can transfer heat through a vacuum (no particles needed)."
			},
			{
				q: "What happens to most substances when heated?",
				options: ["They contract", "They expand", "They stay the same size", "They disappear"],
				answer: 1,
				explain: "Most substances expand (increase in volume) when heated as particles move faster apart."
			},
			{
				q: "What is specific heat capacity?",
				options: ["Heat per second", "Energy needed to raise temperature of 1 kg by 1°C", "Always the same for all materials", "Related to density only"],
				answer: 1,
				explain: "Specific heat capacity is the energy needed to raise the temperature of 1 kg by 1°C."
			},

			// ===== FORCES & MOTION =====
			{
				q: "What is a force?",
				options: ["Only a push", "A push or pull that can change motion or shape", "Only a pull", "Only gravity"],
				answer: 1,
				explain: "A force is a push or pull that can change an object's motion or shape."
			},
			{
				q: "What is a contact force?",
				options: ["A force from distance", "A force that requires direct contact", "Always weak", "Only in gases"],
				answer: 1,
				explain: "Contact forces act between objects that touch (friction, normal force, applied force)."
			},
			{
				q: "What is a non-contact force?",
				options: ["A weak force", "A force that acts through distance without touching", "Always magnetic", "Only gravity exists"],
				answer: 1,
				explain: "Non-contact forces act without touching (gravity, magnetism, electrostatic force)."
			},
			{
				q: "What is friction?",
				options: ["A non-contact force", "A force that opposes motion between surfaces", "Always helpful", "Always harmful"],
				answer: 1,
				explain: "Friction is a contact force that opposes motion between surfaces in contact."
			},
			{
				q: "What is the normal force?",
				options: ["A horizontal force", "A force perpendicular to a surface supporting weight", "Always downward", "Only in air"],
				answer: 1,
				explain: "The normal force is perpendicular to a surface and prevents objects from sinking through."
			},
			{
				q: "What is gravity?",
				options: ["A contact force", "A non-contact force that attracts objects with mass", "Only on Earth", "Only pulls downward"],
				answer: 1,
				explain: "Gravity is a non-contact force that attracts all masses toward each other."
			},
			{
				q: "What is Newton's First Law of Motion?",
				options: ["Objects always accelerate", "An object at rest stays at rest unless a force acts on it", "Speed always increases", "Friction creates motion"],
				answer: 1,
				explain: "An object continues at constant velocity or rest unless an unbalanced force acts on it."
			},
			{
				q: "What is Newton's Second Law of Motion?",
				options: ["Objects stay still", "Force equals mass times acceleration (F = ma)", "All forces balance", "Acceleration is always the same"],
				answer: 1,
				explain: "The acceleration of an object depends on the net force and its mass (F = ma)."
			},
			{
				q: "What is Newton's Third Law of Motion?",
				options: ["All forces are equal", "For every action, there is an equal and opposite reaction", "Forces don't interact", "Only applies to magnets"],
				answer: 1,
				explain: "Forces always act in pairs; if A pushes B, then B pushes A with equal force."
			},
			{
				q: "What is a resultant force?",
				options: ["Any single force", "The overall effect of all forces acting on an object", "Only gravitational force", "Always balanced"],
				answer: 1,
				explain: "The resultant force is the net force; the vector sum of all forces acting on an object."
			},
			{
				q: "What does balanced forces mean?",
				options: ["Forces are equal in strength", "Net force is zero; no change in motion", "Moving fast", "Always harmful"],
				answer: 1,
				explain: "Balanced forces have a resultant of zero, so an object maintains constant velocity or stays at rest."
			},
			{
				q: "What does unbalanced forces mean?",
				options: ["All forces are different", "Net force is not zero; causes acceleration or change in motion", "No movement possible", "Only in contact"],
				answer: 1,
				explain: "Unbalanced forces create a non-zero resultant, causing acceleration or deceleration."
			},
			{
				q: "What is acceleration?",
				options: ["Same as velocity", "Rate of change of velocity", "Only speeding up", "Caused by zero force"],
				answer: 1,
				explain: "Acceleration is any change in velocity (speed up, slow down, or change direction)."
			},
			{
				q: "What is velocity?",
				options: ["Same as speed", "Speed with direction", "Always increases", "Only in straight lines"],
				answer: 1,
				explain: "Velocity is the speed and direction of an object's motion."
			},
			{
				q: "What is speed?",
				options: ["Distance per time with direction", "Distance traveled per unit of time", "Only horizontal movement", "Always constant"],
				answer: 1,
				explain: "Speed is the distance an object travels per unit of time (a scalar quantity)."
			},

			// ===== WAVES & SOUND =====
			{
				q: "What is a wave?",
				options: ["Only water movement", "A disturbance that transfers energy without transferring matter", "Always in water", "A type of particle"],
				answer: 1,
				explain: "A wave is an oscillation that transfers energy through space without moving matter."
			},
			{
				q: "What is amplitude?",
				options: ["The distance a wave travels", "The maximum displacement from rest position", "Only in sound waves", "Always one meter"],
				answer: 1,
				explain: "Amplitude is the maximum distance a particle oscillates from its rest position."
			},
			{
				q: "What is wavelength?",
				options: ["Height of a wave", "Distance between consecutive peaks or troughs", "Always visible", "Only in light"],
				answer: 1,
				explain: "Wavelength is the distance between two successive peaks or troughs in a wave."
			},
			{
				q: "What is frequency?",
				options: ["Distance of wave travel", "Number of oscillations per unit time", "Only one per wave", "Always in Hertz"],
				answer: 1,
				explain: "Frequency is the number of complete oscillations per second, measured in Hertz (Hz)."
			},
			{
				q: "What is the relationship between frequency and wavelength?",
				options: ["Always equal", "Inversely related (higher frequency = shorter wavelength)", "Unrelated", "Frequency causes wavelength"],
				answer: 1,
				explain: "Frequency and wavelength are inversely proportional (wave speed = frequency × wavelength)."
			},
			{
				q: "What is a transverse wave?",
				options: ["Particles vibrate along direction of motion", "Particles vibrate perpendicular to direction of motion", "Only in water", "Only sound waves"],
				answer: 1,
				explain: "In transverse waves, particles vibrate up and down while the wave travels horizontally."
			},
			{
				q: "What is a longitudinal wave?",
				options: ["Particles vibrate perpendicular to motion", "Particles vibrate parallel to direction of motion", "Only light", "Faster than sound"],
				answer: 1,
				explain: "In longitudinal waves, particles vibrate back and forth in the direction of wave motion."
			},
			{
				q: "What are examples of longitudinal waves?",
				options: ["Light waves", "Sound waves and seismic P-waves", "Water ripples", "All electromagnetic waves"],
				answer: 1,
				explain: "Sound waves and compression waves in springs are examples of longitudinal waves."
			},
			{
				q: "What is sound?",
				options: ["A type of light", "A longitudinal wave created by vibrating objects", "Only in air", "Travels in straight lines"],
				answer: 1,
				explain: "Sound is a longitudinal mechanical wave created by vibrations that travel through matter."
			},
			{
				q: "What determines the pitch of sound?",
				options: ["Volume only", "Frequency of the sound wave", "Amplitude of vibration", "Speed of sound always"],
				answer: 1,
				explain: "Pitch is determined by frequency; higher frequency = higher pitch."
			},
			{
				q: "What determines the volume (loudness) of sound?",
				options: ["Frequency only", "Amplitude of the sound wave", "Speed of sound", "Type of material"],
				answer: 1,
				explain: "Volume or loudness is determined by amplitude; larger amplitude = louder sound."
			},
			{
				q: "How does sound travel?",
				options: ["Through vacuum only", "Through a medium (solid, liquid, or gas)", "At the same speed everywhere", "Only through air"],
				answer: 1,
				explain: "Sound travels through matter (mediums) by causing particles to vibrate."
			},
			{
				q: "What is the speed of sound in air?",
				options: ["300,000 m/s", "About 340 m/s", "Constant everywhere", "Slower than light always"],
				answer: 1,
				explain: "Sound travels at approximately 340 m/s in air (varies with temperature)."
			},
			{
				q: "Can sound travel through vacuum?",
				options: ["Yes, always", "No, sound needs a medium", "Only high-pitched sound", "Never"],
				answer: 1,
				explain: "Sound cannot travel through vacuum because there are no particles to vibrate."
			},
			{
				q: "What is echo?",
				options: ["Sound stopping", "Reflected sound returning after bouncing off a surface", "Sound getting louder", "Only in caves"],
				answer: 1,
				explain: "An echo occurs when sound reflects off a surface and returns to the listener."
			},

			// ===== LIGHT & OPTICS =====
			{
				q: "What is light?",
				options: ["Only visible to eyes", "An electromagnetic wave that travels very fast", "Only from the sun", "A type of sound"],
				answer: 1,
				explain: "Light is an electromagnetic wave that travels at 300,000 km/s and can travel through vacuum."
			},
			{
				q: "What is the speed of light?",
				options: ["340 m/s", "Slower than sound", "About 300,000 km/s (3 × 10^8 m/s)", "Varies greatly"],
				answer: 2,
				explain: "Light travels at approximately 300,000 km/s in vacuum."
			},
			{
				q: "What is reflection?",
				options: ["Light passing through", "Light bouncing off a surface", "Light bending", "Light disappearing"],
				answer: 1,
				explain: "Reflection is when light bounces off a surface following the law of reflection."
			},
			{
				q: "What is the law of reflection?",
				options: ["Angle of incidence equals angle of reflection", "All light reflects equally", "Angle increases always", "No relationship to angle"],
				answer: 0,
				explain: "The angle of incidence equals the angle of reflection (both measured from the normal)."
			},
			{
				q: "What is refraction?",
				options: ["Light bouncing", "Light bending as it enters a different medium", "Light stopping", "Light speeding up"],
				answer: 1,
				explain: "Refraction is the bending of light when it passes from one medium to another."
			},
			{
				q: "Why does light refract when entering water from air?",
				options: ["Water absorbs light", "Light travels at different speeds in water than air", "Water has no effect", "Light disappears"],
				answer: 1,
				explain: "Light travels slower in water than air, causing it to bend when entering water."
			},
			{
				q: "What is a lens?",
				options: ["A flat piece of glass", "A curved piece of transparent material that refracts light", "Only in cameras", "Reflects all light"],
				answer: 1,
				explain: "A lens is a curved transparent object that refracts light to focus or disperse it."
			},
			{
				q: "What is a convex lens?",
				options: ["Curves inward", "Curves outward and focuses light to a point", "Always magnifies", "Disperses all light"],
				answer: 1,
				explain: "A convex lens curves outward and converges light rays to a focal point."
			},
			{
				q: "What is a concave lens?",
				options: ["Curves outward", "Curves inward and disperses light rays", "Always reduces size", "Focuses light sharply"],
				answer: 1,
				explain: "A concave lens curves inward and diverges light rays."
			},
			{
				q: "How does a magnifying glass work?",
				options: ["By reflecting light", "By using a convex lens to bend light and make objects appear larger", "By creating light", "By absorbing light"],
				answer: 1,
				explain: "A magnifying glass uses a convex lens to refract light and enlarge the image."
			},
			{
				q: "What is the electromagnetic spectrum?",
				options: ["Only visible light", "Range of all electromagnetic waves from radio to gamma rays", "Only sound waves", "Only energy"],
				answer: 1,
				explain: "The electromagnetic spectrum includes radio, microwave, infrared, visible, UV, X-ray, and gamma rays."
			},
			{
				q: "What are primary colors of light?",
				options: ["Red, yellow, blue", "Red, green, blue", "Red, orange, yellow", "Blue, green, violet"],
				answer: 1,
				explain: "The primary colors of light are red, green, and blue (RGB)."
			},
			{
				q: "How are colors formed in the eye?",
				options: ["By reflection only", "By the combination of wavelengths of light", "By the structure of the eye", "By the brain always"],
				answer: 1,
				explain: "Colors are perceived when light of different wavelengths stimulates color receptors in the eye."
			},
			{
				q: "What color of light has the longest wavelength?",
				options: ["Violet", "Blue", "Red", "Green"],
				answer: 2,
				explain: "Red light has the longest wavelength in the visible spectrum."
			},
			{
				q: "What color of light has the shortest wavelength?",
				options: ["Red", "Yellow", "Violet", "Orange"],
				answer: 2,
				explain: "Violet light has the shortest wavelength in the visible spectrum."
			},

			// ===== ELECTRICITY & CIRCUITS =====
			{
				q: "What is electrical charge?",
				options: ["A type of energy only", "A property of matter that causes electrical forces", "Only positive", "Measured in watts"],
				answer: 1,
				explain: "Electrical charge is a property of matter; electrons have negative charge, protons have positive."
			},
			{
				q: "What are the two types of electrical charge?",
				options: ["Positive and zero", "Positive and negative", "Strong and weak", "Current and voltage"],
				answer: 1,
				explain: "There are positive charges (protons) and negative charges (electrons)."
			},
			{
				q: "What is an electric current?",
				options: ["Movement of charge through a conductor", "Only from batteries", "Measured in volts", "A type of light"],
				answer: 0,
				explain: "Electric current is the flow of electrons through a conductor."
			},
			{
				q: "What is an electric circuit?",
				options: ["A closed path for current to flow", "Always circular in shape", "Only in homes", "Only one direction"],
				answer: 0,
				explain: "A circuit is a complete path where electric current can flow from power source and back."
			},
			{
				q: "What is a conductor?",
				options: ["A material that blocks electricity", "A material that allows electricity to flow easily", "Always a metal", "Only at high temperatures"],
				answer: 1,
				explain: "Conductors (copper, aluminum) allow electrical current to flow through easily."
			},
			{
				q: "What is an insulator?",
				options: ["Conducts electricity well", "A material that prevents or blocks electrical flow", "Always transparent", "Only plastic"],
				answer: 1,
				explain: "Insulators (rubber, plastic, glass) prevent electrical current from flowing through."
			},
			{
				q: "What is a series circuit?",
				options: ["Components connected in branches", "Components connected in a single loop", "Always safer", "Only one component"],
				answer: 1,
				explain: "A series circuit has components connected end-to-end in a single path."
			},
			{
				q: "What is a parallel circuit?",
				options: ["Components in a single line", "Components connected in separate branches", "Always less bright", "Only light bulbs"],
				answer: 1,
				explain: "A parallel circuit has components in separate branches with different paths for current."
			},
			{
				q: "What happens in a series circuit if one component fails?",
				options: ["Others continue working", "The entire circuit stops working", "Nothing changes", "Brightness increases"],
				answer: 1,
				explain: "In series, one broken component breaks the entire circuit because it's one path."
			},
			{
				q: "What happens in a parallel circuit if one component fails?",
				options: ["Entire circuit fails", "Other components continue working", "Current increases", "Voltage drops to zero"],
				answer: 1,
				explain: "In parallel, other branches continue working because each has its own path."
			},
			{
				q: "What is voltage?",
				options: ["Speed of electrons", "Potential difference; energy per unit charge", "Only from batteries", "Measured in amperes"],
				answer: 1,
				explain: "Voltage is the energy difference between two points; it drives current through a circuit."
			},
			{
				q: "What is resistance?",
				options: ["Opposition to current flow", "The amount of current flowing", "Only in metals", "Increases with temperature always"],
				answer: 0,
				explain: "Resistance opposes current flow; measured in ohms (Ω)."
			},
			{
				q: "What is Ohm's Law?",
				options: ["V = I + R", "V = IR (Voltage = Current × Resistance)", "I = V + R", "R = V/I only"],
				answer: 1,
				explain: "Ohm's Law: Voltage = Current × Resistance, or V = IR."
			},
			{
				q: "What is electrical power?",
				options: ["The energy stored", "Rate at which energy is transferred or used", "Only from generators", "Measured in volts"],
				answer: 1,
				explain: "Power is the rate of energy transfer; measured in watts (W)."
			},
			{
				q: "What is a switch?",
				options: ["Increases voltage", "Device that opens or closes a circuit", "Always on", "Only for lights"],
				answer: 1,
				explain: "A switch opens or closes a circuit to control current flow."
			},

			// ===== MAGNETISM =====
			{
				q: "What is a magnet?",
				options: ["Only a metal", "An object that attracts certain materials", "Only iron", "Created by electricity only"],
				answer: 1,
				explain: "A magnet is an object with a magnetic field that attracts magnetic materials."
			},
			{
				q: "What are the two poles of a magnet?",
				options: ["Positive and negative", "North and South", "Strong and weak", "Inside and outside"],
				answer: 1,
				explain: "Every magnet has a North pole and a South pole."
			},
			{
				q: "What happens when opposite magnetic poles meet?",
				options: ["They repel", "They attract", "Nothing happens", "They fuse together"],
				answer: 1,
				explain: "Opposite poles (N-S) attract each other with a strong force."
			},
			{
				q: "What happens when similar magnetic poles meet?",
				options: ["They attract", "They repel each other", "Nothing happens", "They merge"],
				answer: 1,
				explain: "Similar poles (N-N or S-S) repel each other."
			},
			{
				q: "What is the magnetic field?",
				options: ["Only visible as lines", "Region around a magnet where magnetic force acts", "Always strong", "Created by electricity only"],
				answer: 1,
				explain: "The magnetic field is the region around a magnet where magnetic effects are observed."
			},
			{
				q: "What is an electromagnet?",
				options: ["A natural magnet", "A magnet created by electricity flowing through a coil", "Only permanent", "Always weak"],
				answer: 1,
				explain: "An electromagnet is made by wrapping wire around a core and passing current through it."
			},
			{
				q: "What materials are magnetic?",
				options: ["All metals equally", "Iron, cobalt, nickel, and alloys containing these", "Only copper", "Only aluminum"],
				answer: 1,
				explain: "Iron, cobalt, nickel, and their alloys are ferromagnetic (attracted to magnets)."
			},
			{
				q: "Can you create a magnet with just one pole?",
				options: ["Yes, easily", "No, magnets always have two poles", "Only in space", "Only with electricity"],
				answer: 1,
				explain: "Every magnet has both poles; breaking a magnet creates two magnets, each with both poles."
			},
			{
				q: "What is the Earth's magnetic field used for?",
				options: ["Only navigation", "Navigation, protecting from solar radiation, and animal migration", "Only in compasses", "Creates weather only"],
				answer: 1,
				explain: "Earth's magnetic field helps compasses point north, protects from radiation, and aids migration."
			},
			{
				q: "How is electricity related to magnetism?",
				options: ["No relationship", "Moving charges create magnetic fields; changing magnetic fields create currents", "Only in batteries", "Only in motors"],
				answer: 1,
				explain: "Electricity and magnetism are closely related through electromagnetism."
			},

			// ===== ECOSYSTEMS & FOOD CHAINS =====
			{
				q: "What is an ecosystem?",
				options: ["Only living organisms", "A community of organisms and their physical environment", "Only plants", "Only in forests"],
				answer: 1,
				explain: "An ecosystem is the interaction of living (biotic) and non-living (abiotic) factors."
			},
			{
				q: "What is a food chain?",
				options: ["A sequence of food preparation", "A sequence showing energy transfer from producers to consumers", "Only in water", "Always has three organisms"],
				answer: 1,
				explain: "A food chain shows how energy flows from producers through consumers."
			},
			{
				q: "What is a producer in a food chain?",
				options: ["An animal that hunts", "An organism that makes its own food using sunlight (plants)", "A decomposer", "A consumer only"],
				answer: 1,
				explain: "Producers are autotrophs that capture solar energy and make organic compounds."
			},
			{
				q: "What is a consumer?",
				options: ["An organism that makes its own food", "An organism that eats other organisms for energy", "Always a plant", "Only herbivores"],
				answer: 1,
				explain: "Consumers are heterotrophs that obtain energy by eating other organisms."
			},
			{
				q: "What is a decomposer?",
				options: ["A type of consumer", "An organism that breaks down dead matter", "Only bacteria", "Eats live animals"],
				answer: 1,
				explain: "Decomposers (bacteria, fungi) break down dead matter and recycle nutrients."
			},
			{
				q: "What is a primary consumer?",
				options: ["Eats decomposers", "Eats producers (herbivore)", "Eats secondary consumers", "Produces its own food"],
				answer: 1,
				explain: "Primary consumers (herbivores) eat producers."
			},
			{
				q: "What is a secondary consumer?",
				options: ["Eats producers", "Eats primary consumers (carnivore/omnivore)", "Only plants", "A decomposer"],
				answer: 1,
				explain: "Secondary consumers (carnivores/omnivores) eat primary consumers."
			},
			{
				q: "What is a food web?",
				options: ["A single food chain", "Multiple interconnected food chains", "Only aquatic", "Only in rainforests"],
				answer: 1,
				explain: "A food web shows multiple food chains and how organisms interact."
			},
			{
				q: "What is photosynthesis?",
				options: ["Breakdown of glucose", "Process where plants use sunlight to make glucose", "Only in animals", "Creates oxygen but no glucose"],
				answer: 1,
				explain: "Photosynthesis: light energy + CO₂ + H₂O → glucose + O₂ in chloroplasts."
			},
			{
				q: "What is respiration in living organisms?",
				options: ["Making food", "Process that breaks down glucose to release energy", "Only breathing", "Only in plants"],
				answer: 1,
				explain: "Respiration: glucose + O₂ → CO₂ + H₂O + energy in all living things."
			},
			{
				q: "What is a habitat?",
				options: ["A food chain", "The specific place where an organism lives", "Only forests", "Only with other species"],
				answer: 1,
				explain: "A habitat is the physical place and conditions where an organism lives."
			},
			{
				q: "What is a niche?",
				options: ["A habitat only", "The role an organism plays in its ecosystem", "Where it sleeps", "How it reproduces"],
				answer: 1,
				explain: "A niche is the specific role, job, and position an organism has in its environment."
			},
			{
				q: "What is the carbon cycle?",
				options: ["Only involves carbon dioxide", "Movement of carbon between atmosphere, living things, and soil", "Only in air", "Only through respiration"],
				answer: 1,
				explain: "The carbon cycle moves carbon through photosynthesis, respiration, decomposition, and combustion."
			},
			{
				q: "What is the nitrogen cycle?",
				options: ["Nitrogen only in air", "Movement of nitrogen between atmosphere, soil, organisms, and back", "Only involves bacteria", "No cycling"],
				answer: 1,
				explain: "The nitrogen cycle involves nitrogen fixation, assimilation, decomposition, and nitrification."
			},
			{
				q: "What is the water cycle?",
				options: ["Water only in oceans", "Movement of water through evaporation, condensation, and precipitation", "Only in atmosphere", "Only in soil"],
				answer: 1,
				explain: "The water cycle: evaporation → condensation → precipitation → collection."
			},

			// ===== BIODIVERSITY & ADAPTATION =====
			{
				q: "What is biodiversity?",
				options: ["All organisms are the same", "Variety of species, genes, and ecosystems", "Only in tropical regions", "Decreasing always"],
				answer: 1,
				explain: "Biodiversity is the variety of all living organisms, genetic variation, and ecosystems."
			},
			{
				q: "What is a species?",
				options: ["A group of animals", "A group of similar organisms that can interbreed and produce fertile offspring", "Only plants or only animals", "A genus"],
				answer: 1,
				explain: "A species is defined by reproductive compatibility; organisms of same species can interbreed."
			},
			{
				q: "What is an organism's adaptation?",
				options: ["A disease", "A trait that helps an organism survive in its environment", "Only learned behavior", "Always visible"],
				answer: 1,
				explain: "Adaptations are inherited traits that increase an organism's chance of survival."
			},
			{
				q: "What is camouflage?",
				options: ["Moving quickly", "Blending with surroundings to avoid being seen", "Only color", "Always works"],
				answer: 1,
				explain: "Camouflage is an adaptation where an organism's appearance matches its environment."
			},
			{
				q: "What is mimicry?",
				options: ["Blending in", "Adaptation where an organism resembles another species", "Only insects", "Never beneficial"],
				answer: 1,
				explain: "Mimicry is when an organism looks like another (often a dangerous one) for protection."
			},
			{
				q: "What is an example of structural adaptation?",
				options: ["Learning to hunt", "Physical feature (thick fur, long legs, sharp claws)", "Moving to new area", "Seasonal behavior"],
				answer: 1,
				explain: "Structural adaptations are physical features that help organisms survive."
			},
			{
				q: "What is an example of behavioral adaptation?",
				options: ["Growing larger", "Action or behavior (hibernation, migration, hunting patterns)", "Changing color", "Developing new organs"],
				answer: 1,
				explain: "Behavioral adaptations are actions organisms do to survive (migration, tool use, social behavior)."
			},
			{
				q: "What is an endangered species?",
				options: ["A very fast species", "A species at risk of extinction with very few remaining", "Only large animals", "Always hunted"],
				answer: 1,
				explain: "An endangered species has so few members remaining that it faces risk of extinction."
			},
			{
				q: "What are the main causes of extinction?",
				options: ["Only natural disasters", "Habitat loss, climate change, disease, hunting, competition", "Only human activity", "Never preventable"],
				answer: 1,
				explain: "Extinction results from habitat loss, disease, climate change, predation, and competition."
			},
			{
				q: "What is conservation?",
				options: ["Increasing hunting", "Actions to protect and preserve species and ecosystems", "Only in parks", "Only stopping hunting"],
				answer: 1,
				explain: "Conservation includes protecting habitats, managing populations, and sustainable use of resources."
			},

			// ===== HUMAN BODY & HEALTH =====
			{
				q: "What are the main organ systems in the human body?",
				options: ["Only skeletal and muscular", "Skeletal, muscular, circulatory, respiratory, digestive, nervous, endocrine, reproductive, and others", "Only organs", "Always 5 systems"],
				answer: 1,
				explain: "The body has 11+ major organ systems working together to maintain life."
			},
			{
				q: "What is the function of the skeletal system?",
				options: ["Move the body", "Support, protection, and movement", "Only for calcium storage", "Produces food"],
				answer: 1,
				explain: "The skeleton provides structure, protects organs, and works with muscles for movement."
			},
			{
				q: "What is the function of the muscular system?",
				options: ["Only protection", "Movement, support, and heat production", "Only in limbs", "Stores energy"],
				answer: 1,
				explain: "Muscles contract to create movement, support posture, and generate heat."
			},
			{
				q: "What is the function of the circulatory system?",
				options: ["Digestion only", "Transport of blood, oxygen, nutrients, and waste throughout the body", "Only in heart", "Produces white cells"],
				answer: 1,
				explain: "The circulatory system transports oxygen, nutrients, hormones, and removes waste."
			},
			{
				q: "What is the function of the respiratory system?",
				options: ["Digestion", "Gas exchange; oxygen in, carbon dioxide out", "Only lungs matter", "Produces energy"],
				answer: 1,
				explain: "The respiratory system brings oxygen in and removes carbon dioxide through breathing."
			},
			{
				q: "What is the function of the digestive system?",
				options: ["Breathing", "Breaks down food and absorbs nutrients", "Only the stomach", "Moves blood"],
				answer: 1,
				explain: "The digestive system breaks down food into nutrients for absorption and removes waste."
			},
			{
				q: "What is the function of the nervous system?",
				options: ["Digestion only", "Controls and coordinates body functions via signals", "Only the brain", "Produces hormones"],
				answer: 1,
				explain: "The nervous system processes information and controls body responses."
			},
			{
				q: "What is the function of the endocrine system?",
				options: ["Movement", "Produces and releases hormones to regulate body processes", "Only the pancreas", "Only growth"],
				answer: 1,
				explain: "The endocrine system produces hormones that regulate growth, metabolism, and reproduction."
			},
			{
				q: "What is the function of the reproductive system?",
				options: ["Digestion", "Production of gametes and reproduction", "Only in adults", "Always active"],
				answer: 1,
				explain: "The reproductive system produces sex cells and enables reproduction."
			},
			{
				q: "What is a healthy diet?",
				options: ["Only vegetables", "Balanced intake of carbs, proteins, fats, vitamins, minerals, and water", "Only fruits", "No sugar ever"],
				answer: 1,
				explain: "A healthy diet includes all nutrients in appropriate proportions."
			},
			{
				q: "Why is exercise important?",
				options: ["Wastes time", "Strengthens muscles, improves cardiovascular health, and maintains weight", "Only for athletes", "Not needed for children"],
				answer: 1,
				explain: "Regular exercise improves fitness, mental health, and reduces disease risk."
			},
			{
				q: "What are vitamins needed for?",
				options: ["Only energy", "Support various body functions like immunity, bone health, and metabolism", "Only from supplements", "Not essential"],
				answer: 1,
				explain: "Vitamins are essential for health, growth, immunity, and metabolic processes."
			},

			// ===== EARTH'S STRUCTURE & PLATE TECTONICS =====
			{
				q: "What are the main layers of Earth?",
				options: ["Only crust and core", "Crust, mantle, outer core, and inner core", "Crust only", "No distinct layers"],
				answer: 1,
				explain: "Earth has crust (thin solid layer), mantle (hot rock), and core (liquid/solid iron-nickel)."
			},
			{
				q: "What is the crust?",
				options: ["Made of liquid rock", "The thin outermost solid layer of Earth", "Very thick", "Only continents"],
				answer: 1,
				explain: "The crust is Earth's thin solid outer layer, ranging 5-70 km thick."
			},
			{
				q: "What is the mantle?",
				options: ["A liquid layer", "The hot rocky layer beneath the crust", "Solid throughout", "Produces earthquakes only"],
				answer: 1,
				explain: "The mantle is hot rock that moves very slowly, driving plate tectonics."
			},
			{
				q: "What is the core?",
				options: ["Made of rock only", "The innermost layer of iron and nickel", "Always liquid", "Not very hot"],
				answer: 1,
				explain: "The core consists of a hot liquid outer core and solid inner core."
			},
			{
				q: "What are tectonic plates?",
				options: ["Only continents", "Large sections of Earth's crust that move", "Stationary always", "Made of water"],
				answer: 1,
				explain: "Tectonic plates are large rigid sections of the crust and uppermost mantle."
			},
			{
				q: "What is plate tectonics?",
				options: ["Stationary crust", "The theory that Earth's plates move and interact", "Only about earthquakes", "Recent discovery"],
				answer: 1,
				explain: "Plate tectonics explains crustal movements, earthquakes, volcanoes, and mountain building."
			},
			{
				q: "What happens at a convergent plate boundary?",
				options: ["Plates separate", "Plates collide and push together", "Plates slide past each other", "No interaction"],
				answer: 1,
				explain: "Convergent boundaries create mountains, volcanoes, and deep ocean trenches."
			},
			{
				q: "What happens at a divergent plate boundary?",
				options: ["Plates collide", "Plates move apart, creating new crust", "Plates slide", "No change"],
				answer: 1,
				explain: "Divergent boundaries form mid-ocean ridges and new oceanic crust."
			},
			{
				q: "What happens at a transform plate boundary?",
				options: ["Plates collide", "Plates separate", "Plates slide past each other horizontally", "No interaction"],
				answer: 2,
				explain: "Transform boundaries create earthquakes (e.g., San Andreas Fault)."
			},
			{
				q: "What causes earthquakes?",
				options: ["Only weather", "Movement and stress release along plate boundaries or faults", "Only near oceans", "Random events"],
				answer: 1,
				explain: "Earthquakes result from sudden movement of Earth's crust along faults or plate boundaries."
			},
			{
				q: "What is a volcano?",
				options: ["A mountain only", "An opening where magma erupts from Earth's interior", "Always on land", "Never active"],
				answer: 1,
				explain: "A volcano is a vent where magma, gases, and ash are ejected from the mantle."
			},
			{
				q: "What is magma?",
				options: ["Only on surface", "Molten rock beneath Earth's surface", "Always erupting", "Solid rock"],
				answer: 1,
				explain: "Magma is molten rock within the Earth; it becomes lava when it emerges."
			},
			{
				q: "What is lava?",
				options: ["Underground rock", "Molten rock that erupts from a volcano", "Always solid", "Same as magma"],
				answer: 1,
				explain: "Lava is magma that has reached Earth's surface."
			},
			{
				q: "What are the three main types of rocks?",
				options: ["Hard, soft, medium", "Igneous, sedimentary, and metamorphic", "Only two types", "Continually created"],
				answer: 1,
				explain: "Igneous (from magma), sedimentary (from compressed sediment), metamorphic (from heat/pressure)."
			},
			{
				q: "What is the rock cycle?",
				options: ["Rocks never change", "Continuous process of rock formation, breakdown, and reformation", "Only surface changes", "Takes days"],
				answer: 1,
				explain: "The rock cycle shows how rocks form, break down, and reform over geological time."
			},

			// ===== EARTH'S RESOURCES & SUSTAINABILITY =====
			{
				q: "What are natural resources?",
				options: ["Only minerals", "Materials from nature used by humans (water, minerals, fossil fuels, forests, etc.)", "Always renewable", "Limited in supply"],
				answer: 1,
				explain: "Natural resources are substances and materials from nature that humans use."
			},
			{
				q: "What is a renewable resource?",
				options: ["Cannot be used", "A resource that can be replenished naturally (solar, wind, water, forests)", "Always unlimited", "Never depletes"],
				answer: 1,
				explain: "Renewable resources replenish naturally on human timescales."
			},
			{
				q: "What is a non-renewable resource?",
				options: ["Forever available", "A resource that cannot be replenished quickly (fossil fuels, minerals)", "Always renewable", "Never runs out"],
				answer: 1,
				explain: "Non-renewable resources take millions of years to form; they deplete with use."
			},
			{
				q: "What is sustainability?",
				options: ["Using all resources at once", "Meeting current needs without harming future generations' ability to meet theirs", "Stopping all use", "Only environmental"],
				answer: 1,
				explain: "Sustainability means using resources responsibly to ensure availability for future."
			},
			{
				q: "What is pollution?",
				options: ["Helps ecosystems", "Introduction of harmful substances into the environment", "Only in air", "Natural process"],
				answer: 1,
				explain: "Pollution is contamination of air, water, or soil with harmful substances."
			},
			{
				q: "What is climate change?",
				options: ["Seasonal weather changes", "Long-term shift in global temperatures and climate patterns", "Only local", "Reversible instantly"],
				answer: 1,
				explain: "Climate change refers to long-term shifts in temperature and precipitation patterns."
			},
			{
				q: "What causes global warming?",
				options: ["Only solar radiation", "Greenhouse gases trapping heat from the sun", "Natural cycles only", "Does not exist"],
				answer: 1,
				explain: "Greenhouse gases (CO₂, methane) trap heat, causing global warming."
			},
			{
				q: "What are greenhouse gases?",
				options: ["Only oxygen", "Gases that trap heat in the atmosphere (CO₂, CH₄, N₂O)", "Always helpful", "In small amounts only"],
				answer: 1,
				explain: "Greenhouse gases prevent heat escape, causing warming of the atmosphere."
			},
			{
				q: "What can reduce pollution?",
				options: ["Nothing works", "Renewable energy, recycling, conservation, and clean technology", "Only stop using resources", "Individual actions don't matter"],
				answer: 1,
				explain: "Pollution reduction requires renewable energy, conservation, recycling, and policy changes."
			},

			// ===== SPACE & ASTRONOMY =====
			{
				q: "What is the solar system?",
				options: ["Only the Sun", "The Sun and all objects orbiting it (planets, moons, asteroids, comets)", "Only planets", "Constantly changing size"],
				answer: 1,
				explain: "The solar system contains the Sun and all objects gravitationally bound to it."
			},
			{
				q: "What is the Sun?",
				options: ["A planet", "A star that provides light and heat to the solar system", "A large planet", "Always the same"],
				answer: 1,
				explain: "The Sun is a massive ball of hot gas (star) at the center of our solar system."
			},
			{
				q: "How many planets are in our solar system?",
				options: ["8", "9", "10", "12"],
				answer: 0,
				explain: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
			},
			{
				q: "What are the inner planets?",
				options: ["All small ones", "Mercury, Venus, Earth, Mars (rocky, close to Sun)", "Larger planets", "Gas planets"],
				answer: 1,
				explain: "Inner planets are small, rocky, and close to the Sun."
			},
			{
				q: "What are the outer planets?",
				options: ["All small ones", "Jupiter, Saturn, Uranus, Neptune (gas/ice giants, far from Sun)", "Closest planets", "Always visible"],
				answer: 1,
				explain: "Outer planets are large gas and ice giants far from the Sun."
			},
			{
				q: "What is a moon?",
				options: ["A star", "A natural satellite that orbits a planet", "Always large", "Made of gas"],
				answer: 1,
				explain: "A moon is a rocky body that orbits a planet."
			},
			{
				q: "What is Earth's natural satellite?",
				options: ["The Sun", "The Moon", "Venus", "Mercury"],
				answer: 1,
				explain: "The Moon orbits Earth and affects tides and climate."
			},
			{
				q: "What causes day and night on Earth?",
				options: ["Earth's orbit", "Earth's rotation on its axis", "The Moon's position", "The Sun's movement"],
				answer: 1,
				explain: "As Earth rotates, different parts face toward or away from the Sun."
			},
			{
				q: "What causes seasons on Earth?",
				options: ["Earth's rotation", "Earth's orbit and axial tilt", "Distance from Sun only", "The Moon's gravity"],
				answer: 1,
				explain: "Seasons result from Earth's tilted axis as it orbits the Sun."
			},
			{
				q: "What is an orbit?",
				options: ["A rotating motion", "The path an object takes around another object", "Always circular", "Random movement"],
				answer: 1,
				explain: "An orbit is the curved path an object follows around another due to gravity."
			},
			{
				q: "What is a year?",
				options: ["365 days always", "Time for Earth to complete one orbit around the Sun", "Time for one rotation", "The Moon's cycle"],
				answer: 1,
				explain: "One year is approximately 365.25 days for Earth's complete orbit around the Sun."
			},
			{
				q: "What is a star?",
				options: ["A small light", "A massive sphere of hot gas producing light and heat", "Only visible at night", "Always the same"],
				answer: 1,
				explain: "A star is a massive ball of hot plasma that undergoes nuclear fusion."
			},
			{
				q: "What is a galaxy?",
				options: ["A single star", "A collection of billions of stars, planets, and gas", "Only one exists", "Made of planets only"],
				answer: 1,
				explain: "A galaxy is a large system of stars, gas, and dust held together by gravity."
			},
			{
				q: "What galaxy is our solar system in?",
				options: ["Andromeda", "The Milky Way", "A new galaxy", "No specific galaxy"],
				answer: 1,
				explain: "Our solar system is located in the Milky Way galaxy."
			},
			{
				q: "What is the universe?",
				options: ["Only our galaxy", "Everything that exists: all matter, energy, and space", "Only stars", "Finite and small"],
				answer: 1,
				explain: "The universe encompasses everything: all matter, energy, and space."
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
