FlowRouter.route( '/', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Umm... im confused. I'm going to the login page..." );
    BlazeLayout.render( 'loginView', { main: 'loginView' } );
  },
  name: 'loginView' // Optional route name.
});

FlowRouter.route( '/loginView', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the loginView page!" );
    BlazeLayout.render( 'loginView', { main: 'loginView' } );
  },
  name: 'loginView' // Optional route name.
});

FlowRouter.route( '/teamsPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the teamsPg page!" );
    BlazeLayout.render( 'teamsPg', { main: 'teamsPg' } );
  },
  name: 'teamsPg' // Optional route name.
});

FlowRouter.route( '/verifyPg', {
  action: function() {
    // Do whatever we need to do when we visit this page
    console.log( "Okay, we're on the teamsPg page!" );
    BlazeLayout.render( 'verifyPg', { main: 'verifyPg' } );
  },
  name: 'verifyPg' // Optional route name.
});
