// components
export const isWinner = data => data.status === 'Finished';

export const separatedWinnersLosers = data => {
  const handler = (acc, item) => {
    if (isWinner(item)) {
      acc.winners.push(item);
    } else {
      acc.losers.push(item);
    }
    return acc;
  };
  return data.reduce(handler, { winners: [], losers: [] });
};

// I'm not sure that's a correct way of checking for champions world :D
// not familiar with F1
export const getChampId = data => {
  const drivers = data.reduce((acc, item) => {
    const id = item.Results[0].Driver.driverId;
    if (!Array.isArray(acc[id])) {
      acc[id] = [];
    }
    acc[id].push(item);
    return acc;
  }, {});
  const driverskeys = Object.keys(drivers);
  const sortedRaces = driverskeys
    .map(key => {
      return {
        id: key,
        races: drivers[key]
      };
    })
    .sort((a, b) => {
      return b.races.length - a.races.length;
    });
  return sortedRaces[0].id;
};

// date-time
export const parseDate = date => {
  try {
    const parsed = new Date(date);
    const day = parsed.getDate();
    const month = parsed.toLocaleString('default', { month: 'long' });
    const year = parsed.getFullYear();
    const packed = [day, month, year];
    return [...packed, parsed];
  } catch (e) {
    return '';
  }
};
