class personDetailPage {
    getPersonDetailHeading() {
        return cy.get('h2')}
    getPersonDetailNameTxt(){
        return cy.get('.jh-entity-details > :nth-child(2)')}
    getPersonDetailBirthDateTxt(){
        return cy.get('.jh-entity-details > :nth-child(4) > span')}
    getPersonDetailBiography(){
        return cy.get('.jh-entity-details > :nth-child(6)')}
    getPersonDetailProfilePathTxt(){
        return cy.get('.jh-entity-details > :nth-child(8)')}
    getPersonDetailHomePagetxt(){
        return cy.get('.jh-entity-details > :nth-child(10)')}
    getPersonDetailAlsoKnownAstxt(){
        return cy.get('.jh-entity-details > :nth-child(12)')}
    getPersonDetailBackBtn(){
        return cy.get('.btn-info')}
    getPersonDetailEditBtn(){
        return cy.get('.btn-primary')}
    getNameSortCtrl(){
        return cy.get('tr > :nth-child(2) > span')}
    getBdateSortCtrl(){
        return cy.get('thead > tr > :nth-child(3) > span')}

}
export default personDetailPage