class moviesSearchPage {
    getIDSort() {
        return cy.get('tr > :nth-child(1) > span')
    }
    movieSearchHeading() {
        return cy.get('#movie-heading > :nth-child(1)')
    }
    getMovieIDFromTable(idFromRow = 2) {
        return cy.get('tbody > :nth-child(' + idFromRow + ') > :nth-child(1)')
    }
    getMovieTitleFromTable(titleFromRow = 2) {
        return cy.get('tbody > :nth-child(' + titleFromRow + ') > :nth-child(2)')
    }
    getMovieOverviewFromTable(overviewFromRow = 2) {
        return cy.get('tbody > :nth-child(' + overviewFromRow + ') > :nth-child(3)')
    }
    getMovieRelDateFromTbl(relDateFromRow = 2) {
        return cy.get('tbody > :nth-child(' + relDateFromRow + ') > :nth-child(4)')
    }
    getMovieProdCompFromTbl(prodCompanyFromRow = 2) {
        return cy.get('tbody > :nth-child(' + prodCompanyFromRow + ') > :nth-child(5)')
    }
    getEntireMoviePageCard() {
        return cy.get('.jh-card')
    }
    page1Link() {
        return cy.get(':nth-child(3) > .page-link')
    }
    page2Link() {
        return cy.get(':nth-child(4) > .page-link')
    }
    page3Link() {
        return cy.get(':nth-child(5) > .page-link')
    }
    page4Link() {
        return cy.get(':nth-child(6) > .page-link')
    }
    page5Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    page6Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    page7Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    page8Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    page9Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    page10Link() {
        return cy.get(':nth-child(7) > .page-link')
    }
    pagePreviousLink() {
        return cy.get(':nth-child(2) > .page-link')
    }
    pageNextLink() {
        return cy.get(':nth-child(8) > .page-link')
    }
    pageFirstLink() {
        return cy.get(':nth-child(1) > .page-link')
    }
    pageLastLink() {
        return cy.get(':nth-child(9) > .page-link')
    }
    pageInfoText() {
        return cy.get('.info > span')
    }

    movieTitleSrch() {
        return cy.get(':nth-child(2) > input')
    }
    movieOverviewSrch() {
        return cy.get(':nth-child(3) > input')
    }
    getMovieTitleSrch() {
        return cy.get(':nth-child(2) > input')
    }
    sortByTitleLink() {
        return cy.get('tr > :nth-child(2) > span')
    }
    sortByOverviewLink() {
        return cy.get('tr > :nth-child(3) > span')
    }
    sortByReleaseDateLink() {
        return cy.get('thead > tr > :nth-child(4) > span')
    }
    getMovieTitleSrch() {
        return cy.get(':nth-child(2) > input')
    }
    getMovieClearBtn() {
        return cy.get(':nth-child(1) > :nth-child(1) > .btn')
    }
    movieProdCompanyDropDwn() {
        return cy.get(':nth-child(5) > select')
    }
    getMovieItemsPerPageDropDwn() {
        return cy.get('[classname="justify-content-start"] > select')
    }
    getMovieDisplayingItemsTxt() {
        return cy.get('.info > span')
    }
}
export default moviesSearchPage