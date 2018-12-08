import {StylesheetManager} from "./StylesheetManager";
import {LinkedList} from "typescript-collections";

export abstract class Component {

    private readonly _children: LinkedList<Component>;

    private _htmlElement: Element;

    private _requiredStyles: any;

    protected constructor(htmlElement: Element, requiredStyles: any) {

        this._children = new LinkedList<Component>();

        this._htmlElement = htmlElement;
        this._requiredStyles = requiredStyles;
        this.mountStyles(requiredStyles)
    }

    protected abstract updateSelf(): void;

    /**
     * Forces the Component and it's children to render again, if specified
     *
     * @param recursive whether the Component's children should also be updated.
     */
    public update(recursive: boolean) {
        if (recursive) this._children.forEach(it => it.update(true))
        this.updateSelf();
    }

    public mountStyles(importedStylesheet: any): void {
       StylesheetManager.mountStylesheetIfAbsent(this.constructor.name, importedStylesheet)
    }

    public bindEventListener(elem: HTMLElement, event: string, callback: ((this: GlobalEventHandlers, ev: Event) => any)) {
        elem.addEventListener(event, callback.bind(this));
    }

    public getUniqueDOMChildElem(className: string): HTMLElement {
        return (this.htmlElement.getElementsByClassName(className)[0] as HTMLElement);
    }

    get children(): LinkedList<Component> {
        let tempReturn = new LinkedList<Component>()
        this._children.forEach(it => tempReturn.add(it))
        return tempReturn;
    }

    child(index: number): Component {
        return this._children.elementAtIndex(index);
    }

    addChild(child: Component) {
        this._children.add(child);
        this.htmlElement.appendChild(child.htmlElement);
    }

    removeChild(child: Component) {
        this._children.remove(child)
    }

    get htmlElement(): Element {
        return this._htmlElement;
    }

    set htmlElement(value: Element) {
        this._htmlElement = value;
    }

    get requiredStyles(): string {
        return this._requiredStyles;
    }

    set requiredStyles(value: string) {
        this._requiredStyles = value;

    }

}