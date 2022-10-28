import { 
    d, 
    modeOption 
} from "../constants.js";

export class Mode {
    mode = localStorage.getItem('mode');
    setMode = (key, value) => {
        window.localStorage.setItem(key, value)
    }
    getMode = () => {
        modeOption.innerHTML = `Modo ${this.mode ? this.mode : 'claro'}`
    }
    changeMode = (config) => {
        let tags = d.querySelectorAll(config.target);
        tags.forEach(tag => { config.prop.forEach( attr => {
            this.mode == 'claro' ?
            alterClass(tag, attr, config.color) :
            alterClass(tag, attr, config.color.sort())
        } ) } )
    }
    alterClass = (tag, attr, color) => {
        attr === 'text' || attr === 'link' || attr === 'btn' ?
        tag.classList.replace(`${attr}-${color[0]}`, `${attr}-${color[1]}`) :
        tag.classList.replace(`${attr}-${color[1]}`, `${attr}-${color[0]}`)
    }
}