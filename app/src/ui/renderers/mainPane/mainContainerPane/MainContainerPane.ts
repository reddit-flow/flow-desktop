import {Subreddit} from "snoowrap";

import {Component} from "../../../Component";
import {MainTopBar} from "../mainTopBar/MainTopBar";
import {MainContentPane} from "../mainContentPane/MainContentPane";

import * as mainContentPaneTemplate from "./MainContainerPaneTemplate.dot";

import * as style from './MainContainerPaneStylesheet.css'


export class MainContainerPane extends Component {

    private _topBar: MainTopBar;
    private _mainContentPane: MainContentPane;

    constructor(subreddit: Subreddit) {

        let renderedTopBar = new MainTopBar(subreddit);
        let renderedMainContentPane = new MainContentPane(subreddit.getNew().fetchAll());

        let returnElement = document.createElement('div');

        returnElement.innerHTML = mainContentPaneTemplate ({})

        super(returnElement.firstElementChild, style);

        this._topBar = renderedTopBar;
        this._mainContentPane = renderedMainContentPane;

        this.addChild(renderedTopBar);
        this.addChild(renderedMainContentPane);

    }

    public updateSelf(): void {
        this.htmlElement.innerHTML = mainContentPaneTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;
        this.htmlElement.appendChild(this._topBar.htmlElement);
        this.htmlElement.appendChild(this._mainContentPane.htmlElement);
    }

}