export default function hsl(hue = 0, shine = 100, lightness = 50) {
    return `hsl(${hue.toString()},${shine.toString()}%,${lightness.toString()}%)`;
}
