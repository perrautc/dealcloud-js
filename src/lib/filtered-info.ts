import { filterOperations } from "./filter-operations";

interface IfilterInfo {
    readonly CurrencyCode?: string;
    readonly FieldId: number;
    readonly FilterOperation: filterOperations;
    readonly Value: string;
    readonly ValueTo?: string;
}

export function filterInfo(params: IfilterInfo): IfilterInfo {
    return params
}