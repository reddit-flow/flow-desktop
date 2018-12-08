import {Submission} from "snoowrap";

import {Component} from "../../../../Component";

import * as style from './Stylesheet.css'

import * as template from './Template.dot';

import * as upvoteImagePath   from './img/upvote.svg';
import * as downvoteImagePath from './img/downvote.svg';

export class Votes extends Component {

    private _post: Submission;

    private _locallyUpvoted: boolean;

    constructor(post: Submission) {

        let returnElement = document.createElement('div') as HTMLElement;

        returnElement.innerHTML = template (
            {
                'uvi_svg':    upvoteImagePath,
                'dvi_svg':    downvoteImagePath,
                'post_score': post.score,
            }
        );

        returnElement = returnElement.firstElementChild as HTMLElement;

        super(returnElement, style);

        this._post = post;

        // Bind vote events

        let upvote_button = (this.getUniqueDOMChildElem('upvote-button') as HTMLElement)
        let downvote_button = (this.getUniqueDOMChildElem('downvote-button') as HTMLElement)

        upvote_button.onclick = this.upvoteSelf.bind(this);
        downvote_button.onclick = this.downvoteSelf.bind(this);

        // Update vote status

        this.locallyUpvoted = this.post.likes;

        // DO NOT remove the '== true/false', because negating the condition also counts the absence of a vote as a 'false'
        if      (this.post.likes == true)  {this.htmlElement.classList.add('upvoted')}
        else if (this.post.likes == false) {this.htmlElement.classList.add('downvoted')}

    }

    protected updateSelf(): void {

    }

    public upvoteSelf(): any {
        let votes = this.htmlElement;

        this.swapVoteClasses(true);

        if (this.locallyUpvoted == true) {
            this.post.unvote();
            this.locallyUpvoted = null;
            this.decrementDOMScore();
        } else {
            if (this.locallyUpvoted == false) this.incrementDOMScore() // If already downvoted
            this.post.upvote();
            this.locallyUpvoted = true;
            this.incrementDOMScore();
        }
    }

    public downvoteSelf(): any {
        let votes = this.htmlElement;

        this.swapVoteClasses(false);

        if (this.locallyUpvoted == false) {
            this.post.unvote();
            this.locallyUpvoted = null;
            this.incrementDOMScore();
        } else {
            if (this.locallyUpvoted == true) this.decrementDOMScore() // If already upvoted
            this.post.downvote();
            this.locallyUpvoted = false;
            this.decrementDOMScore();
        }
    }

    private swapVoteClasses(up: boolean) {
        let votes = this.htmlElement;

        if (up) {
            if (votes.classList.contains('downvoted')) votes.classList.remove('downvoted');

            if (votes.classList.contains('upvoted')) votes.classList.remove('upvoted');
            else votes.classList.add('upvoted');
        } else {
            if (votes.classList.contains('upvoted')) votes.classList.remove('upvoted');

            if (votes.classList.contains('downvoted')) votes.classList.remove('downvoted');
            else votes.classList.add('downvoted');
        }
    }

    private incrementDOMScore() {
        let voteCounter = this.getUniqueDOMChildElem('vote-counter');
        voteCounter.innerText = (parseInt(voteCounter.innerText) + 1).toString();
    }

    private decrementDOMScore() {
        let voteCounter = this.getUniqueDOMChildElem('vote-counter');
        voteCounter.innerText = (parseInt(voteCounter.innerText) - 1).toString();
    }

    get post(): Submission {
        return this._post;
    }

    set post(value: Submission) {
        this._post = value;
    }

    get locallyUpvoted(): boolean {
        return this._locallyUpvoted;
    }

    set locallyUpvoted(value: boolean) {
        this._locallyUpvoted = value;
    }

}