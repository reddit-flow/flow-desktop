import {Component} from "../../../../Component";

import * as postFlairTemplate from "./PostFlairTemplate.dot";

import * as style from "./PostFlairStylesheet.css";

export class PostFlair extends Component {

    private _flairText: string;

    constructor(flairText: string) {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = postFlairTemplate (
            {
                'flair_text': flairText
            }
        );

        super(returnElement.firstElementChild, style)

        this._flairText = flairText;

    }

    protected updateSelf(): void {

    }

}