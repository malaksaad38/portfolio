"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {MailCheck, Pencil, Send, User} from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Invalid email address.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validate()) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({name: "", email: "", subject: "", message: ""});
                setErrors({});
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="
                border-2 border-red-500/50 rounded-xl p-6 md:p-8 px-4 md:px-6
                bg-gradient-to-br from-red-500/10 to-red-400/5
                backdrop-blur-md

            "
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h2 className="font-black text-red-600 dark:text-red-400 mb-6 uppercase tracking-wider">
                Send Me a Message
            </h2>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4">
                {/* NAME */}
                <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-red-600 dark:text-red-400/60"/>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({...formData, name: e.target.value})
                        }
                        className="w-full pl-10 bg-gray-900/50 border border-red-500/30 rounded-lg px-4 py-3
                        text-foreground/80 placeholder-gray-600 focus:outline-none focus:border-red-400
                        focus:shadow-lg focus:shadow-red-500/20 transition-all font-semibold text-sm md:text-base"
                    />
                    {errors.name && <p className="text-red-600 dark:text-red-400 mt-1 text-sm">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div className="relative">
                    <MailCheck className="absolute left-3 top-3 w-5 h-5 text-red-600 dark:text-red-400/60"/>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({...formData, email: e.target.value})
                        }
                        className="w-full pl-10 bg-gray-900/50 border border-red-500/30 rounded-lg px-4 py-3
                        text-foreground/80 placeholder-gray-600 focus:outline-none focus:border-red-400
                        focus:shadow-lg focus:shadow-red-500/20 transition-all font-semibold text-sm md:text-base"
                    />
                    {errors.email && <p className="text-red-600 dark:text-red-400 mt-1 text-sm">{errors.email}</p>}
                </div>
            </div>

            {/* SUBJECT */}
            <div className="relative mb-4">
                <Pencil className="absolute left-3 top-3 w-5 h-5 text-red-600 dark:text-red-400/60"/>
                <input
                    type="text"
                    placeholder="Project Subject"
                    value={formData.subject}
                    onChange={(e) =>
                        setFormData({...formData, subject: e.target.value})
                    }
                    className="w-full pl-10 bg-gray-900/50 border border-red-500/30 rounded-lg px-4 py-3
                    text-foreground/80 placeholder-gray-600 focus:outline-none focus:border-red-400
                    focus:shadow-lg focus:shadow-red-500/20 transition-all font-semibold text-sm md:text-base"
                />
                {errors.subject && <p className="text-red-600 dark:text-red-400 mt-1 text-sm">{errors.subject}</p>}
            </div>

            {/* MESSAGE */}
            <div className="relative mb-4">
                <Pencil className="absolute left-3 top-3 w-5 h-5 text-red-600 dark:text-red-400/60"/>
                <textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({...formData, message: e.target.value})
                    }
                    className="w-full md:h-72 pl-10 bg-gray-900/50 border border-red-500/30 rounded-lg px-4 py-3
                    text-foreground/80 placeholder-gray-600 focus:outline-none focus:border-red-400
                    focus:shadow-lg focus:shadow-red-500/20 transition-all resize-none font-semibold text-sm md:text-base"
                />
                {errors.message && <p className="text-red-600 dark:text-red-400 mt-1 text-sm">{errors.message}</p>}
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                className="
                w-full md:px-6 px-4 py-4 rounded-lg border border-red-500 text-red-700 dark:text-red-300 font-black
                tracking-widest uppercase bg-gradient-to-r from-red-500/20 to-red-400/10
                hover:from-red-500/40 hover:to-red-400/20 transition-all hover:scale-102
                hover:shadow-lg hover:shadow-red-500/40 flex items-center justify-center gap-3
                text-sm md:text-base
            "
            >
                <Send className="w-5 h-5 text-red-700 dark:text-red-300"/>
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>


            {/* STATUS MESSAGE */}
            {status === "success" && (
                <p className="text-green-600 dark:text-green-400 mt-4 text-center font-semibold">
                    ✓ Message Sent Successfully!
                </p>
            )}

            {status === "error" && (
                <p className="text-red-600 dark:text-red-400 mt-4 text-center font-semibold">
                    ✗ Failed to send message. Please check the errors above.
                </p>
            )}
        </motion.form>
    );
}
