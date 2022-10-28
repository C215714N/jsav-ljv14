import { 
    d, 
    modeOption 
} from "../constants.js";

export const setMode = (key, value) => {
        let mode = localStorage.getItem('mode')
        window.localStorage.setItem(key, value)
    }
    , getMode = () => {
        let mode = localStorage.getItem('mode')
        modeOption.innerHTML = `Modo ${mode ? mode : 'claro'}`
    }
    , changeMode = (config) => {
        let mode = localStorage.getItem('mode')
        let tags = d.querySelectorAll(config.target);
        tags.forEach(tag => { config.prop.forEach( attr => {
            mode == 'claro' ?
            alterClass(tag, attr, config.color) :
            alterClass(tag, attr, config.color.sort())
        } ) } )
    };
const alterClass = (tag, attr, color) => {
        attr === 'text' || attr === 'link' || attr === 'btn' ?
        tag.classList.replace(`${attr}-${color[0]}`, `${attr}-${color[1]}`) :
        tag.classList.replace(`${attr}-${color[1]}`, `${attr}-${color[0]}`)
    }