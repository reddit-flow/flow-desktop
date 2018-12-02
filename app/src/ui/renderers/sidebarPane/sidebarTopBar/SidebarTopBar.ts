import {Component} from "../../../Component";

import * as style from "./SidebarTopBarStylesheet.css";

import * as sidebarTopBarTemplate from "./SidebarTopBarTemplate.dot";

import * as subredditImagePath    from './img/subreddit-off.svg';
import * as pmImagePath  from './img/pm-off.svg';
import * as notifImagePath     from './img/notif-off.svg';

export class SidebarTopBar extends Component {

    constructor() {

        let returnElement = document.createElement('div');

        returnElement.innerHTML = sidebarTopBarTemplate ({
            'sbi_path': subredditImagePath,
            'pmi_path': pmImagePath,
            'nbi_path': notifImagePath
        });

        super(returnElement.firstElementChild, style);

    }

    public updateSelf(): void {
        this.htmlElement.innerHTML = sidebarTopBarTemplate ({});
        this.htmlElement = this.htmlElement.firstElementChild;
    }

}