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

function breadthFirstSearchRecursively(name){

    function inner(friendsQueue, searched) {
        friendsQueue = friendsQueue || [];

        if (friendsQueue.length === 0) return false;
        const friend = friendsQueue[0];
        const searchedRemains = friendsQueue.slice(1);

        if (searched.indexOf(friend) !== -1) return inner(searchedRemains, searched);
            if (personIsSeller(friend))
                return friend;

        return inner(searchedRemains.concat(graph[friend]), searched.concat(friend));
    }
    return inner(graph[name], []);
}

breadthFirstSearchRecursively("you")
