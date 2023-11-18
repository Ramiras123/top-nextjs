import { Button } from './Button';
describe('Button', () => {
	it('Displays child elements', () => {
		cy.mount(<Button appearance="ghost">Нажмите меня</Button>);
		cy.get('[data-cy="button"]').should('contain', 'Нажмите меня');
	});
	it('Applies styles depending on the appearance', () => {
		cy.mount(<Button appearance="primary">Primary Button</Button>);
		cy.get('[data-cy="button"]')
			.invoke('attr', 'class')
			.should('contain', 'primary');
	});
	it('Applies styles depending on svg links', () => {
		cy.mount(
			<Button appearance="primary" arrow="down">
				Primary Button
			</Button>
		);
		cy.get('[data-cy="button"] span')
			.invoke('attr', 'class')
			.should('contain', 'down');
		cy.get('[data-cy="button"] svg').should('exist');
	});
});
