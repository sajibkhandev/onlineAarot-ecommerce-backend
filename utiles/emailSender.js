const nodemailer = require("nodemailer");

const emailSender = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "mern2504cit2@gmail.com",
        service: "gmail",
        auth: {
            user: "mern2504cit2@gmail.com",
            pass: "gosfobputmyhpvvu",
        },
    });
    const info = await transporter.sendMail({
        from: '"OnlineAarot" <mern2503cit2@gmail.com>',
        to: email,
        subject: "Email Verification",
        text: "Hello world?",
        html: `<div style="width:400px;height:350px;background:#0ff;border-radius:10px;padding:20px 40px;text-align:center"><h1>Email Verification</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione, sed, eius qui quibusdam eosdignissimos modi. Vel repellendus molestiae deserunt consectetur sit neque magnam, possimus ab voluptates autem, earum ut, sapiente impedit nemo maxime repudiandae.</p><button style="margin:10px 0;background:#00f;padding:10px 30px;border:0;color:#fff;border-radius:10px">Verify Email</button><br><br><div style=display:flex;column-gap:20px;justify-content:center><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/fY0QwXPY/fb.avif style=border-radius:50% width=30></a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/fY0QwXPY/fb.avif style=border-radius:50% width=30></a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/fY0QwXPY/fb.avif style=border-radius:50% width=30></a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/fY0QwXPY/fb.avif style=border-radius:50% width=30></a></div></div>`,
    });

}

module.exports = emailSender