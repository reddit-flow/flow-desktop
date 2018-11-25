'use strict';

import {PostRenderer} from "./ui/generators/PostRenderer";
import {Submission} from "snoowrap";

const snoowrap = require('snoowrap');

const r = new snoowrap ({
    userAgent: 'flow-reddit-desktop-0.0.1',
    clientId: 'CLIENT_ID_HERE',
    clientSecret: 'CLIENT_SECRET_HERE',
    username: 'REDDIT_USER_HERE',
    password: 'REDDIT_PASS_HERE'
})

function main() {

    r.getSubreddit("teenagers").getNew()
    .then ((posts: Submission[]) => {

        posts.forEach ((post: Submission) => {
            document.getElementById("main").appendChild(PostRenderer.renderPost(post))
        })

    });
}

document.getElementById("load").onclick = main