import type { PropsWithChildren } from "react";

const ContactForm = ({ children }: PropsWithChildren) => {
    const handleSubmit = () => {
        console.log('submitting!');
    }

    return (
        <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#0a0a14] p-8 rounded-2xl border border-[#e6c478]/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2 flex flex-col">
                        <label htmlFor="name" className="text-white font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="text-white p-2 bg-[#0f0f1a] border rounded-lg border-[#e6c478]/20 focus-visible:ring-[#e6c478]"
                            required
                        />
                    </div>
                    <div className="space-y-2 flex flex-col">
                        <label htmlFor="email" className="text-white font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="text-white p-2 bg-[#0f0f1a] border rounded-lg border-[#e6c478]/20 focus-visible:ring-[#e6c478]"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2 flex flex-col mb-6">
                    <label htmlFor="message" className="text-white font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="text-white p-2 bg-[#0f0f1a] border rounded-lg align-top border-[#e6c478]/20 focus-visible:ring-[#e6c478] min-h-32 max-h-32"
                        required
                    />
                </div>

                <a type="submit" className="bg-[#e6c478] hover:bg-[#d4b366] text-lg text-[#0a0a14] px-6 py-2 rounded-md flex flex-row items-center justify-center cursor-pointer">
                    {children}
                    <span className="font-bold">Send Message</span>
                </a>
            </form>
        </div>
    )
}

export default ContactForm;