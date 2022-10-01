export default function getComps(compsDb) {
    const comps = [];
    for (let i = 0; i < compsDb.length; i++) {
        const compDb = compsDb[i];
        switch (compDb.compType) {
            case "fillRect":
                const fillRect = new FillRect(0, 60, "red");
                comps.push(fillRect);
                break;
            case "fillRect":
                const background = new Background(0, 60);
                comps.push(background);
                break;
            default:
                break;
        }
    }
    return comps;
}
