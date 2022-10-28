import {
    d, 
    modeOption
} from "../constants.js";
import { mapTargets } from "./getTargets.js";

export class Mode {
    constructor (mode){
        this.mode = mode || window.localStorage.getItem('mode') || 'oscuro';
    }
    setMode (key, value) {
        this.mode = value;
        window.localStorage.setItem(key, value)
    } 
    getMode () {
        modeOption.innerHTML = `Modo ${this.mode ? this.mode : 'claro'}`
    }
    changeMode (config) {
        let tags = d.querySelectorAll(config.target);
        mapTargets(tags, this.mode, config);
    };
}