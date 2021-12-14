// This file should export two array helper functions:
// choice(items): returns a randomly selected item from array of objects

const choice = (arr) => {
    const max = arr.length;
    const ind = Math.floor(Math.random() * max);
    return arr[ind];
}

export {choice};