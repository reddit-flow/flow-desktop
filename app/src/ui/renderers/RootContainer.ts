import {Subreddit} from "snoowrap";

import {Component} from "../Component";
import {MainContainerPane} from "./mainPane/mainContainerPane/MainContainerPane";
import {SidebarContainerPane} from "./sidebarPane/sidebarContainerPane/SidebarContainerPane";

import * as rootContainerStylesheet from "./RootContainerTemplate.dot";

import * as style from './RootContainerStylesheet.css'

export class RootContainer extends Component {

    private _sideBar: SidebarContainerPane;
    private _mainContainerPane: MainContainerPane;

    constructor(subreddit: Subreddit) {

        let renderedSidebar = new SidebarContainerPane(subreddit);
        let renderedMainConainerPane = new MainContainerPane(subreddit);

        let returnElement = document.createElement('div');

        returnElement.innerHTML = rootContainerStylesheet ({})

        super(returnElement.firstElementChild, style);

        this._sideBar = renderedSidebar;
        this._mainContainerPane = renderedMainConainerPane;

        this.addChild(renderedSidebar);
        this.addChild(renderedMainConainerPane);

    }

    public updateSelf(): void {
        this.htmlElement.innerHTML = rootContainerStylesheet ({});
        this.htmlElement = this.htmlElement.firstElementChild;
        this.htmlElement.appendChild(this._sideBar.htmlElement);
        this.htmlElement.appendChild(this._mainContainerPane.htmlElement);
    }

}