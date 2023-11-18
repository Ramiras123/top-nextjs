import { Divider } from './Divider';

describe('Divider', () => {
	it('', () => {
		cy.mount(<Divider className="custom-divider" />);
		cy.get('.custom-divider').should('exist');
	});
});
