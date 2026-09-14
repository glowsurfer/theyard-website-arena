# The Yard website rebuild — NON-CLASS sections spec

> Compiled 2026-07-05. Feeds the public site + LLM search: prose is written to be quotable.
> **Regular-class/centre claims are bound by** `/Users/rhys/Documents/Antigravity/theyard-website/_spec/classcard_availability.md` (SOURCE OF TRUTH). Camps, events, and parties are not bound by that matrix.
>
> **Sources used:**
> - `PC` = /Users/rhys/Documents/Antigravity/theyard-ai-agent/directives/product_catalogue.md (last updated 2026-03-21)
> - `KB` = /Users/rhys/Documents/Antigravity/theyard-ai-agent/directives/knowledge_base.md (last updated 2026-04-06)
> - `SKB` = /Users/rhys/Documents/Antigravity/theyard-training/directives/staff_kb.md
> - `CC` = _spec/classcard_availability.md (ClassCard API, queried 2026-07-05)
> - `CODE` = /Users/rhys/Documents/Antigravity/theyard-ai-agent/execution/classcard_manager.py (birthday rental IDs)
> - `GAPS` = /Users/rhys/Documents/Antigravity/theyard-ai-agent/tasks/information_gaps.md
>
> Brand context for tone (KB): The Yard is Singapore's leading high-performance gymnastics and acrobatics club, established 2016 by Rosanna Trigg. Tagline: **MOVE | PLAY | BELONG | GROW**. Four centres: Jurong (Perennial Business City, 20,000 sq ft Olympic-grade arena, opened Nov 2025), Bukit Timah (KAP Mall), Dempsey (Dempsey Hill, free parking), Dover (SPGG). FIG-certified apparatus (Gymnova, Gao Fei). Never call any centre "the main centre" — all four are equal (KB).

---

## 1. BIRTHDAY PARTIES

### What it is
A ~2-hour private birthday party at The Yard: a **90-minute coach-led activity session** on the gym floor followed by **30 minutes of cake-cutting in a decorated party room**. One activity per party — gymnastics OR ninja (location-dependent; ninja only where Ninja Zone runs, i.e. Bukit Timah/Dempsey). (PC `birthday_parties` chunk.)

### Key selling points
- Real coaches run the session on FIG-certified apparatus — not a soft-play free-for-all (PC, KB `equipment`).
- Exclusive use of the activity space during the session (PC).
- Bukit Timah has a **dedicated birthday party room** (KB `facilities_bt`).
- Turn-key decoration: themed bunting + tableware in **two customer-chosen colours**, "Happy Birthday" banner, table settings, party favour/goody bags for all guests, customisable e-invitations, decorated party room, fridge for cake storage (PC).
- An important, established revenue line with a strong reputation — staff are trained to proactively offer parties to enrolled families (SKB sales modules; PC upsell guidance).

### Who it's for
Children roughly 4–14 (SKB sales module: "any enquiry or enrolled family with a child aged 4–14"). Available to members and non-members. All guests need a completed **Liability Waiver** before stepping on the floor (PC).

### Packages (per ClassCard birthday rental IDs — Mini / Mega / Mighty)
Prices incl. GST; **same at Dover, Dempsey, Bukit Timah; Jurong slightly higher** (newest, premium facility) (PC — *verify current*):
| Package | Guests | Price (Dover/Dempsey/BT) |
|---|---|---|
| **Mini** | up to 8 | $869 |
| **Mega** | 9–16 | $1,386 |
| **Mighty** | 17–24 | $1,782 |
- Extra guests: up to 2 extra children at $80 each; beyond that, size up a package (PC).
- ClassCard rental IDs (CODE): Jurong mini=9666; Bukit Timah mini=9691, mega=9693, mighty=9694. Dover & Dempsey parties are enquiry-based via the location team (PC).

### What's NOT included (state plainly on the site)
Food & beverages (all parties self-catered), the birthday cake (parents bring their own), and balloons (PC). The Yard is a **nut-free zone** — no nut-containing food anywhere including party rooms (KB `food_drink_policy`).

