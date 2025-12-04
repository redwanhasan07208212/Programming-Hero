interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class AudioPlayer implements MediaPlayer {
  play(): void {
    console.log(`Audio is playing`);
  }
  pause(): void {
    console.log(`Audio is paused`);
  }
  stop(): void {
    console.log(`Audio is stopped`);
  }
}

class VideoPlayer implements MediaPlayer {
  play(): void {
    console.log(`Video is playing`);
  }
  pause(): void {
    console.log(`Video is paused`);
  }
  stop(): void {
    console.log(`Video is stopped`);
  }
}

// Test cases
const audioPlayer = new AudioPlayer();
audioPlayer.play(); // Audio is playing
audioPlayer.pause(); // Audio is paused
audioPlayer.stop(); // Audio is stopped

const videoPlayer = new VideoPlayer();
videoPlayer.play(); // Video is playing
videoPlayer.pause(); // Video is paused
videoPlayer.stop(); // Video is stopped

// abstract class
abstract class Animal {
  abstract makeSound(): void;
  abstract makeMove(): void;
  abstract makeSleep(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog barks");
  }
  makeMove(): void {
    console.log("Dog runs");
  }
  makeSleep(): void {
    console.log("Dog sleeps");
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Cat meows");
  }
  makeMove(): void {
    console.log("Cat moves gracefully");
  }
  makeSleep(): void {
    console.log("Cat sleeps");
  }
}

// Test cases
const dog = new Dog();
dog.makeSound();
dog.makeMove();
dog.makeSleep();

const cat = new Cat();
cat.makeSound();
cat.makeMove();
cat.makeSleep();
