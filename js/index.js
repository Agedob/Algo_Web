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

}








$(document).ready(function(){
    $('form').submit(function(){return false;})

    // console.log("Ready to code");
    $(document).on('click', 'button', function(){

        func = $(this).attr('funcname');
        
        $(this).prev().html('<span class="code">' + JSFUNCTIONS[func] + '</span>')
        $(this).prev().toggle();


    })
    // 'input[name="F_Name"'

})