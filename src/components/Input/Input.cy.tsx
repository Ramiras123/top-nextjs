import { Input } from './Input';

describe('Input', () => {
	it('Displays the component without error', () => {
		cy.mount(<Input />);
		cy.get('[data-cy="input"]').should('exist');
		cy.get('[data-cy="input-wrapper"]').should('exist');
	});
	it('Displays a component with an error', () => {
		cy.mount(<Input error={{ message: 'Ошибка', type: 'value' }} />);
		cy.get('[data-cy="input"]')
			.invoke('attr', 'class')
			.should('contain', 'error');
		cy.get('[data-cy="input-error"]').should('contain', 'Ошибка');
	});
	it('Checks data transmission via ref', () => {
		cy.mount(<Input />);
		const inputText = 'Текст для ввода';
		cy.get('[data-cy="input"]').type(inputText);
		cy.get('[data-cy="input"]').should('have.value', inputText);
	});
});
