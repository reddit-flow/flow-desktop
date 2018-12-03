import {Component} from "./Component";
import {LinkedList} from "typescript-collections";

export class FlowUI {

    private static readonly _rootChildren = new LinkedList<Component>();

    static get children(): Component[] {
        return this._rootChildren.toArray();
    }

    static child(index: number) {
        this._rootChildren.toArray().elementAtIndex(index);
    }

    static addChild(child: Component) {
        this._rootChildren.add(child);
    }

    static removeChild(child: Component) {
        this._rootChildren.remove(child)
    }

    static mountToElement(element: Element) {
        this._rootChildren.forEach(it => element.appendChild(it.htmlElement) as unknown as void)
    }

}
