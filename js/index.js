import {_} from "./underscore.js";
import { JSFUNCTIONS } from "./algorithums.js";

var evens = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 == 0; });
console.log(evens); 
var odds = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 != 0; });
console.log(odds); 
var mtest = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(mtest)

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
});