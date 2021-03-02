export function getTotalCost(delivery, weight) {
  let cost;
  if(delivery === 'Every week') {
    if(weight === '250g') {
      cost = 7.20 * 4
    }
    if(weight === '500g') {
      cost = 13 * 4;
    }
    if(weight === '1000g') {
      cost = 22 * 4
    }
  }
  if(delivery === 'Every 2 weeks') {
    if (weight === '250g') {
      cost = 9.60 * 2
    }
    if (weight === '500g') {
      cost = 17.50 * 2
    }
    if (weight === '1000g') {
      cost = 32 * 2
    }
  }
  if (delivery === 'Monthly') {
    if (weight === '250g') {
      cost = 12
    }
    if (weight === '500g') {
      cost = 22
    }
    if (weight === '1000g') {
      cost = 42
    }
  }
  return cost.toFixed(2)
}

export default getTotalCost;