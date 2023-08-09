const solution = (players, calling) => {
  let curCalling = {};

  for (let i = 0; i < players.length; i++) {
    curCalling[players[i]] = i;
  }

  for (let i = 0; i < calling.length; i++) {
    const idx = curCalling[calling[i]];
    const temp = players[idx - 1];

    players[idx - 1] = calling[i];
    players[idx] = temp;

    curCalling[calling[i]] = idx - 1;
    curCalling[temp] = idx;
  }

  return players;
};
