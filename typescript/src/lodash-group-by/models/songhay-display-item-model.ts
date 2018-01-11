export interface DisplayItemModel {
    description?: string;
    displayText: string;
    id: number;
    itemCategories?: Map<string, string>;
    itemCategory?: string;
    itemName: string;
    resourceIndicator?: string;
    sortOrdinal?: string;
    tag?: string;
}
