import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var seriesCaption = document.getElementById("series-caption");
showSeriesTable();
showStatNumSeason();
function showSeriesTable() {
    var seriesBody = document.createElement("tBody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var tElement = document.createElement("tr");
        tElement.innerHTML = "<td style=\"font-style:bold !important\">".concat(serie.id, "</td>\n        <td><a href=").concat(serie.website, "> ").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesBody.appendChild(tElement);
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
