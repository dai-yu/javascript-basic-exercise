export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if(string == null || string == undefined || string === ''){
    return 0;
  }
  if(prediction !== undefined) {
    let r=0;
    for(let i = 0; i < string.length; i++) {
      if(prediction(string.charAt(i))){
        r++;
      }
    }
    return r;
  }

  return string.length;
}
