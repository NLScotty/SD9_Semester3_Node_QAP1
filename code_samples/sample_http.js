// Required to use the HTTP Object
const http = require('http');

// An application that uses node's HTTP to create a simple server.
// When called with a get(or any other request other than post) request, responds with a form that asks of a name.
// When called with a post request, will display the name included in the body of the request
// The parameters here refer to the request and response of a HTTP request.
const server = http.createServer((req, res) =>{
    // I use console.log to display the information about the incomming HTTP Request.
    // This part will display on the console "INCOMING REQUEST" followed by the 
    // request type (GET, POST, etc...) and the URL.
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);
    // If we receive a post request, we assume it is from the form, we assume it is
    // from the form and attempt to handle it. In an actual application, one would also
    // check the url before generating a response
    if(req.method === 'POST'){
        // An empty string that we will put the information from the incoming request in.
        let body ='';

        // We read data by chunks. This will add the chunks to our empty string to get our information.
        req.on('data',(chunk) => {
            body+=chunk;
        });

        // Upon reading all the chunks, will preform the following code. I log the body of the request, then
        // I get the name and return it back to the user.
        req.on('end', () => {
            console.log(body);
            let name = body.split('=')[1];
            name = name.replace("+"," ");
            // I set the header type. In this case, send back a HTML file
            res.setHeader('Content-Type','text/html');
            // I set the response. This is the HTML of the page.
            res.end('<h1>'+name+'</h1>');
        })
    }
    // If it is not a POST request, we return the simple form. This will be the
    // first page navigated to if using a browser.
    else{
        // I set the header type. In this case, I also send back a HTML file
        res.setHeader('Content-Type','text/html');
        // I set the response. This is the HTML of the page. This one includes a form that can be used to send a post request.
        res.end('<form method="POST"> Enter your Name! <input type="text" name="name"></input><button type ="submit"> Submit </button></form>');
    }
})


// We set up the server that handles incoming HTTP requests on port 5000

server.listen(5000);