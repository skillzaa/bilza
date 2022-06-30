export default class UiElmGen {
    constructor(parentDiv) {
        this.id = this.randomId();
        this.parentDiv = parentDiv;
        this.ids = [];
    }
    colorPicker(name, defaultValue = "#EFEEE3") {
        let uiElm = document.createElement("input");
        uiElm.name = name;
        uiElm.value = defaultValue;
        uiElm.type = "color";
        uiElm.id = this.randomId().toString();
        this.ids.push(uiElm.id);
        this.parentDiv.appendChild(uiElm);
    }
    randomId() {
        return Math.floor(Math.random() * 1000000000000);
    }
    label(title = "Label Title") {
        let label = document.createElement("Label");
        label.innerHTML = title;
        label.className = "lbl";
        this.parentDiv.appendChild(label);
    }
    titleLabel(title = "Label Title") {
        let label = document.createElement("Label");
        label.innerHTML = title;
        label.className = "titleLabel";
        this.parentDiv.appendChild(label);
    }
    hr() {
        let hr = document.createElement("hr");
        this.parentDiv.appendChild(hr);
    }
}
