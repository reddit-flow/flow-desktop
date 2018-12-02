'use strict';

import {Listing, Submission, Subreddit} from "snoowrap";

import {FlowUI} from "./ui/FlowUI";

import * as WindowManager from './Window'

import {MainContainerPane} from "./ui/renderers/mainPane/mainContainerPane/MainContainerPane";
import {MainContentPane} from "./ui/renderers/mainPane/mainContentPane/MainContentPane";

import * as globalStylesheet from "./ui/MainStylesheet.css"
import {StylesheetManager} from "./ui/StylesheetManager";
import {RootContainer} from "./ui/renderers/RootContainer";

const snoowrap = require('snoowrap');

const fs = require('fs');

const path = require('path');

console.log(JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

const r = new snoowrap (JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

function main() {

    StylesheetManager.mountGlobalStylesheetIfAbsent('main-stylesheet', globalStylesheet)

    r.getSubreddit('teenagers').fetch().then((it: Subreddit) => {
        FlowUI.addChild(new RootContainer(it))
        FlowUI.mountToElement(document.getElementById('main'))

        r.getSubreddit('teenagers').getNew().then((it: Listing<Submission>) => {
            it.forEach((it: Submission) => {
                (((FlowUI.children[0]).children.elementAtIndex(1)).children.elementAtIndex(1) as MainContentPane).addPost(it)
            })

            FlowUI.children[1].update(true)

            document.getElementById('main').innerHTML = ''
            FlowUI.mountToElement(document.getElementById('main'))
        })

    })

    WindowManager.load();

}

document.getElementById("load").onclick = main
