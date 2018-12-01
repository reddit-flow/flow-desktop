import {LinkedList} from "typescript-collections";

import {Listing, Submission} from "snoowrap";

import {Component} from "../../../Component";
import {PostHeader} from "../postHeader/PostHeader";

import * as style from './MainContentPaneStylesheet.css'

import * as mainContentPaneTemplate from './MainContentPaneTemplate.dot';

export class MainContentPane extends Component {

    private _posts: LinkedList<Submission>;

    constructor(posts: Listing<Submission>) {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = mainContentPaneTemplate ({});

        super(returnElement.firstElementChild, style);

        /*posts.forEach(it => {
            let postHeaderComponent = new PostHeader(it);
            this.addChild(postHeaderComponent)
        })*/

        this._posts = new LinkedList();
        //posts.forEach(it => this._posts.add(it))

    }

    public addPost(post: Submission): void {
        this.addChild(new PostHeader(post));
        this._posts.add(post);
    }


    public updateSelf(): void {

        // Flush children
        this.children.clear();

        this.htmlElement.innerHTML = mainContentPaneTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;

        this._posts.forEach(it => {
            let postHeaderComponent = new PostHeader(it)
            this.addChild(postHeaderComponent)
        })

    }

    get post(): LinkedList<Submission> {
        return this._posts;
    }

    set post(value: LinkedList<Submission>) {
        this._posts = value;
    }

}