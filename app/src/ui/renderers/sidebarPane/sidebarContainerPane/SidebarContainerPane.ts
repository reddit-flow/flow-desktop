import {Subreddit} from "snoowrap";

import {Component} from "../../../Component";
import {SidebarTopBar} from "../sidebarTopBar/SidebarTopBar";
import {SidebarContentPane} from "../sidebarContentPane/SidebarContentPane";

import * as sidebarContainerPaneTemplate from "./SidebarContainerPaneTemplate.dot";

import * as style from './SidebarContainerPaneStylesheet.css'

export class SidebarContainerPane extends Component {

    private _topBar: SidebarTopBar;
    private _sidebarContentPane: SidebarContentPane;

    constructor(subreddit: Subreddit) {

        let renderedTopBar = new SidebarTopBar();
        let renderedMainContentPane = new SidebarContentPane();

        let returnElement = document.createElement('div');

        returnElement.innerHTML = sidebarContainerPaneTemplate ({})

        super(returnElement.firstElementChild, style);

        this._topBar = renderedTopBar;
        this._sidebarContentPane = renderedMainContentPane;

        this.addChild(renderedTopBar);
        this.addChild(renderedMainContentPane);

    }

    public updateSelf(): void {
        this.htmlElement.innerHTML = sidebarContainerPaneTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;
        this.htmlElement.appendChild(this._topBar.htmlElement);
        this.htmlElement.appendChild(this._sidebarContentPane.htmlElement);
    }

}