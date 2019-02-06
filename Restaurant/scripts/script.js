"use strict";
$(function() {

let selectedTable = undefined;

function showModul() {
  $(document).on("click", ".available", function(e){
    $(".modul").fadeIn(600).css("display", "flex", );
  
    selectedTable = $(e.target);
    $(".tableNumber").text(selectedTable.get(0).id);
  });
}
  
function hideModul() {
  $(document).on("click", ".fa-times", function(e) {
    $(".modul").fadeOut(600);
  });
}

function reserveTable() {
  $(document).on("click", ".save", function(e){
    $(selectedTable).removeClass("available").addClass("reserved")
    .attr("name", $("#name").val()).attr("size", $("#size").val());
    $(".modul").fadeOut(600);
    $(selectedTable).append(`<div class="tooltip">
    <p>Name: ${$(selectedTable).attr("name")}</p>
    <p>Size: ${$(selectedTable).attr("size")}</p>
    </div>`);
  

  });
}
$(document).on("mouseenter", ".reserved", function(e) {
  $(e.target).children().css("display", "inherit");
});
$(document).on("mouseleave", ".reserved", function() {
  $(".tooltip").css("display", "none");
});

showModul();
hideModul();
reserveTable();
});

