class moviesEntityPage {
    pageHeading() {
        return cy.get('#movie-heading > :nth-child(1)')}
    sortByIDLnk() {
        return cy.get('tr > :nth-child(1) > span')}
    sortByTitleLnk() {
        return cy.get('tr > :nth-child(2) > span')}
    sortByOverviewLnk() {
        return cy.get('tr > :nth-child(3) > span')}
    sortByReleaseDatelnk() {
        return cy.get('thead > tr > :nth-child(4) > span')}
    sortByProdCompanyLnk() {
        return cy.get('tr > :nth-child(5) > span')}
    movieIDLnk(rowOfIDLnk) {
        return cy.get('tbody > :nth-child(' + rowOfIDLnk + ') > :nth-child(1) > .btn')}
    createANewMovieBtn() {
        return cy.get('#jh-create-entity')}
    viewMovieBtn(viewOnRow = 1) {
        return cy.get(':nth-child(' + viewOnRow + ') > .text-right > .btn-group > .btn-info')}       
    editMovieBtn(editOnRow = 1) {
        return cy.get(':nth-child(' + editOnRow + ') > .text-right > .btn-group > .btn-primary')}
    deleteMovieBtn(deleteOnRow = 1) {
        return cy.get(':nth-child(' + deleteOnRow + ') > .text-right > .btn-group > .btn-danger')}      
    deleteMovieConfirmDeleteBtn() {
        return cy.get('#jhi-confirm-delete-movie')}
    deleteMovieCancelDeleteBtn() {
        return cy.get('.btn-secondary')}       
    paginationPageOneLnk() {
        return cy.get(':nth-child(3) > .page-link')}         
    paginationPageTwoLnk() {
        return cy.get(':nth-child(4) > .page-link')}         
    paginationPageThreeLnk() {
        return cy.get(':nth-child(5) > .page-link')}         
    paginationNextPageLnk() {
        return cy.get(':nth-child(6) > .page-link')}         
    paginationPreviousPageLnk() {
        return cy.get(':nth-child(2) > .page-link')}         
    paginationGotoFirstPageLnk() {
        return cy.get(':nth-child(1) > .page-link')}          
    paginationGotoLastPageLnk() {
        return cy.get(':nth-child(7) > .page-link')} 
    getMovieIDDataFromTable(getIDOnRow = 1) {
        return cy.get('tbody > :nth-child(' + getIDOnRow +') > :nth-child(1)')}       
    getMovieTitleDataFromTable(getTitleOnRow = 1) {
        return cy.get('tbody > :nth-child(' + getTitleOnRow +') > :nth-child(2)')}          
    getMovieReleaseDateDataFromTable(getReleaseDateOnRow = 1) {
        return cy.get('tbody > :nth-child(' + getReleaseDateOnRow + ') > :nth-child(4)')} 
    getMovieProdCompanyDataFromTable(getProdCompOnRow = 1) {
        return cy.get('tbody > :nth-child(' + getProdCompOnRow + ') > :nth-child(5)')} 
    getMovieOverviewFromTable(getOverviewOnRow = 1) {
        return cy.get('tbody > :nth-child(' + getOverviewOnRow +') > :nth-child(3)')}   
        
    }
export default moviesEntityPage