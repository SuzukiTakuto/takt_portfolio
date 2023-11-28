import { createTransport } from "nodemailer";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  const { name, email, msg } = await req.json();

  try {
    transporter.sendMail({
      from: "clax.tkt@gmail.com",
      to: email,
      subject: "お問い合わせ受け付けました",
      text: `
        名前
        ${name}
        
        メールアドレス
        ${email}
        
        お問い合わせ内容
        ${msg}
        `,
    });
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
