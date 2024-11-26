import _ from 'lodash';
import { GroupingNames, GroupNames } from './models/enums.js';
describe('lodash _.groupBy()', function () {
    const data = [
        {
            displayText: 'Item in Group One [1]',
            id: 1,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupOne]
            ]),
            itemName: 'item-1'
        },
        {
            displayText: 'Item in Group One [2]',
            id: 2,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupOne]
            ]),
            itemName: 'item-2'
        },
        {
            displayText: 'Item in Group Two [3]',
            id: 3,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupTwo]
            ]),
            itemName: 'item-3'
        },
        {
            displayText: 'Item in Group Two [4]',
            id: 4,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupTwo]
            ]),
            itemName: 'item-4'
        },
        {
            displayText: 'Item in Group Two [5]',
            id: 5,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupTwo]
            ]),
            itemName: 'item-5'
        },
        {
            displayText: 'Item in Group Three [6]',
            id: 6,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupThree]
            ]),
            itemName: 'item-6'
        },
        {
            displayText: 'Item in Group Three [7]',
            id: 7,
            itemCategories: new Map([
                [GroupingNames.groupingOne, GroupNames.groupThree]
            ]),
            itemName: 'item-7'
        }
    ];
    it('currently has no ECMAScript equivalent', function () {
        const groups = _(data)
            .groupBy((i) => i.itemCategories?.get(GroupingNames.groupingOne))
            .toArray()
            .value();
        groups.forEach(i => {
            const groupName = _(i).first()?.itemCategories?.get(GroupingNames.groupingOne);
            console.log(`group: ${groupName}`);
            i.forEach(j => console.log(`    ${j.displayText}`));
        });
    });
});
