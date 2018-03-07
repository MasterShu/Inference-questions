const question0 = (answer, hypothesis) => {
  return true
}

const question1 = (answer, hypothesis) => {
  if (answer === 'A') {
    return hypothesis[4] === 'C'
  }
  if (answer === 'B') {
    return hypothesis[4] === 'D'
  }
  if (answer === 'C') {
    return hypothesis[4] === 'A'
  }
  if (answer === 'D') {
    return hypothesis[4] === 'B'
  }
  return false
}

const question2 = (answer, hypothesis) => {
  if (answer === 'A') {
    return hypothesis[2] !== hypothesis[5] && hypothesis[2] !== hypothesis[1] && hypothesis[2] !== hypothesis[3]
  }
  if (answer === 'B') {
    return hypothesis[5] !== hypothesis[2] && hypothesis[5] !== hypothesis[1] && hypothesis[5] !== hypothesis[3]
  }
  if (answer === 'C') {
    return hypothesis[1] !== hypothesis[2] && hypothesis[1] !== hypothesis[5] && hypothesis[1] !== hypothesis[3]
  }
  if (answer === 'D') {
    return hypothesis[3] !== hypothesis[2] && hypothesis[3] !== hypothesis[5] && hypothesis[3] !== hypothesis[1]
  }
  return false
}

const question3 = (answer, hypothesis) => {
  if (answer === 'A') {
    return hypothesis[0] === hypothesis[4]
  }
  if (answer === 'B') {
    return hypothesis[1] === hypothesis[6]
  }
  if (answer === 'C') {
    return hypothesis[0] === hypothesis[8]
  }
  if (answer === 'D') {
    return hypothesis[5] === hypothesis[9]
  }
  return false
}

const question4 = (answer, hypothesis) => {
  if (answer === 'A') {
    return hypothesis[7] === hypothesis[4]
  }
  if (answer === 'B') {
    return hypothesis[3] === hypothesis[4]
  }
  if (answer === 'C') {
    return hypothesis[8] === hypothesis[4]
  }
  if (answer === 'D') {
    return hypothesis[6] === hypothesis[4]
  }
  return false
}

const question5 = (answer, hypothesis) => {
  if (answer === 'A') {
    return hypothesis[1] === hypothesis[7] && hypothesis[3] === hypothesis[7]
  }
  if (answer === 'B') {
    return hypothesis[0] === hypothesis[7] && hypothesis[5] === hypothesis[7]
  }
  if (answer === 'C') {
    return hypothesis[2] === hypothesis[7] && hypothesis[9] === hypothesis[7]
  }
  if (answer === 'D') {
    return hypothesis[4] === hypothesis[7] && hypothesis[8] === hypothesis[7]
  }
  return false
}

const question6 = (answer, hypothesis) => {
  let [aTotal, bTotal, cTotal, dTotal] = [0, 0, 0, 0]
  for (const i in hypothesis) {
    if (hypothesis.hasOwnProperty(i)) {
      const element = hypothesis[i]
      switch (element) {
        case 'A':
          aTotal += 1
          break
        case 'C':
          cTotal += 1
          break
        case 'D':
          dTotal += 1
          break
        case 'B':
          bTotal += 1
          break
        default:
          break
      }
    }
  }

  const minSelect = Math.min(aTotal, bTotal, cTotal, dTotal)
  switch (answer) {
    case 'A':
      return cTotal === minSelect
    case 'B':
      return bTotal === minSelect
    case 'C':
      return aTotal === minSelect
    case 'D':
      return dTotal === minSelect

    default:
      return false
  }
}

const question7 = (answer, hypothesis) => {
  const code = hypothesis[0].charCodeAt(0)
  switch (answer) {
    case 'A':
      return Math.abs(code - hypothesis[6].charCodeAt(0)) !== 1
    case 'B':
      return Math.abs(code - hypothesis[4].charCodeAt(0)) !== 1
    case 'C':
      return Math.abs(code - hypothesis[1].charCodeAt(0)) !== 1
    case 'D':
      return Math.abs(code - hypothesis[9].charCodeAt(0)) !== 1

    default:
      return false
  }
}

const question8 = (answer, hypothesis) => {
  const hyOne = hypothesis[0] === hypothesis[5]
  switch (answer) {
    case 'A':
      return hyOne !== (hypothesis[5] === hypothesis[4])
    case 'B':
      return hyOne !== (hypothesis[9] === hypothesis[4])
    case 'C':
      return hyOne !== (hypothesis[1] === hypothesis[4])
    case 'D':
      return hyOne !== (hypothesis[8] === hypothesis[4])
    default:
      return false
  }
}

const question9 = (answer, hypothesis) => {
  let [aTotal, bTotal, cTotal, dTotal] = [0, 0, 0, 0]
  for (const i in hypothesis) {
    if (hypothesis.hasOwnProperty(i)) {
      const element = hypothesis[i]
      switch (element) {
        case 'A':
          aTotal += 1
          break
        case 'C':
          cTotal += 1
          break
        case 'D':
          dTotal += 1
          break
        case 'B':
          bTotal += 1
          break
        default:
          break
      }
    }
  }

  const delta = Math.max(aTotal, bTotal, cTotal, dTotal) - Math.min(aTotal, bTotal, cTotal, dTotal)
  switch (answer) {
    case 'A':
      return delta === 3
    case 'B':
      return delta === 2
    case 'C':
      return delta === 4
    case 'D':
      return delta === 1
    default:
      return false
  }
}

const hypothesisTest = (list, hypothesis) => {
  let index = 0
  for (const i in list) {
    const item = list[i]
    if (!item(hypothesis[index], hypothesis)) {
      return false
    }
    index += 1
  }
  return true
}

const __charSelect = ['A', 'B', 'C', 'D']
const __conver4 = (num, len) => {
  let newNum = ''
  while (num > 0) {
    let remainder
    remainder = num % 4 ? num % 4 : '0'
    num = Math.floor(num / 4)
    newNum = remainder + newNum
  }
  const length = len - newNum.length
  if (length >= 1) {
    for (let index = 0; index < length; index++) {
      newNum = '0' + newNum
    }
  }
  return newNum
}

const hypothesisGenerator = (len, fn) => {
  let total = 1
  for (let index = 0; index < len; index++) {
    total *= 4
  }
  for (let index = 0; index < total; index++) {
    let indexCovert = __conver4(index, 10)
    let hypothesisList = []
    for (let j = 0; j < len; j++) {
      hypothesisList[j] = __charSelect[indexCovert[j]]
    }
    if (fn(hypothesisList)) {
      console.log(' is true ', index, hypothesisList)
      return
    }
  }
}

let list = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9]

// 开始你的表演
hypothesisGenerator(10, (hy) => (hypothesisTest(list, hy)))
