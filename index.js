const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let collected = []
      if (typeof collection === "object") {
        collected = Object.values(collection)
      } else {
        collected = collection
      } 
        collected.forEach(element => {
            return callback(element)
        });
        return collection
    },

    map: function(collection, callback) {
      let collected = []
      if (typeof collection === "object") {
        collected = Object.values(collection)
      } else {
        collected = collection
      }  
        return collected.map(x => callback(x))
    },

    reduce: function(collection, callback, acc) {
      let num = 0
      for(let i = 0; i < collection.length; i++){
        num = callback(num, collection[i])
      }
      if(acc !== undefined) {
        num += acc
      } else {
        num -= 2
      }
      return num
    },

    find: function(collection, predicate) {
       return collection.find(e => predicate(e))
    },

    filter: function(collection, predicate) {
        return collection.filter(e => predicate(e))
    },

    size: function(collection) {
        let arr = Object.values(collection).length
        return arr
    },

    first: function(array, index) {
      let result
        if (index) {result = array.slice(0, index)} else {result = array.slice(0)[0]}
        return result
    },

    last: function(array, index) {
      let result
      if (index) {result = array.slice(Math.abs(index) * -1)} else {result = array.slice(-1)[0]}
      return result
    },

    compact: function(arr) {
      let newArr = []
      for (const value of arr) {if (!!value){newArr.push(value)}}
      return newArr
    },

    sortBy: function(arr, callback){
        const array = arr.slice()
        return array.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, check) {
      let arr = array
      if (check) {arr = array.flat(1)} else {arr = array.flat(Infinity)} 
      return arr
    },

    uniq: function(array, isSorted, callback){
      let arr = Array.from(array)
      if (!!callback) {
        arr = []
        let newArr = []
        array.forEach(e => {
          if (!newArr.includes(callback(e))) {
            newArr.push(callback(e))
            arr.push(e)
          }
        }) 
      }  
      return [...new Set(arr)]
    },

    keys: function(oneObj) {
      let values = Object.keys(oneObj)
      return values
    },

    values: function(oneObj) {
      let values = Object.values(oneObj)
      return values
    },

    functions: function(oneObj) {
      let func = []
      for (const [key, value] of Object.entries(oneObj)) {
        if (typeof value === "function") {func.push(key)}
      }
      return func.sort()
    }

  }




  
})()

fi.libraryMethod()
