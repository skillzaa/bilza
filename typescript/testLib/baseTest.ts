export default class BaseTest {

constructor(testSuiteName :string = "Unknow"){
console.warn("Starting Suite : ", testSuiteName);
}

toEqual(incomming :number, check :number):boolean{
    if (incomming === check){
        console.info(`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(`incomming == ${incomming}, expected ${check} : CORRECT : WRONG `);
        return false;
    }
}

toBe(incomming :string, check :string):boolean{
    if (incomming === check){
        console.info(`incomming == ${incomming}, expected ${check} : CORRECT `);
        return true;
    }else {
        console.error(`incomming == ${incomming}, expected ${check} : CORRECT : WRONG `);
            return false;
    }
}

toBeTrue(incomming :boolean):boolean{
    if (incomming === true){
        console.info(`incomming == ${incomming}: CORRECT `);
        return true;
    }else {
        console.error(`incomming == ${incomming}, expected "true": WRONG `);
        return false;
    }
}

toBeFalse(incomming :boolean):boolean{
    // false will return true here
    if (incomming === false){
        console.info(`incomming == ${incomming},expected "false" : CORRECT `);
        return true;
    }else {
        console.error(`incomming == ${incomming},expected "false": WRONG `);
        return false;
    }
}
toThrow(theFn :Function,message :string):boolean{
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
toNotThrow(theFn :Function):boolean{
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
            console.error( "error thrown.");
            return false;
        }else {
            console.info("didnt throw error : CORRECT");
            return true;
        }
    }
}



//-------------------------------------------
}