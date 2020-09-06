export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array === undefined){
    throw new Error('Creating list from undefined array');
  }else if(array === null){
    throw new Error('Creating list from undefined array');
  }else if(array.length == 0){
    throw new Error('Creating list from empty array');
  }

  function Node (value){
    this.value = value;
    this.next = null;
  }

  const node = new Node(array[0]);
  var point=node;
  for(let i = 1 ; i < array.length ; i++ ){
    point.next = new Node(array[i]);
    point = point.next;
  }
  return node;
}
