export class Example {
    private readonly string: string;
    private readonly number: number;

    constructor(string: string, number: number) {
        this.string = string;
        this.number = number;
    }

    public returnConcatenatedProperties(): string {
        return `${this.string} ${this.number}`;
    }
}
