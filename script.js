const num = 10;
let n = num.toExponential();
console.log(n);

let a = new Date();
let m = a.toLocaleString();
console.log(m);

let numb = 1234;
let num2 = .1234;
let b = num2.toPrecision(1);
let c = numb.toPrecision(1);
console.log(c);
console.log(b);

let text = 10;
let res = text.valueOf();
console.log(res);

let w = "hello";
let x = w.charAt(3);
console.log(x);

let w1= "hello world";
let x1 = w1.charCodeAt(1);
console.log(x1);

let foo ="hello i am in guvi main, rain,SPAIN";
let f = foo.match(/in/gi);//regex
console.log(f);

let text1 = "hello guvi geek";
let result = text1.replace("geek","learner");
console.log(result);

let j = "hello world";
let k = j.substring(1,7);
console.log(k);

let j1= ["hello","world","guvi","geek"];
let k1 = j1.slice(0,2);
console.log(k1);

let alpha = ["r","a","k","w","n"];
let arr = alpha.sort();
console.log(arr);

let number = [20,100,1,3,40,15];
let arr1 = number.sort();
 number.sort(
    function (a,b){
        return b-a
    }
 )
console.log(arr1);

let time = new Date();
let timer = time.getTime();
console.log(timer)

let time1 = new Date();
let timer1 = time1.setTime(16);
console.log(timer1);

let z = Math.ceil(4.2);
let z1 = Math.round(4.2);
let z2 = Math.floor(4.6)
let y = Math.random();
let q = Math.pow(4,5);
let q1 = Math.sqrt(400);
let q2 = Math.cbrt(40);
console.log(z)
console.log(z1)
console.log(z2)
console.log(y)
console.log(q)
console.log(q1)
console.log(q2)
