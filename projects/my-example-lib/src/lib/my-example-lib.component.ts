import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-example-lib',
  template: `
    <p>
      my-example-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyExampleLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
