const usertime = document.getElementById('time');
usertime.innerHTML = setInterval(() => {
  const date = Date.now();
  usertime.innerHTML = `Time (ms):${date}`
}, 1000);


