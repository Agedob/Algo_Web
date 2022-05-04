var JSFUNCTIONS = {

    swap: function swap(a,b){
        a = temp;
        b = a;
        a = temp;
        console.log(a,b);
    },

    print_range: function print_range(){
        for( var i = 0; i < 20; i++){
            console.log(i);
        }
    }

}








$(document).ready(function(){
    $('form').submit(function(){return false;})

    // console.log("Ready to code");
    $(document).on('click', 'button', function(){

        // $(this).prev().toggle();
        func = $(this).attr('funcname');
        console.log(func)
        // console.log(typeof(func()))
        // // console.log(func('First', 'Second'))
        
        // console.log(JSFUNCTIONS[func]) <----- how to get the js code to console
        JSFUNCTIONS[func]()

    })
    // 'input[name="F_Name"'

})