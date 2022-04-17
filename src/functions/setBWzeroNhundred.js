export default function setBWzeroNhundred(n) {
    if (n > 100) {
        return 100;
    }
    else if (n < 0) {
        return 0;
    }
    else {
        return n;
    }
}
