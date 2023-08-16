import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email", email);

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await res.json();

    if (data.success) {
      setEmail("");
      setMessage("Thanks for joining. We'll keep you updated.");
    } else {
      setEmail("");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form className="mx-auto mt-10 mb-4 flex max-w-md gap-x-4 text-stone-600">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          value={email}
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={handleSubmit}
        >
          Notify me
        </button>
      </form>
      <label className="text-stone-500 text-sm">{message}</label>
    </div>
  );
}
