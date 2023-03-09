console.log('\x1b[33m%s\x1b[0m', 'hi!')

console.table([1, 2, 3])
console.table([
    { firstname: "Suzanne", lastname: "M. Gutierrez" },
    { firstname: "Bradley", lastname: " C. Steffen" }])

console.group("Level 0")
console.log("Log 0")
console.log("Log 0")
console.groupEnd()

console.group("Level 1")
console.log("Log 1")
console.log("Log 1")
console.groupEnd()