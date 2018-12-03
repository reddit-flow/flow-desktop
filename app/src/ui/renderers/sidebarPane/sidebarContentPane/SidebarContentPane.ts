import {LinkedList} from "typescript-collections";

import {Subreddit} from "snoowrap";

import {SubscribedSubreddit} from "../subscribedSubreddit/SubscribedSubreddit";

import {Component} from "../../../Component";

import * as style from './SidebarContentPaneStylesheet.css'

import * as sidebarContentPaneTemplate from './SidebarContentPaneTemplate.dot';

export class SidebarContentPane extends Component {

    private _subreddits = new LinkedList<Subreddit>

    constructor() {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = sidebarContentPaneTemplate ({});

        super(returnElement.firstElementChild, style);

    }

    public addSubreddit(subreddit: Subreddit): void {
        this.addChild(new SubscribedSubreddit(subreddit));
        this._subreddits.add(subreddit);
    }

    public updateSelf(): void {

        // Flush children
        this.children.clear();

        this.htmlElement.innerHTML = sidebarContentPaneTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;

    }

}
