"use client";

import { useState, type ReactNode } from "react";

const categories = [
  "Denim & Jeans",
  "Woven Apparel",
  "Knitwear",
  "Underwear & Loungewear",
  "Babywear / Children's Apparel",
  "Ready-to-Wear / Private Label",
  "Activewear / Sportswear",
  "Other / Not Sure Yet"
];

function FieldLabel({
  htmlFor,
  children,
  optional = false
}: {
  htmlFor: string;
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-ink-900">
      {children}
      {optional ? <span className="font-medium text-stone-500"> optional</span> : null}
    </label>
  );
}

const inputClass =
  "mt-2 min-h-12 w-full rounded-panel border border-stone-300 bg-white px-4 py-3 text-sm text-ink-900 shadow-line transition placeholder:text-stone-500 focus:border-denim-700 focus:outline-none focus:ring-2 focus:ring-denim-700/20";

export function ProductionInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-panel border border-stone-200 bg-white p-5 shadow-soft sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {/* TODO: Integrate with a verified form service or secure server action. Do not expose API keys in client code. File upload is intentionally UI-only until backend storage/scanning is configured. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
          <input id="full-name" name="fullName" type="text" autoComplete="name" required maxLength={120} className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="company-name">Company Name</FieldLabel>
          <input id="company-name" name="companyName" type="text" autoComplete="organization" required maxLength={160} className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={180} className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={60} className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="country">Country</FieldLabel>
          <input id="country" name="country" type="text" autoComplete="country-name" required maxLength={80} className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="product-category">Product Category</FieldLabel>
          <select id="product-category" name="productCategory" required className={inputClass}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="quantity">Estimated Quantity / MOQ</FieldLabel>
          <input id="quantity" name="estimatedQuantity" type="text" required maxLength={120} placeholder="Example: 500 pcs per style" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="target-price" optional>
            Target Price Range
          </FieldLabel>
          <input id="target-price" name="targetPriceRange" type="text" maxLength={120} placeholder="Example: FOB target range" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="fabric-details" optional>
            Fabric / Material Details
          </FieldLabel>
          <textarea id="fabric-details" name="fabricDetails" rows={4} maxLength={1200} placeholder="Fabric composition, GSM, wash, trims, labels, packaging, or reference details." className={inputClass} />
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold text-ink-900">Tech Pack Available?</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex min-h-12 items-center gap-3 rounded-panel border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-700 shadow-line"
              >
                <input
                  type="radio"
                  name="techPackAvailable"
                  value={option}
                  required
                  className="h-4 w-4 accent-denim-800"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <FieldLabel htmlFor="timeline">Timeline</FieldLabel>
          <input id="timeline" name="timeline" type="text" required maxLength={140} placeholder="Example: samples in 3 weeks, bulk in 8 weeks" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="tech-pack-file" optional>
            Tech Pack Upload Placeholder
          </FieldLabel>
          <input
            id="tech-pack-file"
            name="techPackFilePlaceholder"
            type="file"
            disabled
            className="mt-2 w-full rounded-panel border border-dashed border-stone-300 bg-stone-100 px-4 py-3 text-sm text-stone-600"
          />
          <p className="mt-2 text-xs leading-5 text-stone-500">
            File upload will be enabled after secure backend storage is configured.
          </p>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <textarea id="message" name="message" rows={6} required maxLength={2500} placeholder="Tell us what you want to produce, target market, fit requirements, packaging needs, and any important technical details." className={inputClass} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-delivery-note" className="text-xs leading-6 text-stone-500">
          Submission delivery is disabled until a secure form service or server action is connected.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-panel bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-line transition-colors hover:bg-denim-800 focus-visible:outline-denim-600"
        >
          Submit Production Inquiry
        </button>
      </div>
      <div aria-live="polite">
        {submitted ? (
          <p className="mt-5 rounded-panel border border-denim-100 bg-denim-100 px-4 py-3 text-sm font-medium text-denim-900" role="status">
            Thanks. The inquiry form is ready for integration, but delivery is not connected yet. Please connect a secure form service before launch.
          </p>
        ) : null}
      </div>
    </form>
  );
}
