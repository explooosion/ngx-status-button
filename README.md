[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

# ngx-status-button

This is a button status design by colder build with angular7.

## Design

Inspired by [UI Movement](https://uimovement.com) - [In-button status](https://uimovement.com/ui/6526/in-button-status/)。

![](https://i.imgur.com/9vMoeMh.gif)


## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

- Use npm
```bash
npm install --save ngx-status-button
```

- Use yarn
```bash
yarn add ngx-status-button
```

### Importing Modules

app.module.ts

```typescript
import { NgxStatusButtonModule } from 'ngx-status-button';

@NgModule({
  imports: [
    NgxStatusButtonModule,
  ],
})
```

### Usage

HTML

```html
<ngx-status-button 
  [step]="step" 
  (click)="onNext()"
>
</ngx-status-button>
```

TS

```typescript
step = 1;

onNext() {

  // stop at step 4
  this.step = this.step >= 4 ? 4 : this.step + 1;

  // cycle step
  this.step = this.step >= 4 ? 1 : this.step + 1;
}
```

## Input

```typescript
// Status button name
@Input() public stepNameI: String = 'Pay';
@Input() public stepNameII: String = 'Processing';
@Input() public stepNameIII: String = 'Success!';
@Input() public stepNameIV: String = 'Proceed';

// Step 1~4 to control animation
@Input() public step: number;
```

### Change step name

You can change the step name for 1~4.

HTML

```html
<ngx-status-button 
  [stepNameI]="stepNameI"
>
</ngx-status-button>
```

TS

```typescript
stepNameI = 'your-step-name';
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
