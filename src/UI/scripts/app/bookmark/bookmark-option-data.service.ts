import {Injectable} from 'angular2/core';
import {BookmarkOptionBase} from '../dynamicForm/bookmark-option-base';
import {DropdownBookmarkOption} from '../dynamicForm/bookmark-option-dropdown';
import {TextboxBookmarkOption} from '../dynamicForm/bookmark-option-textbox';
import {CheckboxBookmarkOption} from '../dynamicForm/bookmark-option-checkbox'

@Injectable()
export class BookmarkOptionDataService {
    
    // Todo: get it from api, and make it asynch    
    getBookmarkOptions(bookMarkCode: string) {

        let bookmarkOptions: BookmarkOptionBase<any>[] = [
            
            new DropdownBookmarkOption({
                key: 'TYPE',
                label: 'TYPE',
                dropdownOptions: [
                    { key: 'TOTAL', value: 'TOTAL' },
                    { key: 'BILLINGBALANCE', value: 'BILLINGBALANCE' },
                    { key: 'DEBTORBALANCE', value: 'DEBTORBALANCE' },
                    { key: 'BILLINGRECEIPTS', value: 'BILLINGRECEIPTS' },
                    { key: 'DEBTORRECEIPTS', value: 'DEBTORRECEIPTS' },
                    { key: 'BILLINGTOTAL', value: 'BILLINGTOTAL' },
                    { key: 'BILLINGTOTALPLUSADJ', value: 'BILLINGTOTALPLUSADJ' },
                    { key: 'DEBTORTOTAL', value: 'DEBTORTOTAL' },
                    { key: 'DEBTORTOTALPLUSADJ', value: 'DEBTORTOTALPLUSADJ' }
                ],
                order: 3
            }),

            new DropdownBookmarkOption({
                key: 'OUTPUT',
                label: 'OUTPUT',
                dropdownOptions: [
                    { key: 'TOTAL', value: 'TOTAL' },
                    { key: 'TEXTCR', value: 'TEXTCR' },
                    { key: 'TEXT', value: 'TEXT' },
                    { key: 'TABLE', value: 'TABLE' },
                    { key: 'TABLENOTOTAL', value: 'TABLENOTOTAL' }
                ],
                order: 6
            }),

            new TextboxBookmarkOption({
                key: 'FEE',
                label: 'FEE',
                order: 7,
                required: false
            }),

            new CheckboxBookmarkOption({
                key: 'STATISTICAL',
                label: 'STATISTICAL',
                order: 2                
            }),

            new CheckboxBookmarkOption({
                key: 'SHOWTOTAL',
                label: 'SHOWTOTAL',
                order: 4
            }),

            new CheckboxBookmarkOption({
                key: 'JUDGMENTFEE',
                label: 'JUDGMENTFEE',
                order: 5
            }),

            new DropdownBookmarkOption({
                key: 'IB',
                label: 'IB',
                dropdownOptions: [
                    { key: 'P', value: 'P' },
                    { key: 'I', value: 'I' }
                ],
                order: 1
            }),
        ];

        return bookmarkOptions.sort((a, b) => a.order - b.order);
    }
}
