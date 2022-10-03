export default class UiElmGen {
    constructor(parentDiv) {
        this.id = this.randomId();
        this.parentDiv = parentDiv;
        this.ids = [];
    }
    colorPicker(name, ref, prop) {
        let uiElm = document.createElement("input");
        uiElm.name = name;
        uiElm.value = "red";
        uiElm.type = "color";
        uiElm.id = this.randomId().toString();
        this.ids.push(uiElm.id);
        this.parentDiv.appendChild(uiElm);
        uiElm.addEventListener("change", () => {
            ref[prop] = uiElm.value;
        });
    }
    randomId() {
        return Math.floor(Math.random() * 1000000000000);
    }
    numberInput(name, defaultValue = 0, ref, prop) {
        let uiElm = document.createElement("input");
        uiElm.name = name;
        uiElm.value = defaultValue.toString();
        uiElm.type = "number";
        uiElm.id = this.randomId().toString();
        this.ids.push(uiElm.id);
        this.parentDiv.appendChild(uiElm);
        uiElm.addEventListener("change", () => {
            ref[prop].setValue(parseInt(uiElm.value));
        });
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
