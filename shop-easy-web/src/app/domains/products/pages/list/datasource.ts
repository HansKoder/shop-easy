export interface IDataSource {
    load (): string[];
}

export class DataSource implements IDataSource {
    load(): string[] {
        return ["hello", "world"];
    }

}