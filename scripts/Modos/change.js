import { d } from "../constants.js";
import { getLocal } from "./mode.js";
export const changeMode = () => {
    let [a,b] = ['light', 'dark'];
    let mode = d.querySelector('#mode')
    let current = getLocal("mode") === 'claro' ? a : b
    let items = d.querySelectorAll('.select-mode');
    mode.innerHTML = `Modo ${ getLocal("mode") }`;
    items.forEach(item => {
        if (current === a){
            item.classList.replace(`bg-${a}`,`bg-${b}`);
            item.classList.replace(`text-${b}`,`text-${a}`)
            item.classList.replace(`navbar-${a}`, `navbar-${b}`)
        }
        else {
            item.classList.replace(`bg-${b}`,`bg-${a}`);
            item.classList.replace(`text-${a}`,`text-${b}`)
            item.classList.replace(`navbar-${b}`, `navbar-${a}`)
        }
    })
}