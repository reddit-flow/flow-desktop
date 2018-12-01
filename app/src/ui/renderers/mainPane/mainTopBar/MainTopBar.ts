import {Subreddit} from "snoowrap";

import {Component} from "../../../Component";

import * as mainTopBarTemplate from "./MainTopBarTemplate.dot";

import * as style from "./MainTopBarStylesheet.css";

export class MainTopBar extends Component {

    private _subreddit: Subreddit;

    constructor(subreddit: Subreddit) {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = mainTopBarTemplate ({
            'sbi_path': subreddit.icon_img,
            'subreddit_text': subreddit.display_name_prefixed,
            'sorted_by_label': 'sorted by : ',
            'sorted_by_value': 'new'
        });

        super(returnElement.firstElementChild, style);

        this._subreddit = subreddit;

    }

    public updateSelf(): void {
        this.htmlElement.innerHTML = mainTopBarTemplate ({
            'sbi_path': this._subreddit.icon_img,
            'subreddit_text': this._subreddit.display_name_prefixed,
            'sorted_by_label': 'sorted by : ',
            'sorted_by_value': 'new'
        });
        this.htmlElement = this.htmlElement.firstElementChild;
    }

    get subreddit(): Subreddit {
        return this._subreddit;
    }

    set subreddit(value: Subreddit) {
        this._subreddit = value;
    }

}