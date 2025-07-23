import { useState, type FormEventHandler } from 'react'
import { FaPaperPlane } from 'react-icons/fa6'
import { sendEmail } from 'lib/email';

const FeedbackForm = () => {
  const [alert, setAlert] = useState({
    type: "idle",
    message: ""
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget.closest('form');
    if (!form) return;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const feedback = formData.get("feedback") as string;

    if (!email || feedback.trim().length === 0) {
      setAlert({type: "error", message: "Please fill in all fields."})
      return
    }

    try {
      await sendEmail({email, feedback});
      form.reset();
      setAlert({type: "success", message: "Thanks for your feedback!"})
    } catch (error) {
      console.error(error)
      setAlert({type: "error", message: "Failed to send feedback!"})
    } finally {
      setTimeout(() => {
        setAlert({type: "idle", message: ""})
      }, 3000)
    }
  }

  return (
    <div className='mt-6 w-full'>
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="mx-auto border-t w-full border-secondary/80" />
				</div>
				<div className="relative flex justify-center">
					<span className="px-6 text-sm font-medium tracking-wider bg-background text-text/50 uppercase">
          Contact Us
					</span>
				</div>
			</div>

    <form onSubmit={handleSubmit} className='relative gap-4 mt-6 group p-2 flex flex-col w-full'>
    <input
      type='email'
      name='email'
      placeholder='Your Email'
      required
      className='w-full px-4 py-2 bg-secondary/60 rounded-md focus:outline-none'></input>
    <textarea
      name='feedback'
      placeholder='Write feedback...'
      required
      minLength={5}
      rows={3}
      className='w-full px-4 py-2 bg-secondary/60 rounded-md focus:outline-none resize-none'></textarea>

<div className="flex items-center justify-between">
    {alert.type !== "idle" && (
      <div className={`text-sm ${alert.type === "success" ? 'text-green-600' : 'text-red-600'}`}>
        {alert.message}
      </div>
    )}
      <button type="submit" className='group ml-auto px-2 py-1 bg-neutral-400 text-white flex items-center justify-center gap-1 group-invalid:cursor-not-allowed cursor-pointer group-valid:bg-text/80 group-valid:hover:bg-text rounded-md self-end'>
      <FaPaperPlane className={`transition-transform duration-300 w-4 h-4`} />
      Send
      </button>
</div>
    </form>
    </div>
  )
}


export default FeedbackForm;
