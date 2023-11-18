import { Tag } from './Tag';
describe('Htag', () => {
	const body = 'Text';
	it('should create a tag medium red', () => {
		cy.mount(
			<Tag
				color="red"
				appearance="medium"
				href="https://example.com"
				children={body}
			/>
		);
		cy.get('[data-cy="tag"]').should('have.text', body);
		cy.get('[data-cy="tag"]').should('be.visible');
		cy.get('[data-cy="tag"]')
			.invoke('attr', 'class')
			.should('contain', 'medium');
		cy.get('[data-cy="tag"]').invoke('attr', 'class').should('contain', 'red');
		cy.get('[data-cy=tag] a')
			.should('have.attr', 'href', 'https://example.com')
			.and('contain', body);
	});
	it('should create default tag and link', () => {
		cy.mount(<Tag href="users" children={body} />);
		cy.get('[data-cy="tag"]').should('have.text', body);
		cy.get('[data-cy="tag"]').should('be.visible');
		cy.get('[data-cy="tag"]')
			.invoke('attr', 'class')
			.should('contain', 'ghost');
		cy.get('[data-cy="tag"] a').should('have.attr', 'href', 'users');
	});
	it('should creating a component without a link', () => {
		cy.mount(<Tag>{body}</Tag>);
		cy.get('[data-cy=tag]').should('contain', body);
	});
});
