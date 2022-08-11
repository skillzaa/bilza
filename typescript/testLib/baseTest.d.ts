export default class BaseTest {
    constructor(testSuiteName?: string);
    toEqual(incomming: number, check: number, title?: string): boolean;
    isEqual(incomming: number, check: number, title?: string): boolean;
    isNotEqual(incomming: number, check: number, title?: string): boolean;
    isLessThan(incomming: number, check: number, title?: string): boolean;
    isGreaterThan(incomming: number, check: number, title?: string): boolean;
    approxEqual(incomming: number, check: number, errorMargin: number, title?: string): boolean;
    toMatch(incomming: string, check: string, title?: string): boolean;
    toBeTrue(incomming: boolean, title?: string): boolean;
    toBeFalse(incomming: boolean, title?: string): boolean;
    toThrow(theFn: Function, message: string, title?: string): boolean;
    toNotThrow(theFn: Function, title?: string): boolean;
}
//# sourceMappingURL=baseTest.d.ts.map