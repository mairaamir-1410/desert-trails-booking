import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const faqs = [
    {
      question: "How do I book a desert experience?",
      answer:
        "Browse our experiences, select the journey you like, review the details, and continue to the booking process. Each experience page provides the important information you need before booking.",
    },
    {
      question: "What is included in my experience?",
      answer:
        "Inclusions depend on the experience you choose. Each experience clearly explains what is included, such as transfers, activities, meals, guides, or equipment.",
    },
    {
      question: "Can I choose a private experience?",
      answer:
        "Some experiences may be available privately or can be arranged for your group. Contact our team and tell us what you are looking for.",
    },
    {
      question: "What should I wear for a desert experience?",
      answer:
        "Comfortable, lightweight clothing is generally recommended. Closed shoes are useful for activities involving sand and uneven terrain. Bring sunglasses, sunscreen, and a light layer for cooler evenings.",
    },
    {
      question: "Are desert experiences suitable for families?",
      answer:
        "Many experiences are suitable for families, although age and activity restrictions can vary. Always check the individual experience details before booking.",
    },
    {
      question: "Can I change or cancel my booking?",
      answer:
        "Cancellation and modification policies can vary depending on the experience. Please review the booking conditions associated with your selected experience or contact our team before making changes.",
    },
    {
      question: "Do you offer hotel transfers?",
      answer:
        "Selected experiences may include hotel transfers. Availability and pickup areas vary, so please check the details of your chosen experience before booking.",
    },
    {
      question: "How can I contact DuneAura?",
      answer:
        "You can contact our team through the Contact page. We are happy to help with questions about experiences, bookings, private arrangements, and trip planning.",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Frequently Asked Questions</p>

          <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl">
            Everything you need to know before you go.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            From booking and transfers to what to bring, find answers to the questions travelers ask
            most often.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border border-border bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6">
                <div className="flex items-start gap-5">
                  <span className="text-sm tracking-[0.15em] text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium">{faq.question}</span>
                </div>

                <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-border px-6 py-6 pl[4.25rem]">
                <p className="max-w-3xl leading-7 text-muted-foreground">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Still Have Questions?</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
            We&apos;re happy to help you plan your journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            If you cannot find the answer you are looking for, get in touch with our team and
            we&apos;ll help you choose the right experience.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-clay px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
