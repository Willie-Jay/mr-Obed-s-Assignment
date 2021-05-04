//FIRST ASSIGNMENT
//1 Javascript function that accepts a string as a parameter and converts the of each word of the string in uppercase
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];
    for (var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}
document.write(uppercase("i'm a little tea pot"));

//2 Function that accepts argument and return the data type
function data_type(value) {
    var datatypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    if (typeof value === "object" || typeof value === "function") {
      for (x = 0, len = datatypes.length; x < len; x++) {
        if (value instanceof datatypes[x]) {
          return datatypes[x];
        }
      }
    }
    return typeof value;
}
console.log(data_type(25));
console.log(data_type("Williams"));
console.log(data_type(false));

//3 Javascript that find the area of a triangle where lenghts of its three side are 5,6,7
var FirstSide = 5;
var SecondSide = 6;
var ThirdSide = 7;
var calc = (FirstSide + SecondSide + ThirdSide)/2;
var area = Math.sqrt(calc*((calc-FirstSide)*(calc-SecondSide)*(calc-SecondSide)));
console.log(area);

// //4
// var lenEl=document.querySelector("#len");
// var widEl=document.querySelector("#wid");

// var calcBtn=document.querySelector("#calcBtn");

// var areagEl=document.querySelector("#area");
// var perimeterEl=document.querySelector("#perimeter");

// //bind a function tothe onClick event the AddBtn
// calcBtn.onclick=function(area){
    
//     //area formule length*width
//     area=Number(lenEl.value)*Number(widEl.value)
    
//     //perimeter formule 2*(length+width)
//     perimeter=2*(Number(lenEl.value)+Number(widEl.value))

    
//     //write the results into #area #perimeter document 
//     areagEl.innerHTML="Area of rectange:"+area;
//     perimeterEl.innerHTML="Perimeter of rectange:"+perimeter;
// }

// Num 5
function reverse_a_number(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
console.log(reverse_a_number(12345));

// Num 6
function vowel_count(str)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("My name is Joseph Williams"));

// Num 7
function prime_num(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(prime_num(24));
console.log(prime_num(11));

// Num 8
function perfect_num(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
perfect_num(20);
perfect_num(28);

// Num 9
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var ccount = 0;
// Check whether the string is empty or not
if(cstr==="") {
    console.log("Nothing found!");
    return false;
}
// Check if the length of the string is even or odd 
if ((cstr.length) % 2 === 0) {
    ccount = (cstr.length) / 2;
} else {
// If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
        console.log("the entered word is palindrome");
        return true;
    } else {
// If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
    }
}
// Loop through to check the first character to the last character and then move next
for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
    if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("the entered word is not palindrome.");
        return false;
    }
}
console.log("The entry is a palindrome.");
return true;
}
check_Palindrome('civic');
check_Palindrome('nurses run');
check_Palindrome('mummy');

// Num 10
function substrings(str1)
{
var array1 = [];
for (var x = 0, y=1; x < str1.length; x++,y++) 
{
array1[x]=str1.substring(x, y);
}
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
temp= "";
for (var j=0;j<array1.length;j++) {
if ((i & Math.pow(2,j))){ 
temp += array1[j];
}
}
if (temp !== "")
{
combi.push(temp);
}
}
console.log(combi.join("\n"));
}

substrings("pot");

// Num 11
function longest_word(string)
{
  var array1 = string.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(longest_word('Joseph Williams Kure'));

// Num 12
const dig = (obj, target) =>
target in obj
? obj[target]
: Object.values(obj).reduce((acc, val) => {
    if (acc !== undefined) return acc;
    if (typeof val === 'object') return dig(val, target);
    }, undefined);

const data = {
level1: {
level2: {
    level3: 'some data'
}
}
};

const dog = {
"status": "success",
"message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

// Num 13
const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));

// Num 14
const random_hex_color_code = () => {
let n = (Math.random() * 0xfffff * 1000000).toString(16);
return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

// Num 15
const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('123456'));  
console.log(byte_Size('Hello World'));  
console.log(byte_Size('Ã¢'));

// Num 16
const time_taken = callback => {
const result = callback();
return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(1, 12))+" ms"); 
console.log("Time taken: " + time_taken(() => Math.sqrt(146))+" ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((4 * 4) + (1 * 1)))+" ms");

// Num 17
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));

// Num 18
const equals = (a, b) => {
if (a === b) return true;
if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
if (a === null || a === undefined || b === null || b === undefined) return false;
if (a.prototype !== b.prototype) return false;
let keys = Object.keys(a);
if (keys.length !== Object.keys(b).length) return false;
return keys.every(k => equals(a[k], b[k]));
};

console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));

// Num 19
const detectDeviceType = () =>
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
? 'Mobile'
: 'Desktop';
console.log(detectDeviceType()); 