### Slots, lead time, booking path
- Standard slots: **Jurong & Dover Sat/Sun 4:00–6:00pm; Dempsey & Bukit Timah Sat/Sun 3:30–5:30pm**; weekday/non-standard by request (PC).
- Lead time: 2–4 weeks for standard weekends; 6–8 weeks for peak (school holidays, year-end) (PC).
- Booking: online via ClassCard court-rental pages (Jurong, Bukit Timah); Dover & Dempsey via the location team. Deposit at booking; balance due 1 month before; final guest list (full names + ages) 1 week before; waiver per child (PC).
- Available at **all four centres** (PC).

### CTA intent
"Book your party" → ClassCard rental page (Jurong/BT) or enquiry form/WhatsApp for Dover/Dempsey. Secondary CTA: download/see what's included.

---

## 2. CAMPS (holiday camps — large, prominent section)

### What it is
5-day school-holiday intensives (**Mon–Fri, 3 hours per day**) running in every Singapore school holiday window — March, June, September, December (PC `holiday_camps`). Camps run **alongside** regular classes during holidays — it's both, not either/or (KB `class_calendar`).

### Camp types × centres (CC camps section — treat as current)
- **Gymnastics Camps** (KinderTots + FUNdamentals age bands): **all four centres**, weekly through the holidays.
- **Ninja Zone Camps**: **Bukit Timah + Dempsey**.
- **High Performance Competitive Camps** (WAG JNR/SNR, MAG JNR): **Jurong**.
- **Freestyle Camp**: **Dover**.

### Key selling points
- Often a family's **first contact** with The Yard — a fun, structured, low-commitment way to try the club before term classes (SKB `module_product-pathways_trampoline-camps`).
- Same coaching philosophy, safety standards, and culture as term classes — structured, not a free-for-all (SKB).
- Deliberately **mixed-ability groups** — skill development plus games and broader physical play (SKB).
- Works two ways: a **top-up** for existing members during holidays, or an **entry point** for new families who then join term classes (SKB).
- Honest positioning (site copy should keep this): camps complement term classes; curriculum-level progression happens in weekly classes (SKB).

### Who it's for
Children who fit the age band of the camp booked — KinderTots ages, FUNdamentals ages, Ninja ages (PC). HP Competitive camps serve squad-level athletes at Jurong (CC).

### Pricing (flag: **verify current** — sources dated Mar/Apr 2026)
- Gymnastics Camps: ~$583/5-day week (Bukit Timah) · ~$611 (Jurong) (PC).
- Dover/Dempsey day rates (iClassPro, KB `camp_booking`): Recreational 1d $132.47 → 5d $582.75; Competitive 1d $122.11 → 5d $610.56.
- High Performance WAG Camp: $152.70/session at Jurong (PC).
- Camps are primarily 5-day bookings; partial bookings only allowed on the Friday before camp week starts; **non-refundable** (KB `camp_booking`).

### Practical details
Bring: water bottle, snacks (nut-free — KB), close-fitting sportswear (no zips), change of clothes; no socks during gymnastics (PC). Spots fill up — book early (PC).

### Booking path
Self-serve: **ClassCard** for Jurong & Bukit Timah; **iClassPro parent portal** for Dover & Dempsey (Booking → Gymnastic/Competitive → student → See Camps → Enroll Now) (PC, KB). Note: Dover/Dempsey migrate to ClassCard by ~August 2026 (KB `data_third_parties` lists iClassPro as "transitional until August 2026") — build booking links to be swappable.

### CTA intent
"See this holiday's camps" → live camp listing/booking per centre. Strong seasonal urgency (dates rotate each holiday).

---

## 3. EVENTS (competitions & showcases — separate from Camps)

### What it is
The Yard hosts and participates in a year-round calendar of competitions and showcases, headlined by two Yard-hosted meets at the Jurong arena and an all-centres Christmas Show. Jurong (20,000 sq ft, FIG-compliant spring floor) is the hosting venue for the flagship meets (KB `facilities_jurong`).

