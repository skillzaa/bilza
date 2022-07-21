export default class BaseTest {
    constructor(testSuiteName?: string);
    toEqual(incomming: number, check: number, title?: string): boolean;
    toBe(incomming: string, check: string, title?: string): boolean;
    toBeTrue(incomming: boolean, title?: string): boolean;
    toBeFalse(incomming: boolean, title?: string): boolean;
    toThrow(theFn: Function, message: string, title?: string): boolean;
    toNotThrow(theFn: Function, title?: string): boolean;
}
//# sourceMappingURL=baseTest.d.ts.map