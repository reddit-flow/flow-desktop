import {Submission} from 'snoowrap';

import {Component} from "../../../Component";

import * as style from './PostHeaderStylesheet.css'

import * as postHeaderTemplate from './PostHeaderTemplate.dot';

import * as upvoteImagePath    from './img/upvote.svg';
import * as downvoteImagePath  from './img/downvote.svg';
import * as clockImagePath     from './img/clock.svg';

import * as Utils from '../../../../Utils';
export class PostHeader extends Component {

    private _post: Submission;

    constructor(post: Submission) {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = postHeaderTemplate (
            {
                'uvi_path':   upvoteImagePath,
                'dvi_path':   downvoteImagePath,
                'cli_path':   clockImagePath,
                'post_score': post.score,
                'post_time':  Utils.timeSince(post.created_utc),
                'post_user':  'u/' + post.author.name,
                'post_title': post.title
            }
        );

        super(returnElement.firstElementChild, style)

        this._post = post;

    }

    public updateSelf(): Element {
        return postHeaderTemplate (
            {
                'uvi_path':   upvoteImagePath,
                'dvi_path':   downvoteImagePath,
                'cli_path':   clockImagePath,
                'post_score': this._post.score,
                'post_time':  this._post.created_utc,
                'post_user':  this._post.author.name,
                'post_title': this._post.title
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