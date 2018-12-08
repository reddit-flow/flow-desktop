import {Component} from "../../../../Component";

import * as postFlairTemplate from "./UserFlairTemplate.dot";

import * as style from "./UserFlairStylesheet.css";

export class UserFlair extends Component {

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