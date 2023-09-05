function getClockAngle(hh_mm:string):number{
  let time = hh_mm.split(":");
  let hourAngle = Number(time[0])%12*30 + Number(time[1])*0.5;
  let minAngle = Number(time[1])*6;
  return Math.min(Math.max(hourAngle,minAngle)-Math.min(hourAngle,minAngle),360-Math.max(hourAngle,minAngle)-Math.min(hourAngle,minAngle));
}