//const AirtablePlus = require('airtable-plus')
//import { AirtablePlus } from 'airtable-plus'
import pkg from 'airtable-plus';
const AirtablePlus = pkg;

// baseID, apiKey, and tableName can alternatively be set by environment variables
const airtable = new AirtablePlus({
  baseID: process.env.AT_BASE_ID,
  apiKey: process.env.AT_API_KEY,
  // tableName: 'test',
})

export default async (req, res) => {

    let response = await airtable.read({ view:'Tout' }, { tableName: 'Agenda' })
    console.log(response)
    response = response.map((item) => {
        return {
          id: item.id,
          ...item.fields,
        }
      })
      return response
    // let data = await fetch('https://api.quotable.io/random')
    // data = await data.json()


    // return {
    //   message: 'Hello World',
    //   someData: true,
    //   apiQuote: data
    // }
  }
