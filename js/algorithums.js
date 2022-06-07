// import { values } from "./underscore";

const JSFUNCTIONS = {
   swap: function swap(a, b) {
      var temp = a;
      a = b;
      b = temp;
      console.log(a, b);
   },

   print_range: function print_range(I, r) {
      for (i = I; i < r; i++) {
         console.log(i);
      }
   },

   compare_arr: function compare_arr(array_1, array_2) {
      if (array_1.length != array_2.length) {
         console.log("lenghts do not match");
         return false;
      }
      for (var x = 0; x < array_1.length; x++) {
         console.log(array_1[x]);
         if (array_1[x] != array_2[x])
            console.log("Something in them did not match");
         return false;
      }
      console.log("They match");
   },

   // write for loop for multiples of 3 from -300 - 0 !-3 || -6
   multiple_of_three: function multiple_of_three() {
      for (let i = -300; i < 0; i++) {
         if (i % 3 >= 0 && i != -3 && i != -6) {
            console.log(i);
         }
      }
   },

   // Use a while loop to print 0 100
   while_loop: function while_loop() {
      let i = 0;
      while (i < 100) {
         console.log(i);
         i++;
      }
   },

   // 123-number-flip
   number_flip: (num) => {
      var new_num = Array.from(String(num), Number);
      var change = 3;
      var the_return = "something";
      new_num.sort();
      new_num[0] = change;
      // for (let i = 0; i < new_num.length; i++){
      //     the_return += toString(new_num[i]);
      //     console.log(new_num[i])
      // }
      console.log(the_return);
      // for ( let i = 0; i < new_num.length; i++){
      //     if(new_num[i] < change){
      //         new_num[i] = change
      //         the_return = toString(new_num)
      //         console.log(the_return)
      //         return the_return
      //     }
      // }
   },

   edit_distance: (first_word, second_word) => {
      const the_return = [];
      //   console.log(first_word, second_word);
      for (let i = 0; i < first_word.length; i++) {
         for (let j = 0; j < second_word.length; j++) {
            if (first_word[i] == second_word[j]) {
               the_return.push(first_word[i]);
               break;
            }
         }
      }
      let lengthDifference = first_word.length - second_word.length;
      if (lengthDifference > 0) {
         lengthDifference = first_word.length - the_return.length;
      } else {
         lengthDifference = second_word.length - the_return.length;
      }
      console.log(lengthDifference);
   },
};
// JSFUNCTIONS.edit_distance("kitten", "sitting");

export { JSFUNCTIONS };
