export default function isPlanObject(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    if (Object.getPrototypeOf(obj) === Object.prototype) {
        return true;
    } else {
        return false;
    }
}