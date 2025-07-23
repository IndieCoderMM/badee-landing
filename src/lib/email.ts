import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceKey = import.meta.env.PUBLIC_EMAILJS_SERVICE_KEY;
const templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;

if (!publicKey || !serviceKey || !templateID) {
  throw new Error("Emailjs Credentials required.")
}

export function sendEmail(data: {email: string, feedback: string}) {
  emailjs.init({
    publicKey,
    blockHeadless: true,
    limitRate: {
      id: 'badee-site',
      throttle: 10000,
    },
  });

  return emailjs.send(serviceKey, templateID, {...data, time: new Date().toLocaleDateString()});
}
