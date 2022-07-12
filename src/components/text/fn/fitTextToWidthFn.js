export default function fitTextToWidthFn(p) {
    const reqWdInPix = (p.canvasWidth() / 100 * this.width.value());
    ;
    this.style.fontSize = this.fontSize.value();
    for (let i = 1; i < 900; i++) {
        const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
        if (newWidthInPix >= (reqWdInPix)) {
            this.fontSize.set(i);
            this.style.fontSize = i;
            return this.fontSize.value();
        }
    }
    return null;
}
