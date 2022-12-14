import {Component, OnInit} from '@angular/core';
import {IWord} from '../../../model/IWord';
import {DictionaryService} from '../../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word1: IWord = {};

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findWord();
  }

  findWord() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const word = paramMap.get('word');
      this.word1 = this.dictionaryService.findWord(word);
    });
  }
}


