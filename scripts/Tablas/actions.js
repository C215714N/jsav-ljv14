import { d } from "../constants.js";

export const getActions = () =>{
    let buttons = d.querySelectorAll('.btn-success');
    buttons.forEach(btn => btn.addEventListener('click', (e) => {
        let userId = e.target.parentNode.parentNode.firstElementChild.innerText
        window.sessionStorage.setItem("userId",userId.trim());
    } ) )
}