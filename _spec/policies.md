# Policies & T&Cs — PUBLIC vs CLIENT-ONLY classification

Spec for The Yard website rebuild. Classifies every policy / terms document found in the knowledge bases into what may appear on the public marketing site vs what must live in the member portal only.

**Sources mined:**
- `S1` = /Users/rhys/Documents/Antigravity/theyard-training/directives/staff_kb.md (Policies, Fees & Legal Basics module; Conduct & Media module; Privacy/PDPA module)
- `S2` = /Users/rhys/Documents/Antigravity/theyard-ai-agent/directives/knowledge_base.md (policies, withdrawal_policy, makeup_policy, media_policy, liability_waiver, privacy_policy, data_retention, data_third_parties, house_credits, auto_reenrolment, safeguarding, class_viewing, food_drink_policy, inclusion_special_needs chunks)
- Already-published URLs: https://www.theyard.sg/privacy-policy/ and https://www.theyard.sg/liability-waiver/
- ClassCard availability matrix read per instructions (/Users/rhys/Documents/Antigravity/theyard-website/_spec/classcard_availability.md) — no per-centre regular-class claims are made in this document.

**Legal entity for all legal pages:** People In Motion Pte. Ltd. (UEN 201535741C), trading as "The Yard". NOT "The Yard Gymnastics Pte Ltd". (S2 privacy_policy chunk; S1 waiver section.)

---

## Classification principle

The three governing documents (S1, "The three source documents"):
1. **Liability Waiver** — signed per member before any participation.
2. **Terms & Conditions (Oct 2025)** — governs website/platform use; incorporates the Acceptable Use Policy, Privacy Policy, and Cookie Policy.
3. **Club Policies & Code of Conduct (Oct 2025)** — the operational/contractual rules: fees, billing, make-up tokens, drop dates, conduct, consequences.

Rule of thumb: anything a **website visitor** is subject to, or that the law requires published, or that builds trust with prospects → PUBLIC. Anything that is a **contractual term of enrolment** (money, notice periods, penalties, credits, termination) → CLIENT-ONLY (member portal).

---

## PUBLIC (allowed on the main marketing site)

| # | Item | Rationale | Source |
|---|---|---|---|
| P1 | **Privacy Policy** (full, at /privacy-policy/) | PDPA legally requires it to be publicly accessible to anyone whose data is collected — including website visitors and enquirers, not just members. Already live, effective 2 June 2026. | S2 privacy_policy |
| P2 | **Cookie Policy** | Applies to every website visitor before any relationship exists; part of the T&Cs bundle. Session / persistent / marketing-analytics cookies. | S1 Privacy-PDPA module ("Cookies — the website side") |
| P3 | **Website Terms of Use + Acceptable Use Policy** (the Oct 2025 T&Cs as they relate to *using the site/platform*) | Governs use of the public website itself; meaningless if hidden behind a login. | S1 "three source documents" |
| P4 | **Child Safeguarding statement** | Public trust signal; nothing contractual. Safe Sport Singapore framework; Safeguarding Lead Dr Katherine Trigg; staff screening (identity, criminal-record, working-with-children checks, two references); compulsory safeguarding training; annual risk review; reporting route. | S2 safeguarding chunk |
| P5 | **Photography & media notice** (visitor-facing summary) | The no-filming rule binds *any* visitor, including non-members, so it must be discoverable publicly; the granular consent model reassures prospects. Do NOT publish the enforcement scripts or internal escalation steps. | S2 media_policy + class_viewing; S1 Conduct & Media module |
| P6 | **Data retention & third-party processor summaries** | These are sections of the published Privacy Policy (Sections 10–11); public by design. | S2 data_retention, data_third_parties |
| P7 | **Nut-free / food & drink policy** | Safety rule binding all visitors (lobbies, party rooms, gym floor); parents planning parties/camps need it pre-booking. | S2 food_drink_policy |
| P8 | **Inclusion & special-needs statement** | Marketing-positive, non-contractual; asks parents to speak to the centre team before classes start. | S2 inclusion_special_needs |
| P9 | **Class-viewing policy** (parents welcome to watch; dedicated viewing areas; no filming) | Prospect-facing FAQ material, non-contractual. | S2 class_viewing |
| P10 | **DPO contact for data matters**: dpo@theyard.com.sg, ~30-day response | Required accompaniment to the Privacy Policy. Refer to the role, never name the DPO personally. | S2 privacy_policy |

### Special case — Liability Waiver (currently PUBLIC at /liability-waiver/)

The waiver is signed **before first participation** — including trials and one-off events — i.e. by people who do not yet have a portal account. It is already published at https://www.theyard.sg/liability-waiver/ and submitted via an online form (123 Contact Form), and the customer-service agent directs people there (S2 liability_waiver). Recommendation: keep the waiver page **publicly reachable via direct link and footer-legal only** (it is an onboarding gate, not marketing content) — do not feature it in main navigation, and do not reproduce its clauses as marketing copy. If Rhys prefers strict portal-only, the trial/enrolment flow must be reworked so non-members can still sign — flag below.

