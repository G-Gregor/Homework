/* Task 1 */

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

/* Task 2 */

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names:[ ,name2, , name4], ages:[ ,age2, , age4]} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

/* Task 3 */
 
function mul(...rest) {
  let arr = rest.map(Number)
  let result = 1;
  arr.forEach ((item) => {
    if (isNaN(item) == false){
        result *= item ;
      } 
  });
    return result;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/* Task 4 */
 
  let server = {
    data: 0,
    convertToString: (callback) => {
      callback(( () => {
          return server.data + ""; 
      }));
    }
  };
  let client = {
    server: server,
    result: "",
    calc:  (data) => {
      client.server.data = data;
      client.server.convertToString(client.notification());
    },
    notification: () => {
    
      return ((callback) => {
        client.result = callback();   
      });
    }
  };
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"

/* Task 5 */

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
function mapBuilder(keysArray, valuesArray){
let newMap  = new Map();
  for (let i = 0; i < keysArray.length; i++){
    newMap.set(keysArray[i], valuesArray[i]);
  }
return newMap;
}

let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

