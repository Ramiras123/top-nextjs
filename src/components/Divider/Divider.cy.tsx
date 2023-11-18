import { Divider } from './Divider';

describe('Divider', () => {
	it('Displays the Divider component', () => {
		cy.mount(<Divider className="custom-divider" />);
		cy.get('.custom-divider').should('exist');
	});
});
