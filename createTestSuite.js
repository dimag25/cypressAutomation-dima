const fs = require("fs");


let suites = ['LoginLogout', 'Newsletter', 'Regression', 'UserRegistration'];



suites.forEach(suite => {
    fs.readFile('template/suite.spec.js', function (err, data) {
        console.log("Reading from file...");
        if (err) {
            return console.error(err);
        }
        let testSuite = data.toString().replace('Template.json', suite + '.json');
        testSuite = testSuite.replace('Suite: TemplateSuite', 'Suite: '+suite)
        fs.writeFile("cypress/integration/"+suite+".suite.spec.js", testSuite, function (err) {
            console.log("Writing to file...");    
            if (err) {
                return console.log("error");
            }
        });
    });    
});