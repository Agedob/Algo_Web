import {_} from "./underscore.js";
import { JSFUNCTIONS } from "./algorithums.js";

// var evens = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 == 0; });
// console.log(evens); 
// var odds = _.filter([1, 2, 3, 4, 5, 6,7,8,9,10], function(num){ return num % 2 != 0; });
// console.log(odds); 
// var mtest = _.map([1, 2, "a"], function(num){ return num * 3; });
// console.log(mtest)
// var mtest2 = _.map({one: 1, two: 2, three: 3, four: "a",}, function(num, key){ return num * 3; });
// console.log(mtest2);
// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// 6
// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 10);
// 16
// console.log(sum)
var even = _.find([1, 7, 3, 9, 5, 7, 8], function(num){ return num % 2 == 0; });
// => 8
console.log(even);
var odds = _.reject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], function(num){ return num % 2 == 0; });
// => [1, 3, 5, 7, 9, 11]
console.log(odds);

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