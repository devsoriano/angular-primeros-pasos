import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 65000,
    },
  ];

  // onDelete = Index value: string
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id: string): void {
    this.onDelete.emit(id);
  }
}
