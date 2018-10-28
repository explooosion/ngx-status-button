import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgxStatusButtonService } from '../services/ngx-status-button.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ngx-status-button',
    templateUrl: './ngx-status-button.component.html',
    styleUrls: ['./ngx-status-button.component.scss']
})
export class NgxStatusButtonComponent implements OnInit, OnChanges {

    // Status button name
    @Input() public stepNameI: String = 'Pay';
    @Input() public stepNameII: String = 'Processing';
    @Input() public stepNameIII: String = 'Success!';
    @Input() public stepNameIV: String = 'Proceed';

    // Step 1~4 to control animation
    @Input() public step: number;

    public statusClass: object;

    constructor(
        private ngxService: NgxStatusButtonService,
    ) { }

    ngOnInit(): void {
        this.ngxService.getStep().subscribe(
            step => { this.step = step; }
        );
        this.ngxService.getStatus().subscribe(
            statusclass => { this.statusClass = statusclass; }
        );
    }

    ngOnChanges(obj: any) {
        const { step } = obj;
        // tslint:disable-next-line:curly
        if (typeof step === 'undefined') return;
        // tslint:disable-next-line:curly
        if (typeof step.previousValue === 'undefined' || step.firstChange) return;

        this.ngxService.next();
    }
}
