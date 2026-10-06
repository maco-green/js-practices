#!/usr/bin/env node

const args = process.argv.slice(2);

const now = new Date();

const monthIndex = args.indexOf("-m");
const yearIndex = args.indexOf("-y");

const year = yearIndex !== -1 ? Number(args[yearIndex + 1]) : now.getFullYear();

const month =
  monthIndex !== -1 ? Number(args[monthIndex + 1]) : now.getMonth() + 1;

const firstDayOfMonth = new Date(year, month - 1);
const lastDayOfMonth = new Date(year, month, 0);

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
  process.stdout.write("   ");
}

let day = 1;

for (day; day <= lastDayOfMonth.getDate(); day++) {
  if (day < 10) {
    process.stdout.write(" ");
  }
  process.stdout.write(String(day));

  const currentDate = new Date(year, month - 1, day);

  if (currentDate.getDay() !== 6 && day !== lastDayOfMonth.getDate()) {
    process.stdout.write(" ");
  }

  if (currentDate.getDay() === 6) {
    console.log();
  }
}

if (lastDayOfMonth.getDay() !== 6) {
  console.log();
}
