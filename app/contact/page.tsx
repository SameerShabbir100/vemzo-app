import { Contact } from "@/components/contact/contact";
import { ContactMap } from "@/components/contact/contact-map";

export default function ContactPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Contact />
        <ContactMap />
      </div>
    </main>
  );
}