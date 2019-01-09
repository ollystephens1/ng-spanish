import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.sass']
})
export class DictionaryComponent implements OnInit {
  public dictionary: Observable<any[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.dictionary = this.db.collection('/dictionary').valueChanges();
  }
}
