import { ConsoleDisplay } from './display';

describe('#ConsoleDisplay', () => {
  it('should display message in console', () => {
    new ConsoleDisplay().display();
  });
});
