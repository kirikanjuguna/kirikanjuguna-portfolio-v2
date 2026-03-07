import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  const { name, email, message } = await req.json()

  try {

    /* Email TO YOU */

    await resend.emails.send({
      from: "Portfolio Contact <contact@kirikanjuguna.com>",
      to: "njugunakirika@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })


// 2. Confirmation to the USER
    await resend.emails.send({
      from: "E. Kirika Njuguna <hello@kirikanjuguna.com>", // Professional touch
      to: email, 
      subject: "Message received — I'll get back to you",
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Hey ${name},</h2>
          <p>Thanks for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          <p>Best,<br /><strong>E. Kirika Njuguna</strong></p>
        </div>
      `
    })

    return Response.json({ success: true })

  } catch (error) {

    return Response.json({ error: "Failed to send message" }, { status: 500 })

  }

}