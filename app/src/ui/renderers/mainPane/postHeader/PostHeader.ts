import {Submission} from 'snoowrap';

import {Component} from "../../../Component";

import {PostFlair} from "./postFlair/PostFlair";
import {UserFlair} from "./userFlair/UserFlair";

import * as style from './PostHeaderStylesheet.css'

import * as postHeaderTemplate from './PostHeaderTemplate.dot';

import * as clockImagePath    from './img/clock.svg';

import * as Utils from '../../../../Utils';
import {Votes} from "./votes/Votes";

export class PostHeader extends Component {

    private _post: Submission;

    constructor(post: Submission) {

        let returnElement = document.createElement('div') as HTMLElement;

        returnElement.innerHTML = postHeaderTemplate (
            {
                'post_id':         post.id,
                'cli_svg':        clockImagePath,
                'post_time':       Utils.timeSince(post.created_utc),
                'post_user':       'u/' + post.author.name,
                'user_flair_html': (post.author_flair_text == null ? '' : new UserFlair(post.author_flair_text).htmlElement.outerHTML),
                'post_title':      post.title,
                'post_flair_html': (post.link_flair_text == null ? '' : new PostFlair(post.link_flair_text).htmlElement.outerHTML)
            }
        );

        returnElement = returnElement.firstElementChild as HTMLElement;

        super(returnElement, style);

        this.htmlElement.replaceChild(new Votes(post).htmlElement, this.getUniqueDOMChildElem('votes'));

        this._post = post;

    }

    public updateSelf(): Element {
        return postHeaderTemplate (
            {
                'post_id':         this.post.id,
                'votes_html':      new Votes(this.post),
                'cli_path':        clockImagePath,
                'post_time':       Utils.timeSince(this.post.created_utc),
                'post_user':       'u/' + this.post.author.name,
                'user_flair_html': (this.post.author_flair_text == null ? '' : new UserFlair(this.post.author_flair_text).htmlElement.outerHTML),
                'post_title':      this.post.title,
                'post_flair_html': (this.post.link_flair_text == null ? '' : new PostFlair(this.post.link_flair_text).htmlElement.outerHTML)
            }
        );
    }

    get post(): Submission {
        return this._post;
    }

    set post(value: Submission) {
        this._post = value;
    }

}