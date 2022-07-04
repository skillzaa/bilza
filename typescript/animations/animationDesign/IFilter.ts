import { FilterState } from "./filterState.js";

/**
 * A filter is a code that act on a number only if its with in its running range, incase of waiting and exhaused it returns null.
 */
export default interface IFilter <T> {
    update(msDelta: number): FilterState
    value(): T | null; 
}
