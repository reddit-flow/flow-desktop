'use strict';

import {PostHeaderRenderer} from "./ui/renderers/postHeader/PostHeaderRenderer";

import {Submission} from "snoowrap";

const snoowrap = require('snoowrap');

const fs = require('fs');

const path = require('path');

console.log(JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

const r = new snoowrap (JSON.parse(fs.readFileSync(path.join(process.cwd(), "credentials.json"))));

function main() {

    let renderer = new PostHeaderRenderer();

    r.getSubreddit("teenagers").getNew()
    .then ((posts: Submission[]) => {

        posts.forEach ((post: Submission) => {
            document.getElementById("main").appendChild(renderer.renderElement(post))
        })

    });
}

document.getElementById("load").onclick = main
