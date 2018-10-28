import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxStatusButtonService } from '../services/ngx-status-button.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ngx-status-button',
    templateUrl: './ngx-status-button.component.html',
    styleUrls: ['./ngx-status-button.component.scss']
})
export class NgxStatusButtonComponent implements OnInit {

    @Input() public stepNameI: String = 'Pay';
    @Input() public stepNameII: String = 'Processing';
    @Input() public stepNameIII: String = 'Success!';
    @Input() public stepNameIV: String = 'Proceed';

    @Input() public status: number;

    public statusClass: string;

    constructor(
        private ngxService: NgxStatusButtonService,
    ) { }

    ngOnInit(): void {
        this.status = this.ngxService.status;
        this.statusClass = `status${this.status}`;
    }

    /**
     * Return status class
     */
    getStatus() {
        return {
            status2: this.statusClass === 'status2',
            status3: this.statusClass === 'status3',
            status4: this.statusClass === 'status4',
        };
    }

    public onStatusI(): void {
        this.onStatusII();

        // debug animation
        setTimeout(() => this.onStatusIII(), 3500);
        setTimeout(() => this.onStatusIV(), 5000);
    }

    public onStatusII(): void {
        this.statusClass = 'status2';
    }

    public onStatusIII(): void {
        this.statusClass = 'status3';
    }

    public onStatusIV(): void {
        this.statusClass = 'status4';
    }
}
