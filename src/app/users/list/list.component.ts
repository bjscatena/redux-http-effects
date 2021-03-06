import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadUsers } from 'src/app/store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  users: User[];
  isLoading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUsers());

    this.store.select('users').subscribe(usersState => {
      this.users = usersState.users;
      this.isLoading = usersState.isLoading;
      this.error = usersState.error;
    });
  }
}
