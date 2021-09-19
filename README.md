tech test for team kinetic 
So I have set up a little stub of an API for you to access and build something around. I have included the instructions and objectives below. At this point I am not concerned so much with how you complete the task, just be willing to justify the decisions you make. If you have any questions please don't hesitate to get in touch, I will not be scoring down anyone for asking questions, I also don't expect you to instantly understand our API and data structures but you can take a look around here (all logins are demo@teamkinetic.co.uk and password);

https://demo.teamkinetic.co.uk

VERY Basic Structure

We have opportunities that have sessions (sometimes only a single flexible session but that is not important right now). The opportunity itself is full of useful information about what goes on, location, which provider is running it, their details and so on.

Volunteers join sessions (subject to a eligibility check) , view sessions, choose sessions, leave sessions, log hours etc.
Instructions

1 - The API requires authentication using the http headers key = 16F1D714-C22F-4464-84F4-C463S657GAAF and pwd = kAjj9rPrxE6QYzj/47/oyQ== 
2 - The GUID for the demo volunteer which you need is 846E2514-A679-41D1-AB3B-DEA93219F4B9
3 - The docs for the API are available here https://teamkinetictechtest.docs.apiary.io/

4 - All access must be via HTTPS

5 - This is all demo data so you can write and read as much as you want

Example curl to get the opp details for oppid = 1;

curl --location --request GET 'https://api.teamkinetic.co.uk/techtest/opps.htm?action=oppDetails&oppId=1' \
--header 'key: 16F1D714-C22F-4464-84F4-C463S657GAAF' \
--header 'pwd: kAjj9rPrxE6QYzj/47/oyQ==' \

Objectives

1 - Produce a SPA with appropriate menus/views








2 - Illustrate drilling down into opportunity/session details







3 - Perform some sort of updating/putting API task (eg join session)

4 - Perform some sort of upload to the API (eg post opportunity document by volunteer)

5 - Illustrate how you would implement internationalisation (alt language is returned by the search API for the opportunity name and description). We want to see some way of switching between English and Welsh and the output updating accordingly.

6 - Critique the API/access/security/bugs etc (there are some intentional issues)

