import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NgxStatusButtonService {

    public statusClass: any = {
        'status2': false,
        'status3': false,
        'status4': false,
    };

    public statusStep = 1;

    public getStep(): Observable<number> {
        return of(this.statusStep);
    }

    public getStatus(): Observable<object> {
        return of(this.statusClass);
    }

    public update(status: string): void {
        Object.keys(this.statusClass).forEach((key: string) => {
            this.statusClass[key] = status === key ? true : false;
        });
    }

    public setStep(step: number): void {
        this.statusStep = step;
        switch (this.statusStep) {
            case 1:
                this.update('');
                break;
            case 2:
                this.update('status2');
                break;
            case 3:
                this.update('status3');
                break;
            case 4:
                this.update('status4');
                break;
            default:
                this.update('');
                break;
        }
        // debug animation
        // setTimeout(() => this.onStatusIII(), 3500);
        // setTimeout(() => this.onStatusIV(), 5000);
    }
}
