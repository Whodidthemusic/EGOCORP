const countdown = document.getElementById("countdown");

function updateCountdown() {
  const target = new Date("Jan 1, 2033 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    countdown.innerHTML = "IT BEGINS.";
    return;
  }

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = 
    `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();