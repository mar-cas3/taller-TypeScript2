import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series")!;
let seriesCaption: HTMLElement = document.getElementById("series-caption")!;
let seriesDetail: HTMLElement = document.getElementById("tv-card")!;
seriesDetail.style.visibility = "hidden";

console.log(seriesDetail);

showSeriesTable();
showStatNumSeason();


function showSeriesTable(): void {
    let seriesBody: HTMLElement = document.createElement("tBody");
    for (let serie of series) {
        let tElement: HTMLElement = document.createElement("tr");
        tElement.innerHTML = `<td>${serie.id}</td>
        <td class="series-name">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesBody.appendChild(tElement);

        tElement.getElementsByClassName("series-name")[0].addEventListener("click", () => {
            showSerieDetail(serie);
        });

    }
    seriesTable.appendChild(seriesBody);
}

function showStatNumSeason(): void {
    let totalSeries: number = 0;
    let totalSeason: number = 0;
    for (let serie of series) {
        totalSeries++;
        totalSeason += serie.seasons;
    }
    let avgSeason: number = totalSeason / totalSeries;

    seriesCaption.innerHTML = `Seasons average: ${avgSeason}`;
}

function showSerieDetail(serie: Serie): void {
    let seriesCard: HTMLElement = document.getElementById("card-img")!;
    let seriesTitle: HTMLElement = document.getElementById("card-title")!;
    let seriesInfo: HTMLElement = document.getElementById("card-text")!;
    let seriesLink: HTMLElement = document.getElementById("card-link")!;
    
    seriesCard.setAttribute("src", serie.image);
    seriesCard.setAttribute("alt", `${serie.name}'s image`);
    seriesTitle.innerHTML = serie.name;
    seriesInfo.innerHTML = `${serie.description}`;
    seriesLink.innerHTML = `${serie.website}`;


    seriesDetail.style.visibility = "visible";

    console.log(seriesCard);
    console.log(seriesTitle);
    console.log(seriesInfo);

}


