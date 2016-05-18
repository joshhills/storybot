/* Code generated at http://www.messengerbot.ml/ */

/* Configuration and set-up. */

// Enforce stricter Javascript typing.
/*'use strict'*/

// Necessary inclusions.
const http = require('http');
const Bot = require('messenger-bot');
const MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

/* Stories. */

require('./space-story.js');

/* Useful global variables. */

const STORY_DELIM = "_";
const STORY_CONTINUE = "What next?";
const SPACE_STORY_PREFIX = "space";
const DB_URL = 'mongodb://localhost:27017/storybot';

// Instantiate the bot with security information.
let bot = new Bot({
	token: '<TOKEN>',
	verify: '<SECRET>'
});

/*
 * Register listening for message.
 * This is the main branching-point
 * for the webhook.
 */
bot.on('message', (payload, reply) => {
    
	/* Retrieve user profile information. */
    
	bot.getProfile(payload.sender.id, (err, profile) => {

        // If an error was encountered, break.
        if (err) { console.log(JSON.stringify(err)); throw err; }
        
        
        
        // Catch failure to fire.
        var notCaught = true;

        // Otherwise, set values returned from siphoning.
        var first_name = profile.first_name;
        var last_name = profile.last_name;

        // Store user message.
        var text = payload.message.text;

        // Construct response to user.
        var response = {};
        
        /* Response elements. */
        
        var elements = [];
        var buttons;

        /* Else-if tree structure checks for each trigger. */

        if(textContains(text, (["hey","hello","hi","yo"]), false)) {

            /* Build the greater template and send it. */
            
            buttons = [];
            
            buttons.push(buildButton("postback", "About", "about"));
            buttons.push(buildButton("postback", "See Games", "view_stories"));
            
            elements.push(buildElement(
                    "Hey, I'm StoryBot!",
                    "I tell you stories, unsurprisingly.",
                    "",
                    "http://jumbledjargon.website/messengerbot/bot-content/storybot/story-welcome.png",
                    buttons
                ));
            
            reply(buildStructuredTemplate(elements), (err, info) => {});
            
            // Log that at least one event has triggered.
            notCaught = false;
        
        }
        
        if(textContains(text, (["start", "story", "stories", "play", "begin"]), false)) {
            
            listStories(reply);
            
            // Log that at least one event has triggered.
            notCaught = false;

        }
        
        if(textContains(text, (["reset","retry","quit","stop"]), false)) {

            /* Build the greater template and send it. */
            
            elements.push(buildElement(
                    "Okay, we're forgetting everything so far!",
                    "Time to play again...",
                    "",
                    "http://jumbledjargon.website/messengerbot/bot-content/storybot/story-bot-reset.png",
                    buttons
                ));

            reply(buildStructuredTemplate(elements), (err, info) => {
                
                // If an error was encountered, break.
                if (err) throw err;
                
                // Connect to the database.
                MongoClient.connect(DB_URL, function (err, db) {

                    // Check for errors.
                    if (err) {

                        // Display them and break.
                        return;

                    }

                    // Retrieve the user profile.
                    db.collection('profiles').findOne({"fb_id": payload.sender.id}, function(err, profile) {

                        if(err) {

                            console.log('Unable to retreive profile. Error: ' + err);

                        }
                        else {

                            // Set the current node to zero.
                            profile = resetStory(SPACE_STORY_PREFIX, profile);

                            /* Save the updated user profile. */

                            db.collection('profiles').update(
                                {"fb_id": payload.sender.id},
                                profile,
                                {
                                    upsert: true
                                }
                            );
                            
                        }

                        // Safe to close the connection now.
                        db.close();

                    });

                });

            });

            // Log that at least one event has triggered.
            notCaught = false;

        }
        
        if(textContains(text, (["help", "what", "hello", "commands"]), false)) {
         
            reply(buildPlainTextTemplate("You can interact with me in a bunch of ways. You can ask me what I'm all 'about' or take a look at my 'stories'. If you're in the middle of a story, you can take a look at your 'items', or if you need to take a break or prefer something different, 'quit'!"), (err, info) => {
            });
                     
            // Log that at least one event has triggered.
            notCaught = false;     
            
        }
        
        if(textContains(text, (["items", "inventory", "bag", "commands"]), false)) {
            
            // Connect to the database.
            MongoClient.connect(DB_URL, function (err, db) {

                // Check for errors.
                if (err) {

                    // Display them and break.
                    console.log('Unable to connect to the mongoDB server. Error: ' + err);
                    return;

                }
                else console.log("\n\nConnected to Database!\n\n");

                // Retrieve the user profile.
                db.collection('profiles').findOne({"fb_id": payload.sender.id}, function(err, profile) {

                    if(err) {

                        console.log('Unable to retreive profile. Error: ' + err);

                    }
                    else {
                        
                        if(profile.item == null || profile.item.length == 0) {
                            
                            // Get empty item.
                            var itemnode = getStory(SPACE_STORY_PREFIX).items["none"];
                            
                            elements.push(buildElement(
                                itemnode.name,
                                itemnode.description,
                                "",
                                itemnode.img,
                                ""
                            ));
                            
                            reply(buildStructuredTemplate(elements), (err, info) => {
                            });
                            
                        }
                        else {
                            
                            for(let item of profile.item) {
                            
                                // Find the correct story's items.
                                if(item.indexOf(SPACE_STORY_PREFIX + STORY_DELIM) != -1) {
                                        
                                    var itemnode = getStory(SPACE_STORY_PREFIX).items[item.replace(SPACE_STORY_PREFIX + STORY_DELIM, "")];
                                    
                                    elements.push(buildElement(
                                        itemnode.name,
                                        itemnode.description,
                                        "",
                                        itemnode.img,
                                        ""
                                    ));
                                    
                                }

                            }
                            
                            reply(buildStructuredTemplate(elements), (err, info) => {
                            });

                        }
                        
                    }
                    
                });
                
            });
                     
            // Log that at least one event has triggered.
            notCaught = false;     
            
        }
        
        // Otherwise, didn't recognise, fallback...
        if(notCaught) { 
        
            reply(buildPlainTextTemplate("Pausing for a moment to break your immersion, you type incomprehensible gibberish into your chat window..."), (err, info) => {
                
                reply(buildPlainTextTemplate("Just kidding! Type 'help' or something similar if you want to see what I can do."), (err, info) => {
                });
                
            });
        }

	});

});

