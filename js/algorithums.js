
const JSFUNCTIONS = {

    swap: function swap(a,b){
        var temp = a;
        a = b;
        b = temp;
        console.log(a,b);
    },

    print_range: function print_range(I,r){
        for(i = I; i < r; i++){
            console.log(i);
        }
    },

    compare_arr: function compare_arr(array_1,array_2){

        if (array_1.length != array_2.length) {
            console.log("lenghts do not match");
            return false
        }
        for (var x = 0; x < array_1.length; x++){
            console.log(array_1[x]);
            if (array_1[x] != array_2[x])
                console.log('Something in them did not match')
                return false
        }
        console.log("They match")

    },

    // write for loop for multiples of 3 from -300 - 0 !-3 || -6
    multiple_of_three: function multiple_of_three(){
        for(let i = -300; i < 0; i++){
            if( i % 3 >= 0 && i != -3 && i != -6){
                console.log(i)
            }
        }
    },

    // Use a while loop to print 0 100
    while_loop: function while_loop(){
        let i = 0;
        while (i < 100) {
            console.log(i);
            i++;
        };
    },
    
};

export {JSFUNCTIONS}