import {LinkedList} from "typescript-collections";

import {Component} from "../../../Component";

import * as style from './SidebarContentPaneStylesheet.css'

import * as sidebarContentPaneTemplate from './SidebarContentPaneTemplate.dot';

export class SidebarContentPane extends Component {

    constructor() {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = sidebarContentPaneTemplate ({});

        super(returnElement.firstElementChild, style);

    }

    public updateSelf(): void {

        // Flush children
        this.children.clear();

        this.htmlElement.innerHTML = sidebarContentPaneTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;

    }

}