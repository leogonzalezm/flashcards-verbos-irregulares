// Datos de verbos irregulares extraídos de la imagen
const irregularVerbs = [
    { base: "be", past: "was/were", participle: "been" },
    { base: "become", past: "became", participle: "become" },
    { base: "begin", past: "began", participle: "begun" },
    { base: "bite", past: "bit", participle: "bitten" },
    { base: "blow", past: "blew", participle: "blown" },
    { base: "break", past: "broke", participle: "broken" },
    { base: "bring", past: "brought", participle: "brought" },
    { base: "build", past: "built", participle: "built" },
    { base: "burn", past: "burned/burnt", participle: "burned/burnt" },
    { base: "buy", past: "bought", participle: "bought" },
    { base: "catch", past: "caught", participle: "caught" },
    { base: "choose", past: "chose", participle: "chosen" },
    { base: "come", past: "came", participle: "come" },
    { base: "cost", past: "cost", participle: "cost" },
    { base: "cut", past: "cut", participle: "cut" },
    { base: "do", past: "did", participle: "done" },
    { base: "draw", past: "drew", participle: "drawn" },
    { base: "drink", past: "drank", participle: "drunk" },
    { base: "drive", past: "drove", participle: "driven" },
    { base: "eat", past: "ate", participle: "eaten" },
    { base: "fall", past: "fell", participle: "fallen" },
    { base: "feed", past: "fed", participle: "fed" },
    { base: "feel", past: "felt", participle: "felt" },
    { base: "fight", past: "fought", participle: "fought" },
    { base: "find", past: "found", participle: "found" },
    { base: "fly", past: "flew", participle: "flown" },
    { base: "forget", past: "forgot", participle: "forgotten" },
    { base: "forgive", past: "forgave", participle: "forgiven" },
    { base: "get", past: "got", participle: "gotten" },
    { base: "give", past: "gave", participle: "given" },
    { base: "go", past: "went", participle: "gone" },
    { base: "grow", past: "grew", participle: "grown" },
    { base: "have", past: "had", participle: "had" },
    { base: "hear", past: "heard", participle: "heard" },
    { base: "hit", past: "hit", participle: "hit" },
    { base: "hold", past: "held", participle: "held" },
    { base: "hurt", past: "hurt", participle: "hurt" },
    { base: "keep", past: "kept", participle: "kept" },
    { base: "know", past: "knew", participle: "known" },
    { base: "learn", past: "learned/learnt", participle: "learned/learnt" },
    { base: "leave", past: "left", participle: "left" },
    { base: "let", past: "let", participle: "let" },
    { base: "lose", past: "lost", participle: "lost" },
    { base: "make", past: "made", participle: "made" },
    { base: "mean", past: "meant", participle: "meant" },
    { base: "meet", past: "met", participle: "met" },
    { base: "pay", past: "paid", participle: "paid" },
    { base: "put", past: "put", participle: "put" },
    { base: "read", past: "read/red/", participle: "read/red/" },
    { base: "ride", past: "rode", participle: "ridden" },
    { base: "ring", past: "rang", participle: "rung" },
    { base: "run", past: "ran", participle: "run" },
    { base: "say", past: "said", participle: "said" },
    { base: "see", past: "saw", participle: "seen" },
    { base: "sell", past: "sold", participle: "sold" },
    { base: "send", past: "sent", participle: "sent" },
    { base: "set", past: "set", participle: "set" },
    { base: "shine", past: "shone", participle: "shone" },
    { base: "show", past: "showed", participle: "showed/shown" },
    { base: "shut", past: "shut", participle: "shut" },
    { base: "sing", past: "sang", participle: "sung" },
    { base: "sit", past: "sat", participle: "sat" },
    { base: "sleep", past: "slept", participle: "slept" },
    { base: "smell", past: "smelled/smelt", participle: "smelled/smelt" },
    { base: "speak", past: "spoke", participle: "spoken" },
    { base: "spell", past: "spelled/spelt", participle: "spelled/spelt" },
    { base: "spend", past: "spent", participle: "spent" },
    { base: "spin", past: "spun", participle: "spun" },
    { base: "spread", past: "spread", participle: "spread" },
    { base: "stand", past: "stood", participle: "stood" },
    { base: "steal", past: "stole", participle: "stolen" },
    { base: "swim", past: "swam", participle: "swum" },
    { base: "take", past: "took", participle: "taken" },
    { base: "teach", past: "taught", participle: "taught" },
    { base: "tell", past: "told", participle: "told" },
    { base: "think", past: "thought", participle: "thought" },
    { base: "throw", past: "threw", participle: "thrown" },
    { base: "understand", past: "understood", participle: "understood" },
    { base: "wake", past: "woke", participle: "woken" },
    { base: "wear", past: "wore", participle: "worn" },
    { base: "win", past: "won", participle: "won" },
    { base: "write", past: "wrote", participle: "written" }
];

