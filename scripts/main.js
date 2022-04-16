import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var seriesCaption = document.getElementById("series-caption");
var seriesDetail = document.getElementById("tv-card");
seriesDetail.style.visibility = "hidden";
console.log(seriesDetail);
showSeriesTable();
showStatNumSeason();
function showSeriesTable() {
    var seriesBody = document.createElement("tBody");
    var _loop_1 = function (serie) {
        var tElement = document.createElement("tr");
        tElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td class=\"series-name\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesBody.appendChild(tElement);
        tElement.getElementsByClassName("series-name")[0].addEventListener("click", function () {
            showSerieDetail(serie);
        });
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesBody);
}
function showStatNumSeason() {
    var totalSeries = 0;
    var totalSeason = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalSeries++;
        totalSeason += serie.seasons;
    }
    var avgSeason = totalSeason / totalSeries;
    seriesCaption.innerHTML = "Seasons average: ".concat(avgSeason);
}
function showSerieDetail(serie) {
    var seriesCard = document.getElementById("card-img");
    var seriesTitle = document.getElementById("card-title");
    var seriesInfo = document.getElementById("card-text");
    var seriesLink = document.getElementById("card-link");
    seriesCard.setAttribute("src", serie.image);
    seriesCard.setAttribute("alt", "".concat(serie.name, "'s image"));
    seriesTitle.innerHTML = serie.name;
    seriesInfo.innerHTML = "".concat(serie.description);
    seriesLink.innerHTML = "".concat(serie.website);
    seriesDetail.style.visibility = "visible";
    console.log(seriesCard);
    console.log(seriesTitle);
    console.log(seriesInfo);
}
