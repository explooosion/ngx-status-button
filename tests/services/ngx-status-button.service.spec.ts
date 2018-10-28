import { inject, TestBed } from '@angular/core/testing';

import { NgxStatusButtonService } from './../../ngx-status-button';

describe('SumService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NgxStatusButtonService
            ]
        });
    });

    it('should calculate the sum',
        inject([NgxStatusButtonService],
            (sumService: NgxStatusButtonService) => {
                sumService.calculate(45, 78, 90, 674);
                expect(sumService.sum).toEqual(887);
            })
    );

});
