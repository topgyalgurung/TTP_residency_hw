//Topgyal Gurung
//Assignment 2

//recreate these methods using JS functions
//Array.forEach executes provided function once for each element
//these method do not mutate Array
// look into Array.prototype.pop(), Array.prototype.shift(), and other methods

var myArray = [1,5,6,7,14,19,25];
console.log(" My array created:",myArray);

// 1.forEach()
console.log("1) Each values are: ")
function myEach(){
	for(var i=0;i<myArray.length;i++){
		console.log(myArray[i]);
	}
}
Array.prototype.myEach=function(f1){
	for(var i=0;i<this.length;i++){
			return(f1[i]);
		}
}
myEach();

// 2. Map: The map() method creates a new array with the results of 
//calling a provided function on every element in the calling array

function myfunc(num){
	return num*2;	
}
Array.prototype.myMap=function(f2){
	let newArr=[];
	//loop and assign to new array
	for(let i=0;i<this.length;i++){
		 newArr[i]=f2(this[i]);
	}
	return newArr;
}
let doubledValues = myArray.myMap(myfunc);
console.log('2) Doubled myArray', doubledValues)

//3. filter(): The filter() method creates a new array with all 
//elements that pass the test implemented by the provided function.
function isBigThan5(num){
	return (num>5);
}
Array.prototype.myFilter=function(f3){	
	let newArr=[];
	for(let i=0;i<this.length;i++){
		if (f3(this[i])){
			newArr.push(this[i]);
		}

	}
	return newArr;
}
var filtered=myArray.myFilter(isBigThan5);
console.log('3)filtered', filtered);
//  output unsatisfied num as null (how I can remove? )            *** 

// 4. some():The some() method tests whether at least one element in 
//the array passes the test implemented by the provided function. It returns a Boolean value.
function isEven (num) {
	return((num%2)==0);	
}
Array.prototype.mySome=function(f4){
	for(let i=0;i<this.length;i++){
		if (f4(this[i])){
			return true;
		}
	}	
	return false;
}
console.log(myArray)
var even = myArray.mySome(isEven);
console.log("4) atleast one element even: ", even);
// should output true ???                             ***

//5.every(): the every() method tests whether all elements in the array pass 
//the test implemented by the provided function. It returns a Boolean value.
/*var isAllOdd=new Boolean(num)=>{
	return num%0!==0;
}*/
function isAllOdd(num){
	return (num%2==0)	
}
Array.prototype.myEvery=function(f5){
	var result=true;
	for(let i=0;i<this.length;i++){
		if(f5(this[i]))
			return true;
	}
}
var allTrue=myArray.myEvery(isAllOdd);
console.log("5) all satisfies: ",allTrue);
// should output false                         ***

//6. reduce():The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in a single output value

const array1=[1,2,3,4];
const reducer=(accumulator,currentValue,i)=>accumulator*currentValue;

function myReduce(arr,callback,initial){
    let startingVal;

    if(initial){
        startingVal=initial;
    }
    else{
        starting=arr[0];
    }
    for(let i=0;i<arr.length;i++){
        let currElement=arr[i];
        startingVal=callback(startingVal,currElement,i);
    }
    return startingVal;
}
myReduce(array1,reducer);
// function reducer(arr){
// 	 let sum=0;
// 	for(let i=0;i<arr.length;i++){
// 		sum+=arr[i];
// 	}
// 	return sum;
// }
// //const reducer= (accumulator,currentValue)=>accumulator+currentValue;	
// Array.prototype.myReduce=function(f6){
// 	for(let i=0;i<this.length;i++){
// 		return f6(this);
// 	}
// }
// var sum=myArray.myReduce(reducer);
// console.log("6)total sum: ", sum);


// 7.includes: The includes() method determines whether an array includes a certain value 
//among its entries, returning true or false as appropriate

// myIncludes” that will take in an array of elements and indicates 
//whether or not a target element is contained within the input array. This returns a boolean.
function doesInclude (arr) {
	var check =true;
	for(let i=0;i<arr.length;i++){
	if(arr[i]==5){
		return true;
	} 
	else 
		return false;

	}
}
Array.prototype.myIncludes=function(f7){
	for(let i=0;i<this.length;i++){
		return f7(this);
	}	
}
var includes=myArray.myIncludes(doesInclude);
console.log("7) includes or not: ", includes);

// 8.indexOf: The indexOf() method returns the first index at which a 
//given element can be found in the array, or -1 if it is not present.

//myIndexOf” that will take in an array of elements and returns the
// index of the first encounter of a target element (if it is found) or 
//-1 if that element does not exist within the input array.

function getIndex(arr) {
	let target=7;
	for(let i=0;i<arr.length;i++){
		if(arr[i]==target){
			return i;
		}
		else 
			return -1;
	}
}
Array.prototype.myIndexOf=function(f8){
	for(let i=0;i<this.length;i++){
		return f8(this);	
	}
}
let i=myArray.myIndexOf(getIndex);
console.log("8) first index where element found: ",i);
// output -1 wrong                          **

// 9.push: The push() method adds one or more elements
// to the end of an array and returns the new length of the array
//myPush” that will take in an array of elements as well as an 
//elementToAdd and append that element to the end of the array.
function append () {
}
Array.prototype.myPush=function(f9){
		f9(append());
}
let add=myArray.myPush(append);
console.log("9. new Array after push: ", add);

// 10.lastIndexOf: The lastIndexOf() method returns the last index at which a given 
//element can be found in the array, or -1 if it is not present. 
//The array is searched backwards, starting at fromIndex.

//“myUnshift” (typo) that will take in an array of elements and returns the index 
//of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

function unshift(num) {
	for(let i=myArray.length-1;i>0;i--){
		if(myArray[i]===num)
			return i;
		else
			return -1;
	}

}
Array.prototype.myUnshift=function(f10){
	for(let i=this.length-1;i>0;i--){
		return f10(unshift(3));
	}	
}
let index=myArray.myUnshift(unshift);
console.log("10)last index: ",index);



//11.Object.keys: The Object.keys() method returns an array of a given
//object's own property names, in the same order as we get with a normal loop

//“grabKeys” that will take in an object and return all of the keys of 
//the key:value pairs of that object.
console.log("To Print keys: ")
const object={a:"tops",b:3,c:false};
function obj () {
	//for(var key=0;key<object.length;key++){
	for(var key in object){
		console.log("keys are: ",key);
	}
}
Object.grabKeys=function(f11){
	for(var k in this){
		return f11((this)[k]);
	}
}
var k=Object.grabKeys(obj);


//12.Object.values: returns an array of a given object's own enumerable 
// property values, in the same order as that provided by a for...in loop
// (the difference being that a for-in loop enumerates properties 
//in the prototype chain as well)

//grabValues” that will take in an object and return all of the values
// of the key:value pairs of that object.
console.log("To Print values: ")
function obj1 () {
	for(var k in object){
		console.log("values are: ", object[k]);
	}
	
}
Object.grabValues=function(f12){	
	for(var k in this){	
		return f12(this[k]);
	}
}
var content=Object.grabValues(obj1);
/*  *******************************
*/
// Recreate the method Object.keys();
// You'll be given an object;
// We want to return an array of the object's keys;

Object.grabKeys=function(obj){
    let allkeys=[];
    for(let key in obj){
        allkeys.push(key);
    }
    return allkeys;
}
let myObj={"a":1,"b":2,"c":3}
Object.grabKeys(myObj);

//6. reduce():The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in a single output value



let arr=[1,2,3,4];
//deep copy
let deepCopyArr=JSON.parse(JSON.stringify(arr));
console.log(deepCopyArr);