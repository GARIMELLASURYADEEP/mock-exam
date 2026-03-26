/**
 * NTA Mock Test Logic - Embedded Version
 */

// Full Question Bank (60 Questions)
const QUESTION_BANK = [
  { "id": 1, "question": "According to Mehrabian, only ______ of a message’s effect is carried by words.", "options": ["30%", "7%", "50%", "65%"], "answer": 1 },
  { "id": 2, "question": "Birdwhistell suggested that spoken words account for not more than ______ of social interactions.", "options": ["10–15%", "30–35%", "50–60%", "70–80%"], "answer": 1 },
  { "id": 3, "question": "Message reinforcement is a function of:", "options": ["Verbal communication", "Written communication", "Nonverbal communication", "Mass communication"], "answer": 2 },
  { "id": 4, "question": "Kinesics refers to the study of:", "options": ["Space", "Time", "Body language", "Smell"], "answer": 2 },
  { "id": 5, "question": "Civil inattention means:", "options": ["Ignoring someone rudely", "Polite ignoring to respect privacy", "Avoiding communication", "Looking angrily"], "answer": 1 },
  { "id": 6, "question": "Artifactual communication includes:", "options": ["Voice tone", "Touch", "Clothing and jewellery", "Silence"], "answer": 2 },
  { "id": 7, "question": "Paralanguage refers to:", "options": ["Written symbols", "Vocal cues accompanying speech", "Facial expressions", "Body posture"], "answer": 1 },
  { "id": 8, "question": "Pitch refers to the ______ of the voice.", "options": ["Loudness", "Speed", "Highness or lowness", "Clarity"], "answer": 2 },
  { "id": 9, "question": "Proxemics is the study of:", "options": ["Touch", "Space", "Time", "Smell"], "answer": 1 },
  { "id": 10, "question": "Intimate distance ranges from:", "options": ["0–18 inches", "2–5 feet", "4–12 feet", "12–20 feet"], "answer": 0 },
  { "id": 11, "question": "Social distance ranges from:", "options": ["0–18 inches", "18 inches–4 feet", "4–12 feet", "12 feet to sight"], "answer": 2 },
  { "id": 12, "question": "Chronemics is the study of:", "options": ["Color", "Time use", "Touch", "Distance"], "answer": 1 },
  { "id": 13, "question": "Haptics refers to the study of:", "options": ["Touch", "Smell", "Sound", "Space"], "answer": 0 },
  { "id": 14, "question": "Olfactics refers to the study of:", "options": ["Color", "Smell", "Voice", "Gesture"], "answer": 1 },
  { "id": 15, "question": "Visual dominance compares looking while speaking with looking while:", "options": ["Writing", "Listening", "Reading", "Walking"], "answer": 1 },
  { "id": 16, "question": "Technological advances have made workplaces more:", "options": ["Isolated", "Traditional", "Global", "Local"], "answer": 2 },
  { "id": 17, "question": "Avoiding double questions is a suggestion for:", "options": ["Public speaking", "Intercultural communication", "Written exams", "Debate"], "answer": 1 },
  { "id": 18, "question": "Diversity means:", "options": ["Ignoring differences", "Recognition and valuing of difference", "Cultural superiority", "Assimilation"], "answer": 1 },
  { "id": 19, "question": "Cultural imperialism refers to:", "options": ["Respecting cultures", "Expansion of one culture over another", "Cultural exchange", "Cultural equality"], "answer": 1 },
  { "id": 20, "question": "Intercultural communication is interacting with individuals from different:", "options": ["Families", "Cultures", "Cities", "Schools"], "answer": 1 },
  { "id": 21, "question": "Assimilation means:", "options": ["Resisting dominant culture", "Fitting into dominant culture", "Ignoring culture", "Creating new culture"], "answer": 1 },
  { "id": 22, "question": "Ethnocentrism is the tendency to view one’s culture as:", "options": ["Equal", "Inferior", "Superior", "Different"], "answer": 2 },
  { "id": 23, "question": "Cultural relativism means:", "options": ["Judging others", "Accepting other cultures as equal", "Rejecting traditions", "Cultural domination"], "answer": 1 },
  { "id": 24, "question": "Individualistic cultures stress:", "options": ["Group goals", "Family control", "Individual goals", "Government rules"], "answer": 2 },
  { "id": 25, "question": "High-context communication depends on:", "options": ["Direct speech", "Indirectness", "Written messages", "Technology"], "answer": 1 },
  { "id": 26, "question": "Low-context communication encourages:", "options": ["Silence", "Indirect hints", "Directness", "Symbolism"], "answer": 2 },
  { "id": 27, "question": "High power distance cultures believe:", "options": ["Everyone is equal", "Subordinates defer to superiors", "No authority", "Power is unnecessary"], "answer": 1 },
  { "id": 28, "question": "Masculine cultures value:", "options": ["Tenderness only", "Aggressiveness and material success", "Silence", "Equality only"], "answer": 1 },
  { "id": 29, "question": "Stereotypes are:", "options": ["Scientific facts", "Mental images or shortcuts", "Laws", "Emotions"], "answer": 1 },
  { "id": 30, "question": "Digital divide refers to:", "options": ["Cultural conflict", "Information gap", "Language barrier", "Gender bias"], "answer": 1 },
  { "id": 31, "question": "Which of the following is defined as communication that uses words, originating from the Latin 'verbum'?", "options": ["Non-Verbal Communication", "Verbal Communication", "Intrapersonal Communication", "Mass Communication"], "answer": 1 },
  { "id": 32, "question": "According to the lecture, what percentage of social meaning in interactions is conveyed by non-verbal communication?", "options": ["10% to 20%", "30% to 40%", "65% to 93%", "50% to 60%"], "answer": 2 },
  { "id": 33, "question": "Which of the following is NOT one of the eight essential components of communication discussed in the lecture?", "options": ["People", "Noise", "Technology", "Message"], "answer": 2 },
  { "id": 34, "question": "The 'Triangle of Meaning' model explains the relationship between which three elements?", "options": ["Sender, Receiver, Message", "Word, Thought, Thing", "Verbal, Non-Verbal, Context", "Denotative, Connotative, Symbolic"], "answer": 1 },
  { "id": 35, "question": "What is the primary purpose of the informal communication network (grapevine)?", "options": ["Disseminate official instructions", "Build relationships and provide rapid unofficial communication", "Document formal communication", "Ensure etiquette"], "answer": 1 },
  { "id": 36, "question": "What is the belief that one's own culture is superior to others?", "options": ["Cultural Relativism", "Ethnocentrism", "Cultural Pluralism", "Linguistic Determinism"], "answer": 1 },
  { "id": 37, "question": "Which is NOT recommended when answering 'What are your weaknesses?'", "options": ["Presenting a hidden strength", "Citing a corrected weakness", "Confessing a major flaw", "Learning from past mistake"], "answer": 2 },
  { "id": 38, "question": "What causes the communicator-communicatee gap in 'Counting the F's' activity?", "options": ["Low intelligence", "Misleading communication", "Reading inefficiency and time pressure", "Human inability"], "answer": 2 },
  { "id": 39, "question": "Study of space and distance communication is called:", "options": ["Kinesics", "Chronemics", "Proxemics", "Haptics"], "answer": 2 },
  { "id": 40, "question": "Which is considered the most crucial LSRW skill?", "options": ["Speaking", "Reading", "Writing", "Listening"], "answer": 3 },
  { "id": 41, "question": "In 'Jaws of Death', who was sacrificed?", "options": ["Pushpa Sagar", "Premanand Bhandari", "Deepa Behn", "Peter"], "answer": 1 },
  { "id": 42, "question": "According to Deborah Tannen, women use language to:", "options": ["Give commands", "Build connection", "Assert dominance", "Present facts"], "answer": 1 },
  { "id": 43, "question": "Dictionary meaning of a word is called:", "options": ["Connotative Meaning", "Symbolic Meaning", "Denotative Meaning", "Abstract Meaning"], "answer": 2 },
  { "id": 44, "question": "What does 'E' stand for in HURIER model?", "options": ["Empathizing", "Explaining", "Evaluating", "Engaging"], "answer": 2 },
  { "id": 45, "question": "Most overlooked communication barrier:", "options": ["Physical noise", "Physiological noise", "Psychological noise", "Semantic noise"], "answer": 2 },
  { "id": 46, "question": "Which resume is optimized for ATS systems?", "options": ["Paper Resume", "Functional Resume", "Electronic Resume", "Chronological Resume"], "answer": 2 },
  { "id": 47, "question": "Punctuation after salutation in formal letter:", "options": ["Comma", "Semicolon", "Colon", "Exclamation"], "answer": 2 },
  { "id": 48, "question": "Chinese Whispers teaches:", "options": ["More accuracy", "Distortion of message", "Perfect retention", "Only emotion remains"], "answer": 1 },
  { "id": 49, "question": "Study of body language is:", "options": ["Proxemics", "Kinesics", "Vocalics", "Chronemics"], "answer": 1 },
  { "id": 50, "question": "Constellation Principle means:", "options": ["Single gesture meaning", "Cluster of signals", "Astrology-based meaning", "Ignore non-verbal"], "answer": 1 },
  { "id": 51, "question": "Resisting dominant culture is called:", "options": ["Accommodation", "Assimilation", "Separation", "Pluralism"], "answer": 2 },
  { "id": 52, "question": "Which is NOT part of employment communication process?", "options": ["CV", "Group Discussion", "Interview", "Aptitude Test"], "answer": 3 },
  { "id": 53, "question": "Parallel structure in CV means:", "options": ["Multiple columns", "Same grammatical format", "Alignment of text", "Two languages"], "answer": 1 },
  { "id": 54, "question": "Anupam Dash strategy in interview:", "options": ["Confess weakness", "Align values with company", "Avoid question", "Use humor"], "answer": 1 },
  { "id": 55, "question": "Goal of meditation:", "options": ["Money", "Thoughtlessness", "Time mastery", "Strength"], "answer": 1 },
  { "id": 56, "question": "Masculine cultures value:", "options": ["Tenderness", "Group harmony", "Aggression and success", "Equality"], "answer": 2 },
  { "id": 57, "question": "Ritika's idea in GD shows:", "options": ["Dominance", "Lack of knowledge", "Analytical ability", "Emotion"], "answer": 2 },
  { "id": 58, "question": "Purpose of stress interview:", "options": ["Test knowledge", "Test composure", "Test salary", "Test history"], "answer": 1 },
  { "id": 59, "question": "Large ball in activity symbolizes:", "options": ["Routine", "Work", "Family/relationships", "Failure"], "answer": 2 },
  { "id": 60, "question": "Most destructive noise is:", "options": ["Physical", "Physiological", "Semantic", "Psychological (EGO)"], "answer": 3 }
];

