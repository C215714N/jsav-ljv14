const alterClass = (tag, attr, color) => {
    attr === 'text' || attr === 'link' || attr === 'btn' ?
    tag.classList.replace(`${attr}-${color[0]}`, `${attr}-${color[1]}`) :
    tag.classList.replace(`${attr}-${color[1]}`, `${attr}-${color[0]}`)
}
export const mapTargets = (tags, mode, config) => {
    tags.forEach(tag => { config.prop.forEach( attr => {
        mode == 'claro' ?
        alterClass(tag, attr, config.color) :
        alterClass(tag, attr, config.color.sort())
    } ) } )
}