// ABCPV1234D
//first five letters then four numbers then last is a letter
const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

const testPan = "ABCPV1234D"
console.log(panPattern.test(testPan))