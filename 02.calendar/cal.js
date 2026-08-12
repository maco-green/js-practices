const commandLineArguments = process.argv.slice(2);

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;

const monthIndex = commandLineArguments.indexOf("-m");

if (monthIndex !== -1) {
  month = Number(commandLineArguments[monthIndex + 1]);
}

console.log(month);

const yearIndex = commandLineArguments.indexOf("-y");

if (yearIndex !== -1) {
  year = Number(commandLineArguments[yearIndex + 1]);
}

console.log(year);

console.log(new Date(year, month - 1));
