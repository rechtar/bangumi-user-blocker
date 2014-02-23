// Helper function.
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

if (!localStorage.hasOwnProperty("targets"))
    localStorage["targets"] = "";
if (!localStorage.hasOwnProperty("usernames"))
    localStorage["usernames"] = "";
if (!localStorage.hasOwnProperty("blockFaceless"))
    localStorage["blockFaceless"] = "false";

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    // console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

    if (request.greeting == "hello") {

        sendResponse({
            targets: removeA(localStorage["targets"].split(","), ""),
            usernames: removeA(localStorage["usernames"].split(","), ""),
            blockFaceless: localStorage["blockFaceless"]
        });
        chrome.pageAction.show(sender.tab.id);

    } else if (request.greeting == "block") {

        if (request.id != "icon") {
            var list = removeA(localStorage["targets"].split(","), "");
            list.push(request.id);
            localStorage["targets"] = list.join(",");
        }

        var list2 = removeA(localStorage["usernames"].split(","), "");
        list2.push(request.name);
        localStorage["usernames"] = list2.join(",");

    } else if (request.greeting == "unblock") {

        if (request.id != "icon") {
            var list = removeA(localStorage["targets"].split(","), "");
            removeA(list, request.id);
            localStorage["targets"] = list.join(",");
        }

        var list2 = removeA(localStorage["usernames"].split(","), "");
        removeA(list2, request.name);
        localStorage["usernames"] = list2.join(",");
    }

    // console.log("bg.js: Blocked ids include " + localStorage["targets"] + ".");
});
