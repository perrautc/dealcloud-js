import { IValue } from "./Ivalue";

export interface IDCPush {
    readonly CurrencyCode: string;
    readonly EntryId: number;
    readonly FieldId: number;
    readonly IgnoreNearDups: boolean;
    readonly Value: IValue;
}