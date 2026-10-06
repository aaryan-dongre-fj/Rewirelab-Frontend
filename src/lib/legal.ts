export type LegalBlock =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }

export type LegalDocument = {
  title: string
  updated: string
  blocks: LegalBlock[]
}

const entity = "The Rewire Lab Inc."
const product = "PredictiveMind™"
const identity = `${entity} (“we,” “our,” “us”) is an Ohio for-profit corporation, Ohio Secretary of State Entity No. 5182908, formed on February 14, 2024. We operate ${product} and the Break Method brand, which has been in use since 2014. The Ohio address on our state record belongs to our registered agent, Registered Agents Inc., and is not an office where we work. Our team operates from Idaho, USA, and India.`

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  updated: "October 6, 2026",
  blocks: [
    {
      kind: "p",
      text: identity,
    },
    {
      kind: "p",
      text: `We are committed to protecting your privacy and ensuring that your personal information is handled with transparency, security, and respect. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website, participate in Brain Pattern Mapping assessments, communicate with us, or use any ${product} services.`,
    },
    {
      kind: "p",
      text: "By accessing our website or using our services, you agree to the terms of this Privacy Policy.",
    },
    { kind: "h2", text: "1. Information We Collect" },
    {
      kind: "p",
      text: "We may collect the following categories of information:",
    },
    { kind: "h3", text: "1.1 Personal Information" },
    {
      kind: "ul",
      items: [
        "Name",
        "Email address",
        "Phone number",
        "Payment information (processed through secure third-party payment providers; we do not store full payment card details)",
      ],
    },
    { kind: "h3", text: "1.2 Assessment & Behavioral Data" },
    {
      kind: "p",
      text: `${product} collects responses to assessment questions and behavioral indicators (e.g., response timing patterns).`,
    },
    {
      kind: "p",
      text: "All assessment data is stored separately from identifying information to protect client privacy.",
    },
    { kind: "h3", text: "1.3 Technical Information" },
    {
      kind: "ul",
      items: [
        "IP address",
        "Browser type",
        "Device information",
        "Cookies and similar technologies used for site functionality and analytics",
      ],
    },
    { kind: "h2", text: "2. How We Use Your Information" },
    { kind: "p", text: "We use collected information to:" },
    {
      kind: "ul",
      items: [
        `Deliver and personalize ${product} services`,
        "Generate Brain Pattern Mapping outputs",
        "Improve website performance and user experience",
        "Communicate with you regarding products, updates, and support",
        "Maintain internal analytics and research related to system accuracy",
        "Process payments, account creation, and customer support requests",
      ],
    },
    {
      kind: "p",
      text: "We do not use your information to make automated decisions with legal or significant impact without human review.",
    },
    { kind: "h2", text: "3. Data Protection & Security" },
    {
      kind: "p",
      text: "Your data security is a top priority. We implement the following safeguards:",
    },
    {
      kind: "ul",
      items: [
        "End-to-end encryption of all assessment data in transit and at rest",
        "Strict separation of identifying information and assessment records",
        "Role-based access controls restricting internal data visibility",
        "Routine system audits and monitoring for unauthorized access",
        "Secure server environments and encrypted backups",
      ],
    },
    {
      kind: "p",
      text: "We take commercially reasonable measures to prevent loss, misuse, unauthorized access, disclosure, alteration, or destruction of your information.",
    },
    { kind: "h2", text: "4. No Sale of Personal Data" },
    {
      kind: "p",
      text: `${entity} never sells, rents, trades, or shares your personal information with outside parties for marketing or commercial purposes.`,
    },
    { kind: "p", text: "Data may only be shared with:" },
    {
      kind: "ul",
      items: [
        "Service providers who assist in secure hosting, payment processing, or email delivery",
        "Legal authorities if required by law, subpoena, or valid legal process",
      ],
    },
    {
      kind: "p",
      text: "These partners are bound by confidentiality agreements and may not use your data for any purpose other than fulfilling their contracted services.",
    },
    { kind: "h2", text: "5. Data Retention & Deletion Requests" },
    {
      kind: "p",
      text: "We retain data only as long as necessary to deliver services, maintain system integrity, or comply with legal obligations.",
    },
    { kind: "h3", text: "5.1 User-Initiated Deletion" },
    {
      kind: "p",
      text: "You may request deletion of your personal data and assessment records at any time by contacting admin@breakmethod.com.",
    },
    {
      kind: "ul",
      items: [
        "All identifying data and assessment records will be deleted within 48 hours of receiving a verified request.",
        "Some anonymized, non-identifiable aggregate data may be retained for system performance and research analysis but cannot be traced back to you.",
      ],
    },
    { kind: "h2", text: "6. Cookies & Tracking Technology" },
    { kind: "p", text: "We use cookies and similar tools to:" },
    {
      kind: "ul",
      items: [
        "Understand site usage",
        "Improve website performance",
        "Maintain login sessions",
        "Support analytics and security functions",
      ],
    },
    {
      kind: "p",
      text: "You can control cookie settings in your browser. Disabling cookies may impact your user experience.",
    },
    { kind: "h2", text: "7. Email & Text Communication Compliance" },
    { kind: "h3", text: "7.1 Email Communications" },
    {
      kind: "p",
      text: "By providing your email, you consent to receive:",
    },
    {
      kind: "ul",
      items: [
        "Service-related communications",
        "Program information",
        "Updates, resources, and optional marketing content",
      ],
    },
    {
      kind: "p",
      text: "You may unsubscribe from marketing emails at any time using the link at the bottom of any email. Unsubscribing does not affect transactional or security-related communications.",
    },
    {
      kind: "p",
      text: `${entity} complies with all applicable requirements under the CAN-SPAM Act.`,
    },
    { kind: "h3", text: "7.2 SMS/Text Communications" },
    { kind: "p", text: "If you opt in to receive SMS messages:" },
    {
      kind: "ul",
      items: [
        "You consent to receive texts regarding your account, reminders, program updates, or optional promotional content.",
        "Message and data rates may apply.",
        "You may opt out at any time by replying STOP.",
      ],
    },
    {
      kind: "p",
      text: "We do not share or sell phone numbers to third parties for SMS marketing.",
    },
    {
      kind: "p",
      text: `${entity} complies with requirements under the Telephone Consumer Protection Act (TCPA).`,
    },
    { kind: "h2", text: "8. Children’s Privacy" },
    {
      kind: "p",
      text: `${product} is not intended for individuals under 18 years old. We do not knowingly collect personal information from children unless parental consent is expressly given and parents are actively engaged in this work alongside their child.`,
    },
    {
      kind: "p",
      text: "If you believe a minor has provided information, contact us immediately and we will delete the data.",
    },
    { kind: "h2", text: "9. Your Rights" },
    {
      kind: "p",
      text: "Depending on your location, you may have the right to:",
    },
    {
      kind: "ul",
      items: [
        "Access your data",
        "Correct inaccuracies",
        "Request deletion",
        "Restrict processing",
        "Opt out of marketing communications",
        "Request a copy of your stored information",
      ],
    },
    {
      kind: "p",
      text: "To submit a request, contact admin@breakmethod.com.",
    },
    { kind: "h2", text: "10. Third-Party Links" },
    {
      kind: "p",
      text: "Our site may include links to external websites. We are not responsible for their privacy practices. We encourage you to review their policies separately.",
    },
    { kind: "h2", text: "11. Changes to This Policy" },
    {
      kind: "p",
      text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Revised” date. Continued use of the website constitutes acceptance of the updated terms.",
    },
    { kind: "h2", text: "12. Contact Us" },
    {
      kind: "p",
      text: "For questions, concerns, or data-related requests, contact:",
    },
    {
      kind: "p",
      text: `${entity} Privacy Officer. Email: admin@breakmethod.com. You may also write to us at 676 Triangle Dr., Ponderay, ID 83852. That is an Idaho correspondence address. Please do not send privacy requests to our Ohio registered agent.`,
    },
  ],
}

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  updated: "October 6, 2026",
  blocks: [
    {
      kind: "p",
      text: identity,
    },
    {
      kind: "p",
      text: `These Terms of Service (“Terms”) govern your access to and use of the ${product} website, assessments, data analytics, and related services (“Services”).`,
    },
    {
      kind: "p",
      text: "By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
    },
    { kind: "p", text: "If you do not agree, do not use the Services." },
    { kind: "h2", text: "1. Eligibility & Scope of Use" },
    { kind: "p", text: "You may use the Services only if:" },
    {
      kind: "ul",
      items: [
        "You are at least 18 years old",
        "You agree to comply with these Terms and all applicable laws",
        "You use the Services solely for personal, non-commercial purposes",
      ],
    },
    {
      kind: "p",
      text: `${product} does not provide clinical diagnosis, therapeutic treatment, or medical advice. Insights generated by the system are educational in nature.`,
    },
    { kind: "h2", text: "2. Intellectual Property Rights" },
    {
      kind: "p",
      text: `All content and technology associated with ${product} is proprietary to ${entity} and protected under United States and international laws, including copyright, trademark, and trade secret law.`,
    },
    {
      kind: "p",
      text: "Protected materials include, without limitation:",
    },
    {
      kind: "ul",
      items: [
        "Assessment questions, logic, structure, and sequencing",
        "Response-time analytics and behavioral-prediction heuristics",
        "The Brain Pattern Mapping algorithm and scoring methodologies",
        "All frameworks, interpretations, taxonomies, system language, and output structures",
        "Research models, data schemas, and internal analytics",
        "Website design, UI/UX elements, graphics, text, video, and audio content",
        "PredictiveMind® trademarks, logos, and branding",
      ],
    },
    {
      kind: "p",
      text: `All rights not expressly granted to you are reserved by ${entity}`,
    },
    { kind: "h2", text: "3. Access Rights (Personal Use Only)" },
    {
      kind: "p",
      text: `When you use the Services, ${entity} grants you a limited, revocable, non-exclusive, non-transferable right to access the Services solely for personal insight.`,
    },
    { kind: "p", text: "This access right:" },
    {
      kind: "ul",
      items: [
        "Does not transfer ownership of any materials",
        "Does not grant permission to reproduce, publish, modify, or distribute content",
        "Does not allow any commercial, clinical, academic, or competitive use",
        "May be revoked at any time for violation of these Terms",
      ],
    },
    { kind: "p", text: "You gain access, not ownership." },
    {
      kind: "h2",
      text: "4. Strict Prohibition on Copying, Reproduction, and Derivative Use",
    },
    { kind: "p", text: "You agree that you will not:" },
    {
      kind: "ul",
      items: [
        "Copy, photograph, transcribe, screenshot, record, download, archive, or reproduce any part of the Services",
        "Use bots, spiders, scrapers, or automated tools to collect or extract content",
        "Capture the assessment questions or attempt to reconstruct them",
        "Store or repurpose assessment flows, interpretive language, or frameworks",
      ],
    },
    {
      kind: "p",
      text: "Any reproduction, redistribution, or display of PredictiveMind® content is strictly prohibited.",
    },
    {
      kind: "h2",
      text: "5. Prohibition on Algorithmic or System Replication",
    },
    { kind: "p", text: "You agree that you will not attempt to:" },
    {
      kind: "ul",
      items: [
        "Reverse-engineer",
        "Decompile",
        "Decode",
        "Disassemble",
        "Derive",
        "Analyze",
        "Replicate",
        "Or otherwise attempt to uncover the logic, architecture, scoring systems, or algorithmic methodologies underlying PredictiveMind®",
      ],
    },
    {
      kind: "p",
      text: "This prohibition applies to both human and automated analysis.",
    },
    {
      kind: "h2",
      text: "6. Prohibition on AI, Machine Learning, and Model Training",
    },
    { kind: "p", text: "You may not:" },
    {
      kind: "ul",
      items: [
        `Input, upload, or feed ${product} content into any AI or machine learning model`,
        `Use ${product} questions, interpretations, or outputs to train or refine AI systems`,
        `Use ${product} materials as prompts, reference sets, or training data for LLMs or similar technologies`,
        `Attempt to create AI-generated models that mimic or replicate ${product} insights or frameworks`,
      ],
    },
    {
      kind: "p",
      text: "This includes all open-source, commercial, or proprietary AI systems.",
    },
    {
      kind: "h2",
      text: "7. Prohibition on Commercial, Professional, Educational, or Competitive Use",
    },
    {
      kind: "p",
      text: `You may not use ${entity} or ${product} content, outputs, or frameworks in:`,
    },
    {
      kind: "ul",
      items: [
        "Professional coaching",
        "Therapy, counseling, or mental health services",
        "Corporate training",
        "Workshops, seminars, or educational programs",
        "Online courses, digital products, or subscription platforms",
        "Any competing behavioral assessment or psychological system",
        "Research, academic studies, or institutional analysis (without explicit written consent)",
      ],
    },
    {
      kind: "p",
      text: `You may not present ${product} terminology or insights as your own.`,
    },
    { kind: "h2", text: "8. Trade Secret Protection" },
    { kind: "p", text: "You acknowledge and agree that:" },
    {
      kind: "p",
      text: `${product} assessment questions, scoring logic, behavioral analytics, interpretive language, data structures, and algorithmic methodologies constitute proprietary and confidential trade secrets of ${entity}`,
    },
    { kind: "p", text: "Any attempt to:" },
    {
      kind: "ul",
      items: [
        "Copy",
        "Publish",
        "Distribute",
        "Reveal",
        "Reverse-engineer",
        "Recreate",
        "Or make derivative use of these materials",
      ],
    },
    {
      kind: "p",
      text: "is a violation of federal and state trade secret laws and may result in severe civil and criminal liability.",
    },
    { kind: "h2", text: "9. Prohibition on Misuse of Outputs" },
    {
      kind: "p",
      text: "Assessment results (“Outputs”) are provided solely for personal insight.",
    },
    { kind: "p", text: "You may not:" },
    {
      kind: "ul",
      items: [
        "Publish outputs publicly",
        "Use outputs in a clinical or therapeutic setting",
        "Use outputs as part of a course, program, workshop, or business",
        "Create derivative tools or systems based on the outputs",
        "Represent outputs as medical, diagnostic, or prescriptive advice",
      ],
    },
    {
      kind: "p",
      text: `Outputs remain the intellectual property of ${entity}`,
    },
    { kind: "h2", text: "10. Account Security" },
    {
      kind: "p",
      text: "You are responsible for maintaining the confidentiality of your login information. Notify us immediately if you suspect unauthorized access.",
    },
    { kind: "h2", text: "11. Payments & Refunds" },
    {
      kind: "p",
      text: `All purchases are processed securely through third-party vendors. ${entity} does not store full payment card details.`,
    },
    {
      kind: "p",
      text: "Except where required by law, all purchases are final.",
    },
    { kind: "h2", text: "12. Privacy & Data Handling" },
    {
      kind: "p",
      text: "Your use of the Services is governed by our Privacy Policy, which details data encryption, de-identification, deletion rights, and communication practices.",
    },
    {
      kind: "p",
      text: "By using the Services, you consent to the Privacy Policy.",
    },
    { kind: "h2", text: "13. Disclaimers" },
    {
      kind: "p",
      text: "The Services are provided “as is” and “as available” without warranties of any kind.",
    },
    { kind: "p", text: `${product} does not guarantee that:` },
    {
      kind: "ul",
      items: [
        "Outputs will match user expectations",
        "Services will be uninterrupted or error-free",
        "Insights constitute clinical or therapeutic guidance",
      ],
    },
    { kind: "p", text: `${product} is an educational tool only.` },
    { kind: "h2", text: "14. Limitation of Liability" },
    {
      kind: "p",
      text: `To the fullest extent permitted by law, ${entity} is not liable for:`,
    },
    {
      kind: "ul",
      items: [
        "Any direct, indirect, incidental, consequential, or exemplary damages",
        "Loss of data, revenue, profits, or business",
        "Emotional distress or reliance damages",
        "Unauthorized access resulting from user actions or third-party breaches",
      ],
    },
    {
      kind: "p",
      text: "Your exclusive remedy is to discontinue using the Services.",
    },
    { kind: "h2", text: "15. Indemnification" },
    {
      kind: "p",
      text: `You agree to indemnify, defend, and hold harmless ${entity} from any claims, liabilities, damages, losses, or expenses arising out of:`,
    },
    {
      kind: "ul",
      items: [
        "Your use or misuse of the Services",
        "Your violation of these Terms",
        `Your infringement of ${entity} intellectual property`,
      ],
    },
    { kind: "h2", text: "16. Termination" },
    {
      kind: "p",
      text: `${entity} may suspend or terminate your access immediately if you:`,
    },
    {
      kind: "ul",
      items: [
        "Violate any provision of these Terms",
        "Attempt to copy, replicate, or misuse our IP",
        "Engage in abusive, fraudulent, or harmful conduct",
      ],
    },
    { kind: "p", text: "Upon termination:" },
    {
      kind: "ul",
      items: [
        "Your access rights immediately cease",
        "You must destroy or delete any materials derived from the Services",
        "No refunds will be issued",
      ],
    },
    { kind: "h2", text: "17. Governing Law" },
    {
      kind: "p",
      text: "These Terms are governed by the laws of the State of Ohio, where The Rewire Lab Inc. is incorporated, without regard to conflict-of-law principles.",
    },
    { kind: "h2", text: "18. Changes to These Terms" },
    {
      kind: "p",
      text: "We may update these Terms periodically. Your continued use of the Services constitutes acceptance of any revised Terms.",
    },
    { kind: "h2", text: "19. Contact Information" },
    {
      kind: "p",
      text: "For legal or compliance questions, contact:",
    },
    {
      kind: "p",
      text: `${entity} Legal & Compliance. Email: admin@breakmethod.com. You may also write to us at 676 Triangle Dr., Ponderay, ID 83852. That is an Idaho correspondence address. Please do not send legal notices to our Ohio registered agent.`,
    },
  ],
}
