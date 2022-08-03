const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


function personIsSeller(name) {
    return name[name.length - 1] === "m";
}

function breadthFirstSearch(node){
    let friendsQueue = graph[node];

    const searchedFriends = [];
    while(friendsQueue.length){
        const friend = friendsQueue.shift();
        if(searchedFriends.indexOf(friend) === -1)
        {
            if(personIsSeller (friend)) return friend;
        }

        searchedFriends.push(friend);
        friendsQueue = friendsQueue.concat(graph[friend])
    }
    return undefined;
}

breadthFirstSearch("you")
