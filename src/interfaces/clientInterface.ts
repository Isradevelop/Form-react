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
    comment2: string,
    genre: 'male' | 'female',
    titles: string[],
    drivingLicense: 'yes' | 'no'
}

interface WorkInterface {
    type: string,
    sector: string
}