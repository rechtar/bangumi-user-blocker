$(document).ready(function () {
    updatePage();
    $("#clear-button").click(clearButtonClicked);
    $("#block-faceless").click(blockFacelessClicked);
});

function clearButtonClicked()
{
    if (window.confirm("真的要清空吗？")) {
        localStorage["targets"] = "";
        localStorage["usernames"] = "";
        updatePage();
    }
}

function blockFacelessClicked()
{
    localStorage["blockFaceless"] = $("#block-faceless")[0].checked.toString();
}

function updatePage()
{
    $("#block-list > span").replaceWith("<span>" + (localStorage["usernames"] ? localStorage["usernames"] : "列表为空") + "</span>");
    if (localStorage["usernames"].length == 0) {
        $("#clear-button").css("display", "none");
        $("#separator").css("display", "none");
    }
    $("#block-faceless")[0].checked = localStorage["blockFaceless"] == "true" ? true : false;
}
