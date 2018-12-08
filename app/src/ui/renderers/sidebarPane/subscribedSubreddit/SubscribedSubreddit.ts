import {Subreddit} from 'snoowrap';

import {Component} from "../../../Component";

import * as style from './SubscribedSubredditStylesheet.css'

import * as postHeaderTemplate from './SubscribedSubredditTemplate.dot';

export class SubscribedSubreddit extends Component {

    private _subreddit: Subreddit;

    constructor(subreddit: Subreddit) {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = postHeaderTemplate (
            {
                'sbi_path':    subreddit.banner_img,
                'sub_name':    subreddit.display_name,
                'subs_text':   subreddit.subscribers + " subs",
                'online_text': subreddit.accounts_active + " online",
                'sub_desc':    subreddit.public_description
            }
        );-

        super(returnElement.firstElementChild, style)

        this._subreddit = subreddit;

    }

    public updateSelf(): Element {
        return postHeaderTemplate (
            {
                'sbi_path':    this._subreddit.banner_img,
                'sub_name':    this._subreddit.display_name,
                'subs_text':   this._subreddit.subscribers + " subs",
                'online_text': this._subreddit.accounts_active + " online",
                'sub_desc':    this._subreddit.public_description
            }
        );
    }

    get subreddit(): Subreddit {
        return this._subreddit;
    }

    set subreddit(value: Subreddit) {
        this._subreddit = value;
    }

}