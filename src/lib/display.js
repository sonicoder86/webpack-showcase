
export class ConsoleDisplay {
  display() {
    const welcomeMessage = 'Hello Webpack!';

    console.log(welcomeMessage);
    document.body.innerHTML = welcomeMessage;
  }
}
