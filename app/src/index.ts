'use strict';

import {PostHeaderRenderer} from "./ui/renderers/postHeader/PostHeaderRenderer";

import {Submission} from "snoowrap";

const snoowrap = require('snoowrap');

const fs = require('fs');

const path = require('path');

console.log("test");
console.log(path.dirname(process.execPath));
console.log(path.join(path.dirname(process.execPath), "credentials.json"));
console.log(fs.readFileSync(path.join(path.dirname(process.execPath), "credentials.json")));
console.log(JSON.parse(fs.readFileSync(path.join(path.dirname(process.execPath), "credentials.json"))));

const r = new snoowrap (JSON.parse(fs.readFileSync(path.join(path.dirname(process.execPath), "credentials.json"))));

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