/*
 * Register listening for postbacks.
 */
bot.on('postback', (payload, reply) => {

	/* Retrieve user profile information. */

	bot.getProfile(payload.sender.id, (err, profile) => {

		// If an error was encountered, break.
		if (err) throw err;

		// Otherwise, set values returned from siphoning.
		var first_name = profile.first_name;
		var last_name = profile.last_name;

        // Store user payload.
        var postback = payload.postback.payload;
        
        /* Response elements. */
        
        var elements = [];
        
        /* Else-if tree structure checks for each trigger. */
        
        if(postback == "view_stories") {
            
            listStories(reply);
            
            return;
            
        }
        
        if(postback == "about") {
            
            reply(buildPlainTextTemplate("My generator was created as part of a programming challenge, but in the following weeks I grew and grew, and now I'm ready to tell stories to the world!"),
                  (err, info) => {});
            
            return;
            
        }
        
        /* Otherwise, story advance. */
        
        if(postback.split(STORY_DELIM)[1] == "1") {
            
            elements.push(buildElement(
                    "Oh, I love telling this one!",
                    "Ahem...",
                    "",
                    "http://jumbledjargon.website/messengerbot/bot-content/storybot/story-bot-start.png",
                    ""
                ));
            
            reply(buildStructuredTemplate(elements), (err, info) => {
                
                        
                // Parse correct story.
                advanceStory(postback.split(STORY_DELIM)[0],
                             postback.split(STORY_DELIM)[1],
                             payload.sender.id);
                
            });
            
        }
        else {
                    
            // Parse correct story.
            advanceStory(postback.split(STORY_DELIM)[0],
                         postback.split(STORY_DELIM)[1],
                         payload.sender.id);
            
        }

	});

});

