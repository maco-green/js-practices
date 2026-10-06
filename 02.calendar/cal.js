#!/usr/bin/env node

const args = process.argv.slice(2);

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;

const monthIndex = args.indexOf("-m");

if (monthIndex !== -1) {
  month = Number(args[monthIndex + 1]);
}

const yearIndex = args.indexOf("-y");

if (yearIndex !== -1) {
  year = Number(args[yearIndex + 1]);
}

const firstDayOfMonth = new Date(year, month - 1);
const lastDayOfMonth = new Date(year, month, 0).getDate();

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
  process.stdout.write("   ");
}

let day = 1;

for (day; day <= lastDayOfMonth; day++) {
  if (day < 10) {
    process.stdout.write(" ");
  }
  process.stdout.write(String(day));

  const currentDate = new Date(year, month - 1, day);

  if (currentDate.getDay() !== 6 && day !== lastDayOfMonth) {
    process.stdout.write(" ");
  }

  if (currentDate.getDay() === 6) {
    console.log();
  }
}

if (new Date(year, month, 0).getDay() !== 6) {
  console.log();
}
