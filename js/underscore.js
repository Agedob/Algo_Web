
    
var _ = {
    map: function(arr, callback) {
        let the_return = [];
        for(var i = 0; i < arr.length; i++){
            the_return.push(callback(arr[i]));
        }
        return the_return
    },
    reduce: function() { 
      // code here;
    },
    find: function() {   
      // code here;
    },

    filter: function(arr, check) { 
        let the_return =[];
        for(var i = 0; i < arr.length; i++) {
                if(check(arr[i]) == true){
                    the_return.push(arr[i]);
                }   
            }
            return the_return
    },

    reject: function() { 
      // code here;
    }
  }

export {_}

//   var evens = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 == 0; });
//   console.log(evens); 
//   var odds = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 != 0; });
//   console.log(odds); 
//   var mtest = _.map([1, 2, 3], function(num){ return num * 3; });
//   console.log(mtest)
// => [3, 6, 9]

