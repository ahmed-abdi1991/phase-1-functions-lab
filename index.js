// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const headquarters = 42;
  const distance = Math.abs(location - headquarters);

  return distance;
}
function distanceFromHqInFeet(location) {
  const headquarters = 42; 
  const feetPerBlock = 264;

  const distanceInFeet = Math.abs(location - headquarters) * feetPerBlock;

  return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264; 

  const distanceInFeet = Math.abs(startBlock - endBlock) * feetPerBlock;

  return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(start - destination);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  if (distanceInFeet <= 400) {
    return 0; 
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; 
  } else {
    return "Cannot process rides over 2500 feet"; 
  }
}
