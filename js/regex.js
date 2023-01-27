const text_one = "@Evar270301"
const text_two = "@evar"
const text_three = "@evar270301"

// const regex = /^\(?(\d{3})\)?[-.]?(\d{3})[-.]?(\d{4})$/g
const regex = /[a-zA-Z{1,}]/
const match_one = regex.test(text_one)
const match_two = regex.test(text_two)
const match_three = regex.test(text_three)

console.log(match_one)
console.log(match_two)
console.log(match_three)

// REGEX Syntax

//Flags
// /g means global so returns all the instances
// /i means case insensitive
// /m means multiline

// /[enl]/ - matches all individual instances of e, n, and l
// /[^enl]/ - matches all individaul instances of characters except e, n and l
// /[a-z]/ - matches a range from a to z (lower case)
// /\w/ - matches all word characters
// /\W/ - matches all non word characters
// /\d/ - matches all digits 
// /^I/m - checks for the fist letter of each line against leter I
// /(old)/ - checks for instance of the string old
// /g(?=old)/ - checks for the character g followed by old
// /g(?:old)/ - checks for the character g not followed by old
// /[A-Z]w+/
