[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

# ngx-status-button

This is a button status design by colder build with angular7.

## Design

Inspired by [UI Movement](https://uimovement.com) - [In-button status](https://uimovement.com/ui/6526/in-button-status/)。

![](https://i.imgur.com/9vMoeMh.gif)

## Installation

```sh
yarn add ngx-status-button # not yet
```

### Importing Modules

app.module.ts

```typescript
import { NgxStatusButtonModule } from 'ngx-status-button';

@NgModule({
  // ...
  imports: [
    NgxStatusButtonModule,
  ],
  // ...
})
```

### Usage

HTML

```html
<ngx-status-button [step]="step" (click)="onNext()"></ngx-status-button>
```

TS

```typescript
step = 1;

onNext() {
  this.step++;
}
```

## Development

```sh
git clone https://github.com/explooosion/ngx-status-button.git
```

```sh
yarn
```

## Run

```sh
yarn start
```

## Build

```sh
yarn build
```

## License

[MIT](http://opensource.org/licenses/MIT)
