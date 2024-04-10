class moviesEditPage {
    titleInput() {
        return cy.get('#movie-title')}
    overviewInput() {
        return cy.get('#movie-overview')}
    releaseDateCalendar() {
        return cy.get('#movie-releaseDate')}
    productionCompaniesSelect() {
        return cy.get('#movie-productionCompanies')}
    directorsSelect() {
        return cy.get('#movie-director')}
    castSelect() {
        return cy.get('#movie-cast')}
    cancelBtn() {
        return cy.get('#cancel-save')}
    saveBtn() {
        return cy.get('#save-entity')}
    }

export default moviesEditPage