const KahootSpam = require('kahoot-spam')
var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['id', 'amount', "basename_of_the_bot"], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  id: ' + result.id);
    console.log('  amount: ' + result.amount);
    console.log('  basename: ' + result.basename_of_the_bot);
    let api = KahootSpam
    api.spamWithAnswers(result.id, result.basename_of_the_bot, result.amount, true)
});

