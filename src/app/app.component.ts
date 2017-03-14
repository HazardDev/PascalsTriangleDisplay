import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  triangle: Array<Array<number>> = [[]];

  calculateTriangle(size: number){
    const theTriangle: Array<Array<number>> = [[1], [1, 1]];

    for (let i = 2; i < size; i++) {
      // console.log("I: " + i);
      theTriangle.push([1]);
      for (let x = 1; x < i; x++) {
        // console.log(theTriangle[i][x]);
        // console.log(theTriangle[i][x - 1]);
        theTriangle[i].push(theTriangle[i - 1][x] + theTriangle[i - 1][x - 1]);
      }
      theTriangle[i].push(1);
    }

    this.triangle = theTriangle;

  }


}