---

## CLIENT-ONLY (member portal only — NOT on the public site)

| # | Item | Rationale | Source |
|---|---|---|---|
| C1 | **Club Policies & Code of Conduct (Oct 2025) — full document** | The core enrolment contract; contractually binding numbers staff are told to "quote exactly". Belongs where members sign in. | S1 Policies-Fees-Legal module |
| C2 | **Fees & billing terms**: $60 + GST one-time registration fee (non-refundable); auto-billing on the 25th for the following month; fees due regardless of attendance; non-refundable / non-transferable / non-assignable | Contractual payment terms of membership. (Exception: the $60 registration fee is quoted to prospects pre-sale and MAY appear on a public pricing/FAQ page — see FLAGS.) | S1 Fees-billing section; S2 withdrawal_policy |
| C3 | **Late-payment ladder**: day-14 class suspension + **$100 late fee**; day-30 referral for debt recovery with recovery costs added | Penalty terms; publishing them on a marketing site is off-brand and unnecessary for prospects. | S1 "The late-pay sequence" |
| C4 | **Withdrawal / Drop Date policy**: written Drop Date Request, **30 calendar days' notice** before next billing date; **$120 immediate-withdrawal fee** (recreational only; competitive handled case-by-case); outstanding fees due on request day; no refund of past payments | Contractual exit terms tied to membership. | S2 withdrawal_policy; S1 Drop Date section |
| C5 | **Auto re-enrolment between terms** (rolls into next Programme Term unless a Drop Date Request is submitted) | Contractual renewal mechanics. | S2 auto_reenrolment |
| C6 | **Make-up token policy**: max 1/month; eligible only for documented illness (MC) or school commitment (school letter); NOT for personal/social absences; 30-day validity; non-transferable; confirmed bookings non-cancellable; 48-hour reschedule notice; auto-token for public-holiday closures (in addition to monthly cap); no reimbursement for unused tokens | Member-benefit mechanics with eligibility fine print — quintessential portal content. | S2 makeup_policy; S1 Make-up Tokens section |
| C7 | **House Credits** (discretionary, forward-looking credit for fees/merchandise; never a refund of fees already paid) | Discretionary internal mechanism; publishing invites entitlement claims. | S2 house_credits |
| C8 | **Programme transfer rules** (free, within or across centres, subject to Approving Officer approval; external/school-programme credits not transferable) | Member-only operational mechanics. | S2 transfers chunk |
| C9 | **Conduct consequences ladder**: warning → ban from class → membership termination without notice or refund ("injurious to the character or interests of The Company"; unpaid fees); Management decisions final and binding; financial liability for damage | Disciplinary/termination contract terms; hostile-reading marketing copy. A soft public code-of-conduct sentence is fine (see summary copy). | S1 "Consequences of non-compliance" |
| C10 | **Waiver behavioural fine print**: child may be sent home at parent's cost with no refund; developmental prerequisites (potty trained, able to be without parents) with exclusion + no-refund clause; extra fees for drop-off/pickup non-adherence | Enrolment-contract clauses; keep with the waiver/portal. (The potty-training *requirement* itself may appear factually on the KinderTots class page.) | S1 Waiver "Behavioural expectations"; S2 potty_training |
| C11 | **Misc member rules**: duty of care limited to class window (parents responsible before/after class); good-health entry requirement; premises use restrictions; Lost & Found held 1 month then disposed, no liability | Member-relationship terms; portal handbook material. | S1 "Miscellaneous rules" |
| C12 | **Cancelled-class remedy terms** (Yard-cancelled classes → notice + make-up token or replacement class at no cost; no refund/credit beyond that) | Contractual remedy limitation. | S2 makeup_policy; S1 "Yard-cancelled classes" |

---

## Safe public-facing summary copy

Quotable, verified prose the public site may use verbatim.

### Safeguarding (public page)
> Child safety underpins everything we do at The Yard. Every member of our team — coaches, operations, and front-of-house — undergoes face-to-face safety-focused interviews, two professional reference checks, identity and criminal-record screening, working-with-children clearance, and compulsory safeguarding training on induction, with ongoing education thereafter. We operate under the Safe Sport Singapore framework, run a formal annual risk review of every programme, and maintain a documented response policy for all concerns. Our Safeguarding Lead is Dr Katherine Trigg, a UK-qualified NHS paediatrician and Director of The Yard Education. Concerns can be raised with the Safeguarding Officer at any centre. *(S2 safeguarding)*

