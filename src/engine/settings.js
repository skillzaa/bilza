export default class Settings {
    constructor() {
        this.debugMode = true;
        this.fixBugWarning = true;
    }
    fixBugWarn(msg) {
        if (this.fixBugWarning == true) {
            console.warn(msg);
        }
    }
}
