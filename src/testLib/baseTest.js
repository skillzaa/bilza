export default class BaseTest {
    constructor(testSuiteName = "Unknow") {
        console.warn("Starting Suite : ", testSuiteName);
    }
    toEqual(incomming, check, title = "") {
        if (incomming === check) {
            console.info(title, `incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
        }
    }
    isLessThan(incomming, check, title = "") {
        if (incomming < check) {
            console.info(title, `incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
        }
    }
    isGreaterThan(incomming, check, title = "") {
        if (incomming > check) {
            console.info(title, `incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
        }
    }
    approxEqual(incomming, check, errorMargin, title = "") {
        if (incomming <= (check + errorMargin) && incomming >= (check - errorMargin)) {
            console.info(title, `incomming == ${incomming}, expected ${check} : approx-CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
        }
    }
    toMatch(incomming, check, title = "") {
        if (incomming === check) {
            console.info(title, `incomming == ${incomming}, expected ${check} : CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected ${check}  : WRONG `);
            return false;
        }
    }
    toBeTrue(incomming, title = "") {
        if (incomming === true) {
            console.info(title, `incomming == ${incomming}: CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming}, expected "true": WRONG `);
            return false;
        }
    }
    toBeFalse(incomming, title = "") {
        if (incomming === false) {
            console.info(title, `incomming == ${incomming},expected "false" : CORRECT `);
            return true;
        }
        else {
            console.error(title, `incomming == ${incomming},expected "false": WRONG `);
            return false;
        }
    }
    toThrow(theFn, message, title = "") {
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
    toNotThrow(theFn, title = "") {
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
                console.error(title, "error thrown.");
                return false;
            }
            else {
                console.info(title, "didnt throw error : CORRECT");
                return true;
            }
        }
    }
}