// Configuration
const TEST_DURATION_MINS = 30;
const TOTAL_QUESTIONS_TO_SELECT = 30;

// State Variables
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = {}; 
let questionStatus = {}; 
let timeRemaining = TEST_DURATION_MINS * 60;
let timerInterval;

// DOM Elements
const timerDisplay = document.getElementById('timer');
const questionNumberText = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const paletteGrid = document.getElementById('question-palette');
const submitModal = document.getElementById('submit-modal');

/**
 * Initialize the Exam
 */
function init() {
    // Check if we're on the exam page
    if (!document.querySelector('.exam-body')) return;

    try {
        // Randomly select 30 questions if not already in localStorage
        const storedQuestions = localStorage.getItem('selectedQuestions');
        if (storedQuestions) {
            questions = JSON.parse(storedQuestions);
        } else {
            questions = getRandomQuestions(QUESTION_BANK, TOTAL_QUESTIONS_TO_SELECT);
            localStorage.setItem('selectedQuestions', JSON.stringify(questions));
        }

        // Restore state if available
        const storedAnswers = localStorage.getItem('userAnswers');
        if (storedAnswers) userAnswers = JSON.parse(storedAnswers);

        const storedStatus = localStorage.getItem('questionStatus');
        if (storedStatus) questionStatus = JSON.parse(storedStatus);

        const storedTime = localStorage.getItem('timeRemaining');
        if (storedTime) timeRemaining = parseInt(storedTime);

        // Map initial statuses
        questions.forEach(q => {
            if (!questionStatus[q.id]) {
                questionStatus[q.id] = 'not-visited';
            }
        });

        renderPalette();
        showQuestion(currentQuestionIndex);
        startTimer();
        updateLegend();

    } catch (error) {
        console.error('Error initializing exam:', error);
        questionText.innerText = "Error initializing exam. Please refresh the page.";
    }
}

