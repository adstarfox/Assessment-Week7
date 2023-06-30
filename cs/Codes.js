const addToZero = arr => {
    for (let i = 0; i < arr.length; i++){
        for (let k = i + 1; k < arr.length; k++){
            if (arr[i] + arr[k] === 0){
                return true
            }
            }
        }
    return false
}

//The runtime for addToZero is O(n^2)

// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

const hasUniqueChars = str => {
    const mySet = new Set(str)
  
    if(str.length === mySet.size){
      return true
    } else {
      return false
    }
}

//The runtime for hasUniqueChars O(n)

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

const isPangram = str => {
    let sentance = str.toLowerCase()
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    
    for(let i = 0; i < sentance.length; i++){ //O(n)
        for(let k = 0; k < alpha.length;k++){
            if(sentance[i] === alpha[k]){
                alpha.splice(k,1)
            }
        }
    }
    if(alpha.length === 0){
        return true
    }else{
        return false
    }
}

//The Runtime for isPangram is O(log n)

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

const findLongestWord = arr => {
    let biggest = ''
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length > biggest.length){
            biggest = arr[i]
        }
    }
    return biggest.length
}

//The Runtime for findLongestWord is O(n)

// console.log(findLongestWord(["hi", "hello",'oooooo']))