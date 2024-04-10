class moviesViewPage {
    getMoviePageHeading() {
        return cy.get('h2 > span')}
    getMovieTitleFld() {
        return cy.get('#title > span')}
    getMovieTitleData() {
        return cy.get('.jh-entity-details > :nth-child(2)')}
    getMovieOverviewFld() {
        return cy.get('#overview > span')}
    getMovieOverviewData() {
        return cy.get('.jh-entity-details > :nth-child(4)')}
    getMovieReleaseDateFld() {
        return cy.get('#releaseDate > span')}
    getMovieReleaseDateData() {
        return cy.get(':nth-child(6) > span')}
    getMovieProdCompanyFld() {
        return cy.get(':nth-child(7) > span')}       
    getMovieProdCompanyData() {
        return cy.get('.jh-entity-details > :nth-child(8)')}
    getMovieDirectorFld() {
        return cy.get(':nth-child(9) > span')}         
    getMovieDirectorData() {
        return cy.get(':nth-child(10) > span > a')}         
    getMovieCastFld() {
        return cy.get('.jh-entity-details > :nth-child(11)')}         
    getMovieCastData() {
        return cy.get('.jh-entity-details > :nth-child(12)')}         
    getBackBtn() {
        return cy.get('.btn-info')}         
    getEditBtn() {
        return cy.get('.btn-primary')}         
    getMovieDisplayingItemsTxt() {
        return cy.get('.info > span')}           
    }
export default moviesViewPage