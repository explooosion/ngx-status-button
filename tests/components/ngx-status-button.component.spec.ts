import { NgxStatusButtonComponent, NgxStatusButtonService } from '../../src/ngx-status-button';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('Component: SumComponent', () => {

    let fixture: ComponentFixture<NgxStatusButtonComponent>;
    let comp: NgxStatusButtonComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                NgxStatusButtonService
            ],
            declarations: [NgxStatusButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(NgxStatusButtonComponent);
        comp = fixture.componentInstance;
    });

    it('should render the sum', (() => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.textContent).toContain('887');
    }));

});
