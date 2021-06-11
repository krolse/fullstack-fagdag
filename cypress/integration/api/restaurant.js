describe('Validate JSON response from /restaurant endpoint', () => {
    it('Contains key "total_karakter"', () => {
        cy.request('GET', '/restaurant')
            .then((res) => {
                expect(res.isOkStatusCode).to.be.true;
                for (let restaurant of res.body)
                    expect('total_karakter' in restaurant).to.be.true;
            });
    });
});
