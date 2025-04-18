function clickMe()
{
	alert("Clicked");
	

}

//let btnClick=document.querySelector("#btnClick");
//btnClick.addEventListener("click",clickMe);
//onclick="clickMe()";

let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
//let result=document.querySelector("#result");
let btnAdd=document.querySelector("#btnAdd");
let btnMinus=document.querySelector("#btnMinus");
let r1=document.querySelector("#resultp");
btnAdd.addEventListener("click",add);
btnMinus.addEventListener("click",minus);
function minus()
{
	//alert("called");
	let a=parseInt(num1.value);
	let b=parseInt(num2.value);
	
	//result.value=a+b;
	r1.innerText=a-b;
	
}
function add()
{
	//alert("called");
	let a=parseInt(num1.value);
	let b=parseInt(num2.value);
	
	//result.value=a+b;
	r1.innerText=a+b;
	
	
	
	
}


