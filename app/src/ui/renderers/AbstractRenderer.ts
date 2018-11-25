import {RedditContent} from "snoowrap";

export class AbstractRenderer<C extends RedditContent<C>, E extends HTMLElement> {

    returnElement: E;

    protected applyStylesheet(relativePathToCss: string) {
        let styles = require('./postHeader/PostHeaderStylesheet.css').toString();
        console.log(styles);
    }

}