// Estado de la aplicación
let currentIndex = 0;
let isFlipped = false;
let learnedVerbs = new Set();
let difficultVerbs = new Set();
let currentFilter = 'all';
let practiceMode = false;
let stats = {
    correct: 0,
    total: 0
};

// Elementos del DOM
const flashcard = document.getElementById('flashcard');
const baseForm = document.getElementById('base-form');
const simplePast = document.getElementById('simple-past');
const pastParticiple = document.getElementById('past-participle');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const resetBtn = document.getElementById('reset-btn');
const filterBtn = document.getElementById('filter-btn');
const modeBtn = document.getElementById('mode-btn');
const knowBtn = document.getElementById('know-btn');
const dontKnowBtn = document.getElementById('dont-know-btn');
const filterModal = document.getElementById('filter-modal');
const applyFilterBtn = document.getElementById('apply-filter');
const closeModalBtn = document.getElementById('close-modal');

// Estadísticas
const totalVerbsElement = document.getElementById('total-verbs');
const currentPositionElement = document.getElementById('current-position');
const learnedCountElement = document.getElementById('learned-count');
const accuracyElement = document.getElementById('accuracy');
const progressFill = document.getElementById('progress-fill');

// Lista de verbos filtrada
let filteredVerbs = [...irregularVerbs];

// Inicialización
function init() {
    loadFromLocalStorage();
    updateFilteredVerbs();
    displayCurrentCard();
    updateStats();
    updateProgress();
}

// Cargar datos del localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('verbsProgress');
    if (saved) {
        const data = JSON.parse(saved);
        learnedVerbs = new Set(data.learned || []);
        difficultVerbs = new Set(data.difficult || []);
        stats = data.stats || { correct: 0, total: 0 };
    }
}

// Guardar datos en localStorage
function saveToLocalStorage() {
    const data = {
        learned: Array.from(learnedVerbs),
        difficult: Array.from(difficultVerbs),
        stats: stats
    };
    localStorage.setItem('verbsProgress', JSON.stringify(data));
}

// Actualizar verbos filtrados
function updateFilteredVerbs() {
    switch (currentFilter) {
        case 'learned':
            filteredVerbs = irregularVerbs.filter(verb => learnedVerbs.has(verb.base));
            break;
        case 'unlearned':
            filteredVerbs = irregularVerbs.filter(verb => !learnedVerbs.has(verb.base));
            break;
        case 'difficult':
            filteredVerbs = irregularVerbs.filter(verb => difficultVerbs.has(verb.base));
            break;
        default:
            filteredVerbs = [...irregularVerbs];
    }
    
    if (filteredVerbs.length === 0) {
        filteredVerbs = [...irregularVerbs];
        currentFilter = 'all';
    }
    
    currentIndex = Math.min(currentIndex, filteredVerbs.length - 1);
}

// Mostrar tarjeta actual
function displayCurrentCard() {
    if (filteredVerbs.length === 0) return;
    
    const currentVerb = filteredVerbs[currentIndex];
    baseForm.textContent = currentVerb.base;
    simplePast.textContent = currentVerb.past;
    pastParticiple.textContent = currentVerb.participle;
    
    // Reiniciar estado de la tarjeta
    flashcard.classList.remove('flipped');
    isFlipped = false;
    
    // Actualizar botones de navegación
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === filteredVerbs.length - 1;
    
    updateProgress();
}

// Actualizar estadísticas
function updateStats() {
    totalVerbsElement.textContent = filteredVerbs.length;
    currentPositionElement.textContent = filteredVerbs.length > 0 ? currentIndex + 1 : 0;
    learnedCountElement.textContent = learnedVerbs.size;
    
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    accuracyElement.textContent = `${accuracy}%`;
}

// Actualizar barra de progreso
function updateProgress() {
    const progress = filteredVerbs.length > 0 ? ((currentIndex + 1) / filteredVerbs.length) * 100 : 0;
    progressFill.style.width = `${progress}%`;
}

// Voltear tarjeta
function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Navegación
function nextCard() {
    if (currentIndex < filteredVerbs.length - 1) {
        currentIndex++;
        displayCurrentCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCurrentCard();
    }
}

