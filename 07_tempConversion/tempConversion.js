const ftoc = function(f) {
  //F to C
// (50°F - 32) x .5556 = 10°C
  let conversionFtoC = (f-32)*0.5556;

  return Math.round(conversionFtoC);
};

const ctof = function(c) {
  //C to F
////(30°C x 1.8) + 32 = 86°F
  let ConvertionCtoF = (c * 1.8) + 32;

  return Math.round(ConvertionCtoF);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
