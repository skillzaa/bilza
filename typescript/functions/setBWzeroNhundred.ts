
export default function setBWzeroNhundred(n :number):number{
if(n > 100){
    return 100;
}else if(n< 0) {
    return 0;
}else{
    return n;
}
}