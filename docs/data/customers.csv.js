import { csvFormat } from "d3-dsv";

const customers = [];

// Function to generate a random discount percentage between 0 and 50
const getRandomDiscount = () => {
  return Math.floor(Math.random() * 51); // Random number between 0 and 50
};

// Function to generate a random price in USD
const getRandomPrice = () => {
  return parseFloat((Math.random() * 1000).toFixed(2)); // Random number between 0 and 1000 with 2 decimal places
};

// Function to generate a random state
const getRandomState = () => {
  const states = [
    "New York",
    "California",
    "Texas",
    "Florida",
    "Illinois",
    "Pennsylvania",
    "Ohio",
    "Georgia",
    "Michigan",
    "North Carolina",
  ];
  return states[Math.floor(Math.random() * states.length)]; // Randomly select a state from the array
};

// Function to generate a random device type
const getRandomDeviceType = () => {
  const deviceTypes = ["mobile", "phone", "in store", "other"];
  return deviceTypes[Math.floor(Math.random() * deviceTypes.length)]; // Randomly select a device type from the array
};

// Function to generate a random number of items between 1 and 12
const getRandomNumberOfItems = () => {
  return Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
};

// Function to generate a random email
const getRandomEmail = (name) => {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "example.com",
  ];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)]; // Randomly select a domain from the array
  return `${name.replace(/\s+/g, "").toLowerCase()}@${randomDomain}`;
};

// Generate data for 200 customers
for (let i = 1; i <= 200; i++) {
  const id = i;
  const name = `Customer ${i}`;
  const price_usd = getRandomPrice();
  const discount_pct = getRandomDiscount();
  const total_usd = price_usd * (1 - discount_pct / 100); // Calculate discounted price
  const state = getRandomState();
  const device_type = getRandomDeviceType();
  const number_of_items = getRandomNumberOfItems();
  const email = getRandomEmail(name);

  // Push customer object to the array
  customers.push({
    id,
    name,
    price_usd,
    discount_pct,
    total_usd,
    state,
    device_type,
    number_of_items,
    email,
  });
}

process.stdout.write(csvFormat(customers));
