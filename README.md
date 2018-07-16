# jwtGenerator
Microservice running on the same server which generates a valid JSON Web Token

I originally designed this to be used by FileMaker Server applications, but this can really be used by anything.

##

This will take in a base64 encoded claim, and a base64 encoded secret key and then return a valid jwt to pass into your service of choice. 
The 'jsonwebtoken' library automatically generates the header, so all you need is the claim and the key.

##
You will need to have this running on an unused port and access it through the url 

* URL Components:
localhost:<port>?
  payload=<base64 encoded claim>
  &secret=<base64 encoded private key>
*
  
It was initially intended to be used on the machine calling it locally. Passing private key information over the web is not recommended. If someone can think of a way to  do this safely, then be my guest to change this code. Otherwise, I'll leave it here.
