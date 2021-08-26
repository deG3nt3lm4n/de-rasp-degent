const dotenv = require('dotenv').config()

const {Client} = require('@notionhq/client')

// init client
const notion = new Client({
  auth: process.env.NOTION_KEY
})

const listDatabases = async () => {
  const res = await notion.databases.list()
  console.log(res)
}

listDatabases()