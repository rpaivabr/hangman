import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hangman';
  totalLives = 7;
  words = ['Elefante', 'Bola', 'Peixe', 'Futebol', 'Basquete'];
  word: string = '';
  rightLetters: string[] = [];
  wrongLetters: string[] = [];

  get letters(): string[] {
    return this.word.toLowerCase().split('');
  }

  get totalHits(): number {
    let uniqueLetters: string[] = [];
    this.word
      .toLowerCase()
      .split('') // ['a', 'n']
      .forEach((letter) => {
        if (!uniqueLetters.includes(letter)) {
          uniqueLetters.push(letter);
        }
      });
    return uniqueLetters.length;
  }

  get lives(): number {
    return this.totalLives - this.wrongLetters.length;
  }

  get hits(): number {
    return this.totalHits - this.rightLetters.length;
  }

  get isWin(): boolean {
    return this.hits === 0;
  }

  get isLose(): boolean {
    return this.lives === 0;
  }

  get isGameOver(): boolean {
    return this.isWin || this.isLose;
  }

  ngOnInit(): void {
    const index = Math.floor(Math.random() * this.words.length);
    this.word = this.words[index];
  }

  @HostListener('window:keypress', ['$event'])
  onKeyPress(e: KeyboardEvent): void {
    if (this.isGameOver) return;
    if (e.keyCode < 97) return;
    if (e.keyCode > 122) return;

    const letter = e.key;
    if (this.letters.includes(letter)) {
      if (!this.rightLetters.some((rightLetter) => rightLetter === letter)) {
        this.rightLetters.push(letter);
      }
    } else {
      if (!this.wrongLetters.some((rightLetter) => rightLetter === letter)) {
        this.wrongLetters.push(letter);
      }
    }
  }
}
