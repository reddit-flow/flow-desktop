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

    }

}