

function increment() {
  return {
    type: "INCREMENT",
    payload: {count:1}
  }
}

function decrement() {
  return {
    type: "DECREMENT",
    payload: {count:1}
  }
}

function reset() {
  return {
    type: "RESET",
    payload: {}
  }
}

export {increment, decrement, reset}
