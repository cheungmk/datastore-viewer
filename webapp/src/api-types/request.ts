export namespace Request {
  export namespace Entity {
    export interface FetchAll {
      projectName: string;
      kind: string;
      pageNumber?: number;
      rowsPerPage?: number;
    }

    export interface Fetch {
      projectName: string;
      kind: string;
      urlSafeKey: string;
    }
  }

  export namespace Kind {
    export interface FetchAll {
      projectName: string;
    }
  }
}
