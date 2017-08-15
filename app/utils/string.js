// @flow

export function longString(str: string, nb: number) {
    if (str.length > nb) {
        return str.slice(0, nb) + '...';
    }
    else {
        return str;
    }
}
