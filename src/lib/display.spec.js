import { ConsoleDisplay } from './display';

describe('#ConsoleDisplay', () => {
  it('should display message in console', () => {
    spyOn(console, 'log');

    new ConsoleDisplay().display();

    expect(console.log).toHaveBeenCalledWith('Hello Webpack!');
  });
});
