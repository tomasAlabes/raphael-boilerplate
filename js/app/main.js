require([ "raphael", "jquery"], function (Raphael, $) {
    var container = $("#container")[0];
    var paper = Raphael(container, 600, 600);
    paper.circle(100, 100, 100);
});