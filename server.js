const express = require('express')
const { google } = require('googleapis')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const app = express()
const PORT = 5001

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(bodyParser.json())

const credentialsPath = path.join(__dirname, 'Google-Credential-key.json')
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'))

console.log(credentialsPath)

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || 'your-spreadsheet-id'

app.post('/submit', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, age, gender, courseName } =
      req.body

    const values = [
      [courseName, first_name, last_name, email, phone, age, gender, new Date()]
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:N',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values }
    })
    console.log(values)
    res
      .status(200)
      .json({ message: 'Data added to Google Sheets successfully!' })
  } catch (error) {
    console.error(
      'Error adding data to Google Sheets:',
      error.message,
      error.stack
    )
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
