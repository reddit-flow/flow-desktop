import {RedditContent} from "snoowrap";

export abstract class AbstractRenderer<C extends RedditContent<C>, E extends HTMLElement> {

    returnElement: E;

    abstract renderElement(data: RedditContent<C>): E;

    protected applyStylesheet(relativePathToCss: string) {
        let styles = require('./PostStylesheet.css').toString();
        console.log(styles);
    }

}