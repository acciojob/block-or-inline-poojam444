//your code here
body: () => {
  cy.get(`[data-ns-test="${testId}"]`).should('have.length', 2);

  cy.get(`[data-ns-test="${testId}"]`).parent().then(parentElement => {
    // Log the parent element's text
    console.log('Parent element text:', parentElement.text());

    // Use Cypress contains for a clearer check
    cy.get(parentElement).contains(`Answer: ${expectedAnswer}`).should('exist');
  });
}
