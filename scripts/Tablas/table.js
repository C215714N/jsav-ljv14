import { renderHead } from "./thead.js";
import { renderCells } from "./tbody.js";

export function renderTable(rows){
    return `
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                ${renderHead(rows)}
            </tr>
        </thead>
        <tbody>
            ${renderCells(rows)}
        </tbody>
    </table>`
}