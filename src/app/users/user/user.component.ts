import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { LoadUser } from 'src/app/store/actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id: userId } = params;
      this.store.dispatch(new LoadUser({ userId }));
    });

    this.store
      .select('user')
      .subscribe(userState => (this.user = userState.user));
  }
}
