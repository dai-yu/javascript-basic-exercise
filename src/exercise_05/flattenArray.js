export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  
  if(array === undefined){
    throw new Error('Flatten undefined or null array');
  }else if(array === null){
    throw new Error('Flatten undefined or null array');
  }else if(array.length == 0){
    return array;
  }

  var result = [];
  for(let i=0;i<array.length;i++){
    if(array[i] instanceof Array){
      for(let j= 0; j<array[i].length;j++){
        result.push(array[i][j]);
      }
    }else{
      result.push(array[i]);
    }   
  }
  return result;
}
