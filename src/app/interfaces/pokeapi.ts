export interface Data {
    count: number,
    next: string,
    previus: string,
    results: Result[]
}

export interface Result {
    name: string,
    url: string
}