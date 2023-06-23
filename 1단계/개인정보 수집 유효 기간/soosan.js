const solution = (today, terms, privacies) => {
  var answer = [];

  const addDay = (days, term) => {
    let [year, mon, day] = days.split(".").map((v) => Number(v));
    day--;
    if (day === 0) {
      mon--;
      day = 28;
    }

    mon += term;
    if (mon > 12) {
      let sum = Math.floor(mon / 12);
      mon -= 12 * sum;
      year += sum;
    }
    if (mon === 0) {
      mon += 12;
      year -= 1;
    }

    return [year, mon, day];
  };

  privacies.forEach((v, i) => {
    const [day, term] = v.split(" ");
    const lastDay = addDay(day, Number(terms.find((v) => v.split(" ")[0] === term).split(" ")[1]));
    const [lyear, lmon, lday] = lastDay;
    const [cyear, cmon, cday] = today.split(".").map((v) => Number(v));

    let chk = false;
    if (lyear < cyear) chk = true;
    if (lyear === cyear && lmon < cmon) chk = true;
    if (lyear === cyear && lmon === cmon && lday < cday) chk = true;
    if (chk) answer.push(i + 1);
  });

  return answer;
};