// Num 20
const sdbm = str => {
let arr = str.split('');
return arr.reduce(
    (hashCode, currentVal) =>
    (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
);
};
console.log(sdbm('password'));
console.log(sdbm('Williams'));
  


// Second Assignment
// Num 1
for (var i = 0; i <= 100; i++) {
    if(i%3 === 0 && i% 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    }
     console.log(`The number is ${i}`);
}

// Num 2
var sum = 0;
for (var z = 0; z < 1000; z++) {
    if (z % 3 === 0 || z % 5 === 0) {
        sum += z;
    }
}
console.log(sum);

// Num 3
function move(arr, old_index, new_index) {
while (old_index < 0) {
    old_index += arr.length;
}
while (new_index < 0) {
    new_index += arr.length;
}
if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while ((k--) + 1) {
        arr.push(undefined);
    }
}
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));

// Num 4
for (var a = 0; a <= 15; a++) {
    if(a%2) {
        console.log("the number is even");
    } else if (a % a === 0) {
        console.log("the number is odd");
    } 
    console.log(`${a}`);
}

// Num 5
function happy_number(num) {
    var p, q ;
    var r = [] ;
    while (num != 1 & r[num] !== true) {
        r[num] = true ;
        p = 0;
        while (num > 0) {
            q = num % 10 ;
            p += q * q ;
            num = (num - q) / 10;
        }
        num = p;
    }
    return (num == 1);
}
    var pqr = 5;
    var num = 1;
    var First5 = '';
    while (pqr -- > 0) {
        num++;
        First5 = First5+(num + ",");
        num++ ;
    }
console.log('First 5 happy numbers are : '+First5);

// Num 6
string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Williams Joseph"));

// Num7
function Uncapitalize(str1) {
    return str1.charAt(0).toLowerCase() + str1.slice(1);
}
console.log(Uncapitalize('JOSEPH WILLIAMS'));

// Num 8
function myFunction() {
    var x 
    document.getElementById("myNumber").value;
    document.getElementById("demo").innerHTML = x;
}

// Num 9
var a = 0;
var array = Array();

function add_element_to_array()
{
 array[a] = document.getElementById("text1").value;
 alert("Element: " + array[a] + " Added at index " + a);
 a++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y < array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

// Num 10
let chars = ['A', 'B', 'C', 'C', 'A', 'D'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);

//  Num 11
function filter_array_values(filter) {
    filter = filter.filter(isEligible);
    return filter;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
}
console.log(filter_array_values([444, 'Williams', '',true, false, 0, null]));

// Third Assignment
// Num 1
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Invalid Email Address")
    return (false)
}

// Num 2
function Trim(str)
{
  var result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
console.log(Trim(' Williams '));

// Num 3
function WordCount(str) { 
return str.split(" ").length;
}

console.log(WordCount("Joseph Wiliams Kure"));

// Num 4
function is_IP(str)
{
regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

if (regexp.test(str))
    {
        return true;
    }
else
    {
        return false;
    }
}
console.log(is_IP('198.15f.23.5')); //false

console.log(is_IP("172.16.0.1")); //true

// Num 5
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

// Num 6
function alphaNumeric(str) {
    numeric= /^[A-Za-z0-9]+$/;
        if (numeric.test(str)) {
            return true;
        }else {
            return false;
        }
}
console.log (alphaNumeric("47ez28fl8"));
console.log (alphaNumeric("rdh345%*0!"));

// Num 7
function zipCode(str) {
    zip = /^[0-9]{5}(?:-[0-9]{4})?$/;
        if (zip.test(str)) {
            return true;
        } else {
            return false;
        }
}
console.log (zipCode("31514-1890"));
console.log (zipCode("4458"));

// Num 8
function ukPostcode(str) {
    post = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
      if (post.test(str)) {
        return true;
    } else {
        return false;
    }
}
console.log(ukPostcode("S7X6Z2"));
console.log(ukPostcode("S7X 6Z2"));
console.log(ukPostcode("Q5J3K6"));

// Num 9
 function CanadaPostcode(str) {
     Cpost = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
       if (Cpost.test(str)) {
        return true;
    } else {
        return false;
    }
}
console.log(CanadaPostcode("K8V3Y1"));
console.log(CanadaPostcode("K8V 3Y1"));
console.log(CanadaPostcode("Z4V4X1"));

// Num 10
Object.objectsize = function(Obj) {
    var objsize = 0, key;
    for (key in Obj) {
      if (Obj.hasOwnProperty(key)) objsize++;
    } 
    return objsize;
};
  
var student = { 
    name: "Joseph Williams",
    class: "HTML & Javascript",
    MatricNo : 444,
    Year: 2021
};
var objectsize = Object.objectsize(student);
console.log('Current object size : ' + objectsize);

// Num 11
function boolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}
console.log(boolean(true));
console.log(boolean(false));
console.log(boolean('white'))

// Num 12
function object(value) {
    var datatype = typeof value
    return datatype === 'function' || datatype=== 'object' && !!value;
}
console.log(object({name: 'White'}));
console.log(object('2021'));
console.log(object('cool'));

// Num 13

// Num 14
function is_sameType(value1, value2) {
    if(is_nan(value1) || is_nan(value2)) {
    return is_nan(value1) === is_nan(value2);
}
    return toString.call(value1) === toString.call(value2);
}
  
function is_nan(val)
{
    return val !== val;
}
  
console.log(is_sameType('me', 'you'));
console.log(is_sameType('00', '43'));
console.log(is_sameType(11, 'John Doe'));
