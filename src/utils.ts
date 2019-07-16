//exported things must be imported
export function isEven(n: number): boolean {
    return n % 2 === 0;
}

export function formatName(first: string, last: string): string {
    return `${last}, ${first}`;
}