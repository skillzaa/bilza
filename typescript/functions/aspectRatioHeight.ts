
export default function aspectRatioHeight(width:number):number {
        let wdBox = (width/16);
        return Math.ceil(wdBox * 9);
} 