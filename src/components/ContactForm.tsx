import { useRef, useState, type FormEvent, type PropsWithChildren } from "react";
import { toast } from "react-hot-toast";

const darkModeStyle = {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
}

const ContactForm = ({ children }: PropsWithChildren) => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const loading = toast.loading("Saving message...", { style: darkModeStyle });
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            const res = await response.json();

            if (!res.ok) {
                console.log("Something went wrong: ", res);
                toast.dismiss(loading);
                toast.error(res.message, { style: darkModeStyle })
            } else {
                toast.dismiss(loading);
                toast.success("Message submitted!", { style: darkModeStyle });
            }

            setIsLoading(false);
            form.current?.reset();
        } catch (error) {
            console.log("Something went very wrong: ", error);
            toast.dismiss(loading);
            toast.error("There was an error on the server, try again later.", { style: darkModeStyle });
            setIsLoading(false);
        }
    }

    return (
        <div className="lg:col-span-3">
            <form ref={form} onSubmit={handleSubmit} className="bg-[#0a0a14] flex flex-col p-8 rounded-2xl border border-[#e6c478]/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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

                <button type="submit" disabled={isLoading} className={`${isLoading ? 'bg-[#999999] hover:bg-[#999999] cursor-default' : 'bg-[#e6c478] hover:bg-[#d4b366] cursor-pointer'} text-lg text-[#0a0a14] px-6 py-2 rounded-md flex flex-row items-center justify-center`}>
                    {children}
                    <span className="font-bold">Send Message</span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm;