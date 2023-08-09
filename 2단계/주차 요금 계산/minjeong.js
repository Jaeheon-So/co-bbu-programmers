function solution(fees, records) {
  var answer = [];
  const [defaultMin, defaultFee, unitMin, unitFee] = fees;
  const map = new Map();

  // 차 번호 map 생성
  for (let x of records) {
    const [time, car, inOut] = x.split(" ");
    if (map.get(car)) {
      map.set(car, [...map.get(car), time]);
    } else {
      map.set(car, [time]);
    }
  }

  // 차 번호 정렬
  const mapArr = [...map];
  mapArr.sort((a, b) => a[0] - b[0]);

  for (let [k, v] of mapArr) {
    // 마지막 출차 시간 추가
    if (v.length % 2 !== 0) {
      v.push("23:59");
    }
    let hour = 0;
    let min = 0;

    // 주차 시간 계산
    for (let i = 0; i < v.length; i += 2) {
      const time1 = v[i].split(":");
      const time2 = v[i + 1].split(":");
      if (time2[1] >= time1[1]) {
        hour += +time2[0] - +time1[0];
        min += +time2[1] - +time1[1];
      } else {
        hour += +time2[0] - 1 - +time1[0];
        min += +time2[1] + 60 - +time1[1];
      }
    }
    const totalMin = hour * 60 + min;

    // 기본 요금인지 추가 요금인지 확인
    if (totalMin > defaultMin) {
      answer.push(defaultFee + Math.ceil((totalMin - defaultMin) / unitMin) * unitFee);
    } else {
      answer.push(defaultFee);
    }
  }
  return answer;
}
