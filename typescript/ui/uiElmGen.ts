

// This will create HTML Elements and return them in a wrapper div
export default class UiElmGen {
    id :number;
    parentDiv :HTMLDivElement;
    ids :string[];
    
    constructor(parentDiv :HTMLDivElement){
    this.id = this.randomId();    
    this.parentDiv = parentDiv;
    this.ids = [];
    }
    
    
    
    // checkBox(name :string,defaultValue = true){
    //     let content = document.createElement("input"); 
    //     content.name = name;
    //     content.checked = defaultValue;
    //     content.type = "checkbox";
    //     content.id = this.randomId();
    //     this.ids.push(content.id);
    //     this.parentDiv.appendChild(content);
    // }
    
    colorPicker(name :string,ref :{},prop :string){
        let uiElm = document.createElement("input"); 
        uiElm.name = name;
        uiElm.value = "red";
        uiElm.type = "color";
        uiElm.id = this.randomId().toString();
        this.ids.push(uiElm.id);
        this.parentDiv.appendChild(uiElm);
        uiElm.addEventListener("change", ()=>{
            //@ts-expect-error
            ref[prop] = uiElm.value;
            // console.log("ok",uiElm.value);
        });
    }
    randomId(){
        return Math.floor(Math.random() * 1000000000000);    
    }
    // textInput(name,defaultValue = ""){
    //     let content = document.createElement("input"); 
    //     content.name = name;
    //     content.value = defaultValue;
    //     content.type = "text";
    //     content.id = this.randomId();
    //     this.ids.push(content.id);
    //     this.parentDiv.appendChild(content);
    // }
    numberInput(name :string,defaultValue = 0,ref:{},prop:string){
        let uiElm = document.createElement("input"); 
        uiElm.name = name;
        uiElm.value = defaultValue.toString();
        uiElm.type = "number";
        uiElm.id = this.randomId().toString();
        this.ids.push(uiElm.id);
        this.parentDiv.appendChild(uiElm);
    
        uiElm.addEventListener("change", ()=>{
            //@ts-expect-error
            ref[prop].setValue( parseInt(uiElm.value) );
            // console.log("ok",uiElm.value);
        });
    }
    label(title="Label Title"){
    let label = document.createElement("Label"); 
    label.innerHTML = title;
    label.className = "lbl";
    this.parentDiv.appendChild(label);
    }
    titleLabel(title="Label Title"){
    let label = document.createElement("Label"); 
    label.innerHTML = title;
    label.className = "titleLabel";
    this.parentDiv.appendChild(label);
    }
    
    hr(){
        let hr = document.createElement("hr");
    this.parentDiv.appendChild(hr);
    }
    // display(){
    //     this.parentDiv.style.display = "flex";
    //     this.parentDiv.style.flexDirection = "column";
    // }
    ////////////////////////////////
    }//class ends
    