export default class BaseTest {
    constructor(testSuiteName = "Unknow") {
        console.warn("Starting Suite : ", testSuiteName);
    }
    toEqual(incomming, check) {
        if (incomming === check) {
            console.info(`incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(`incomming == ${incomming}, expected ${check} : CORRECT : WRONG `);
            return false;
        }
    }
    toBe(incomming, check) {
        if (incomming === check) {
            console.info(`incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(`incomming == ${incomming}, expected ${check} : CORRECT : WRONG `);
            return false;
        }
    }
    toBeTrue(incomming) {
        if (incomming === true) {
            console.info(`incomming == ${incomming}: CORRECT `);
            return true;
        }
        else {
            console.error(`incomming == ${incomming}, expected "true": WRONG `);
            return false;
        }
    }
    toBeFalse(incomming) {
        if (incomming === false) {
            console.info(`incomming == ${incomming},expected "false" : CORRECT `);
            return true;
        }
        else {
            console.error(`incomming == ${incomming},expected "false": WRONG `);
            return false;
        }
    }
    toThrow(theFn, message) {
        let isError = false;
        try {
            theFn();
        }
        catch (err) {
            if (err instanceof Error) {
                if (err.message === message) {
                    isError = true;
                }
            }
        }
        finally {
            if (isError == true) {
                console.info("error thrown CORRECT");
                return false;
            }
            else {
                console.error("failed to throw.");
                return true;
            }
        }
    }
    toNotThrow(theFn) {
        let isError = false;
        try {
            theFn();
        }
        catch (err) {
            if (err instanceof Error) {
                isError = true;
            }
        }
        finally {
            if (isError == true) {
                console.error("error thrown.");
                return false;
            }
            else {
                console.info("didnt throw error : CORRECT");
                return true;
            }
        }
    }
}