function listStories(reply) {
    
    var elements = [];
    
    elements.push(buildElement(
                    "Here's all my stories!",
                    "At least, the ones I can remember; what kind of game are you looking to play?",
                    "",
                    "http://jumbledjargon.website/messengerbot/bot-content/storybot/story-bot-remember.png",
                    ""
                ));
            
    reply(buildStructuredTemplate(elements), (err, info) => {

        elements = [];
        buttons = [];

        buttons.push(buildButton("postback", "Play", "space_1"));

        elements.push(buildElement(
            "Space Escape - by Josh Hills",
            "An unexpected end to your usual nightly clean-up duty leads to a daring escape.",
            "",
            "http://jumbledjargon.website/messengerbot/bot-content/storybot/space-escape/space-escape-title.png",
            buttons
        ));

        buttons = [];

        elements.push(buildElement(
            "Coming Soon",
            "There'll be more stories on the way!",
            "",
            "http://jumbledjargon.website/messengerbot/bot-content/storybot/coming-soon.png",
            ""
        ));

        buttons.push(buildButton("url", "Check it out", "http://messengerbot.jumbledjargon.website/"))

        elements.push(buildElement(
            "Find out more",
            "My owner created me using a chatbot-builder. Find out how to make more of us!",
            "http://messengerbot.jumbledjargon.website/",
            "http://www.jumbledjargon.website/messengerbot/img/share-img.jpg",
            buttons
        ));

        /* Build the greater template and send it. */

        reply(buildStructuredTemplate(elements), (err, info) => {
            // If an error was encountered, break.
            if (err) throw err;
        });

    });
    
}

/* Story modification methods. */

/*
 * Return the correct node-set
 * for the user's selected story.
 *
 * @param prefix    The story the user has chosen.
 */
function getStory(prefix) {
    
    // Switch statement returns the correct story set.
    switch(prefix) {
        case SPACE_STORY_PREFIX :
            return space_story;
        default :
            return null;
    }
    
}

/*
 * Main node engine handles user
 * progression through a specific
 * story.
 *
 * Overarching structure directs game
 * progression by parsing decisions,
 * modifying persistent state and
 * building API-specific responses.
 *
 * @param storyID   The story prefix.
 * @param nodeID    The node to load.
 * @param userID    The ID of the user
 *                  in the database.
 * @param reply     Messengerbot object
 *                  with preset fields
 *                  to send a reply.
 */
function advanceStory(storyID, nodeID, userID) {
    
    /*
     * Ensure all operations happen during connection
     * to ensure asynchronous callbacks trigger in a
     * logical order.
     */

    // Connect to the database.
    MongoClient.connect(DB_URL, function (err, db) {
        
        // Check for errors.
        if (err) {
            
            // Display them and break.
            console.log('Unable to connect to the mongoDB server. Error: ' + err);
            return;
            
        }
       
        // Retrieve the user profile.
        db.collection('profiles').findOne({"fb_id": userID}, function(err, userProfile) {
            
            if(err) {
                
                console.log('Unable to retreive profile. Error: ' + err);
                
            }
            
            // If the user profile was not found...
            if(userProfile == null || userProfile == undefined) {

                // Create a new one.
                userProfile = {
                    fb_id: userID,
                    item : [],
                    flag : [],
                    visited : [],
                    current_nodes : {}
                }
                
                // Set the current node to zero.
                userProfile = resetStory(storyID, userProfile);

            }

            /* Break on illegal node traversal. */

            // Edge case for initial node.
            if(userProfile.current_nodes[storyID] == 0) {
                if(nodeID != 1) {
                    return;
                }
            }
            // Otherwise check as normal.
            else if(!nodeLegal(storyID, userProfile.current_nodes[storyID], nodeID, userProfile)) {
                return;
            }

            /* Update current node. */
            userProfile.current_nodes[storyID] = nodeID;

            /* Check if the user has visited the node before. */
            
            // It's going to be used again - fittingly.
            var dejavu = true;

            if(userProfile.visited.indexOf(storyID + STORY_DELIM + nodeID) == -1) {
                
                // Set the lock.
                dejavu = false;
                
            }
            
            // If they haven't...
            if(!dejavu) {

                /* Conduct any actions of the new node. */

                userProfile = performNodeActions(storyID,
                                                 getStory(storyID)[nodeID].actions,
                                                 userProfile);

                /* Log that they have now visited the node. */

                userProfile.visited.push(storyID + STORY_DELIM + nodeID);
                
            }

            /* Save the updated user profile. */
            
            db.collection('profiles').update(
                {"fb_id": userID},
                userProfile,
                {
                    upsert: true
                }
            );
            
            // Safe to close the connection now.
            db.close();
                        
            /* Send more story! */
                
            deliverContent(getStory(storyID)[nodeID].content, 
                           0,
                           storyID,
                           nodeID,
                           userProfile,
                           dejavu);
            
        });
    
    });
    
}

