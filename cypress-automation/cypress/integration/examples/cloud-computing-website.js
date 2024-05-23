// <reference types="Cypress"/>

describe('Cloud Computing Website', () => {
    it('should load the home page', () => {
        cy.viewport('macbook-16');

        cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');
    });

    describe('Home Page', () => {
        it('Get Started button should correctly work', () => {
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

        it('Cloud Computing logo should direct to home page', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Cloud Computing').click();
            cy.url().should('eq', 'https://aut-ce-cloud-computing.github.io/CC_website/spring2024');
        });
    });

    describe('Assignments Page', () => {
        it('should correctly load the assignments', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Assignments').click();
            cy.contains('h1', 'Assignments').should('be.visible');
        });
    });

    describe('Presentations Page', () => {
        it('should correctly load the presentations', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Presentations').click();
            cy.contains('h1', 'Student Presentations').should('be.visible');
        });

        it('each card should have github url logo reference link, and its functionality to redirect', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Presentations').click();
            cy.wait(1000);

            cy.get('ul.py-4 > li:nth-of-type(2) > a').invoke('removeAttr', 'target').click();
            cy.url().should('include', 'github.com');
        });
    });

    describe('Schedule Page', () => {
        it('should correctly load the schedule', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Schedule').click();
            cy.contains('h1', 'Schedule').should('be.visible');
        });

        it('should have correct table entries', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Schedule').click();
            cy.get('tr td:nth-child(1)').each(($el, index) => {
                const text = $el.text();

                if (text.includes('Lecture 1')) {
                    cy.get('tr td:nth-child(1)').eq(index).next().then((price) => {
                        const priceText = price.text();
                        expect(priceText).to.equal('Intro to cloud computing');
                    });
                }
            });
        });
    });

    describe('Useful Content', () => {
        it('should correctly load the Useful Content page', () => {
            cy.viewport('macbook-16');

            cy.visit('https://aut-ce-cloud-computing.github.io/CC_website/');

            cy.contains('a', 'Usefulcontent').click();
            cy.contains('h1', 'Useful Content').should('be.visible');
        });
    });
});
