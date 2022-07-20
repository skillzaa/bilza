

export default function hsl(hue :number=0,shine :number=100,lightness:number = 50):string{
    return `hsl(${hue.toString()},${shine.toString()}%,${lightness.toString()}%)`;
    // console.log(ret.toString());
    // return ret;
}