// Mezclar verbos
function shuffleVerbs() {
    for (let i = filteredVerbs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredVerbs[i], filteredVerbs[j]] = [filteredVerbs[j], filteredVerbs[i]];
    }
    currentIndex = 0;
    displayCurrentCard();
}

// Reiniciar progreso
function resetProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso?')) {
        learnedVerbs.clear();
        difficultVerbs.clear();
        stats = { correct: 0, total: 0 };
        saveToLocalStorage();
        updateFilteredVerbs();
        displayCurrentCard();
        updateStats();
    }
}

// Marcar como conocido
function markAsKnown() {
    const currentVerb = filteredVerbs[currentIndex];
    learnedVerbs.add(currentVerb.base);
    stats.correct++;
    stats.total++;
    saveToLocalStorage();
    updateStats();
    
    // Animación de éxito
    flashcard.style.transform = 'scale(1.05)';
    setTimeout(() => {
        flashcard.style.transform = 'scale(1)';
    }, 200);
    
    // Avanzar automáticamente si no es la última tarjeta
    setTimeout(() => {
        if (currentIndex < filteredVerbs.length - 1) {
            nextCard();
        }
    }, 500);
}

// Marcar como no conocido
function markAsUnknown() {
    const currentVerb = filteredVerbs[currentIndex];
    difficultVerbs.add(currentVerb.base);
    learnedVerbs.delete(currentVerb.base);
    stats.total++;
    saveToLocalStorage();
    updateStats();
    
    // Animación de error
    flashcard.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
    setTimeout(() => {
        flashcard.style.backgroundColor = '';
    }, 500);
    
    // Avanzar automáticamente si no es la última tarjeta
    setTimeout(() => {
        if (currentIndex < filteredVerbs.length - 1) {
            nextCard();
        }
    }, 500);
}

// Aplicar filtro
function applyFilter() {
    const selectedFilter = document.querySelector('input[name="filter"]:checked').value;
    currentFilter = selectedFilter;
    updateFilteredVerbs();
    currentIndex = 0;
    displayCurrentCard();
    updateStats();
    filterModal.classList.remove('active');
}

// Alternar modo práctica
function togglePracticeMode() {
    practiceMode = !practiceMode;
    modeBtn.textContent = practiceMode ? '📖 Modo Normal' : '🎯 Modo Práctica';
    
    if (practiceMode) {
        // En modo práctica, mostrar solo verbos no aprendidos
        currentFilter = 'unlearned';
        updateFilteredVerbs();
        currentIndex = 0;
        displayCurrentCard();
        updateStats();
    } else {
        currentFilter = 'all';
        updateFilteredVerbs();
        currentIndex = 0;
        displayCurrentCard();
        updateStats();
    }
}

// Event Listeners
flashcard.addEventListener('click', flipCard);

// Soporte táctil mejorado para móviles
let touchStartTime = 0;
flashcard.addEventListener('touchstart', (e) => {
    touchStartTime = Date.now();
}, { passive: true });

flashcard.addEventListener('touchend', (e) => {
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;
    
    // Solo activar si es un toque rápido (no deslizamiento)
    if (touchDuration < 300) {
        e.preventDefault();
        flipCard();
    }
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
shuffleBtn.addEventListener('click', shuffleVerbs);
resetBtn.addEventListener('click', resetProgress);
filterBtn.addEventListener('click', () => filterModal.classList.add('active'));
modeBtn.addEventListener('click', togglePracticeMode);
knowBtn.addEventListener('click', markAsKnown);
dontKnowBtn.addEventListener('click', markAsUnknown);
applyFilterBtn.addEventListener('click', applyFilter);
closeModalBtn.addEventListener('click', () => filterModal.classList.remove('active'));

// Cerrar modal al hacer clic fuera
filterModal.addEventListener('click', (e) => {
    if (e.target === filterModal) {
        filterModal.classList.remove('active');
    }
});

// Soporte para gestos táctiles (swipe) en móviles
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 50;
    
    // Solo procesar swipe horizontal si es mayor que vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            // Swipe derecha - tarjeta anterior
            prevCard();
        } else {
            // Swipe izquierda - tarjeta siguiente
            nextCard();
        }
    }
}

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            prevCard();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextCard();
            break;
        case ' ':
            e.preventDefault();
            flipCard();
            break;
        case '1':
            if (isFlipped) {
                e.preventDefault();
                markAsKnown();
            }
            break;
        case '2':
            if (isFlipped) {
                e.preventDefault();
                markAsUnknown();
            }
            break;
        case 's':
            e.preventDefault();
            shuffleVerbs();
            break;
    }
});

// Inicializar aplicación
init();
