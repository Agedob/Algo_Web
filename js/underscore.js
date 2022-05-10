
    
var _ = {
    map: function(arr, callback) {
        // _.map(list, iteratee, [context]) 
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

        let the_return = [];
            // for(var i = 0; i < arr.length; i++){
            //     the_return.push(callback(arr[i]));
            // }
            for (const keys in arr){
                the_return.push(callback(arr[keys]))
            }
        return the_return
    },

    reduce: function(arr, callback, varx) {
        // _.reduce(list, iteratee, [memo], [context]) 
    // Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
    // If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

        if (varx == undefined){
            varx = arr.shift();
        };
        let the_return = varx;
        for (const keys in arr){
            the_return = callback(arr[keys],the_return);
        }
        return the_return
    },

    find: function(arr, callback) {
        // _.find(list, predicate, [context]) 
    // Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. predicate is transformed through iteratee to facilitate shorthand syntaxes.
        let i = 0
        while (!(callback(arr[i]))) {
            // console.log(arr[i]);
            i++  
            if ( i == arr.length){
                console.log('failed')
                return undefined
            }
        }

        return arr[i]
    },

    filter: function(arr, check) {
        // _.filter(list, predicate, [context]) 
    // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). predicate is transformed through iteratee to facilitate shorthand syntaxes.

        let the_return =[];
        for(var i = 0; i < arr.length; i++) {
                if(check(arr[i]) == true){
                    the_return.push(arr[i]);
                }   
            }
            return the_return
    },

    reject: function(arr, callback) {
        // _.reject(list, predicate, [context])
    // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. predicate is transformed through iteratee to facilitate shorthand syntaxes.

        let the_return = [];
        for (const keys in arr){
            if ( callback(arr[keys]) == false){
                the_return.push(arr[keys])
            }
        }
        return the_return
        
    }

  }

export {_}

