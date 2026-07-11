import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, checkIn, checkOut, adults, children, message } = data;

    // Configuring SMTP using Hostinger's standard port (change to smtp.gmail.com if it's Google Workspace)
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: 'info@preettech.com',
        pass: 'PreetTech08@123'
      }
    });

    const mailOptions = {
      from: 'info@preettech.com',
      to: 'cedarahotelsandretreats@gmail.com',
      subject: `New Booking Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2653d9;">New Booking Inquiry via Cedara Hotels</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Check-In:</strong> ${checkIn}</p>
          <p><strong>Check-Out:</strong> ${checkOut}</p>
          <p><strong>Adults:</strong> ${adults}</p>
          <p><strong>Children (6-11 YRS):</strong> ${children}</p>
          <p><strong>Special Requests/Message:</strong><br/>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Fallback if Hostinger fails, let's try Gmail SMTP just in case they use Google Workspace
    try {
      const fallbackTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@preettech.com',
          pass: 'PreetTech08@123'
        }
      });
      
      const mailOptions = {
        from: 'info@preettech.com',
        to: 'cedarahotelsandretreats@gmail.com',
        subject: `New Booking Inquiry from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2653d9;">New Booking Inquiry via Cedara Hotels</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Check-In:</strong> ${checkIn}</p>
            <p><strong>Check-Out:</strong> ${checkOut}</p>
            <p><strong>Adults:</strong> ${adults}</p>
            <p><strong>Children (6-11 YRS):</strong> ${children}</p>
            <p><strong>Special Requests/Message:</strong><br/>${message}</p>
          </div>
        `,
      };

      await fallbackTransporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Email sent successfully via fallback!' });
    } catch (fallbackError: any) {
      console.error('Fallback failed:', fallbackError);
      return NextResponse.json({ success: false, error: fallbackError.message }, { status: 500 });
    }
  }
}
