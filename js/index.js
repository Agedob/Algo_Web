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
            var form_temp = $(this).html()
            var input_1 = $(this)[0][0].value
            var input_2 = $(this)[0][1].value
            var func_name = $(this)[0][2].attributes[0].value
            // $(this).html(form_temp)
            $(this).children()[2].append(JSFUNCTIONS[func_name])
            // $(this).children()[2].html()
            return false
    })
    
    $(document).on('click', 'button', function(){
        // console.log($(this).siblings())
        // $()
        // $(this).prev().html('<span class="code">' + JSFUNCTIONS[func] + '</span>')
        $(this).prev().toggle();

    })
    // 'input[name="F_Name"'

})