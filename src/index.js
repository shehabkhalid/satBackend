// const ADODB = require('node-adodb');
// const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=src\dataSets\srs2874_part1of2.mdb;');
const { ApolloServer, } = require('apollo-server');
const resolvers = require('./resolvers')
const fs = require('fs')



const server = new ApolloServer({
    typeDefs: fs.readFileSync('src/schema.graphql', 'utf8'),
    resolvers
})

server.listen().then(({ url }) =>
{
    console.log(`🚀 Server ready at ${url}`);
});
// const getData = async () =>
// {
//     try
//     {

//         const data = await connection.query('select * from non_geo')
//         console.log(JSON.stringify(data, null, 3));
//         //console.log(new Date().toLocaleTimeString())

//     } catch (error)
//     {
//         console.log(error)
//     }

// }
// getData()

//   connection
//   .schema(20)
//   .then(schema => {
//     console.log(JSON.stringify(schema, null, 2));
//   })
//   .catch(error => {
//     console.error(error);
//   });