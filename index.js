#!/usr/bin/env node

var i = 0,
  num = process.argv[2],
  buffaloString = "";

for (; i < num; i++) {
  buffaloString += "buffalo";
  if (i < (num - 1)) {
    buffaloString += " ";
  }
}

if (buffaloString !== "") {
  console.log(buffaloString);
}
