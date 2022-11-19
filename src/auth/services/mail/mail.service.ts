import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'


@Injectable()
export class MailService {
  private transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    })
  }

  async sendActivationMail(to: string, link: string) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: '',
      html: `
        <div>
            <h1>Для активации пройдите по ссылке</h1>
            <a href="${link}">${link}</a>
        </div>
      `
    }
    await this.transporter.sendMail(mailOptions, (err, info)=>{
      if(err){
        console.log(err);
      }else{
        console.log(`sent` + info.response);
      }
    })
  }
}