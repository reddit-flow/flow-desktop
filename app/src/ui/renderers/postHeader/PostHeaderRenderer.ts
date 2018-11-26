import {Submission} from 'snoowrap';

import {AbstractRenderer} from "../AbstractRenderer";

import * as postHeaderTemplate from './PostHeaderTemplate.dot';

import * as upvoteImagePath    from './img/upvote.svg';
import * as downvoteImagePath  from './img/downvote.svg';
import * as clockImagePath     from './img/clock.svg';

export class PostHeaderRenderer extends AbstractRenderer<Submission, HTMLDivElement> {

    public renderElement(post: Submission): Element {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = postHeaderTemplate (
            {
                'uvi_path':   upvoteImagePath,
                'dvi_path':   downvoteImagePath,
                'cli_path':   clockImagePath,
                'post_score': post.score,
                'post_time':  post.created_utc,
                'post_user':  post.author.name,
                'post_title': post.title
            }
        );

        return returnElement.firstElementChild

        /*this.returnElement = <HTMLDivElement>(document.createElement('div'));
        this.returnElement.className = 'post-header';

        let headerContent = <HTMLDivElement>(document.createElement('div'))
        headerContent.className = 'post-header-content';

        this.returnElement.appendChild(this.renderVotes(post.score, true, false));

        headerContent.appendChild(this.renderFirstLine(post))
        headerContent.appendChild(this.renderSecondLine(post))

        this.returnElement.appendChild(headerContent)

        this.applyStylesheet('./PostStylesheet.css')

        return this.returnElement;*/

        return <HTMLDivElement>(document.createElement('div'))

    }

    private renderFirstLine(post: Submission): HTMLElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'post-header-line1';

        let clockImage = <HTMLImageElement>(document.createElement('img'));
        clockImage.className = 'clock-icon';

        let timeSpan = <HTMLSpanElement>(document.createElement('span'));
        timeSpan.className = 'post-time';
        timeSpan.innerText = post.created_utc.toString();

        returnElement.appendChild(clockImage);
        returnElement.appendChild(timeSpan);

        return returnElement

    }

    private renderSecondLine(post: Submission): HTMLElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'post-header-line2';

        returnElement.appendChild(this.renderTitle(post.title))

        return returnElement

    }

    private renderButtons(post: Submission) {

    }

    private renderVotes(score: number, hasUpvoted: boolean, hasDownvoted: boolean): HTMLDivElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'votes';

        // Generate upvote element

        let upvoteImage = <HTMLImageElement>(document.createElement('img'));
        upvoteImage.className = 'upvote-button'
        upvoteImage.src = upvoteImagePath;
        upvoteImage.width = 35;

        // Generate text div

        let voteCounterDiv = <HTMLDivElement>(document.createElement('div'));
        voteCounterDiv.className = 'vote-counter';
        voteCounterDiv.innerText = score.toString();

        // Generate downvote element

        let downvoteImage = <HTMLImageElement>(document.createElement('img'));
        downvoteImage.className = 'downvote-button'
        downvoteImage.src = downvoteImagePath;
        downvoteImage.width = 35;

        // Append children

        returnElement.appendChild(upvoteImage);
        returnElement.appendChild(voteCounterDiv);
        returnElement.appendChild(downvoteImage);

        return returnElement;

    }

    private renderTitle(title: string) {

        let returnElement = <HTMLSpanElement>(document.createElement('span'));
        returnElement.className = 'post-title';

        returnElement.innerText = title;

        return returnElement;
    }

}