const records = document.querySelectorAll('.record');
const playerA = document.getElementById('playerA');
const playerB = document.getElementById('playerB');
const nowPlaying = document.getElementById('now-playing');
const toggle = document.getElementById('vinyl-toggle');
const crackle = document.getElementById('crackle');
let active = playerA;
let fading = false;

const trivia = [
  "J Dilla sampled 'Walk On By' by Isaac Hayes for 'Won’t Do'.",
  "Masters At Work were behind the Nuyorican Soul project in ’97.",
  "‘Ain’t No Half-Steppin’’ by Big Daddy Kane samples Heatwave.",
  "Moodymann’s Detroit grooves draw from Theo Parrish’s jazz roots.",
  "Pete Rock flipped Tom Scott’s ‘Today’ for ‘T.R.O.Y.’",
  "Chic’s ‘Good Times’ birthed ‘Rapper’s Delight’.",
  "Erykah Badu’s sound was inspired by Roy Ayers and Minnie Riperton.",
  "Larry Heard (Mr. Fingers) basically invented deep house in 1986.",
  "D’Angelo’s ‘Spanish Joint’ was co-produced by Questlove.",
  "Kenny Dope once released 12 records in a single month."
];
let triviaIndex = 0;
const triviaBox = document.getElementById('trivia');

function updateTrivia() {
  triviaBox.style.opacity = 0;
  setTimeout(() => {
    triviaBox.textContent = trivia[triviaIndex];
    triviaBox.style.opacity = 1;
    triviaIndex = (triviaIndex + 1) % trivia.length;
  }, 1000);
}
setInterval(updateTrivia, 10000);
updateTrivia();

// Vinyl toggle
if (localStorage.getItem('vinylCrackle') === 'on') {
  toggle.checked = true;
  crackle.volume = 0.3;
  crackle.play();
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    crackle.volume = 0.3;
    crackle.play();
    localStorage.setItem('vinylCrackle', 'on');
  } else {
    crackle.pause();
    localStorage.setItem('vinylCrackle', 'off');
  }
});

// Stream logic with crossfade
records.forEach(rec => {
  rec.style.backgroundColor = rec.dataset.color;
  rec.addEventListener('click', () => {
    if (fading) return;
    fading = true;
    const next = active === playerA ? playerB : playerA;
    next.src = rec.dataset.stream;
    next.volume = 0;
    next.play().then(() => {
      const fadeOut = active;
      const fadeIn = next;
      let vol = 0;
      const fadeInterval = setInterval(() => {
        vol += 0.1;
        fadeIn.volume = vol;
        fadeOut.volume = 1 - vol;
        if (vol >= 1) {
          clearInterval(fadeInterval);
          fadeOut.pause();
          active = fadeIn;
          nowPlaying.textContent = `Now Playing: ${rec.textContent}`;
          fading = false;
        }
      }, 100);
    });
  });
});
