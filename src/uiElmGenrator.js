export default class UiElmGen {
    constructor(defaultClickEvent = null) {
        this.id = this.randomId();
        if (defaultClickEvent == null) {
            defaultClickEvent = () => console.log("defaultClickEvent");
        }
        this.defaultClickEvent = defaultClickEvent;
        this.parentDiv = this.customDialogDivColumn();
        this.ids = [];
    }
    checkBox(name, defaultValue = true) {
        let content = document.createElement("input");
        content.name = name;
        content.checked = defaultValue;
        content.type = "checkbox";
        content.id = this.randomId();
        this.ids.push(content.id);
        this.parentDiv.appendChild(content);
    }
    colorPicker(name, defaultValue = "#EFEEE3") {
        let content = document.createElement("input");
        content.name = name;
        content.value = defaultValue;
        content.type = "color";
        content.id = this.randomId();
        this.ids.push(content.id);
        this.parentDiv.appendChild(content);
    }
    textInput(name, defaultValue = "") {
        let content = document.createElement("input");
        content.name = name;
        content.value = defaultValue;
        content.type = "text";
        content.id = this.randomId();
        this.ids.push(content.id);
        this.parentDiv.appendChild(content);
    }
    numberInput(name, defaultValue = 0) {
        let content = document.createElement("input");
        content.name = name;
        content.value = defaultValue;
        content.type = "number";
        content.id = this.randomId();
        this.ids.push(content.id);
        this.parentDiv.appendChild(content);
    }
    submitFormBtn(caption = "Submit", className = "btn") {
        let btnDyn = document.createElement("button");
        btnDyn.innerHTML = caption;
        ;
        btnDyn.className = className;
        btnDyn.onclick = (e) => {
            let resp = [];
            for (let i = 0; i < this.ids.length; i++) {
                let o = {};
                const id = this.ids[i];
                let elm = document.getElementById(id);
                o.id = elm.id;
                o.name = elm.name;
                o.value = elm.value;
                resp.push(o);
            }
            this.defaultClickEvent(resp);
            e.preventDefault();
            this.parentDiv.parentNode.removeChild(this.parentDiv);
        };
        this.parentDiv.appendChild(btnDyn);
    }
    cancelFormBtn(caption = "Cancel", className = "btnCancel") {
        let btnDyn = document.createElement("button");
        btnDyn.innerHTML = caption;
        ;
        btnDyn.className = className;
        btnDyn.onclick = (e) => {
            e.preventDefault();
            this.parentDiv.parentNode.removeChild(this.parentDiv);
        };
        this.parentDiv.appendChild(btnDyn);
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
    customDialogDivColumn(className = "dialogueOuterDiv") {
        let md = document.createElement("div");
        md.style.width = "50%";
        md.style.position = "absolute";
        md.style.top = `${parseInt((window.innerHeight / 2) - 100)}px`;
        md.style.left = `${parseInt((window.innerWidth / 2) - 200)}px`;
        md.id = this.id;
        md.className = className;
        document.body.appendChild(md);
        return md;
    }
    hr() {
        let hr = document.createElement("hr");
        this.parentDiv.appendChild(hr);
    }
    randomId() {
        return Math.floor(Math.random() * 1000000000000);
    }
    display() {
        this.parentDiv.style.display = "flex";
        this.parentDiv.style.flexDirection = "column";
    }
}