/**
 * Randomize questions
 */
function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Display a question
 */
function showQuestion(index) {
    currentQuestionIndex = index;
    const q = questions[index];
    
    // Update labels
    questionNumberText.innerText = `Question No. ${index + 1}`;
    questionText.innerText = q.question;
    
    // Mark as visited if it was not visited
    if (questionStatus[q.id] === 'not-visited') {
        questionStatus[q.id] = 'not-answered';
    }

    // Render options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = `option-item ${userAnswers[q.id] === idx ? 'selected' : ''}`;
        div.innerHTML = `
            <input type="radio" name="option" value="${idx}" id="opt-${idx}" ${userAnswers[q.id] === idx ? 'checked' : ''}>
            <label for="opt-${idx}">${opt}</label>
        `;
        div.onclick = () => selectOption(idx);
        optionsContainer.appendChild(div);
    });

    // Update UI highlights
    updatePaletteHighlights();
    saveState();
}

/**
 * Handle option selection
 */
function selectOption(index) {
    const q = questions[currentQuestionIndex];
    userAnswers[q.id] = index;
    
    // Visually update
    const items = document.querySelectorAll('.option-item');
    items.forEach((item, idx) => {
        if (idx === index) item.classList.add('selected');
        else item.classList.remove('selected');
    });
    
    const radios = document.querySelectorAll('input[name="option"]');
    radios[index].checked = true;

    saveState();
}

