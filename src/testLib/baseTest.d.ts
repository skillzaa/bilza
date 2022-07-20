export default class BaseTest {
    constructor(testSuiteName?: string);
    toEqual(incomming: number, check: number): boolean;
    toBe(incomming: string, check: string): boolean;
    toBeTrue(incomming: boolean): boolean;
    toBeFalse(incomming: boolean): boolean;
    toThrow(theFn: Function, message: string): boolean;
}
//# sourceMappingURL=baseTest.d.ts.map