// 10 numbers

// 100 numbers

// 1_000 numbers

// 10_000 numbers

// 100_000 numbers

// 1_000_000 numbers

// 10_000_000 numbers

// 100_000_000 numbers

function createArray(length: number) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
}
for (let j = 10; j <= 100_000_000; j *= 10) {
  const timeArr = [];
  for (let i = 0; i < 10; i++) {
    const numArr = createArray(j);
    const startTime = performance.now();
    numArr.shift();
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;
    timeArr.push(elapsedTime);
  }
  const sum = timeArr.reduce((a, b) => a + b, 0);
  const avg = sum / timeArr.length;
  console.log(`The average for ${j} number is:`, { avg });
}
