const solution = (a, b) => {
  let day = new Date(2016, a - 1, b);
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (week = WEEKDAY[day.getDay()]);
};

console.log(solution(5, 1));
