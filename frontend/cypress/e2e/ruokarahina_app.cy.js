/* eslint-disable jest/expect-expect */
describe('Ruokarahina app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
    });

    it('front page opens', function() {
        cy.contains('Valitse 1. pelaaja:');
        cy.contains('Valitse 2. pelaaja:');
    });

    it('user can search and select player', function() {
        cy.get('input:first').type('omena');
        cy.contains('Omena, kuivattu').click();
        cy.contains('276.5');
        cy.get('input:last').type('ahven');
        cy.contains('Ahven, leivitetty, paistettu').click();
        cy.contains('4.7');
    });

    it('User should nt be able to start battle, if only one player is selected', function() {
        cy.get('input:first').type('banaani');
        cy.contains('Banaani, kuorittu').click();
        cy.get('button:last').should('be.disabled');
    });

    describe('Players have been selected', function() {
        beforeEach(function() {
            cy.get('input:first').type('banaani');
            cy.contains('Banaani, kuorittu').click();
            cy.get('input:last').type('pulla');
            cy.contains('Pulla, keskirasvainen, vesi').click();
        });

        it('User can change player', function() {
            cy.get('button:first').click();
            cy.contains('Valitse 1. pelaaja:');
            cy.get('input:first').type('omena');
            cy.contains('Omena, kuivattu').click();
            cy.contains('276.5'); 
        });

        it('User can start battle, and after that start a new battle', function() {
            cy.get('button:last').click();
            cy.contains('Taistelu alkaa');
            cy.get('button:last').click();
            cy.contains('Valitse 1. pelaaja:');
        });
    });

});