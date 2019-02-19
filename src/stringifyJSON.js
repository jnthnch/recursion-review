// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined) {
    return undefined;
  };

  if (typeof obj === "function") {
    return undefined;
  }
  
  if (obj === null) {
    return '' + null + '';
  };

  if (typeof obj === "number") {
    return '' + obj + '';  
  };

  if (obj === true || obj === false) {
    return '' + obj + '';
  };

  if (typeof obj === "string") {
    return '"' + obj + '"';
  };

  if (Array.isArray(obj)) {
    var string = '';
    var length = obj.length;
    
    for(var i = 0; i < obj.length; i++)  {
      if (i === length -1 ) {
        string = string.concat(stringifyJSON(obj[i]));
      } else {
        string = string.concat(stringifyJSON(obj[i]) + ",");
      }
    }

    return '[' + string + ']'
  }

  if (typeof obj === "object") {
    var string  = '';
    
    for ( var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== "function") {
          string = string.concat(stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",")
      }
    } 
    return '{' + string.slice(0, string.length -1) + '}';
  }
};

//Pseudo code
// make a function for objects, string , number, array, booleans, null, undefined
