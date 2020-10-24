
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=src\\dataSets\\srs2874_part1of2.mdb;');
const { ApolloServer, } = require('apollo-server');
const resolvers = {

    Query: {

        tables: async () =>
        {

            try
            {

                const data =  await connection.schema(20)
                
                
                let x = await   connection.query(`SELECT TOP 5 * FROM grp ORDER BY grp_id;` )

                console.log(x)
            //    return data.map(async e  => {

            //     // let x = await   connection.query(`SELECT * FROM ${e.TABLE_NAME} limit 1;` )
            //    })
               
            } catch (error)
            {

                console.log(error)
            }

        }
    },
    Mutation: {

        testt: () =>
        {
            return 'hello hello'
        }
    }

}


module.exports = resolvers