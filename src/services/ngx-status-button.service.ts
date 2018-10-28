import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NgxStatusButtonService {

    public statusArray: Array<number> = [1, 2, 3, 4];
    public status = 1;

    public update(status: number): number {
        this.status = status;
        return this.status;
    }

}
