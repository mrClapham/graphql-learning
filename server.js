const express = require('express');
const port = 4000;
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphiql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, ()=>{
    console.log("Listening");
});