import { Mail, MapPin, Phone } from "lucide-react";
import { contactEmail, officeLocations, phoneNumbers } from "@/content/contact";

export function OfficeLocations() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {officeLocations.map((office) => (
        <article
          key={office.name}
          className="rounded-panel border border-stone-200 bg-white p-6 shadow-line"
        >
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-panel bg-denim-100 text-denim-800">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-ink-900">{office.name}</h3>
          <address className="mt-3 not-italic text-sm leading-7 text-stone-600">
            {office.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          {office.phone ? (
            <a
              href={phoneNumbers.find((phone) => phone.value === office.phone)?.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-denim-800 hover:text-ink-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {office.phone}
            </a>
          ) : null}
        </article>
      ))}
      <article className="rounded-panel border border-denim-100 bg-denim-100/60 p-6 shadow-line">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-panel bg-white text-denim-800">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-ink-900">Email</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          For international production inquiries, sourcing requests, and USA office communication.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-5 inline-flex text-sm font-semibold text-denim-800 hover:text-ink-900"
        >
          {contactEmail}
        </a>
      </article>
    </div>
  );
}
