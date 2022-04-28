export default function aspectRatioHeight(width) {
    let wdBox = (width / 16);
    return Math.ceil(wdBox * 9);
}
