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

    }
}




$(document).ready(function(){

    // console.log("Ready to code")

    $('form').submit(function(){
        const form_temp = $(this).html();
        const input_1 = $(this)[0][0].value;
        const input_2 = $(this)[0][1].value;
        const btn_name = $(this)[0][2].attributes[0].value;

        console.log(JSFUNCTIONS[btn_name](input_1,input_2))
        
        // $(this).children()[2].append(JSFUNCTIONS[btn_name]);
        // console.log(btn_name);
        // console.lot($(`button[funcname=${btn_name}]`));
        // console.log(btn_name);

        return false
})
    
    // $(document).on('click', 'button', function(){
    //     $(this).prev().toggle();
    // })

    // 'input[name="F_Name"'

})