class aggTrade {
  constructor(data) {
    this.price = (Math.round(data.p * 100) / 100).toFixed(3);
  }
  getData() {
    return this.price;
  }
}

class twentyFourHrTicker {
  constructor(data) {
    this.percent = data.P;
  }
  getData() {
    return this.percent;
  }
}

export let dataEntry = [
  {
    name: aggTrade,
    type: "aggTrade",
    property: "price",
  },
  {
    name: twentyFourHrTicker,
    type: "24hrTicker",
    property: "percent",
  },
];
