import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnChanges, AfterViewInit {
  @Input() lives!: number;

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  private context!: CanvasRenderingContext2D;

  ngOnChanges(changes: SimpleChanges): void {
    const lives = changes['lives'].currentValue;
    this.draw(lives);
  }

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvas.getContext('2d')!;

    this.context.beginPath();
    this.context.moveTo(20, 200);
    this.context.lineTo(20, 20);
    this.context.lineTo(90, 20);
    this.context.lineTo(90, 40);
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 4;
    this.context.stroke();
  }

  draw(lives: number) {
    if (lives < 7) {
      this.context.beginPath();
      this.context.arc(90, 55, 14, 0, 2 * Math.PI);
      this.context.strokeStyle = 'blue';
      this.context.stroke();
    }

    if (lives < 6) {
      this.context.beginPath();
      this.context.moveTo(90, 70);
      this.context.lineTo(90, 130);
      this.context.stroke();
    }

    if (lives < 5) {
      this.context.beginPath();
      this.context.moveTo(90, 80);
      this.context.lineTo(70, 110);
      this.context.stroke();
    }

    if (lives < 4) {
      this.context.beginPath();
      this.context.moveTo(90, 80);
      this.context.lineTo(110, 110);
      this.context.stroke();
    }

    if (lives < 3) {
      this.context.beginPath();
      this.context.moveTo(90, 130);
      this.context.lineTo(70, 160);
      this.context.stroke();
    }

    if (lives < 2) {
      this.context.beginPath();
      this.context.moveTo(90, 130);
      this.context.lineTo(110, 160);
      this.context.stroke();
    }

    if (lives < 1) {
      this.context.beginPath();
      this.context.moveTo(40, 85);
      this.context.lineTo(140, 65);
      this.context.strokeStyle = "red";
      this.context.stroke();
      this.context.fillStyle = "red";
      this.context.font = "bold 10px Arial"
      this.context.fillText("x_X", 81, 57);
    }

  }
}
