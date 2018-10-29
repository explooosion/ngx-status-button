import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxStatusButtonService } from '../services/ngx-status-button.service';
import { NgxStatusButtonComponent } from '../components/ngx-status-button.component';

@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        NgxStatusButtonComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        NgxStatusButtonComponent
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class NgxStatusButtonModule {

    /**
     * Use in AppModule: new instance of NgxStatusButtonService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxStatusButtonModule,
            providers: [NgxStatusButtonService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of NgxStatusButtonService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: NgxStatusButtonModule,
            providers: [NgxStatusButtonService]
        };
    }

}