/**
 * Timer Logic
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        if (timerDisplay) {
            timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        }

        // Save time state
        if (timeRemaining % 5 === 0) {
            localStorage.setItem('timeRemaining', timeRemaining);
        }
    }, 1000);
}

/**
 * Palette Logic
 */
function renderPalette() {
    if (!paletteGrid) return;
    paletteGrid.innerHTML = '';
    questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = `palette-btn ${questionStatus[q.id]}`;
        btn.innerText = idx + 1;
        btn.onclick = () => showQuestion(idx);
        paletteGrid.appendChild(btn);
    });
}

function updatePaletteHighlights() {
    if (!paletteGrid) return;
    const buttons = paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
        const qId = questions[idx].id;
        btn.className = `palette-btn ${questionStatus[qId]}`;
        if (idx === currentQuestionIndex) btn.classList.add('current');
    });
    updateLegend();
}

function updateLegend() {
    const statuses = Object.values(questionStatus);
    const legendBadges = document.querySelectorAll('.legend-item .badge');
    if (legendBadges.length < 4) return;
    
    const counts = {
        'answered': statuses.filter(s => s === 'answered').length,
        'not-answered': statuses.filter(s => s === 'not-answered').length,
        'marked': statuses.filter(s => s === 'marked').length,
        'not-visited': statuses.filter(s => s === 'not-visited').length
    };

    legendBadges[0].innerText = counts['answered'];
    legendBadges[1].innerText = counts['not-answered'];
    legendBadges[2].innerText = counts['marked'];
    legendBadges[3].innerText = counts['not-visited'];
}

/**
 * Button Handlers
 */
document.getElementById('save-next-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    if (userAnswers[q.id] !== undefined) {
        questionStatus[q.id] = 'answered';
    } else {
        questionStatus[q.id] = 'not-answered';
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        showQuestion(currentQuestionIndex); 
    }
});

document.getElementById('mark-review-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    questionStatus[q.id] = 'marked';
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        showQuestion(currentQuestionIndex);
    }
});

document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
});

document.getElementById('clear-response-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    delete userAnswers[q.id];
    questionStatus[q.id] = 'not-answered';
    showQuestion(currentQuestionIndex);
});

