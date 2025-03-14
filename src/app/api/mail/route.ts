import { createTransport } from "nodemailer";
import { NextResponse, type NextRequest } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const { name, email, msg } = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // タイムスタンプ取得
    const now = new Date();
    const timestamp = now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

    // スプレッドシートに書き込み
    const values = [[timestamp, name, email, msg]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "シート1!A:D",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
