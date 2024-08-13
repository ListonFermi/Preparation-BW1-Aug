function daysUntilChristmas() {
  const today = new Date();
  const currYear = new Date().getFullYear();
  const christmas = new Date(`${currYear}-12-25`);
  return Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
}

console.log(daysUntilChristmas());
