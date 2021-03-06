import { formatThousands } from "../BuySellStocks/utils";

const percentageDifference = (originalPrice, currentPrice) => {
  const percentageDiff = ((currentPrice - originalPrice) / originalPrice) * 100;
  if (!percentageDiff.toString().startsWith("-")) {
    return "+" + Number(percentageDiff.toFixed(2));
  } else {
    return Number(percentageDiff.toFixed(2)).toString();
  }
};

export function marketValue(price, shares) {
  const value = price * shares;
  return `$${formatThousands(value.toFixed(2))}`;
}

export function todaysReturn(open, current) {
  const value = Number((current - open).toFixed(2));
  let formattedValue = {
    "%": percentageDifference(open, current),
    return: null,
  };

  value >= 0
    ? (formattedValue["return"] = `+$${formatThousands(value)}`)
    : (formattedValue["return"] = `-$${formatThousands(value.toString().slice(1))}`);

  return formattedValue;
}

export function totalReturn(avg, shares, price) {
  const spent = Number((avg * shares).toFixed(2));
  const mktValue = Number(marketValue(price, shares).slice(1).split(',').join(''));
  const totalReturn = mktValue - spent;
  
  let formattedReturn = {
    "%": percentageDifference(spent, mktValue),
    return: null,
  };
  
  totalReturn >= 0
  ? (formattedReturn["return"] = `+$${formatThousands(totalReturn.toFixed(2))}`)
  : (formattedReturn["return"] = `-$${formatThousands(totalReturn
    .toFixed(2)
    .toString()
    .slice(1))}`);
    
  return formattedReturn;
}

export function portfolioDiversity(assets, shares) {
  let count = 0;
  for (let asset in assets) {
    if (assets[asset].shares) {
      count += Number(assets[asset].shares);
    }
  }
  let diversityNum = ((shares / count) * 100).toFixed(2);
  return `${diversityNum}%`;
}
