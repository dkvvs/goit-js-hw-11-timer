const targetDate = new Date('Jul 17, 2020');

const refs = {
  daysClock: document.querySelector('span[data-value="days"]'),
  hoursClock: document.querySelector('span[data-value="hours"]'),
  minsClock: document.querySelector('span[data-value="mins"]'),
  secsClock: document.querySelector('span[data-value="secs"]'),
};

const intervalId = setInterval(() => {
  const currentTime = Date.now();
  const deltaTime = targetDate - currentTime;

  updateClockface(deltaTime);
}, 1000);

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)), 3);
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    2,
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2);
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000), 2);

  refs.daysClock.textContent = `${days}`;
  refs.hoursClock.textContent = `${hours}`;
  refs.minsClock.textContent = `${mins}`;
  refs.secsClock.textContent = `${secs}`;
}

function pad(value, count) {
  return String(value).padStart(count, '0');
}
