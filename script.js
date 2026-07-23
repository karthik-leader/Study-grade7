"use strict";

const quizBank = {
	sciences: {
		title: "MYP Grade 7 Sciences Quiz",
		questions: [
			{ q: "Which structure controls activities inside a plant or animal cell?", options: ["Cell membrane", "Nucleus", "Cytoplasm", "Cell wall"], answer: 1, explain: "The nucleus contains DNA and controls all cell functions and activities." },
			{ q: "What is the main function of the cell membrane?", options: ["Store energy", "Control entry and exit of substances", "Make proteins", "Store water"], answer: 1, explain: "The cell membrane is selectively permeable, controlling what enters and leaves the cell." },
			{ q: "In plant cells, what is the function of the cell wall?", options: ["Control cell activity", "Support and protect", "Absorb sunlight", "Break down waste"], answer: 1, explain: "The rigid cell wall provides structural support and protection for plant cells." },
			{ q: "Where are mitochondria found?", options: ["Only in plant cells", "In both plant and animal cells", "Only in prokaryotes", "In the nucleus"], answer: 1, explain: "Mitochondria are found in both plant and animal cells, they produce energy." },
			{ q: "What is the function of mitochondria?", options: ["Make proteins", "Release energy from food", "Store DNA", "Absorb light"], answer: 1, explain: "Mitochondria break down glucose to release energy in the form of ATP." },
			{ q: "What is the function of ribosomes?", options: ["Release energy", "Store water", "Make proteins", "Control reproduction"], answer: 2, explain: "Ribosomes are the sites where proteins are synthesized from amino acids." },
			{ q: "Which organelle contains chlorophyll in plant cells?", options: ["Mitochondrion", "Ribosome", "Chloroplast", "Cell wall"], answer: 2, explain: "Chloroplasts contain chlorophyll and carry out photosynthesis in plant cells." },
			{ q: "What is the function of chlorophyll?", options: ["Store starch", "Absorb light energy", "Break down glucose", "Support the cell"], answer: 1, explain: "Chlorophyll is a green pigment that absorbs light energy for photosynthesis." },
			{ q: "Where is the vacuole in a plant cell and what does it do?", options: ["In nucleus; controls activity", "In cytoplasm; stores water and nutrients", "In chloroplast; makes food", "In cell wall; gives support"], answer: 1, explain: "The large central vacuole stores water, nutrients, and maintains cell turgor pressure." },
			{ q: "What is the difference between prokaryotic and eukaryotic cells?", options: ["Prokaryotes have no nucleus; eukaryotes have a nucleus", "Eukaryotes are smaller", "Prokaryotes are animals", "No real difference"], answer: 0, explain: "Prokaryotes (bacteria) lack a membrane-bound nucleus; eukaryotes have one." },
			{ q: "What can you observe with a light microscope that you cannot with the naked eye?", options: ["Individual cells", "Whole organs", "Entire organisms", "Bones"], answer: 0, explain: "Light microscopes magnify small objects like cells to visible sizes." },
			{ q: "How does magnification help in observing cells?", options: ["It changes the actual size", "It makes small objects appear larger", "It adds color", "It slows down movement"], answer: 1, explain: "Magnification makes small structures like organelles visible for detailed study." },
			{ q: "What is DNA?", options: ["An organelle", "A molecule that carries genetic information", "A type of protein", "A sugar molecule"], answer: 1, explain: "DNA (deoxyribonucleic acid) contains genetic instructions for all living organisms." },
			{ q: "What are chromosomes made of?", options: ["Proteins only", "DNA and proteins", "Fats", "Carbohydrates"], answer: 1, explain: "Chromosomes consist of DNA wrapped around protein structures called histones." },
			{ q: "What is a gene?", options: ["A whole chromosome", "A segment of DNA that codes for a trait", "A type of cell", "A protein structure"], answer: 1, explain: "A gene is a specific section of DNA that codes for a particular trait or protein." },
			{ q: "What is variation in a population?", options: ["All individuals are identical", "Differences in traits among individuals", "Change in chromosome number", "Mutation in all organisms"], answer: 1, explain: "Variation refers to natural differences in characteristics between individuals." },
			{ q: "What causes genetic variation?", options: ["Environment only", "Genes only", "Combination of genes from parents", "Age of organism"], answer: 2, explain: "Genetic variation comes from inheriting different combinations of genes from parents." },
			{ q: "What is a dominant trait?", options: ["A rare characteristic", "The trait that appears when at least one dominant allele is present", "A mutation", "A harmful gene"], answer: 1, explain: "A dominant trait is expressed even when only one copy of the dominant allele is present." },
			{ q: "What is a recessive trait?", options: ["A very common trait", "Appears only when two recessive alleles are present", "Disappears with age", "Always harmful"], answer: 1, explain: "A recessive trait only shows when an organism has two copies of the recessive allele." },
			{ q: "In reproduction, how does offspring inherit genetic material?", options: ["From one parent only", "From both parents equally", "Randomly from environment", "Created new each time"], answer: 1, explain: "Offspring inherit genetic material from both biological parents." },
			{ q: "What is sexual reproduction?", options: ["One parent produces identical offspring", "Two parents produce genetically different offspring", "Cells split equally", "No genetic mixing"], answer: 1, explain: "Sexual reproduction involves two parents contributing genetic material, creating variation." },
			{ q: "What is asexual reproduction?", options: ["Requires two parents", "One parent produces genetically identical offspring", "Creates variation", "Produces unfertilized eggs"], answer: 1, explain: "Asexual reproduction produces genetically identical offspring from one parent." },
			{ q: "What is evolution?", options: ["Change in species over long time periods", "Individual growth", "Seasonal changes", "Daily behavior changes"], answer: 0, explain: "Evolution is the gradual change in species characteristics over many generations." },
			{ q: "Who proposed the theory of natural selection?", options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Marie Curie"], answer: 1, explain: "Charles Darwin developed the theory of evolution through natural selection." },
			{ q: "What is natural selection?", options: ["Humans choosing traits", "Organisms with beneficial traits survive and reproduce more", "Random changes in genes", "Planned breeding"], answer: 1, explain: "Natural selection is the process where organisms with advantageous traits survive and pass them on." },
			{ q: "What is an adaptation?", options: ["A temporary change", "A trait that helps an organism survive in its environment", "A disease", "A learned behavior only"], answer: 1, explain: "An adaptation is a feature that helps an organism survive and reproduce in its environment." },
			{ q: "What is an example of a structural adaptation?", options: ["Learning to hunt", "Migrating to warmer climates", "A bear's thick fur", "Changing diet seasonally"], answer: 2, explain: "A bear's thick fur is a physical adaptation that provides insulation against cold." },
			{ q: "What is an example of a behavioral adaptation?", options: ["Growing taller", "A lion's mane", "Birds migrating south in winter", "Developing larger eyes"], answer: 2, explain: "Migration is a behavioral adaptation where animals move to different locations seasonally." },
			{ q: "What is extinction?", options: ["Temporary absence", "Permanent disappearance of a species", "Change in appearance", "Evolution of a new species"], answer: 1, explain: "Extinction is when the last member of a species dies, and the species no longer exists." },
			{ q: "What can cause extinction?", options: ["Only climate change", "Environmental changes, loss of habitat, disease, or competition", "Only human activity", "Never happens naturally"], answer: 1, explain: "Extinction can result from various factors including environmental change, habitat loss, or disease." },
			{ q: "What is evidence for evolution?", options: ["Only fossil records", "Fossils, comparative anatomy, DNA similarities, and living organisms", "Only living organisms", "Only recent observations"], answer: 1, explain: "Multiple lines of evidence support evolution: fossils, DNA, anatomy, and direct observation." },
			{ q: "What is matter?", options: ["Only solids", "Anything that has mass and takes up space", "Only invisible things", "Pure substances only"], answer: 1, explain: "Matter is anything that has mass and occupies space—solids, liquids, and gases." },
			{ q: "What is an element?", options: ["A mixture of substances", "A pure substance made of only one type of atom", "A compound", "A state of matter"], answer: 1, explain: "An element is a pure substance consisting of atoms of only one type." },
			{ q: "What is the smallest unit of matter?", options: ["Molecule", "Cell", "Atom", "Electron"], answer: 2, explain: "An atom is the smallest unit of matter that retains the properties of an element." },
			{ q: "What is an atom made of?", options: ["Only electrons", "Protons, neutrons, and electrons", "Only molecules", "Only nucleus"], answer: 1, explain: "Atoms consist of protons and neutrons in the nucleus, with electrons orbiting." },
			{ q: "Where is most of the mass of an atom located?", options: ["In electrons", "In the nucleus", "Spread evenly", "In the electron shells"], answer: 1, explain: "The nucleus contains protons and neutrons, which account for nearly all atomic mass." },
			{ q: "What is a compound?", options: ["A single element", "A substance made of two or more elements chemically bonded", "A mixture", "A pure metal"], answer: 1, explain: "A compound is formed when two or more elements combine chemically in fixed proportions." },
			{ q: "What is a mixture?", options: ["Elements bonded together", "A substance with a fixed composition", "Two or more substances mixed but not chemically bonded", "Always a liquid"], answer: 2, explain: "A mixture contains two or more substances that can be separated physically." },
			{ q: "What is a chemical reaction?", options: ["A physical change only", "A process where substances change into new substances", "Heating something", "Mixing without change"], answer: 1, explain: "A chemical reaction transforms reactants into new products with different properties." },
			{ q: "What is a sign that a chemical reaction has occurred?", options: ["Change in temperature", "Change in color", "Production of gas or precipitate", "Any of the above"], answer: 3, explain: "Evidence of chemical reactions includes temperature change, color change, gas production, or precipitate formation." },
			{ q: "Is melting a physical or chemical change?", options: ["Chemical change", "Physical change", "Both equally", "Neither"], answer: 1, explain: "Melting is a physical change; the substance is still the same, just in a different state." },
			{ q: "Is rusting of iron a physical or chemical change?", options: ["Physical change", "Chemical change", "Both", "Neither"], answer: 1, explain: "Rusting is a chemical reaction where iron combines with oxygen to form a new substance." },
			{ q: "What does a chemical equation show?", options: ["Only physical changes", "Reactants and products of a chemical reaction", "Temperature only", "Atoms disappearing"], answer: 1, explain: "A chemical equation uses symbols to show reactants, products, and their quantities." },
			{ q: "What is the law of conservation of mass?", options: ["Mass is created in reactions", "Mass is destroyed in reactions", "Mass cannot be created or destroyed in reactions", "Mass changes daily"], answer: 2, explain: "In chemical reactions, mass is conserved; reactants and products have equal total mass." },
			{ q: "What is a combustion reaction?", options: ["Melting", "A reaction where a substance burns in oxygen releasing heat and light", "Freezing", "Evaporation"], answer: 1, explain: "Combustion is a rapid chemical reaction with oxygen that releases energy as heat and light." },
			{ q: "What is an acid?", options: ["A substance with pH greater than 7", "A substance with pH less than 7", "Always a liquid", "Only found in metals"], answer: 1, explain: "Acids are substances with pH less than 7 that taste sour and turn blue litmus red." },
			{ q: "What is a base (alkali)?", options: ["A substance with pH less than 7", "A substance with pH greater than 7", "Always a gas", "Only found in plants"], answer: 1, explain: "Bases are substances with pH greater than 7 that feel slippery and turn red litmus blue." },
			{ q: "What is pH?", options: ["Temperature scale", "Scale measuring acidity or alkalinity (0-14)", "Measure of density", "Amount of matter"], answer: 1, explain: "pH is a scale from 0-14 indicating how acidic or basic a substance is." },
			{ q: "What pH is neutral?", options: ["pH 0", "pH 7", "pH 14", "pH -7"], answer: 1, explain: "A neutral solution has pH 7, neither acidic nor alkaline." },
			{ q: "What is a neutralization reaction?", options: ["Acid becoming stronger", "Acid and base reacting to form salt and water", "Base disappearing", "Temperature increasing"], answer: 1, explain: "Neutralization occurs when an acid and base react to form a salt and water." },
			{ q: "How many states of matter are there?", options: ["Two", "Three", "Four", "Five"], answer: 2, explain: "Three main states are solid, liquid, and gas; plasma is sometimes considered a fourth." },
			{ q: "What defines a solid?", options: ["Particles far apart and moving freely", "Definite shape and volume", "No defined shape or volume", "Only in cold temperatures"], answer: 1, explain: "Solids have a fixed shape and volume with particles tightly packed and vibrating." },
			{ q: "What defines a liquid?", options: ["Fixed shape and volume", "Defined volume but takes shape of container", "No mass or volume", "Always clear"], answer: 1, explain: "Liquids have a definite volume but take the shape of their container." },
			{ q: "What defines a gas?", options: ["Fixed shape and volume", "No definite shape or volume; spreads to fill container", "Denser than solids", "Always invisible"], answer: 1, explain: "Gases have no fixed shape or volume and expand to fill any container." },
			{ q: "What happens when a substance is heated?", options: ["Particles disappear", "Particles move faster and farther apart", "Particles stop moving", "New particles form"], answer: 1, explain: "Heating increases particle movement and energy, causing them to move faster and farther apart." },
			{ q: "What is evaporation?", options: ["Gas becoming liquid", "Liquid becoming gas at the surface", "Solid becoming liquid", "Cooling process"], answer: 1, explain: "Evaporation is when particles escape from the surface of a liquid and become gas." },
			{ q: "What is condensation?", options: ["Liquid becoming solid", "Gas becoming liquid", "Solid becoming gas", "A heating process"], answer: 1, explain: "Condensation is when gas particles slow down and form a liquid." },
			{ q: "What is melting?", options: ["Liquid becoming gas", "Solid becoming liquid", "Gas becoming solid", "Breaking apart"], answer: 1, explain: "Melting occurs when a solid is heated and its particles gain energy to form a liquid." },
			{ q: "What is a force?", options: ["Only a push", "A push or pull that can change motion or shape", "Only a pull", "Only gravity"], answer: 1, explain: "A force is a push or pull that can change an object's motion or shape." },
			{ q: "What is friction?", options: ["A non-contact force", "A force that opposes motion between surfaces", "Always helpful", "Always harmful"], answer: 1, explain: "Friction is a contact force that opposes motion between surfaces in contact." },
			{ q: "What is gravity?", options: ["A contact force", "A non-contact force that attracts objects with mass", "Only on Earth", "Only pulls downward"], answer: 1, explain: "Gravity is a non-contact force that attracts all masses toward each other." },
			{ q: "What is Newton's First Law of Motion?", options: ["Objects always accelerate", "An object at rest stays at rest unless a force acts on it", "Speed always increases", "Friction creates motion"], answer: 1, explain: "An object continues at constant velocity or rest unless an unbalanced force acts on it." },
			{ q: "What is Newton's Second Law of Motion?", options: ["Objects stay still", "Force equals mass times acceleration (F = ma)", "All forces balance", "Acceleration is always the same"], answer: 1, explain: "The acceleration of an object depends on the net force and its mass (F = ma)." },
			{ q: "What is Newton's Third Law of Motion?", options: ["All forces are equal", "For every action, there is an equal and opposite reaction", "Forces don't interact", "Only applies to magnets"], answer: 1, explain: "Forces always act in pairs; if A pushes B, then B pushes A with equal force." },
			{ q: "What does balanced forces mean?", options: ["Forces are equal in strength", "Net force is zero; no change in motion", "Moving fast", "Always harmful"], answer: 1, explain: "Balanced forces have a resultant of zero, so an object maintains constant velocity or stays at rest." },
			{ q: "What is acceleration?", options: ["Same as velocity", "Rate of change of velocity", "Only speeding up", "Caused by zero force"], answer: 1, explain: "Acceleration is any change in velocity (speed up, slow down, or change direction)." },
			{ q: "What is velocity?", options: ["Same as speed", "Speed with direction", "Always increases", "Only in straight lines"], answer: 1, explain: "Velocity is the speed and direction of an object's motion." },
			{ q: "What is speed?", options: ["Distance per time with direction", "Distance traveled per unit of time", "Only horizontal movement", "Always constant"], answer: 1, explain: "Speed is the distance an object travels per unit of time (a scalar quantity)." },
			{ q: "What is a wave?", options: ["Only water movement", "A disturbance that transfers energy without transferring matter", "Always in water", "A type of particle"], answer: 1, explain: "A wave is an oscillation that transfers energy through space without moving matter." },
			{ q: "What is amplitude?", options: ["The distance a wave travels", "The maximum displacement from rest position", "Only in sound waves", "Always one meter"], answer: 1, explain: "Amplitude is the maximum distance a particle oscillates from its rest position." },
			{ q: "What is wavelength?", options: ["Height of a wave", "Distance between consecutive peaks or troughs", "Always visible", "Only in light"], answer: 1, explain: "Wavelength is the distance between two successive peaks or troughs in a wave." },
			{ q: "What is frequency?", options: ["Distance of wave travel", "Number of oscillations per unit time", "Only one per wave", "Always in Hertz"], answer: 1, explain: "Frequency is the number of complete oscillations per second, measured in Hertz (Hz)." },
			{ q: "What is sound?", options: ["A type of light", "A longitudinal wave created by vibrating objects", "Only in air", "Travels in straight lines"], answer: 1, explain: "Sound is a longitudinal mechanical wave created by vibrations that travel through matter." },
			{ q: "What determines the pitch of sound?", options: ["Volume only", "Frequency of the sound wave", "Amplitude of vibration", "Speed of sound always"], answer: 1, explain: "Pitch is determined by frequency; higher frequency = higher pitch." },
			{ q: "What determines the volume (loudness) of sound?", options: ["Frequency only", "Amplitude of the sound wave", "Speed of sound", "Type of material"], answer: 1, explain: "Volume or loudness is determined by amplitude; larger amplitude = louder sound." },
			{ q: "What is light?", options: ["Only visible to eyes", "An electromagnetic wave that travels very fast", "Only from the sun", "A type of sound"], answer: 1, explain: "Light is an electromagnetic wave that travels at 300,000 km/s and can travel through vacuum." },
			{ q: "What is reflection?", options: ["Light passing through", "Light bouncing off a surface", "Light bending", "Light disappearing"], answer: 1, explain: "Reflection is when light bounces off a surface following the law of reflection." },
			{ q: "What is refraction?", options: ["Light bouncing", "Light bending as it enters a different medium", "Light stopping", "Light speeding up"], answer: 1, explain: "Refraction is the bending of light when it passes from one medium to another." },
			{ q: "What is a lens?", options: ["A flat piece of glass", "A curved piece of transparent material that refracts light", "Only in cameras", "Reflects all light"], answer: 1, explain: "A lens is a curved transparent object that refracts light to focus or disperse it." },
			{ q: "What is an electric current?", options: ["Movement of charge through a conductor", "Only from batteries", "Measured in volts", "A type of light"], answer: 0, explain: "Electric current is the flow of electrons through a conductor." },
			{ q: "What is a circuit?", options: ["A closed path for current to flow", "Always circular in shape", "Only in homes", "Only one direction"], answer: 0, explain: "A circuit is a complete path where electric current can flow from power source and back." },
			{ q: "What is a conductor?", options: ["A material that blocks electricity", "A material that allows electricity to flow easily", "Always a metal", "Only at high temperatures"], answer: 1, explain: "Conductors (copper, aluminum) allow electrical current to flow through easily." },
			{ q: "What is a series circuit?", options: ["Components connected in branches", "Components connected in a single loop", "Always safer", "Only one component"], answer: 1, explain: "A series circuit has components connected end-to-end in a single path." },
			{ q: "What is Ohm's Law?", options: ["V = I + R", "V = IR (Voltage = Current × Resistance)", "I = V + R", "R = V/I only"], answer: 1, explain: "Ohm's Law: Voltage = Current × Resistance, or V = IR." },
			{ q: "What is a magnet?", options: ["Only a metal", "An object that attracts certain materials", "Only iron", "Created by electricity only"], answer: 1, explain: "A magnet is an object with a magnetic field that attracts magnetic materials." },
			{ q: "What are the two poles of a magnet?", options: ["Positive and negative", "North and South", "Strong and weak", "Inside and outside"], answer: 1, explain: "Every magnet has a North pole and a South pole." },
			{ q: "What happens when opposite magnetic poles meet?", options: ["They repel", "They attract", "Nothing happens", "They fuse together"], answer: 1, explain: "Opposite poles (N-S) attract each other with a strong force." },
			{ q: "What is an electromagnet?", options: ["A natural magnet", "A magnet created by electricity flowing through a coil", "Only permanent", "Always weak"], answer: 1, explain: "An electromagnet is made by wrapping wire around a core and passing current through it." },
			{ q: "What is a food chain?", options: ["A sequence of food preparation", "A sequence showing energy transfer from producers to consumers", "Only in water", "Always has three organisms"], answer: 1, explain: "A food chain shows how energy flows from producers through consumers." },
			{ q: "What is a producer?", options: ["An animal that hunts", "An organism that makes its own food using sunlight (plants)", "A decomposer", "A consumer only"], answer: 1, explain: "Producers are autotrophs that capture solar energy and make organic compounds." },
			{ q: "What is a decomposer?", options: ["A type of consumer", "An organism that breaks down dead matter", "Only bacteria", "Eats live animals"], answer: 1, explain: "Decomposers (bacteria, fungi) break down dead matter and recycle nutrients." },
			{ q: "What is photosynthesis?", options: ["Breakdown of glucose", "Process where plants use sunlight to make glucose", "Only in animals", "Creates oxygen but no glucose"], answer: 1, explain: "Photosynthesis: light energy + CO₂ + H₂O → glucose + O₂ in chloroplasts." },
			{ q: "What is respiration?", options: ["Making food", "Process that breaks down glucose to release energy", "Only breathing", "Only in plants"], answer: 1, explain: "Respiration: glucose + O₂ → CO₂ + H₂O + energy in all living things." },
			{ q: "What are the main layers of Earth?", options: ["Only crust and core", "Crust, mantle, outer core, and inner core", "Crust only", "No distinct layers"], answer: 1, explain: "Earth has crust (thin solid layer), mantle (hot rock), and core (liquid/solid iron-nickel)." },
			{ q: "What is the crust?", options: ["Made of liquid rock", "The thin outermost solid layer of Earth", "Very thick", "Only continents"], answer: 1, explain: "The crust is Earth's thin solid outer layer, ranging 5-70 km thick." },
			{ q: "What causes earthquakes?", options: ["Only weather", "Movement and stress release along plate boundaries or faults", "Only near oceans", "Random events"], answer: 1, explain: "Earthquakes result from sudden movement of Earth's crust along faults or plate boundaries." },
			{ q: "What is a volcano?", options: ["A mountain only", "An opening where magma erupts from Earth's interior", "Always on land", "Never active"], answer: 1, explain: "A volcano is a vent where magma, gases, and ash are ejected from the mantle." },
			{ q: "What causes day and night on Earth?", options: ["Earth's orbit", "Earth's rotation on its axis", "The Moon's position", "The Sun's movement"], answer: 1, explain: "As Earth rotates, different parts face toward or away from the Sun." },
			{ q: "What causes seasons on Earth?", options: ["Earth's rotation", "Earth's orbit and axial tilt", "Distance from Sun only", "The Moon's gravity"], answer: 1, explain: "Seasons result from Earth's tilted axis as it orbits the Sun." },
			{ q: "How many planets are in our solar system?", options: ["8", "9", "10", "12"], answer: 0, explain: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune." },
			{ q: "What is the Sun?", options: ["A planet", "A star that provides light and heat to the solar system", "A large planet", "Always the same"], answer: 1, explain: "The Sun is a massive ball of hot gas (star) at the center of our solar system." },
			{ q: "What is the function of the nucleus in a cell?", options: ["Produce energy", "Control cell activities and contain genetic material", "Break down waste", "Transport materials"], answer: 1, explain: "The nucleus is the control center containing DNA and controls all cellular functions." },
			{ q: "What is a membrane?", options: ["A solid wall", "A thin layer that controls what enters and exits", "Only in plants", "Produces energy"], answer: 1, explain: "A cell membrane is a selectively permeable layer that regulates substance movement." },
			{ q: "What is the relationship between DNA and chromosomes?", options: ["DNA is in chromosomes", "Chromosomes are made of DNA", "They are the same thing", "No relationship"], answer: 1, explain: "Chromosomes are structures made primarily of DNA and proteins." },
			{ q: "What happens during mitosis?", options: ["Cell divides into two identical cells", "DNA is replicated", "Chromosomes disappear", "Cell size increases"], answer: 0, explain: "Mitosis is the process of cell division producing two identical daughter cells." },
			{ q: "What is the role of enzymes in living organisms?", options: ["Store energy", "Speed up chemical reactions", "Create new cells", "Transport oxygen"], answer: 1, explain: "Enzymes are biological catalysts that speed up chemical reactions in cells." },
			{ q: "What is fermentation?", options: ["Breaking down glucose without oxygen", "Requires oxygen only", "Creates water", "Stops energy production"], answer: 0, explain: "Fermentation is anaerobic respiration producing ATP without oxygen." },
			{ q: "What is biodiversity?", options: ["Variety of organisms in an area", "Only large animals", "Number of plants only", "Extinct species"], answer: 0, explain: "Biodiversity refers to the variety of species, genes, and ecosystems in an area." },
			{ q: "What is an endemic species?", options: ["Found everywhere", "Found only in one geographic location", "Recently discovered", "No longer alive"], answer: 1, explain: "Endemic species are found naturally only in a specific geographic region." },
			{ q: "What is the difference between weather and climate?", options: ["No difference", "Weather is short-term, climate is long-term patterns", "Climate is hotter", "Weather lasts years"], answer: 1, explain: "Weather is day-to-day atmospheric conditions; climate is average weather patterns." },
			{ q: "What is the greenhouse effect?", options: ["Growing plants indoors", "Gases trapping heat in atmosphere", "Ice melting only", "Wind in greenhouses"], answer: 1, explain: "The greenhouse effect is when gases trap solar heat, warming Earth's atmosphere." },
			{ q: "What is an organism's niche?", options: ["Physical location", "Its role and how it uses resources", "Only food source", "Sleeping place"], answer: 1, explain: "An organism's niche is its specific role in the ecosystem and how it uses resources." },
			{ q: "What is succession in ecology?", options: ["Species disappearing", "Gradual change in community composition over time", "Seasons changing", "Only in forests"], answer: 1, explain: "Ecological succession is the predictable change of species composition in a habitat." },
			{ q: "What is the relationship between organisms in a symbiosis?", options: ["Always harmful", "One benefits, one is harmed", "Close relationship with different outcomes", "Only bacteria"], answer: 2, explain: "Symbiosis includes mutualism (both benefit), parasitism (one benefits), and commensalism (one benefits, one unaffected)." }
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
				options: ["Only for wealthy countries", "Basic rights all humans deserve regardless of where they live", "Only for adults", "Only for citizens"],
				answer: 1,
				explain: "Human rights are fundamental rights that apply to all people worldwide."
			}
		]
	}
};

const state = {
	currentSubject: 'sciences',
	currentQuestionIndex: 0,
	score: 0,
	answered: false
};

const subjectButtons = document.querySelectorAll(".subject-btn");
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
const quizShell = document.querySelector(".quiz-shell");

subjectButtons.forEach(btn => {
	btn.addEventListener("click", e => {
		subjectButtons.forEach(b => b.classList.remove("is-active"));
		e.target.classList.add("is-active");
		state.currentSubject = e.target.dataset.subject;
		state.currentQuestionIndex = 0;
		state.score = 0;
		state.answered = false;
		resultPanel.hidden = true;
		quizShell.hidden = false;
		renderQuestion();
	});
});

function getSubjectData() {
	return quizBank[state.currentSubject];
}

function renderQuestion() {
	const subjectData = getSubjectData();
	const question = subjectData.questions[state.currentQuestionIndex];
	const totalQuestions = subjectData.questions.length;

	subjectTitle.textContent = subjectData.title;
	progressText.textContent = `Question ${state.currentQuestionIndex + 1} of ${totalQuestions}`;
	questionText.textContent = question.q;
	optionsList.innerHTML = "";
	feedbackBox.hidden = true;
	state.answered = false;
	nextBtn.disabled = true;

	question.options.forEach((option, index) => {
		const button = document.createElement("button");
		button.className = "option-btn";
		button.textContent = option;
		button.addEventListener("click", () => handleAnswerClick(index));
		optionsList.appendChild(button);
	});
}

function handleAnswerClick(selectedIndex) {
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

nextBtn.addEventListener("click", () => {
	const subjectData = getSubjectData();
	if (state.currentQuestionIndex < subjectData.questions.length - 1) {
		state.currentQuestionIndex += 1;
		renderQuestion();
	} else {
		showResults();
	}
});

function showResults() {
	const subjectData = getSubjectData();
	const percentage = Math.round((state.score / subjectData.questions.length) * 100);

	quizShell.hidden = true;
	resultPanel.hidden = false;
	resultTitle.textContent = `Quiz Complete!`;
	resultSummary.textContent = `You scored ${state.score} out of ${subjectData.questions.length} (${percentage}%)`;
}

restartBtn.addEventListener("click", () => {
	state.currentQuestionIndex = 0;
	state.score = 0;
	state.answered = false;
	resultPanel.hidden = true;
	quizShell.hidden = false;
	renderQuestion();
});

renderQuestion();

// Cache invalidation: 2026-07-23 18:37:47
