import type { Metadata } from "next"
import { LegalDocumentView } from "@/components/legal-document"
import { privacyPolicy } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Rewire Lab collects, uses, and protects personal information for PredictiveMind and related services.",
}

export default function PrivacyPage() {
  return <LegalDocumentView document={privacyPolicy} />
}
