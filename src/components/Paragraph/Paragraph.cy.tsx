import { mount } from 'cypress/react18';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
	const body = 'Fixtures are a great way to mock data for responses to routes';
	it('should get a paragraph display medium', () => {
		mount(<Paragraph children={body} appearance="medium" />);
		cy.get('[data-cy="paragraph"]').should('have.text', body);
		cy.get('[data-cy="paragraph"]')
			.invoke('attr', 'class')
			.should('contain', 'medium');
	});

	it('should get a paragraph display small', () => {
		mount(<Paragraph children={body} appearance="small" />);
		cy.get('[data-cy="paragraph"]').should('have.text', body);
		cy.get('[data-cy="paragraph"]')
			.invoke('attr', 'class')
			.should('contain', 'small');
	});

	it('should get a paragraph display medium', () => {
		mount(<Paragraph children={body} appearance="big" />);
		cy.get('[data-cy="paragraph"]').should('have.text', body);
		cy.get('[data-cy="paragraph"]')
			.invoke('attr', 'class')
			.should('contain', 'big');
	});
});
