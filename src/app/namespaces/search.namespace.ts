export namespace NSSearch {
    export interface ISearchState {
        searchValue: string;
        filterField: string;
    }

    export interface IUser extends Record<string, string> {
        id: string;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
    }
}