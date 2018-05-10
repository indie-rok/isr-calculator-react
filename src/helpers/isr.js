function calculateISR(salary) {
  let exedenteLimiteInferior;
  let tasa;
  let cuotaFija;
  let subsidioParaElEmpleo = calculateSubsidioParaEmpleo(salary);
  switch (true) {
    case salary >= 0.01 && salary <= 578.52:
      exedenteLimiteInferior = salary - 0.01;
      tasa = 1.92;
      cuotaFija = 0;
      break;
    case salary >= 578.53 && salary <= 4910.18:
      exedenteLimiteInferior = salary - 578.53;
      tasa = 6.4;
      cuotaFija = 11.11;
      break;
    case salary >= 4910.19 && salary <= 8629.2:
      exedenteLimiteInferior = salary - 4910.19;
      tasa = 10.88;
      cuotaFija = 288.33;
      break;
    case salary >= 8629.21 && salary <= 10031.07:
      exedenteLimiteInferior = salary - 8629.21;
      tasa = 16;
      cuotaFija = 692.96;
      break;
    case salary >= 10031.08 && salary <= 12009.94:
      exedenteLimiteInferior = salary - 10031.08;
      tasa = 17.92;
      cuotaFija = 917.26;
      break;
    case salary >= 12009.95 && salary <= 24222.31:
      exedenteLimiteInferior = salary - 12009.95;
      tasa = 21.36;
      cuotaFija = 1271.87;
      break;
    case salary >= 24222.32 && salary <= 38117.69:
      exedenteLimiteInferior = salary - 24222.32;
      tasa = 23.52;
      cuotaFija = 3880.44;
      break;
    case salary >= 38177.7 && salary <= 72887.5:
      exedenteLimiteInferior = salary - 38177.7;
      tasa = 30;
      cuotaFija = 7162.74;
      break;
    case salary >= 72887.51 && salary <= 97183.33:
      exedenteLimiteInferior = salary - 72887.51;
      tasa = 32;
      cuotaFija = 17575.69;
      break;
    case salary >= 97183.34 && salary <= 291550:
      exedenteLimiteInferior = salary - 97183.34;
      tasa = 34;
      cuotaFija = 25350.35;
      break;
    case salary >= 291550.01:
      exedenteLimiteInferior = salary - 291550.01;
      tasa = 35;
      cuotaFija = 91435.02;
      break;

    default:
      return 0;
  }

  const isr =
    exedenteLimiteInferior * tasa / 100 + cuotaFija - subsidioParaElEmpleo;
  return roundUp(isr, 2);
}

function calculateSubsidioParaEmpleo(salary) {
  switch (true) {
    case salary >= 0.01 && salary <= 1778.96:
      return 407.02;
    case salary >= 1768.97 && salary <= 2653.38:
      return 406.83;
    case salary >= 2653.39 && salary <= 3472.84:
      return 406.62;
    case salary >= 3472.85 && salary <= 3537.87:
      return 392.77;
    case salary >= 3537.88 && salary <= 4446.15:
      return 382.46;
    case salary >= 4446.16 && salary <= 4417.18:
      return 354.23;
    case salary >= 4717.19 && salary <= 5335.42:
      return 324.87;
    case salary >= 5335.43 && salary <= 6224.67:
      return 294.63;
    case salary >= 6224.68 && salary <= 7113.9:
      return 253.54;
    case salary >= 7113.91 && salary <= 7382.33:
      return 217.61;
    case salary >= 7382.34:
      return 0;
    default:
      return 0;
  }
}

function roundUp(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

module.exports = calculateISR;
