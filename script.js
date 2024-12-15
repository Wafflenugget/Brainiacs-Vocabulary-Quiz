const questions = {
    1: [
        { question: "What does 'happy' mean?", options: ["Sad", "Joyful", "Angry", "Confused"], answer: "Joyful" },
        { question: "What does 'cat' mean?", options: ["A type of dog", "A small animal", "A bird", "A fish"], answer: "A small animal" },
        { question: "What does 'big' mean?", options: ["Small", "Large", "Short", "Weak"], answer: "Large" },
        { question: "What does 'fast' mean?", options: ["Slow", "Quick", "Lazy", "Weak"], answer: "Quick" },
        { question: "What does 'wet' mean?", options: ["Dry", "Soaked", "Cold", "Hard"], answer: "Soaked" },
        { question: "What does 'hot' mean?", options: ["Cold", "Warm", "Cool", "Frozen"], answer: "Warm" },
        { question: "What does 'bright' mean?", options: ["Dark", "Shiny", "Dull", "Dim"], answer: "Shiny" },
        { question: "What does 'soft' mean?", options: ["Hard", "Gentle", "Rough", "Tough"], answer: "Gentle" },
        { question: "What does 'smooth' mean?", options: ["Rough", "Soft", "Bumpy", "Hard"], answer: "Soft" },
        { question: "What does 'new' mean?", options: ["Old", "Fresh", "Used", "Worn"], answer: "Fresh" }
    ],
    2: [
        { question: "What does 'joyfully' mean?", options: ["With sadness", "With happiness", "With anger", "With fear"], answer: "With happiness" },
        { question: "What does 'quickly' mean?", options: ["Slowly", "Fast", "Carefully", "Easily"], answer: "Fast" },
        { question: "What does 'proud' mean?", options: ["Ashamed", "Happy", "Sad", "Angry"], answer: "Happy" },
        { question: "What does 'brave' mean?", options: ["Scared", "Fearless", "Cowardly", "Timid"], answer: "Fearless" },
        { question: "What does 'satisfied' mean?", options: ["Unhappy", "Content", "Bored", "Angry"], answer: "Content" },
        { question: "What does 'mysterious' mean?", options: ["Clear", "Unclear", "Easy", "Simple"], answer: "Unclear" },
        { question: "What does 'enormous' mean?", options: ["Tiny", "Huge", "Small", "Weak"], answer: "Huge" },
        { question: "What does 'brilliant' mean?", options: ["Dull", "Smart", "Stupid", "Weak"], answer: "Smart" },
        { question: "What does 'delightful' mean?", options: ["Boring", "Enjoyable", "Sad", "Angry"], answer: "Enjoyable" },
        { question: "What does 'fantastic' mean?", options: ["Terrible", "Amazing", "Good", "Bad"], answer: "Amazing" }
    ],
    3: [
        { question: "What does 'meticulous' mean?", options: ["Careful", "Lazy", "Messy", "Fast"], answer: "Careful" },
        { question: "What does 'benevolent' mean?", options: ["Kind", "Evil", "Angry", "Sad"], answer: "Kind" },
        { question: "What does 'innovative' mean?", options: ["Old", "Creative", "Stale", "Broken"], answer: "Creative" },
        { question: "What does 'ambitious' mean?", options: ["Lazy", "Eager", "Disinterested", "Passive"], answer: "Eager" },
        { question: "What does 'eloquent' mean?", options: ["Unclear", "Fluent", "Rude", "Simple"], answer: "Fluent" },
        { question: "What does 'sustainable' mean?", options: ["Temporary", "Supportable", "Weak", "Fragile"], answer: "Supportable" },
        { question: "What does 'metamorphosis' mean?", options: ["Change", "Growth", "Decay", "Stagnation"], answer: "Change" },
        { question: "What does 'cognizant' mean?", options: ["Unaware", "Informed", "Confused", "Disinterested"], answer: "Informed" },
        { question: "What does 'persevere' mean?", options: ["Give up", "Persist", "Fail", "Stop"], answer: "Persist" },
        { question: "What does 'diligent' mean?", options: ["Lazy", "Hardworking", "Careless", "Slow"], answer: "Hardworking" }
    ],
    4: [
        { question: "What does 'contemplate' mean?", options: ["To ignore", "To think about", "To rush", "To forget"], answer: "To think about" },
        { question: "What does 'cognizant' mean?", options: ["Unaware", "Informed", "Confused", "Disinterested"], answer: "Informed" },
        { question: "What does 'perpetuate' mean?", options: ["To stop", "To continue", "To end", "To slow down"], answer: "To continue" },
        { question: "What does 'exemplary' mean?", options: ["Average", "Outstanding", "Poor", "Subpar"], answer: "Outstanding" },
        { question: "What does 'authentic' mean?", options: ["Fake", "Genuine", "False", "Dishonest"], answer: "Genuine" },
        { question: "What does 'exasperate' mean?", options: ["To calm", "To annoy", "To please", "To help"], answer: "To annoy" },
        { question: "What does 'meticulous' mean?", options: ["Careless", "Detailed", "Hasty", "Quick"], answer: "Detailed" },
        { question: "What does 'integrity' mean?", options: ["Dishonesty", "Ethics", "Corruption", "Deceit"], answer: "Ethics" },
        { question: "What does 'nostalgic' mean?", options: ["Happy", "Sad", "Longing", "Excited"], answer: "Longing" },
        { question: "What does 'inevitable' mean?", options: ["Unlikely", "Certain", "Possible", "Avoidable"], answer: "Certain" }
    ],
    5: [
        { question: "What does 'resilient' mean?", options: ["Weak", "Strong", "Fragile", "Sensitive"], answer: "Strong" },
        { question: "What does 'extrapolate' mean?", options: ["To predict", "To assume", "To ignore", "To clarify"], answer: "To predict" },
        { question: "What does 'ambiguous' mean?", options: ["Clear", "Uncertain", "Obvious", "Simple"], answer: "Uncertain" },
        { question: "What does 'candid' mean?", options: ["Deceitful", "Honest", "Misleading", "Ambiguous"], answer: "Honest" },
        { question: "What does 'ephemeral' mean?", options: ["Permanent", "Temporary", "Lasting", "Durable"], answer: "Temporary" },
        { question: "What does 'malleable' mean?", options: ["Rigid", "Flexible", "Brittle", "Hard"], answer: "Flexible" },
        { question: "What does 'ubiquitous' mean?", options: ["Rare", "Everywhere", "Seldom", "Uncommon"], answer: "Everywhere" },
        { question: "What does 'paradox' mean?", options: ["Contradiction", "Truth", "Simplicity", "Obviousness"], answer: "Contradiction" },
        { question: "What does 'lucid' mean?", options: ["Confused", "Clear", "Obscure", "Complicated"], answer: "Clear" },
        { question: "What does 'enigmatic' mean?", options: ["Clear", "Mysterious", "Simple", "Obvious"], answer: "Mysterious" }
    ],
    6: [
        { question: "What does 'perspicacious' mean?", options: ["Insightful", "Dull", "Blind", "Naive"], answer: "Insightful" },
        { question: "What does 'intransigent' mean?", options: ["Flexible", "Unyielding", "Agreeable", "Bending"], answer: "Unyielding" },
        { question: "What does 'antithesis' mean?", options: ["Same", "Opposite", "Similar", "Equal"], answer: "Opposite" },
        { question: "What does 'venerable' mean?", options: ["Young", "Respected", "Contemptible", "Hated"], answer: "Respected" },
        { question: "What does 'recalcitrant' mean?", options: ["Obedient", "Stubborn", "Docile", "Submissive"], answer: "Stubborn" },
        { question: "What does 'magnanimous' mean?", options: ["Selfish", "Generous", "Greedy", "Penny-pinching"], answer: "Generous" },
        { question: "What does 'sagacious' mean?", options: ["Foolish", "Wise", "Ignorant", "Naive"], answer: "Wise" },
        { question: "What does 'dichotomy' mean?", options: ["Unity", "Division", "Connection", "Harmony"], answer: "Division" },
        { question: "What does 'anomaly' mean?", options: ["Normal", "Deviation", "Commonplace", "Routine"], answer: "Deviation" },
        { question: "What does 'cogent' mean?", options: ["Weak", "Strong", "Compelling", "Unconvincing"], answer: "Compelling" }
    ]
};

function startQuiz() {
    const gradeLevel = document.getElementById("gradeSelect").value;
    const quizContainer = document.getElementById("quizContainer");
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = ""; // Clear previous questions
    quizContainer.style.display = "block"; // Show quiz container

    questions[gradeLevel].forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            `;
            questionElement.appendChild(label);
        });
        
        questionsDiv.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    const gradeLevel = document.getElementById("gradeSelect").value;

    questions[gradeLevel].forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions[gradeLevel].length}!`);
}