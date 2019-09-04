function manipulator () {
  let string = ''

  function append (str) {
    string += str
  }

  function removeStart (n) {
    string = string.substr(n)
  }

  function removeEnd (n) {
    string = string.substring(0, string.length - n)
  }

  function print () {
    console.log(string)
  }

  return {
    append,
    removeStart,
    removeEnd,
    print
  }
}
 const myManipulator = manipulator()
 myManipulator.append('hello')
 myManipulator.print()
 myManipulator.removeEnd(3)
 myManipulator.print()
