var JSFUNCTIONS = {

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
}






$(document).ready(function(){

    // console.log("Ready to code")

    $('form').submit(function(){
        const form_temp = $(this).html();
        const input_1 = $(this)[0][0].value;
        const input_2 = $(this)[0][1].value;
        const btn_name = $(this)[0][2].attributes[0].value;

        JSFUNCTIONS[btn_name](input_1,input_2)
        $(this).html(form_temp)
        $(this).children('div').slideToggle('slow')
        $(this).children('div').html(String(JSFUNCTIONS[btn_name]))
        
        return false
})
    
    // $(document).on('click', 'button', function(){
    //     $(this).prev().toggle();
    // })

    // 'input[name="F_Name"'

})