### Recurring / upcoming events (KB `events`, `yard_events_2026`; PC `competitions`)
- **Lion City Classic** (April; 2026: **24–26 April, Jurong**) — sanctioned WAG Levels 2–10 / MAG Foundation–Level 5 meet open to clubs across Singapore, judged to SGLP and USAG standards. Entry via enquiries@theyard.com.sg (PC).
- **Diamond Classic** (March; Jurong) — in-house/invitational WAG & MAG meet. Entry fee $174.40/athlete; dedicated Diamond Classic leotard $85/athlete (PC — *verify current*). **Date conflict in sources: PC says 22 March 2026; KB `yard_events_2026` says 14–15 March 2026 — verify before publishing.**
- **Annual Christmas Show** (December; 2026: show **6 December**, rehearsal 21–22 November) — family-friendly showcase of all programmes across all centres; parents and family welcome (KB).
- **UWC East Dragons Gymnastics Invitational** — $170/athlete, held at Jurong (PC — host-club policies apply).
- **FOBISIA 2026** — 6–8 February 2026 (KB `yard_events_2026`; no further detail in sources).
- Squad-facing calendar items (internal/squad audience, mention sparingly): Squad Awards Dinner 23 May 2026; Squad Tour 22 June–4 July 2026 (KB).
- **Overseas trips & international pathways** (PC): Southeast Asia competition/training tours, Australia high-performance training camps, USA NCAA-pathway exposure trips, Canada tours — open to competitive squad members.

### Key points for the page
- Competitions are for **competitive squad (WAG/MAG) members** — recreational students don't compete at these meets (PC).
- **Spectators at Yard-hosted meets**: S$5/person, cash or PayNow at venue check-in only (no advance sales), first-come first-served (~200/session), no food or drink in seating (PC — *verify current*).
- Past-event coverage (photos, results, highlights) lives on Instagram and Facebook; the site should link out (KB `events`). *(Note: KB gives two Instagram handles — @theyard.sg in the header and @theyardgymnastics in the events chunk — verify which is canonical.)*
- Sponsorship: in-gym digital-screen packages, event partnerships, competition naming rights — high footfall during competitions and shows; quoted on request via enquiries@theyard.com.sg (PC `sponsorship`). Could live on this page or Corporate.

### CTA intent
"Enter your club" / "Get spectator info" → enquiries@theyard.com.sg. For families: "Follow us for results and highlights" → Instagram/Facebook.

---

## 4. ADULT PROGRAMS

### What it is (per CC matrix — source of truth)
- **Jurong — Open Session (adult open gym)**: 90-minute self-directed practice across full apparatus. No group warm-up or class plan, but a qualified coach is **always on the floor** for safety, advice, and skills teaching on request — beginners welcome (PC `adult_open_gym`, KB `coaches_about`).
- **Bukit Timah — Adult Foundation Gymnastics**: a coached adult gymnastics class (CC). *(No descriptive copy in PC/KB for this class — write from Open Gym tone + verify details with BT team.)*

### Key selling points
"Movement on your own terms" — adults leave physically stronger, mentally lighter, and reconnected with play they don't get at the desk or the regular gym. For returning gymnasts, parkour-curious beginners, or anyone wanting an unusual way to stay strong (PC).

### Who it's for
Ages 16+ (PC).

### Format & price
90 minutes. **$66/session; trial $78.41 at Jurong** (PC — *verify current*).

### CTA intent
"Book a session" — note (internal, from workspace memory): Adult Open Gym is not currently a bookable ClassCard event; enquiries fall back to WhatsApp until events are added. Build the CTA as WhatsApp/enquiry unless ClassCard events exist at launch.

### Do NOT claim
Dover adult Open Gym (PC/KB say "Dover Mon–Wed evenings") — **the CC matrix shows no adult class at Dover or Dempsey**. Matrix wins for regular classes: assert Jurong + Bukit Timah only, and flag Dover for verification (see FLAGS).

---

## 5. SCHOOLS (curriculum / CCA / holiday programs)

### Source status: **major gap — almost no material in the provided sources.**
`GAPS` (Tier 2, item 11) explicitly lists "School partnerships — partner schools, in-school programmes, accepting school groups — or definitive 'no'" as an undocumented topic. Nothing in PC/KB/SKB describes a schools product, CCA offering, curriculum program, or program launches.

