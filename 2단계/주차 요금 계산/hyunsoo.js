function solution(fees, records) {
  const cars = {};
  let [time_d, fee_d, time_u, fee_u] = fees;
    
  records.forEach(v => {
    let [time, car, type] = v.split(" ");
        
    const [hour, minute] = time.split(":");
        
    time = hour * 60 + Number(minute);
    
    if (!cars[car]) {
      cars[car] = { time: 0, car };
    }
        
    cars[car].type = type;
    console.log(cars[car])
        
    if (type == "OUT") {
        cars[car].time += time - cars[car].lastInTime;
        return;
    }
        
    cars[car].lastInTime = time;
  });

  return Object.values(cars)
    .sort((a, b) => a.car - b.car)
    .map(v => {
      if (v.type == "IN") {
        v.time += 1439 - v.lastInTime;
      }
      
      if (time_d > v.time) {
        return fee_d;
      }
      
      return fee_d + Math.ceil((v.time - time_d) / time_u) * fee_u;
    });
}