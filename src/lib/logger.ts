/**
 * log in development
 * @param message message
 * @param optionalParams other message
 */
function log(message?: any, ...optionalParams: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log.apply(console, arguments)
  }
}

/**
 * print
 * @param message message
 * @param optionalParams other message
 */
function print(message?: any, ...optionalParams: any[]) {
  console.log.apply(console, arguments)
}

export {
  log,
  print,
}
