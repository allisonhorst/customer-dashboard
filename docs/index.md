# Customer dashboard

```js
display(chart1);
display(chart2);
display(table1);
```

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
const table1 = Inputs.table(
  customers.map((d) => ({ id: d.id, state: d.state, total_usd: d.total_usd }))
);
```
