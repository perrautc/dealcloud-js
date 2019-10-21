import { filterOperations } from "./filter-operations";

interface IfilterInfo {
    readonly CurrencyCode?: string;
    readonly FieldId: number;
    readonly FilterOperation: filterOperations;
    readonly Value: string;
    readonly ValueTo?: string;
}

// tslint:disable-next-line: no-class
export class FilterInfo implements IfilterInfo {
    public readonly FieldId: number;
    public readonly FilterOperation: filterOperations;
    public readonly Value: string;
    public readonly ValueTo: string;
    public readonly CurrencyCode: string;
    constructor(FieldId: number, FilterOperation: filterOperations, Value: string, ValueTo: string, CurrencyCode: string) {
        this.FieldId = FieldId;
        this.FilterOperation = FilterOperation;
        this.Value = Value;
        this.ValueTo = ValueTo;
        this.CurrencyCode = CurrencyCode;
    }
}