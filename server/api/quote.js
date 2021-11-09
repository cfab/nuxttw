export default async (req, res) => {
    let data = await fetch('https://api.quotable.io/random')
    data = await data.json()


    return {
      message: 'Hello World',
      someData: true,
      apiQuote: data
    }
  }
