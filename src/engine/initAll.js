export default function initAll(comps, pack) {
    for (let i = 0; i < comps.length; i++) {
        comps[i].init(pack);
    }
    return true;
}
