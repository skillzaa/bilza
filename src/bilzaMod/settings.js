export default class Settings {
    constructor(pack) {
        this.clearCanvasBwFrames = true;
        this.loadSystemBackground = true;
        this.pack = pack;
    }
    disableOpacity() {
        this.pack.disableOpacity = true;
    }
    enableOpacity() {
        this.pack.disableOpacity = false;
    }
}
