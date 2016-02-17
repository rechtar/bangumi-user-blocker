$(document).ready(function () {
    updatePage();
    $("#clear-button").click(clearButtonClicked);
    $("#export-button").click(exportButtonClicked);
    $("#import-button").click(importButtonClicked);
    $("#block-faceless").click(blockFacelessClicked);
});

function clearButtonClicked(e)
{
    e.preventDefault();
    if (window.confirm("真的要清空吗？")) {
        localStorage["targets"] = "";
        localStorage["usernames"] = "";
        window.location = "";
    }
}

function exportButtonClicked(e)
{
    e.preventDefault();
    $("#export-code").text(btoa(JSON.stringify(localStorage))).slideDown();
}

function importButtonClicked(e)
{
    e.preventDefault();
    var saveData = window.prompt("输入导入数据（会覆盖现有数据）：");
    if (saveData) {
        var parsedData;
        try {
            parsedData = JSON.parse(atob(saveData));
            console.info(parsedData);
        } catch (SyntaxError) {
            window.alert("数据不太对哦……");
        }
        if (parsedData) {
            localStorage["targets"] = parsedData["targets"];
            localStorage["usernames"] = parsedData["usernames"];
            localStorage["blockFaceless"] = parsedData["blockFaceless"];
            window.location = "";
        }
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
        $("#export-button").css("display", "none");
    }
    $("#block-faceless")[0].checked = localStorage["blockFaceless"] == "true" ? true : false;
}