/*
 * Check if the node from the payload is
 * actually a valid, traversible node in
 * the context of the user's current
 * progress in the story (to prevent
 * duplication or cheating).
 *
 * @param storyID           The story to prefix object access with.
 * @param currentNode       The node the user is currently at.
 * @param destinationNode   The node the user wants to progress to.
 * @param profile           The user interacting with the story.
 */
function nodeLegal(storyID, currentNode, destinationNode, profile) {
    
    // See if the next node is simply a continuation.
    if(getStory(storyID)[currentNode].continue != undefined) {
        if(getStory(storyID)[currentNode].continue == destinationNode) {
            return true;
        }
    }
    
    // See if the current node has any options.
    if(getStory(storyID)[currentNode].options != null) {
     
        // Return true if destination node is among them.
        for(let option of getStory(storyID)[currentNode].options) {
        
            for(let potentialDestination of option.advance) {
                
                if(potentialDestination.node == destinationNode &&
                  (option.remove == undefined || (option.remove == true && profile.visited.indexOf(storyID + STORY_DELIM + destinationNode) == -1))) {
                    
                    return true;
                
                }
                
            }
            
        }
        
    }
    
    // Otherwise the postback represents an invalid route.
    return false;
    
}

/*
 * Perform actions contained within the node.
 *
 * @param storyID   The story to prefix object changes with.
 * @param actions   A set of actions to perform.
 * @param profile   The user for whom state will be modified.
 */
function performNodeActions(storyID, actions, profile) {
    
    // Check for redundancy to prevent unnecessary connections.
    if(actions == undefined) {
        return profile;
    }
            
    // For every action (order unimportant)...
    for(let action of actions) {

        // Add to set...
        if(action.type == "add") {
            
            profile[action.what].push(storyID + STORY_DELIM + action.which);

        }
        // Remove from set...
        else if(action.type == "remove") {

            var i = profile[action.what].indexOf(storyID + STORY_DELIM + action.which);
            if(i != -1) {
                profile[action.what].splice(i, 1)
            }

        }

    }
    
    // Return the profile post changes.
    return profile;
    
}

/*
 * Recursive function nests asynchronous
 * calls to ensure they fire in the right
 * order.
 */
function deliverContent(content, index, storyID, nodeID, profile, dejavu) {
    
    // Base case.
    if(index == content.length || dejavu) {
        
        // Construct and deliver the options.
        var options = deliverOptions(getStory(storyID)[nodeID].options,
                                    storyID,
                                    profile);

        // If there were no options, node must continue to next...
        if(options == 0 && getStory(storyID)[nodeID].continue != null) {

            advanceStory(storyID, getStory(storyID)[nodeID].continue, profile.fb_id);

        }
        
    }    
    // If the content passes its constraint check...
    else {
        
        if(passesContentConstraintCheck(
            content[index].constraints, 
            storyID,
            profile)) {

            // Send it.
            bot.sendMessage(profile.fb_id, parseContentNode(content[index]), (err, info) => {

                if(err) {
                    console.log("\n" + JSON.stringify(err) + "\n");
                }

                // Continue to next piece of content.
                deliverContent(content, index + 1, storyID, nodeID, profile, dejavu);

            });

        }
        // Otherwise continue to next one.
        else {

            deliverContent(content, index + 1, storyID, nodeID, profile, dejavu);

        }
    
    }
    
}

