import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Contact DuneAura</p>

          <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">
            Let&apos;s plan your desert escape.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Have a question about an experience, need help choosing a tour, or simply want to know
            more? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-clay">Get In Touch</p>

            <h2 className="mt-4 text-4xl leading-tight">
              We&apos;re here before, during, and after your journey.
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              Whether you are planning your first desert adventure or looking for something special,
              reach out and let us help you find the right experience.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-clay">Email</p>
                <p className="mt-2 text-lg">hello@duneaura.com</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-clay">Phone</p>
                <p className="mt-2 text-lg">+971 50 000 0000</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-clay">Availability</p>
                <p className="mt-2 text-muted-foreground">Daily · 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border border-border bg-card p-7 md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-clay">Send A Message</p>

              <h2 className="mt-3 text-3xl">Tell us what you&apos;re looking for.</h2>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-clay"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-clay"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  What can we help with?
                </label>

                <select
                  id="subject"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-clay"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="booking">Booking assistance</option>
                  <option value="experience">Choosing an experience</option>
                  <option value="private">Private experience</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us a little about your plans..."
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-clay"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-clay px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Prefer To Explore?</p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl md:text-4xl">
            Discover your next desert experience.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Browse our carefully selected experiences and find the journey that feels right for you.
          </p>

          <a
            href="/experiences"
            className="mt-7 inline-block rounded-md bg-clay px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Experiences
          </a>
        </div>
      </section>
    </main>
  );
}
