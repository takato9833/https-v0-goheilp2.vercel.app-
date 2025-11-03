"use server"

export async function submitToGoogleSheets(formData: {
  name: string
  email: string
  phone: string
  address: string
  message: string
}) {
  try {
    const SPREADSHEET_ID = "15DzTwHlmoa-RTFTpgm77WNOhIw6zUQUtiRDCVDLWeA4"
    const SHEET_NAME = "シート1"

    // Format the data as a row for Google Sheets
    const timestamp = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
    const rowData = [timestamp, formData.name, formData.email, formData.phone, formData.address || "", formData.message]

    // Google Sheets API endpoint
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=RAW`

    // Make the API request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GOOGLE_SHEETS_API_KEY}`,
      },
      body: JSON.stringify({
        values: [rowData],
      }),
    })

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`)
    }

    return { success: true, message: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。" }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    return {
      success: false,
      message: "送信に失敗しました。お手数ですがお電話（080-4144-2009）でお問い合わせください。",
    }
  }
}
