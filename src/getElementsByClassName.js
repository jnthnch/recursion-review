// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var body = document.body;
  
  if (body.classList.contains(className)) {
    result.push(body);
  }

  var helperFunction = function (body) {
    for (var i = 0; i < body.length; i++) {
      if (body[i].classList && body[i].classList.contains(className)) {
        result.push(body[i]);
      }
      
      if (body[i].childNodes.length > 0) {
        helperFunction(body[i].childNodes);
      }
    }
  };
  
  helperFunction(body.childNodes);
  return result;
};
// pseudo code
// empty array --> results
// if the body has class, push it into the results array
// else if body.childNodes exists , run the recursion
// else not