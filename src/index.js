import $ from 'jquery'

$(function() {
    $("li:odd").css("background-color", 'green');
    $("li:even").css("background-color", "skyblue");
})