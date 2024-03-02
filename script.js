cy.get(`[data-ns-test="${testId}"]`).parent().then(ans => {
    let text = ans.text();
    console.log(text); // Add this line
    text = text.replace('Test1', '').replace('Test2', '').trim();
    expect(text).to.eq(`Answer: ${expectedAnswer}`);
});