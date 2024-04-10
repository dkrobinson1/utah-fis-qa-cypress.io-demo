class personEditPage {
    getPersonEditHeading() {
        return cy.get('#qaCertApp\.person\.home\.createOrEditLabel > span')}
    getPersonNameInput(){
        return cy.get('#person-name')}
    getPersonBirthDateInput(){
        return cy.get('#person-birthday')}
    getPersonBiographyInput(){
        return cy.get('#person-biography')}
    getPersonProfilePathInput(){
        return cy.get('#person-profilePath')}
    getPersonHomePageInput(){
        return cy.get('#person-homepage')}
    getPersonAlsoKnownAsInput(){
        return cy.get('#person-alsoKnownAs')}
    getPersonEditSaveBtn(){
        return cy.get('#save-entity')}
    getPersonEditBackBtn(){
        return cy.get('#cancel-save')}

}
export default personEditPage