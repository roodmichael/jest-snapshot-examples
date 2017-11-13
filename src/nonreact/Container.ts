export class Container {

    visibility: string;

    constructor(directive : any) {
        this.visibility = directive.visibility;
    }

    render() : HTMLElement {
        let container : HTMLDivElement = document.createElement("div");
        let text : Text = document.createTextNode("text inside div");

        container.appendChild(text);

        container.style.cssText = `visibility:${this.visibility};`;
        return container;
    }
}