### Fragments that exist (do not build a page from these alone)
- Partner-school gymnastics credits exist but are **non-transferable** into Yard programmes (KB `programme_transfers`; SKB T&C section) — implies school-run programs exist in some form.
- "Some schools offer bus services — check with the school" (KB FAQs) — implies school-adjacent families, not a program.
- The Yard hosts/participates in school-linked events: FOBISIA 2026, UWC East Dragons Invitational (KB/PC).
- SKB phishing training references a "partner school" scenario — again implying partnerships exist.

### Action required
Get the schools offering (which schools, what's delivered — curriculum PE, CCA, holiday programs — pricing model, launch process, named case studies) directly from Rhys/ops before writing this page. Placeholder CTA: enquiries@theyard.com.sg.

---

## 6. GYM CONSULTANCY (build/grow a gym)

### Source status: **not present in any provided source.**
No mention of consultancy, gym setup, franchising, or advisory services in PC, KB, or SKB. The only adjacent credibility material: founder Rosanna Trigg's 30+ years as an international coach across UK, Mexico, Singapore, founding Gym With Me (2010) then The Yard (2016) (KB `founder`); FIG-certified international-competition-standard facilities (KB `equipment`); and the club's growth to four centres including a 20,000 sq ft arena (KB).

### Action required
Entire section needs content from Rhys: what the consultancy offers (feasibility, fit-out, equipment sourcing, coach recruitment/training, curriculum licensing, operations?), who it's for, engagement model, pricing/CTA. Do not publish invented scope. Placeholder CTA: enquiries@theyard.com.sg.

---

## 7. CORPORATE (team building / venue hire)

### What it is
Corporate events and venue hire at **all four centres**: team-building activities, brand activations, and private gymnastics experiences (PC `corporate_events`).

### Key selling points
- **Past clients: LinkedIn and Chanel** (PC) — lead with this social proof.
- Unusual, memorable venue: Olympic-grade apparatus, foam pits, trampolines (KB `equipment`, `facilities_jurong`); Dempsey heritage-building setting with free parking (KB `facilities_dempsey`).
- Coach-led experiences — safe, structured play for adults (extrapolated from KB `coaches_about`; keep copy generic).

### Who it's for
Companies (team building, offsites), brands (activations/launches), private groups.

### Formats / packages / price
No packages or pricing documented — quoted on enquiry (PC). Related: **sponsorship packages** (in-gym digital screens, event partnerships, competition naming rights; no public pricing) could be cross-linked here (PC `sponsorship`).

### CTA intent
Enquiry: **enquiries@theyard.com.sg** (PC).

---

## 8. ATHLETIC PERFORMANCE (for competitive sports clubs)

### Source status: **not present in any provided source** as a distinct product.
Nothing in PC/KB/SKB describes a strength/conditioning or performance service sold to external sports clubs or athletes from other sports.

### Adjacent material that could seed the page (clearly label as gymnastics-benefit content, not a product claim)
- The "mother of all sports" cross-sport-transfer evidence bank: gymnastics as physical-literacy foundation; direct transfer to diving, martial arts, swimming, football/rugby, dance, climbing, athletics; injury-reduction and long-term-athlete-development citations (Lloyd et al. BJSM; AAP; FIG) (KB `benefits_cross_sport`, `benefits_physical`).
- Internal hint only: SKB special-programs list mentions "Strength & conditioning blocks — short-cycle intensives, sometimes targeting older Squad members" — an internal offering, not an external club product.
- High-performance credibility: SGLP/USAG framework, FIG-certified apparatus, HP hub at Jurong, international training tours (PC, KB, CC).

### Action required
Confirm with Rhys: does this product exist today (target clubs, delivery format, coaches, pricing), or is it a launch? Placeholder CTA: enquiries@theyard.com.sg.

---

## Cross-section facts the builder needs (all sourced)

- **Contacts/booking per centre** (KB locations chunks): Dover — 1010 Dover Rd #01-01 SPGG 139658, +65 6914 9662, wa.me/6588059607, enquiries.dover@theyard.com.sg, book.dover.theyard.sg. Dempsey — 72 Loewen Road 248828, +65 6914 9660, wa.me/6589498693, dempsey@theyard.com.sg, book.dempsey.theyard.sg. Bukit Timah — 9 King Albert Park, KAP Mall #B1-01 598332, +65 6914 9669, wa.me/6589528017, enquiries.bukittimah@theyard.com.sg. Jurong — 1 Venture Ave #03-03A Perennial Business City 608521, +65 6816 8022, wa.me/6587493709, enquiries@theyard.com.sg.
- **Platforms**: ClassCard = Jurong + Bukit Timah; iClassPro = Dover + Dempsey (transitional until ~Aug 2026) (KB). Single-event ticketing: Ticket Tailor (KB `data_third_parties`).
- **Liability waiver** required for all participation, incl. party guests: https://www.theyard.sg/liability-waiver/ (KB `liability_waiver`).
- **Nut-free** at every centre, incl. parties and camps (KB `food_drink_policy`).
- **No filming/photography** in viewing areas; exceptions sometimes announced at hosted showcases/competitions (KB `class_viewing`, `media_policy`).
- Legal entity: **People In Motion Pte. Ltd. (UEN 201535741C)** trading as "The Yard" (KB `privacy_policy`) — for footer/legal pages.

---

## FLAGS

1. **NO SOURCE MATERIAL** for three requested sections — do not publish without input from Rhys/ops:
   - **Schools** (curriculum/CCA/holiday programs, program launches) — confirmed as a known KB gap (GAPS item 11).
   - **Gym Consultancy** — zero mentions anywhere in the provided sources.
   - **Athletic Performance for sports clubs** — zero mentions as a product; only internal S&C blocks for squad members (SKB).
2. **Events not found in sources**: **Ninja Games** and **Collegiate Symposium** were named in the brief but appear nowhere in PC/KB/SKB. Need details (dates, format, past editions) from Rhys before listing.
3. **Diamond Classic 2026 date conflict**: PC says 22 March 2026; KB `yard_events_2026` says 14–15 March 2026. Both are now past — for the site, describe it as an annual March event and verify the 2027 date.
4. **Adult at Dover conflict**: PC/KB say Adult Open Gym runs at Dover (Mon–Wed evenings); the CC matrix (2026-07-05) shows no adult class at Dover. Per the source-of-truth rule this spec asserts **Jurong + Bukit Timah only** — confirm whether Dover adult sessions still run.
5. **Adult Open Gym bookability**: not a ClassCard-bookable event as of recent checks — CTA must be WhatsApp/enquiry unless ClassCard events are added before launch.
6. **All prices flagged "verify"**: party packages ($869/$1,386/$1,782 + $80 extras), camp prices (~$583 BT / ~$611 Jurong; Dover/Dempsey day rates; HP WAG $152.70/session), adult $66/session + $78.41 trial, competition entry fees ($174.40 Diamond, $170 UWC, $85 leotard), spectator $5. Sources date to Mar–Apr 2026.
7. **Jurong party pricing** is "slightly higher" than the other centres but no exact figures documented — get exact Jurong package prices before publishing a price table (PC only offers "the booking portal shows the exact figure").
8. **Dover/Dempsey → ClassCard migration** (~Aug 2026 per KB; workspace memory says date TBD): build all booking links/copy so iClassPro references can be swapped out without redesign.
9. **Instagram handle discrepancy** in KB: header says @theyard.sg, events chunk says @theyardgymnastics — confirm canonical handle before linking.
10. **Christmas Show detail** is thin (GAPS Tier 1 item 3): venue pattern, ticketing, and what-to-expect are undocumented beyond the 2026 date (6 Dec). Gather before building the Events page.
11. **Camps at Dempsey/Dover pricing vs types**: CC confirms Gymnastics Camps run at all four centres and Ninja camps at BT+Dempsey, but PC's camp-type list (older) only covered BT/Jurong ninja/gym camps. Per-centre camp pricing beyond the documented figures needs verification at build time from live ClassCard/iClassPro listings.
12. **Corporate section** has no package/pricing detail and only two named past clients (LinkedIn, Chanel) — confirm clients may be named publicly and gather 1–2 case studies/photos.
