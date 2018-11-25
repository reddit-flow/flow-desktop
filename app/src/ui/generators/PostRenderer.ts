import {Submission} from 'snoowrap';

export class PostRenderer {

    static renderPost(post: Submission): HTMLDivElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'post-header';

        let headerContent = <HTMLDivElement>(document.createElement('div'))
        headerContent.className = 'post-header-content';

        returnElement.appendChild(this.renderVotes(post.score, true, false));
        returnElement.appendChild(this.renderFirstLine(post))
        returnElement.appendChild(this.renderSecondLine(post))

        return returnElement;

    }

    private static renderFirstLine(post: Submission): HTMLElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'post-header-line3';

        let clockImage = <HTMLImageElement>(document.createElement('img'));
        clockImage.className = 'clock-icon';

        let timeSpan = <HTMLSpanElement>(document.createElement('span'));
        timeSpan.className = 'post-time'
        timeSpan.innerText = post.selftext

        return returnElement

    }

    private static renderSecondLine(post: Submission): HTMLElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'post-header-line2';

        return returnElement

    }

    private static renderButtons(post: Submission) {

    }

    private static renderVotes(score: number, hasUpvoted: boolean, hasDownvoted: boolean): HTMLDivElement {

        let returnElement = <HTMLDivElement>(document.createElement('div'));
        returnElement.className = 'votes';

        // Generate upvote element

        let upvoteImage = <HTMLImageElement>(document.createElement('img'));
        upvoteImage.className = 'upvote-button'
        upvoteImage.src = 'image/svg/upvote.svg';
        upvoteImage.width = 35;

        // Generate text div

        let voteCounterDiv = <HTMLDivElement>(document.createElement('div'));
        voteCounterDiv.className = 'vote-counter';
        voteCounterDiv.innerText = score.toString();

        // Generate downvote element

        let downvoteImage = <HTMLImageElement>(document.createElement('img'));
        downvoteImage.className = 'downvote-button'
        downvoteImage.src = 'image/svg/downvote.svg';
        downvoteImage.width = 35;

        // Append children

        returnElement.appendChild(upvoteImage);
        returnElement.appendChild(voteCounterDiv);
        returnElement.appendChild(downvoteImage);

        return returnElement;

    }

    private static renderTitle(title: string) {

        let returnElement = <HTMLSpanElement>(document.createElement('span'));
        returnElement.className = 'post-title';

        returnElement.innerText = title;

        return returnElement;
    }

}