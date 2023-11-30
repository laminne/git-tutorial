function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (let i = 1;; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("git")
  } else {
    console.log(i);
  }
  await sleep(1000); // 1秒待機
}
