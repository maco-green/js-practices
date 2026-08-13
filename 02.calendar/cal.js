const commandLineArguments = process.argv.slice(2);

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;

const monthIndex = commandLineArguments.indexOf("-m");

if (monthIndex !== -1) {
  month = Number(commandLineArguments[monthIndex + 1]);
}

const yearIndex = commandLineArguments.indexOf("-y");

if (yearIndex !== -1) {
  year = Number(commandLineArguments[yearIndex + 1]);
}

const firstDayOfMonth = new Date(year, month - 1);
const lastDayOfMonth = new Date(year, month, 0).getDate();

let day = 1;
const firstSaturday = 7 - firstDayOfMonth.getDay();

console.log("      " + month + "月 " + year);
console.log("日 " + "月 " + "火 " + "水 " + "木 " + "金 " + "土 ");

for (let spaceCount = 0; spaceCount < firstDayOfMonth.getDay(); spaceCount++) {
  process.stdout.write("   ");
}

for (day; day <= lastDayOfMonth; day++) {
  if (day < 10) {
    process.stdout.write(" ");
  }
  process.stdout.write(String(day) + " ");
  if ((day - firstSaturday) % 7 === 0) {
    console.log();
  }
}

if (new Date(year, month, 0).getDay() !== 6) {
  console.log();
}
