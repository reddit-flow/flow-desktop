'use strict';

import {Listing, Submission, Subreddit} from "snoowrap";

import {FlowUI} from "./ui/FlowUI";

import * as WindowManager from './Window'

import {MainContentPane} from "./ui/renderers/mainPane/mainContentPane/MainContentPane";
import {SidebarContentPane} from "./ui/renderers/sidebarPane/sidebarContentPane/SidebarContentPane";

import * as globalStylesheet from "./ui/MainStylesheet.css"
import {StylesheetManager} from "./ui/StylesheetManager";

import {RootContainer} from "./ui/renderers/RootContainer";

const snoowrap = require('snoowrap');

const fs = require('fs');

const path = require('path');

const r = new snoowrap (JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

function main() {

    StylesheetManager.mountGlobalStylesheetIfAbsent('main-stylesheet', globalStylesheet)

    r.getSubreddit('teenagers').fetch().then((it: Subreddit) => {
        FlowUI.addChild(new RootContainer(it))
        FlowUI.mountToElement(document.getElementById('main'))

        r.getSubreddit('teenagers').getNew().then((it: Listing<Submission>) => {
            it.forEach((it: Submission) => {
                (((FlowUI.children[0]).child(1)).child(1) as MainContentPane).addPost(it)
            })

            FlowUI.children[1].update(true)

            document.getElementById('main').innerHTML = ''
            FlowUI.mountToElement(document.getElementById('main'))
        })

    })

    r.getSubscriptions().fetchAll().then((it: Listing<Subreddit>) => {
        it.forEach((it: Subreddit) => {
            (((FlowUI.children[0]).child(0)).child(1) as SidebarContentPane).addSubreddit(it)
        })
    })

    WindowManager.load();

}

document.getElementById("load").onclick = main