function deliverOptions(options, storyID, profile) {
    
    var buttons = [];
    
    if(options != undefined) {
    
        // For every option within the options set.
        for(let option of options) {

            /* Check if option should actually appear. */

            var passedAppearanceConstraint = true;

            // For every appearance constraint on the button...
            if(option.constraints != undefined) {
                
                for(let constraint of option.constraints) {

                    // Check if any fail.
                    if(!passesContentConstraintCheck(constraint, storyID, profile)) {
                        // If they do, log this.
                        passedAppearanceConstraint = false;
                    }

                }
                
            }

            // If the button is not going to appear anyway, break.
            if(!passedAppearanceConstraint) {
                break;
            }

            /* Find the option's correct destination. */

            var destNode = -1;

            // Find the first node that passes the constraint check.
            if(option.advance != undefined) {

                for(let branch of option.advance) {

                    var passedBranchAppearanceConstraint = true;

                    if(branch.constraints != undefined) {
                    
                        // For every appearance restraint on the branch. 
                        for(let constraint of branch.constraints) {

                            // Check if any fail.
                            if(!passesContentConstraintCheck(constraint, storyID, profile)) {
                                // If they do, log this.
                                passedBranchAppearanceConstraint = false;
                            }

                        }
                        
                    }

                    if(passedBranchAppearanceConstraint) {

                        destNode = branch.node;
                        break;

                    }

                }

            }

            // Only if the option is still feasible...
            if((option.remove == undefined || (option.remove == true && profile.visited.indexOf(storyID + STORY_DELIM + destNode) == -1)) && destNode != -1) {

                // Create a button from it.
                buttons.push(buildButton('postback', option.text, storyID + STORY_DELIM + destNode));

            }

        }
    
    }
    
    // At this point, have got all buttons necessary. If there are zero, return.
    if(buttons.length == 0) {
        return 0;
    }
    
    // Otherwise, buttons should be sent.
    bot.sendMessage(profile.fb_id, buildButtonTemplate(buttons), (err, info) => {});
    
    // Let engine know some buttons are being sent.
    return buttons.length;
    
}

/*
 * Check if content should be included. 
 *
 * @param constraint    A constraint to attest to.
 * @param storyID       The story to prefix object queries with.
 * @param profile       The profile that will be evaluated.
 */
function passesContentConstraintCheck(constraint, storyID, profile) {
    
    // Check for redundancy.
    if(constraint == null) {
        return true;
    }
    
    return (profile[constraint.type].indexOf(storyID + STORY_DELIM + constraint.name) != -1) == constraint.set;
    
}

/*
 * Provides a bridge between my node-
 * based story structure and the messenger
 * API format.
 *
 * Presently either plain text or picture
 * for node content, this may expand to
 * suit the capabilities of the API.
 *
 * @param content   The content to transform.
 */
function parseContentNode(content) {
    
    // If the content is plaintext...
    if(content.text != undefined) {
        return buildPlainTextTemplate(content.text);
    }
    
    // If the content is an image...
    if(content.img != undefined) {
        return buildImageTemplate(content.img);
    }
    
}

function resetStory(storyID, profile) {
            
    // Reset all elements pertaining to the selected story.

    if(profile != null) {
    
        /* Remove items. */

        if(profile.item != null) { 

            profile.item = profile.item.filter(
            function(e) {
                return (e.indexOf(storyID + STORY_DELIM) == -1);
            });

        }

        /* Remove flags. */

        if(profile.flag != null) { 

            profile.flag = profile.flag.filter(
            function(e) {
                return (e.indexOf(storyID + STORY_DELIM) == -1);
            });

        }

        /* Remove visited nodes. */

        if(profile.visited != null) {

            profile.visited = profile.visited.filter(
            function(e) {
                return (e.indexOf(storyID + STORY_DELIM) == -1);
            });

        }

        /* Reset current node. */
        
        profile.current_nodes[storyID] = "0";
        
    }
    
    return profile;
    
}

