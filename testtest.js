v-if="tickers.includes(this.name === ticker.name)"

const arr = [{name: 'DD', prise: 77}, {name: 'rr', prise: 44}, {name: 'uu', prise: 66}]


v-if="tickers.filter(e => e.name === ticker).length"


@click='console.log(ticker)'