"use server"

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  address: string
  message: string
}) {
  try {
    // In a production environment, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll create a mailto link format that can be enhanced later

    const emailBody = `
お問い合わせがありました

【お名前】
${formData.name}

【メールアドレス】
${formData.email}

【お電話番号】
${formData.phone}

【ご住所】
${formData.address || "未記入"}

【お問い合わせ内容】
${formData.message}
    `.trim()

    // Here you would integrate with an email service
    // For example, using Resend:
    // await resend.emails.send({
    //   from: 'noreply@gohei.com',
    //   to: 'gohei.98331234@gmail.com',
    //   subject: `【豪兵】お問い合わせ - ${formData.name}様`,
    //   text: emailBody,
    // })

    console.log("Email would be sent to: gohei.98331234@gmail.com")
    console.log("Email content:", emailBody)

    return { success: true, message: "お問い合わせを受け付けました。" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "送信に失敗しました。お電話でお問い合わせください。" }
  }
}
