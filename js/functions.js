// Higher Order Functions

// A higher function is  function that does at least one of the following:
// 1. Takes one or more functions as an argument or parameters
// 2. Returns a function as the result

import { data } from "./posts"

// A) ForEach() function
data.forEach(post => {
    console.log(post)
})
console.clear()

// B) Filter() function
const filteredPosts = posts.filter(post => {
    return post.userId === 1
})
console.log(filteredPosts)

// C) Map() function
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10
})
console.log(mappedPosts)

// D) Reduce() function
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post
})
console.log(reducedPostsValue)