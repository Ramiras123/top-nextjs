import { TopPageAdvantage } from '@/interfaces/page.interface';
import { Advantages } from './Advantages';

describe('Advantages', () => {
	const advantages: TopPageAdvantage[] = [
		{
			_id: '1',
			title: 'Быстрая доставка',
			description: 'Мы доставим ваш заказ в течение 24 часов.'
		},
		{
			_id: '2',
			title: 'Качественные товары',
			description: 'Мы работаем только с проверенными поставщиками.'
		},
		{
			_id: '3',
			title: 'Отличный сервис',
			description: 'Наша команда всегда готова помочь вам с любыми вопросами.'
		}
	];
	it('Displays the transferred benefits', () => {
		cy.mount(<Advantages advantages={advantages} />);
		cy.get('[data-cy="advantages"]').should('have.length', 3);
		cy.get('[data-cy="advantages"]')
			.eq(0)
			.should('contain', advantages[0].title);
		cy.get('[data-cy="advantages"]')
			.eq(1)
			.should('contain', advantages[1].title);
		cy.get('[data-cy="advantages"]')
			.eq(2)
			.should('contain', advantages[2].title);
		cy.get('[data-cy="advantages"] hr').should('have.length', 3);
	});
	it('Uses the correct style classes', () => {
		cy.mount(<Advantages advantages={advantages} />);
		cy.get('[data-cy="advantages"]')
			.invoke('attr', 'class')
			.should('contain', 'advantage');
		cy.get('[data-cy="advantages"] > div')
			.invoke('attr', 'class')
			.should('contain', 'title');
		cy.get('[data-cy="advantages"] hr')
			.invoke('attr', 'class')
			.should('contain', 'vline');
	});
});
