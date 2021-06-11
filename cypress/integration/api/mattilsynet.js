/**
 * Det er et Cypress anti pattern å teste API-er utenfor din kontroll,
 * men jeg velger å gjøre det her for å verifisere at query strings fungerer
 * slik vi forventer FOR ØYEBLIKKET.
 */
describe('Sjekker at Mattilsynet returnerer forventet data', () => {
    const API_URL = 'https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn';

    it('Tester ?poststed=Oslo query', () => {
        cy.request('GET', `${API_URL}?poststed=Oslo`)
            .then((res) => {
                expect(res.isOkStatusCode).to.be.true;
                for (let restaurant of res.body.entries)
                    expect(restaurant['poststed'].toLowerCase()).to.contain('oslo');
            });
    });

    it('Tester ?total_karakter=2 query', () => {
        cy.request('GET', `${API_URL}?total_karakter=2`)
            .then((res) => {
                expect(res.isOkStatusCode).to.be.true;
                for (let restaurant of res.body.entries)
                    expect(restaurant['total_karakter']).to.eq('2');
            });
    });
});
