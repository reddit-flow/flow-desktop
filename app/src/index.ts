'use strict';

import {Listing, Submission, Subreddit} from "snoowrap";

import {FlowUI} from "./ui/FlowUI";
import {MainContainerPane} from "./ui/renderers/mainPane/mainContainerPane/MainContainerPane";
import {Component} from "./ui/Component";

import * as Collections from 'typescript-collections';
import {PostHeader} from "./ui/renderers/mainPane/postHeader/PostHeader";
import {MainContentPane} from "./ui/renderers/mainPane/mainContentPane/MainContentPane";

const snoowrap = require('snoowrap');

const fs = require('fs');

const path = require('path');

console.log(JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

const r = new snoowrap (JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

function main() {

    r.getSubreddit('teenagers').fetch().then((it: Subreddit) => {
        FlowUI.addChild(new MainContainerPane(it))
        FlowUI.mountToElement(document.getElementById('main'))

        r.getSubreddit('teenagers').getNew().then((it: Listing<Submission>) => {
            it.forEach((it: Submission) => {
                ((FlowUI.children[0]).children.elementAtIndex(1) as MainContentPane).addPost(it)
            })

            FlowUI.children[0].update(true)

            document.getElementById('main').innerHTML = ''
            FlowUI.mountToElement(document.getElementById('main'))
        })

    })


}

document.getElementById("load").onclick = main
