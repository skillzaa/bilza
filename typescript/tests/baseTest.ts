
export default class BaseTest {

constructor(testSuiteName :string = "Unknow"){
console.warn("Starting Suite : ", testSuiteName);
}

toEqual(incomming :number, check :number,title :string=""):boolean{
    if (incomming === check){
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }
}
isEqual(incomming :number, check :number,title :string=""):boolean{
    if (incomming === check){
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }
}
isNotEqual(incomming :number, check :number,title :string=""):boolean{
    if (incomming === check){
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }else {
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }
}
isLessThan(incomming :number, check :number,title :string=""):boolean{
    if (incomming < check){
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }
}
isGreaterThan(incomming :number, check :number,title :string=""):boolean{
    if (incomming > check){
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }
}
approxEqual(incomming :number, check :number,errorMargin :number, title :string=""):boolean{
    if (incomming <= (check + errorMargin) && incomming >= (check - errorMargin)  ){
        console.info(title,`incomming == ${incomming}, expected ${check} : approx-CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
        return false;
    }
}

toMatch(incomming :string, check :string,title :string=""):boolean{
    if (incomming === check){
        console.info(title,`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
    }
}

toBeTrue(incomming :boolean,title :string=""):boolean{
    if (incomming === true){
        console.info(title,`incomming == ${incomming}: CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming}, expected "true": WRONG `);
        return false;
    }
}

toBeFalse(incomming :boolean,title :string=""):boolean{
    // false will return true here
    if (incomming === false){
        console.info(title,`incomming == ${incomming},expected "false" : CORRECT `);
        return true;
    }else {
        console.error(title,`incomming == ${incomming},expected "false": WRONG `);
        return false;
    }
}

toThrow(theFn :Function, message :string, title :string=""):boolean{
    let isError = false;
    try {
        theFn();
    }
    catch(err  ){
        if (err instanceof Error){
            if (err.message === message){
                isError = true;
            }
        }
    }
    finally{
        if (isError == true){
            console.info("error thrown CORRECT");
            return false;
        }else {
            console.error( "failed to throw.");
            return true;
        }
    }
}
toNotThrow(theFn :Function,title :string=""):boolean{
    let isError = false;
    try {
        theFn();
    }
    catch(err  ){
        if (err instanceof Error){
                isError = true;
        }
    }
    finally{
        if (isError == true){
            console.error(title, "error thrown.");
            return false;
        }else {
            console.info(title,"didnt throw error : CORRECT");
            return true;
        }
    }
}



//-------------------------------------------
}