document.getElementById('submit-test-btn')?.addEventListener('click', () => {
    submitModal.classList.add('active');
});

document.getElementById('cancel-submit')?.addEventListener('click', () => {
    submitModal.classList.remove('active');
});

document.getElementById('confirm-submit')?.addEventListener('click', () => {
    calculateResults();
});

/**
 * Final Calculation
 */
function calculateResults() {
    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    const detailedResults = questions.map(q => {
        const userChoice = userAnswers[q.id];
        const status = questionStatus[q.id];
        const isCorrect = userChoice === q.answer;

        if (userChoice !== undefined) {
            attempted++;
            if (isCorrect) correct++;
            else wrong++;
        }

        return {
            ...q,
            userChoice,
            status,
            isCorrect
        };
    });

    const percentage = ((correct / questions.length) * 100).toFixed(2);

    const examResults = {
        total: questions.length,
        attempted,
        correct,
        wrong,
        percentage
    };

    localStorage.setItem('examResults', JSON.stringify(examResults));
    localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
    window.location.href = 'result.html';
}

/**
 * Result Page Logic
 */
function initResultPage() {
    const results = JSON.parse(localStorage.getItem('examResults'));
    const detailedData = JSON.parse(localStorage.getItem('detailedResults'));
    
    if (!results || !detailedData) return;

    // Summary stats
    document.getElementById('score-percentage').innerText = results.percentage + '%';
    document.getElementById('total-questions').innerText = results.total;
    document.getElementById('attempted').innerText = results.attempted;
    document.getElementById('correct-answers').innerText = results.correct;
    document.getElementById('wrong-answers').innerText = results.wrong;

    // View Answer Key Toggle
    const viewBtn = document.getElementById('view-answers-btn');
    const section = document.getElementById('answer-key-section');
    
    if (viewBtn && section) {
        viewBtn.onclick = () => {
            section.classList.toggle('hidden');
            if (!section.classList.contains('hidden')) {
                renderAnswerKey(detailedData);
                viewBtn.innerText = "Hide Detailed Answers";
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                viewBtn.innerText = "View Detailed Answers";
            }
        };
    }
}

function renderAnswerKey(data) {
    const list = document.getElementById('answer-key-list');
    if (!list) return;
    list.innerHTML = '';

    data.forEach((q, idx) => {
        const card = document.createElement('div');
        const isAnswered = q.userChoice !== undefined;
        const isMarked = q.status === 'marked';
        
        card.className = `answer-card ${isAnswered ? (q.isCorrect ? 'correct-card' : 'wrong-card') : ''} ${isMarked ? 'marked-card' : ''}`;
        
        let content = '';
        if (isMarked) {
            content += `<span class="review-badge">Marked for Review</span>`;
        }
        
        content += `<p class="q-text">Q${idx + 1}: ${q.question}</p>`;
        
        q.options.forEach((opt, oIdx) => {
            let optClass = 'option-review';
            if (oIdx === q.answer) optClass += ' correct-ans';
            else if (isAnswered && oIdx === q.userChoice && !q.isCorrect) optClass += ' wrong-ans';
            else if (isAnswered && oIdx === q.userChoice) optClass += ' user-selection';

            content += `<div class="${optClass}">
                ${String.fromCharCode(65 + oIdx)}. ${opt}
                ${oIdx === q.answer ? ' <b>(Correct Answer)</b>' : ''}
                ${isAnswered && oIdx === q.userChoice && !q.isCorrect ? ' <b>(Your Choice)</b>' : ''}
            </div>`;
        });

        card.innerHTML = content;
        list.appendChild(card);
    });
}

function autoSubmit() {
    alert("Time is up! Your responses are being submitted.");
    calculateResults();
}

function saveState() {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('questionStatus', JSON.stringify(questionStatus));
}

// Start Initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.classList.contains('exam-body')) init();
        if (document.body.classList.contains('result-body')) initResultPage();
    });
} else {
    if (document.body.classList.contains('exam-body')) init();
    if (document.body.classList.contains('result-body')) initResultPage();
}
