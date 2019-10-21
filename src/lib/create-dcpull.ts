export function createDCPull(fieldId: number, entryid: number, currencyCode: string): object {
    return {
    CurrencyCode : currencyCode,
    EntryId : entryid,
    FieldId : fieldId,
    }
}