### Photography & filming (public notice)
> To protect every child in our care, photography and filming by anyone other than Yard staff is not permitted anywhere on our premises while children are present — including in viewing areas. Our own use of photos and video is governed by consent that parents give (and can withdraw at any time) on enrolment, with granular options ranging from internal training records to social media and website use. To withdraw consent or ask about a specific image, contact dpo@theyard.com.sg. *(S2 media_policy; S1 Conduct & Media)*

### Watching classes (public FAQ)
> Parents are welcome to watch — every centre has a dedicated viewing area so you can see the class without being on the floor. We simply ask that no photos or videos are taken, for the safeguarding of all children in the room; your coach can usually take a photo of your child for you at the end of class. *(S2 class_viewing)*

### Privacy (public footer blurb linking to /privacy-policy/)
> The Yard is operated by People In Motion Pte. Ltd. (UEN 201535741C). We handle personal data under Singapore's Personal Data Protection Act 2012. We never sell your data, and we don't share it with advertisers. Read our full Privacy Policy, or contact our Data Protection Officer at dpo@theyard.com.sg. *(S2 privacy_policy, data_third_parties)*

### Nut-free environment (public notice)
> The Yard is a nut-free zone at every centre. Please don't bring nuts or nut-containing snacks anywhere in the facility — including lobbies, waiting areas, party rooms, and the gym floor. We have children with severe nut allergies in the building. Food and drink stay off the gym floor; designated eating and hydration areas are provided. *(S2 food_drink_policy)*

### Inclusion (public page)
> The Yard is an inclusive environment — we welcome children with a wide range of physical, cognitive, sensory, and developmental needs. If your child has special needs, we ask for a brief conversation with the centre team before the first session so we can recommend the right class and brief the coach. Everything you share is treated confidentially. We can't provide one-to-one support workers, but parents are welcome to bring their own support worker onto the floor by prior agreement. *(S2 inclusion_special_needs)*

### Conduct (one public sentence, in lieu of the full code)
> All members, participants, and families are subject to our Code of Conduct and safeguarding policies, including Safe Sport guidelines — full club policies are available to members in the member portal. *(S1 "Parent / guardian responsibilities")*

### Pointer copy for the portal boundary (public site, e.g. pricing/FAQ pages)
> Full club policies — including fees, billing, make-up classes, and withdrawal terms — are available in the member portal and are provided to every family at enrolment.

---

## FLAGS

1. **Liability waiver URL decision needed.** The waiver is already fully public at https://www.theyard.sg/liability-waiver/ and must be signable by people *before* they are members (trials, first class). Strict portal-only would break the onboarding flow. Recommended: keep publicly reachable but unlisted (footer-legal / direct link from booking flow only). Needs Rhys sign-off.
2. **Version currency.** T&Cs and Club Policies are the "Oct 2025 versions" (S1); Privacy Policy "effective 2 June 2026" (S2). Verify no newer revisions exist before the rebuild ships.
3. **Conflicting opt-out contact.** Old S2 policies chunk says PDPA opt-out via enquiries@theyard.com.sg; the newer privacy_policy/media_policy chunks say dpo@theyard.com.sg. Treat **dpo@theyard.com.sg as canonical**; verify and use one address site-wide.
4. **Registration fee on the public site.** $60 + GST one-time, non-refundable (S1 fees table; S2 says "$60 excl. GST") is quoted openly to prospects by the customer agent, so it is arguably safe on a public pricing page — but it is technically a Club Policies figure. Mark **"verify current"** and get Rhys's call. No other fee/penalty figures ($100 late fee, $120 withdrawal fee) should appear publicly.
5. **Third-party processor list will change.** iClassPro is transitional at Dover + Dempsey "until August 2026" (S2 data_third_parties); the ClassCard migration memory says consolidation is in flight. Verify the processor table (Privacy Policy Section 10) at publish time.
6. **House Credits inconsistency between sources.** S1 (staff KB) still describes a medical/extenuating House Credit pathway as an alternative in withdrawal conversations; S2 (agent KB, marked "Verified from MASTER Club Policies Oct 2025") explicitly says the House Credit alternative to the $120 fee "has been retired". Portal copy must follow S2, but reconcile the staff KB. (Client-only content anyway — flagged for accuracy.)
7. **Camps non-refundable.** "All camps are non-refundable" (S2 camp_booking) sits in a *public* booking flow, so this one refund term likely must appear publicly at the point of camp booking — an exception to the fees-are-portal-only rule. Confirm placement with Rhys. Camp prices in S2 are Dover/Dempsey iClassPro figures only — **verify** before any public use.
8. **Waiver retention schedule** (children: age 25 or 7 years post-enrolment; adults: 7 years) is public via the Privacy Policy retention table — fine — but don't duplicate it on marketing pages.
9. **No safeguarding-advice content publicly.** The public safeguarding page should state commitments and the reporting route only — never guidance on handling specific concerns (S2 safeguarding: report, don't investigate).
10. **DPO naming.** Never name the DPO personally on the site — role + email only (S2 privacy_policy).
