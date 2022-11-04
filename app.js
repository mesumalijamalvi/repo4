// ================================= F U N C T I O N=========================================

function myage(){
    age = "seventeen";
    console.log(age);
    address = "Nager";
    console.log(address);

   
} myage()
 

//  ===========================FUNCTION GLOBALLY==========================================



let k = 11;
function hello(){
    

console.log(k);

}hello()

//  ===========================FUNCTION LEXICALLY==========================================

function jml(){
    let f = "sweet";
    let d = "gb";
    console.log(f);
    console.log(d);
   

}jml()

// ==================================== P A R A M E T E R ================================
function myName(name){
 
console.log(name);

}myName("MesumJamalvii:")



// ================================= H O I S T I N G ===================================== 


let m =[12,14,20];

console.log(m);

m.forEach((v)=>console.log(--v))


// ================================= S L I C E ===================================== 

let ray1 = ["mesum",17,"jamalvii","gb"]
console.log(ray1);

let ray2 = ray1.slice(0,1)
console.log(ray2);



// ================================= S P L I C E===================================== 

let o =["aly","sibtain","haider","abbas"]

console.log(o);

let o2 = o.splice(4,3,"BOYS")

console.log(o);



