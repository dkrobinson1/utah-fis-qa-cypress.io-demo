class movieEntityRecViewPage {
    recHeading() {
        return cy.get('h2')}
    recordMovieTitle() {
        return cy.get('.jh-entity-details > :nth-child(2)')}
    recMovieOverview() {
        return cy.get('.jh-entity-details > :nth-child(4)')}
    recMovieReleaseDate(){
        return cy.get('.jh-entity-details > :nth-child(6)')}
    recProdCompanies() {
        return cy.get('.jh-entity-details > :nth-child(8)')}
    recDirectors() {
        return cy.get('.jh-entity-details > :nth-child(10)')}
    recCast() {
        return cy.get('.jh-entity-details > :nth-child(12)')}
    backBtn() {
        return cy.get('.btn-info')}
    editBtn() {
        return cy.get('.btn-primary')}
    }
export default movieEntityRecViewPage