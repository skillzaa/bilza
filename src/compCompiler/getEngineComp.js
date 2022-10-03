import corePropsToEngineComp from "./corePropsToEngineComp";
export default function getEngineComp(compDb, pack) {
    const compEngine = compDb.getEngineComp();
    corePropsToEngineComp(compDb, compEngine, pack);
    return compEngine;
}
