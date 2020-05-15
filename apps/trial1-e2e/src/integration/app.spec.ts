import { getAddTodoButton, getTodos } from '../support/app.po';

describe('trial1', () => {
  beforeEach(() => cy.visit('/'));

 
  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });
});
