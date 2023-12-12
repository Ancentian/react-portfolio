import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    const posturl = `${process.env.REACT_APP_MAILCHIMP}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}$id=`
  return (
    <>
    <MailchimpSubscribe
        url={posturl}
        render={( subscribe, status, message ) => (
            <Newsletter
            status={status}
            message={message}
            onValidated={FormData => subscribe(FormData)}
            />
        )} 
        />
    </>
  )
}
