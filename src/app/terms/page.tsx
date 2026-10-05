import type { Metadata } from "next"
import { LegalDocumentView } from "@/components/legal-document"
import { termsOfService } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of PredictiveMind and related services operated by The Rewire Lab.",
}

export default function TermsPage() {
  return <LegalDocumentView document={termsOfService} />
}
