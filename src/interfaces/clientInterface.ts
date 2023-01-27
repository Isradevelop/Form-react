export interface ClientInterface {
    name: string,
    surname: string,
    works: WorkInterface[],
    parents: {
        mother: string,
        father: string
    }
    age: number,
    languages: string[],
    comment: string,
    genre: string,
    titles: string[],
    drivingLicense: string
}

interface WorkInterface {
    type: string,
    sector: string
}