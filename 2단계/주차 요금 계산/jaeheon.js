function solution(fees, records) {
  let answer = [];
  let parkTime = {};
  let parkFee = {};
  let [bt, bf, ut, uf] = fees;

  records.forEach((record, idx) => {
    let [time, num, status] = record.split(" ");
    if (status === "IN") {
      parkTime[num] = time;
      parkFee[num] = parkFee[num] || 0;
    } else {
      parkFee[num] = parkFee[num] + getTimeDifference(parkTime[num], time);
      parkTime[num] = -1;
    }
  });

  for (let num in parkTime) {
    if (parkTime[num] !== -1)
      parkFee[num] = parkFee[num] + getTimeDifference(parkTime[num], "23:59");

    if (parkFee[num] > bt)
      parkFee[num] = bf + Math.ceil((parkFee[num] - bt) / ut) * uf;
    else parkFee[num] = bf;
  }

  Object.keys(parkFee)
    .sort()
    .forEach((num) => {
      answer.push(parkFee[num]);
    });

  return answer;

  function getTimeDifference(t1, t2) {
    let a = t1.split(":");
    let b = t2.split(":");

    let h = Number(b[0]) - Number(a[0]);
    let m = Number(b[1]) - Number(a[1]);

    return h * 60 + m;
  }
}
