export default function resizeAll(comps, width = 800, height = 400) {
    for (let i = 0; i < comps.length; i++) {
        const element = comps[i];
        element.resize(width, height);
    }
    return true;
}
