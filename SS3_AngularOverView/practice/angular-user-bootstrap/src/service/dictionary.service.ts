import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWords: IWord[] = [
    {word:'Hello',mean:'Xin chào'},
    {word:'Pen',mean:'Cây viết'},
    {word:'Service',mean:'Dịch vụ'},
    {word:'Doodbye',mean:'Tạm biệt'},
    {word:'Detail',mean:'Chi tiết'},
    {word:'Delete',mean:'Xóa'},
    {word:'Create',mean:'Thêm'},
    {word:'Update',mean:'Cập nhật'},
    {word:'Edit',mean:'Sửa'},
    {word:'Back',mean:'Quay lại'},
  ];
  findWord(word: string){
    return this.iWords.find(item => item.word == word)
  }
  getAll(){
    return this.iWords;
  }
  constructor() {
  }
}
