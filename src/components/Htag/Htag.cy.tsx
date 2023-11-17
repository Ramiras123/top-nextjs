import { Htag } from './Htag';
describe('Htag', () => {
	const body = 'Text';
	it('should create a tag H1', () => {
		cy.mount(<Htag tag="h1" children={body} />);
		cy.get('[data-cy="Htag"]').should('have.text', body);
		cy.get('[data-cy="Htag"]').should('be.visible');
		cy.get('[data-cy="Htag"]').invoke('attr', 'class').should('contain', 'h1');
	});
	it('should create a tag H2', () => {
		cy.mount(<Htag tag="h2" children={body} />);
		cy.get('[data-cy="Htag"]').should('have.text', body);
		cy.get('[data-cy="Htag"]').should('be.visible');
		cy.get('[data-cy="Htag"]').invoke('attr', 'class').should('contain', 'h2');
	});
	it('should create a tag H3', () => {
		cy.mount(<Htag tag="h3" children={body} />);
		cy.get('[data-cy="Htag"]').should('have.text', body);
		cy.get('[data-cy="Htag"]').should('be.visible');
		cy.get('[data-cy="Htag"]').invoke('attr', 'class').should('contain', 'h3');
	});
});
