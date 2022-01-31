
1. how to export core functionality from ctx e.g draw rectangle, circle etc.
2. We have 2 palces where the ctxData object is merged with local ctxData obj. 1::In applyTransitions in component uses ctxData.merge function from CtxData object. 2:: inside Ctx object wcommit the incomming ctxData to the html5 canvas ctx. There should be one place for both of these.