class CountdownTimer {
  intervalId = null;
  constructor({ selector, targetDate }) {
    this.refs(selector);

    const timeFunc = () => {
      const currentTime = Date.now();
      if (targetDate > currentTime) {
        this.updateClockface(targetDate - currentTime);
      } else {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.printClockValue('000', '00', '00', '00');
      }
    };

    timeFunc();

    this.intervalId = setInterval(timeFunc, 1000);
  }

  refs(selector) {
    this.selector = document.querySelector(selector);
    this.daysClock = this.selector.children[0].firstElementChild;
    this.hoursClock = this.selector.children[1].firstElementChild;
    this.minsClock = this.selector.children[2].firstElementChild;
    this.secsClock = this.selector.children[3].firstElementChild;
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)), 3);
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
    );
    const mins = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
    );
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000), 2);

    this.printClockValue(days, hours, mins, secs);
  }

  printClockValue(days, hours, mins, secs) {
    this.daysClock.textContent = `${days}`;
    this.hoursClock.textContent = `${hours}`;
    this.minsClock.textContent = `${mins}`;
    this.secsClock.textContent = `${secs}`;
  }

  pad(value, count) {
    return String(value).padStart(count, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('jul 13, 2020, 00:00:00'),
});
