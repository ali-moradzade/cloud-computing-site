// <reference types="Cypress"/>

describe('Cloud Computing Website', () => {
    it('should load the home page', () => {
        cy.viewport('macbook-16');

        cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');
    });

    it.only('Get Started button should correctly work', () => {
        cy.viewport('macbook-16');

        cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

        cy.contains('section h1', 'Course Materials').then(($el) => {
            const rect = $el[0].getBoundingClientRect();
            expect(rect.top).to.be.greaterThan(0); // element is not in view
        });

        cy.contains('button', 'Get Started').click();
        cy.wait(500);

        cy.contains('section h1', 'Course Materials').then(($el) => {
            const rect = $el[0].getBoundingClientRect();
            expect(rect.top).to.be.at.least(0); // Element is now in view
        });
    });
});