/* Messenger API response-building utility methods. */

function buildPlainTextTemplate(text) {
    
    return {text};
    
}

function buildImageTemplate(url) {
    
    var message = {
        "attachment" : {
            "type" : "image",
            "payload" : {
                "url" : url
            }
        }
    }
    
    return message;
    
}

/*
 * Attach meta buttons to JSON object to
 * format it cohesive to the API.
 *
 * @param buttons All button template elements.
 */
function buildButtonTemplate(buttons) {
    
    var message = {
        "attachment" : {
            "type" : "template",
            "payload" : {
                "template_type" : "button",
                "text" : STORY_CONTINUE,
                "buttons" : buttons
            }
        }
    }
    
    return message;
    
}

/*
 * Attach meta elements to JSON object to
 * format it cohesive to the API.
 *
 * @param elements All bubble carousel elements.
 */
function buildStructuredTemplate(elements) {
    
    var message = {
        "attachment" : {
            "type" : "template",
            "payload" : {
                "template_type" : "generic",
                "elements" : elements
            }
        }
    }

    return message;
    
}

/*
 * Return a part of a JSON message
 * object formatted to the messenger
 * send API.
 *
 * @param title     The title of the bubble.
 * @param subtitle  The subtitle of the bubble.
 * @param itemurl   The URL of the bubble.
 * @param imageurl  The image of the bubble.
 * @param buttons   The JSON button array for the bubble.
 */
function buildElement(title, subtitle, itemurl, imageurl, buttons) {
    
    // Build the element.
    var element = {};
    
    // Set the provided fields, checking for inclusion.
    if (title) element["title"] = title;
    if (subtitle) element["subtitle"] = subtitle;
    if (itemurl) element["item_url"] = itemurl;
    if (imageurl) element["image_url"] = imageurl;
    if (buttons) element["buttons"] = buttons;
    
    return element;
    
}

/*
 * Return a part of a JSON message
 * object formatted to the messenger
 * send API.
 *
 * @param title The button identifier.
 * @param uri   URL or payload identifier.
 */
function buildButton(type, title, uri) {
    
    // Build button.
    var button = {};
    
    if(type == 'url') {
        button["type"] = "web_url";
        button["title"] = title;
        button["url"] = uri;
    }
    else if(type == 'postback') {
        button["type"] = "postback";
        button["title"] = title;
        button["payload"] = uri;
    }
    
    return button;
    
}

/*
 * Check is a message is contained
 * within a check string, with
 * optional leniency.
 *
 * @param message   The user message.
 * @param check     The check string.
 * @param strict    Determine leniency.
 */
function textContains(message, check, strict) {
    
    // If strict checking enabled...
    if(strict) {
        
        // Check every element...
        for(let checkstring of check) {
            if(message.includes(checkstring)) return true;
        }
        
        return false;
        
    }
    // Otherwise be a bit more lenient.
    else {
        
        for(let checkstring of check) {
        
            // Make both messages the same capitalisation.
            message = message.toLowerCase();
            checkstring = checkstring.toLowerCase();

            // If there is just one word...
            if(!checkstring.includes(" ")) {
                if ((message == checkstring ? true : false)) return true;
            }

            // Split the check into substrings.
            checkstring = checkstring.split(" ");

            // Ensure all elements appear at least once.
            var length = check.length;
            var matched = 0;
            while(length--) {
               if (message.indexOf(check[length])!=-1) {
                   matched++;
               }
            }
            if ((matched == check.length ? true : false)) return true;
            
        }
        
        return false;
        
    }
    
}

// Create the bot at the correct port!
http.createServer(bot.middleware()).listen(8080);