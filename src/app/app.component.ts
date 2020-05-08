import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zuk-timer';

  timeRemaining: number = 5;
  timer = timer(1000, 1000);
  paused: boolean = false;
  stage: number = 1;

  ngOnInit() {
    this.timer.subscribe(time => {
      console.log(`observable timer time: ${time}, timeRemaining: ${this.timeRemaining}`)

      if (this.paused) {
        return;
      }
      this.timeRemaining--;

      switch (this.timeRemaining){
        case 15: this.warnFifteenSeconds(); break;
        case 5: this.warnFiveSeconds(); break;
        case 3: this.warn3_2_1(); break;
        default: break;
      }

      if (this.timeRemaining === 0 && this.stage === 1){
        this.stage = 2;
        this.timeRemaining = 210;
      }
    })
  }

  moveToStage3(){
    this.stage = 3;
    this.paused = true;
  }

  moveToStage4(){
    this.stage = 4;
    this.paused = false;
    this.timeRemaining += 105;
  }

  warnFifteenSeconds(){
    //this.play("../assets/sounds/fifteen.wave")
  }

  warnFiveSeconds(){
    //this.play("../assets/sounds/five.wav")
  }

  warn3_2_1(){
    //this.play("../assets/sounds/3_2_1.wav")
  }

  private play(path: string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }
}
