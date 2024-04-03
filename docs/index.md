# Customer dashboard

```js
display(chart1(width));
display(chart2(width));
display(chart3(width));
display(table1);
```

```js
const customers = FileAttachment("data/customer_orders.csv").csv({
  typed: true,
});
```

```js
function chart1(width) {
  return Plot.plot({
    width,
    x: { domain: [0, 60], label: "Order discount (%)" },
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
}
```

```js
function chart2(width) {
  return Plot.plot({
    width,
    r: {
      domain: d3.extent(customers.map((d) => d.number_of_items)),
      range: [1, 10],
    },
    marks: [
      Plot.dot(customers, {
        x: "discount_pct",
        y: "total_usd",
        r: "number_of_items",
        fill: "device_type",
        opacity: 0.8,
      }),
    ],
  });
}
```

```js
function chart3(width) {
  return Plot.plot({
    x: { label: null },
    y: { label: "Total amount (USD)" },
    width,
    marks: [
      Plot.boxY(customers, { x: "state", y: "total_usd", fill: "state" }),
    ],
  });
}
```

```js
const table1 = Inputs.table(customers, {
  columns: ["id", "name", "total_usd", "number_of_items"],
  rows: 16.5,
});
```
