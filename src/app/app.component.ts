import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dropDownOptions = ['option1', 'option2', 'option3', 'option4'];
  selectedOption: string;
  dropDownOptions1 = [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
    { id: 3, name: 'name3' },
    { id: 4, name: 'name4' }
  ];
  selectedOption1: string;
  selectedRange;

  public onDropDownChange(ev) {
    this.selectedOption = ev.target.value;
  }
  public onDropDownChange1(ev) {
    this.selectedOption1 = ev.target.value;
  }

  public onSliderChange(ev) {
    this.selectedRange = ev.target.value;
  }
}
