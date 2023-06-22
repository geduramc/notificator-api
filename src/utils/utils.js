const toString = (number, padLength) => {
  return number.toString().padStart(padLength, '0')
}

const getMessageDate = () => {
  return toString(new Date().getFullYear(), 4) +
    toString(new Date().getMonth() + 1, 2) +
    toString(new Date().getDate(), 2) + ' ' +
    toString(new Date().getHours(), 2) + ':' +
    toString(new Date().getMinutes(), 2) + ':' +
    toString(new Date().getSeconds(), 2)
}

export const utils = { toString, getMessageDate }
