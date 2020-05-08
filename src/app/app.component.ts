import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "zuk-timer";

  timeRemaining: number = 45;
  timer = timer(1000, 1000);
  paused: boolean = true;
  stage: number = 0;

  ngOnInit() {
    this.timer.subscribe(time => {
      console.log(
        `observable timer time: ${time}, timeRemaining: ${this.timeRemaining}`
      );

      if (this.paused || this.stage === 0) {
        return;
      }
      this.timeRemaining--;

      switch (this.timeRemaining) {
        case 15:
          this.warnFifteenSeconds();
          break;
        case 5:
          this.warnFiveSeconds();
          break;
        case 3:
          this.warn3_2_1();
          break;
        default:
          break;
      }

      if (this.timeRemaining === 0) {
        if (this.stage === 1) this.stage = 2;
        this.timeRemaining = 210;
      }
    });
  }

  // Zuk <= 600hp. Timer paused.
  moveToStage3() {
    this.stage = 3;
    this.paused = true;
  }

  // Zuk <=480 hp. Jad spawns, add 1m:45s to timer. Resume timer.
  moveToStage4() {
    this.stage = 4;
    this.paused = false;
    this.timeRemaining += 105;
  }

  start() {
    this.paused = false;
    this.stage = 1;
  }

  pause() {
    this.paused = true;
  }

  warnFifteenSeconds() {
    this.play("../assets/sounds/fifteen_left.m4a");
  }

  warnFiveSeconds() {
    this.play("../assets/sounds/five_left.m4a");
  }

  warn3_2_1() {
    this.play("../assets/sounds/countdown3s.m4a");
  }

  private play(path: string) {
    console.log("playing " + path);
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }
}
