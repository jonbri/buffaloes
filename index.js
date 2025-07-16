#!/usr/bin/env node

const { program } = require("commander");

program
  .option("-t, --text <char>", 'Default: "buffalo"')
  .argument("[number]", "Number of times to repeat the text")
  .parse();
const [numArg] = program.args;
const { text = "buffalo" } = program.opts();

const num = parseInt(numArg, 10);
const buffaloString = Array.from({ length: num }, (_, index) => text).reduce(
  (acc, curr, index) => acc + curr + (index < num - 1 ? " " : ""),
  "",
);

if (buffaloString !== "") {
  console.log(buffaloString);
}
