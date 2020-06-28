function secureMathRandom() {
  'use strict';
  return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

function getRandomInt() {
  'use strict';
  return Math.floor(secureMathRandom() * Math.floor(10));
}

function pinGen(len) {
  'use strict';
  let pin = String(getRandomInt());
  if (!len || len > 10) {
    return;
  }
  while (pin.length < len) {
    let i = getRandomInt();
    if (!pin.includes(i)) {
      pin += i;
    }
  }
  return pin;
}

pinGen(10);
