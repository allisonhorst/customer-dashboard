# Customer dashboard

### Chart 1

```js
display(chart1);
```

### Chart 2

```js
display(chart2);
```

### Table 1

```js
display(table1);
```

<div class="grid grid-cols-3">
  <div>${chart1}</div>
  <div>${chart2}</div>
  <div>${table1}</div>
</div>

<!-- Access data from loader, make charts & table -->

```js
const customers = await FileAttachment("data/customers.csv").csv({
  typed: true,
});
```

```js
const chart1 = Plot.plot({
  x: { domain: [0, 60], label: "Order discount (%)" },
  color: { legend: true },
  marks: [
    Plot.rectY(
      customers,
      Plot.binX(
        { y: "count" },
        { x: "discount_pct", interval: 5, fill: "device_type" }
      )
    ),
  ],
});
```

```js
const chart2 = Plot.plot({
  height: 500,
  marginLeft: 100,
  color: { scheme: "Oranges" },
  marks: [
    Plot.barX(
      customers,
      Plot.groupY(
        { x: "count", fill: "count" },
        { y: "state", sort: { y: "x", reverse: true, limit: 5 } }
      )
    ),
  ],
});
```

```js
const table1 = Inputs.table(customers);
```
