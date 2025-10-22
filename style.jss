body {
  margin: 0;
  font-family: 'Trebuchet MS', sans-serif;
  background: radial-gradient(circle at 40% 40%, #1b1b1b 0%, #0a0a0a 100%);
  color: #d6c186;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(90deg, #3a2b1f, #7a613f);
  font-size: 1.8rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6);
}

#record-shelf {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 2rem;
  flex: 1;
}

.record {
  flex: 0 0 220px;
  height: 220px;
  border-radius: 10px;
  box-shadow: inset 0 -4px 8px rgba(255,255,255,0.1),
              0 8px 18px rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #1b1b1b;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.record:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.7);
}

.controls {
  background: #111;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.6);
}

.toggle {
  color: #bfa76f;
}

footer {
  text-align: center;
  padding: 0.6rem;
  background: #000;
  font-style: italic;
  color: #bfa76f;
  height: 2rem;
  overflow: hidden;
}

#trivia {
  opacity: 0;
  transition: opacity 1s ease;
}
