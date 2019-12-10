interface DCPush {
    readonly CurrencyCode: string;
    readonly EntryId: number;
    readonly FieldId: number;
    readonly IgnoreNearDups: boolean;
    readonly Value: Value;
}
interface Value {
    readonly attributes: any;
    readonly value: any;
}

// function createDCPush(dcpush:DCPush) {
    
// }