// add_P39.js
module.exports = id => ({
  id,
  claims: {
    P39: {
      value: 'Q111784', // position held: Scottish Secretary
      references: {
        P143: 'Q328',    // imported from: English Wikipedia
        P4656: 'https://en.wikipedia.org/wiki/Secretary_of_State_for_Scotland' // import URL
      },
    }
  }
})
