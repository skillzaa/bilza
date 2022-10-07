
export default function checkZeroToHundred(n :number):number{
if(n > 100){
    throw new Error("the number is larger than 100");
     ;
}else if(n< 0) {
    throw new Error("the number is smaller than 0");
}else{
    return n;
}
}