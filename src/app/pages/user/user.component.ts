import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnChanges {
  @Input() user!: User;
  @Output() devent = new EventEmitter();
  @Input() propChild!: string;
  deleteUser() {
    this.devent.emit(this.user);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
