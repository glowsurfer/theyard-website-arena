# Partners & Current-Site Inventory — source material for The Yard website rebuild

Compiled 2026-07-05. Sources: full workspace grep of `/Users/rhys/Documents/Antigravity/`, live fetch of `theyard.sg` (homepage, sitemaps, /corporate-events/, /about-us/, /dover/, /birthdayparty/), and the ClassCard availability matrix (`_spec/classcard_availability.md`) as source of truth for regular-class-per-centre claims.

---

# PART A — Partners & clients

## A1. Corporate clients (substantiated)

| Client | Status | Source |
|---|---|---|
| **LinkedIn** | Confirmed past corporate client | Named by Rhys directly; also documented in `theyard-ai-agent/directives/product_catalogue.md` (line 401, "Past clients: LinkedIn, Chanel") and mirrored in `theyard-training/directives/staff_kb.md` (line 4286) |
| **TP ICAP** | Confirmed past corporate client | Named by Rhys directly. **NOT found anywhere in workspace files** — treat Rhys's statement as the source; no written record exists internally |
| **Chanel** | Confirmed past corporate client | `theyard-ai-agent/directives/product_catalogue.md` line 401; `theyard-training/directives/staff_kb.md` line 4286 |

No other named corporate clients were found anywhere in the workspace (searched: corporate, team building, brand activation, plus a list of plausible SG corporates).

### Corporate events offering (context for the partners section)
From `theyard-ai-agent/directives/product_catalogue.md` (chunk `corporate_events`):
- **Available at**: all four centres — Dover, Dempsey, Bukit Timah, Jurong.
- **Event types**: team-building activities, brand activations, private gymnastics experiences.
- **Enquiries**: enquiries@theyard.com.sg.

The current live site has a dedicated page (`theyard.sg/corporate-events/`) headed **"Corporate Team Building Singapore: Indoor Team Bonding Workshops"** — positioning: gymnastics-based workshops that replace "mundane and predictable exercises" with dynamic activities accommodating all fitness levels. **The live page names NO clients and shows NO client logos** — the rebuild can improve on this by adding the LinkedIn / TP ICAP / Chanel roster (with permission — see FLAGS).

## A2. Partner schools

**No named partner schools were found in the workspace.** This is a known, documented gap: `theyard-ai-agent/tasks/information_gaps.md` item 11 explicitly lists "School partnerships — Partner schools, in-school programmes, accepting school groups — or definitive 'no'" as an unresolved knowledge gap. **Rhys must supply the school list** (see FLAGS).

School-adjacent evidence that DOES exist (context, not a confirmed partner roster):

| Finding | What it suggests | Source |
|---|---|---|
| **UWCSEA Dover** — a "UWCSEA Dover Coaches Handbook (18-08-14).pdf" exists in The Yard's Drive; the audit notes it "governs TYD-equivalent coaches at UWCSEA Dover campus" with a dual-reporting (UWCSEA + Yard) incident overlay | The Yard has (or had, doc dated 2018) coaches operating at/for UWCSEA Dover — a genuine school relationship. Verify currency with Rhys before publishing | `the-yard-audit/audit/state/contradictions.md` / `contradictions.json`; `extractions/INDEX.md` |
| **UWC East Dragons Gymnastics Invitational 2026** — Yard squad athletes enter this meet ($170/athlete) | Competition-circuit relationship with UWCSEA East's Dragons gymnastics club (host club), not a "partner school" in the curriculum sense | `theyard-ai-agent/directives/product_catalogue.md` lines 425–440 |
| **Dover centre sits at SPGG** (Singapore Polytechnic Graduates' Guild, 1010 Dover Rd, #01-01), which is also the registered office; SPGG members get 2 hrs free parking at Dover | Venue relationship with SPGG (a graduates' club, not a school) — worth a courtesy mention on the Dover page | `theyard-training/directives/staff_facts.md` lines 13–29; `theyard-ai-agent/directives/knowledge_base.md` lines 36, 78, 91 |
| **"Schools Director"** — Katherine Trigg holds this title on the live About Us page (she is also DPO per staff_kb) | A schools programme exists or is planned; the role name itself is evidence the site should have a Schools section | theyard.sg/about-us/ (live); `theyard-training/directives/staff_kb.md` line 6210 |
| Camp planning SOP: "Confirm term holidays of all involved International Schools and The Yard (local school holiday)" | Camps are deliberately timed to international-school calendars — useful copy angle ("camps aligned to international and local school holidays"), but names no schools | `the-yard-audit/audit/state/extractions/by_id/1uorEsi_UqaAaylhZE-o8HaREPLYnCMXX1SvzB_2Furc.txt` (camps procedure doc) |
| School excursions: the agent test suite includes a "teacher asking about school excursion" scenario; policy docs mention "partner school's gymnastics credit" as non-transferable | The Yard fields school-excursion enquiries and internally speaks of "partner schools" generically — but never names them | `theyard-ai-agent/execution/test_scenarios.py` lines 163–164; `theyard-training/directives/staff_kb.md` line 1865 |
| **OWIS** (One World International School) staff emails (`@owis.org`, `@globalschools.com`) own ~15 files in The Yard's Drive (e.g. curriculum maps, PTC PDFs) | **Weak signal — do NOT publish.** Most plausibly a staff member's files from prior employment at OWIS, not a Yard partnership. Verify with Rhys only if a schools list is being built | `the-yard-audit/audit/state/external-owners-found.md` |
| **Dover Court International School** — appears in the agent system prompt ONLY as a hallucination guard: "No 'Dover Court International School'" | Explicitly NOT a Yard location/partner — do not confuse Dover centre with Dover Court | `theyard-ai-agent/execution/system_prompt.py` line 51 |

Searched with no results: UWC (other than above), SJI, Tanglin Trust, ACS, Dulwich, Stamford American, GESS, Canadian International, Nexus, "partner school" + any proper noun.

---

# PART B — Current website inventory (theyard.sg, fetched 2026-07-05)

WordPress site (Yoast sitemaps, Divi theme artifacts). Sitemap index: `post-sitemap.xml`, `page-sitemap.xml`, `category-sitemap.xml`, `et_tb_item_type-sitemap.xml`.

## B1. Full page list (page-sitemap.xml, 55 URLs)

**Core pages**
- `/` (home), `/about-us/`, `/careers/`, `/blog/`, `/landingpage/` (likely an ads landing page)

**Locations (4)**
- `/jurong/`, `/dover/`, `/dempsey/`, `/bukittimah/`

**Programs**
- `/gymnastics-kids/`, `/womens-gymnastics/`, `/mens-gymnastics/`, `/ninja-zone/`, `/freestyle-gym/`, `/tumbling/`, `/trampoline/`, `/gymnastics-adults/`, `/parkour/`

**Products/services**
- `/camps/`, `/birthdayparty/`, `/corporate-events/`

**Events (18 archive pages, 2018–2026 — a rich history worth preserving)**
- Christmas Shows: `/xmas2018/`, `/xmas19/`, `/xmas2021/`–`/xmas2025/`
- Lion City Classic: `/lcc2021/`–`/lcc2026/`
- Diamond Classic: `/diamondclassic2022/`–`/diamondclassic2026/`
- Ninja Games: `/ninja-games2019/`, `/ninja-games2023/`, `/ninja-games2024/`
- `/collegiate-gymnastics-symposium/`

**FAQs (7 pages)**
- `/new-member-faqs/`, `/classcard-faqs/`, `/administration-faqs/`, `/coaches-faqs/`, `/assessments-faqs/`, `/class-structure-faqs/`, `/christmas-show-faqs/`

**Policies (5 pages, incl. duplicates)**
- `/privacy-policy/` + `/privacy-policy1/`, `/liability-waiver/` + `/liability-waiver1/`, `/child-safe-sport-commitment/`

**Misc**
- `/stacey-umeh-2/` (staff profile page)

**Blog posts (post-sitemap.xml, 8 posts)** — SEO content worth carrying over or refreshing:
- Injury prevention & conditioning tips for gymnasts
- The Yard's winning formula: how we develop competitive gymnasts
- Mastering the basics: fundamental techniques for gymnastics
- The key to building strong future leaders is gymnastics
- The benefits of recreational gymnastics for kids in Singapore
- What is the best age for gymnastics day camp
- Mental preparation strategies for competing with confidence

## B2. Homepage structure (current)

Nav: Home · Locations (Jurong, Dover, Dempsey, Bukit Timah) · Programs (Gymnastics, Ninja Zone, Freestyle, Tumbling, Trampoline, Adult Gym, Corporate Events) · Camps · Birthday Parties · Events (Christmas Show 2025, Ninja Games 2024, Collegiate Gymnastics Symposium, LCC 2026, Diamond Classic 2026) · Careers · Blog · About Us (FAQs + policies).

Sections in order: Hero ("Learn Gymnastics in Singapore at The Yard") → four location logos → camps promo banner → Recreational/Non-Competitive classes (Early Years, Gymnastics, Tumbling, Trampoline, Adult Gym, Freestyle, Ninja Zone) → Competitive programs (Development, Girls Squads/WAG, Boys Squads/MAG, High Performance/Collegiate Pathway) → Holiday Camps / Birthday Parties / Corporate Events → 7 testimonials → awards badges (Readers' Choice, Expat Living Awards) → leadership team (7 people, photos) → event highlight videos → locations summary → 5-question FAQ → per-centre contact block → footer (policies, socials).

Verbatim copy worth keeping:
- Tagline: **"All Ages & Abilities Welcome"**
- Hero: *"Always wanted to learn how to cartwheel, tumble, or perform a somersault, but never had the time or opportunity?"*
- *"Our recreational and competitive classes are designed to suit learners of all ages and abilities."*
- Testimonial (Hannah Pham): *"My kids are always looking forward to Saturday gym class… Coaches are very caring."*
- FAQ: *"Gymnastics takes time and dedication to master, but you can start seeing progress and having fun within a few months."*

## B3. About Us page (current)

- **Rosanna Trigg — Owner & Founder**, Competitive Specialist for the High Performance Squad. No fuller founder story exists on the page (gap — the rebuild should add one; see FLAGS).
- Positioning copy: *"The Yard is very proud to have such an accomplished team of international coaching experts delivering a one-of-a-kind training program to our athletes"*; brings *"a global perspective to our coaching, planning and curriculums to offer the best practices from around the world."*
- Leadership named: Stacey Umeh (Artistic Preparation & Choreography Specialist), Vitali Kazlou (WAG Head Technical Lead Coach), Maxine Hunt (HR/Operations Director), **Katherine Trigg (Schools Director)**, James Perry (Operations Manager). 23+ coaching staff listed with specialisations (competitive, recreational, MAG, ninja, freestyle, choreography).
- "Award-Winning Programs" with a 2025 badge (award names not detailed on page — verify which awards before reprinting).
- No partner schools or clients named anywhere on the current site.

## B4. Dover on the current site

- **Address**: Singapore Polytechnic Graduates' Guild, 1010 Dover Rd, #01-01, 139658. Phone +65 6914 9662 · WhatsApp +65 8805 9607 · enquiries.dover@theyard.com.sg. Hours: Mon–Fri 9:30am–8:30pm, Sat–Sun 8:30am–3:30pm, closed public holidays.
- Programs listed on the live Dover page: Gymtots (18m–3), Kindertots (3–4), Fundamentals (5–10), Freestyle Kiddos (5–7) / Junior (8–10) / Senior (11+), Warriors (5–11, invite-only), Tumbling Intermediate & Advanced (7–15), Development Squads, Girls Squads/WAG (6–24 hrs/wk), Boys Squads/MAG (6–12 hrs/wk).
- **⚠️ ClassCard matrix contradictions — do NOT carry these Dover claims over as-is**:
  - **Tumbling at Dover**: live site lists it; ClassCard shows **Tumbling = Jurong only**. Drop from Dover.
  - **Freestyle regular classes at Dover** (Kiddos/Junior/Senior): ClassCard shows Freestyle at Dover as **camps only**. Reword or verify.
  - **Competitive WAG/MAG squads at Dover**: live site lists them; ClassCard matrix shows the competitive hub at **Jurong** (squads by selection, not open booking). Present competitive as a pathway, not a Dover bookable class. Matrix additions the live page misses: **Senior Warriors (10–16)** and **Boys Fundamentals/Boys Tots** run at Dover.
- Birthday parties at Dover: Sat/Sun 4–6pm. Facility: beams, bars, tumble track, party room. Parent app for progress tracking; monthly membership with automated billing.

## B5. Birthday parties (current site)

- Offered at all four centres. Tiers: up to 8 / 16 / 24 kids; pricing varies by location and size (prices not captured — pull per-centre pricing at build time, flag "verify").
- Format: **90 min coached activities + 30 min cake ceremony in a decorated party room**. Activity options tailored by location: gymnastics, trampoline, parkour, or ninja training.
- Included: themed decorations (customisable colours), table settings, goody bags, instructors + dedicated party coordinator, facility access. Liability waiver required. BT & Dempsey: BYO food/beverages (tableware + decorations provided).
- Slots: Jurong & Dover Sat/Sun 4–6pm; Dempsey & BT Sat/Sun 3:30–5:30pm. Book ≥4 weeks ahead (6–8 weeks peak).
- Verbatim keeper: *"Every detail in the Party Room is crafted to create the most memorable experience and deliver lasting joy."*

## B6. Carry-over checklist for the rebuild

1. **Event history archive (2018–2026)** — 18 pages of Christmas Shows, Lion City Classics, Diamond Classics, Ninja Games + the Collegiate Gymnastics Symposium. Strong social proof and SEO equity; carry over as an "Events" archive (or at minimum redirect + summarise).
2. **All 7 FAQ pages** — new-member, ClassCard, administration, coaches, assessments, class structure, Christmas show. Consolidate; keep the answers.
3. **Policy pages** — privacy policy, liability waiver, **Child Safe Sport Commitment** (differentiator — keep prominent). De-dupe the `…1/` duplicates with redirects.
4. **Testimonials (7)** and awards badges (Readers' Choice, Expat Living) — verify award names/years before reuse.
5. **Leadership/coaching team** with international-experts positioning + Stacey Umeh profile page.
6. **Blog (8 posts)** — refresh and keep for SEO.
7. **Careers page** and **landingpage** (check if the latter backs live ad campaigns before killing the URL).
8. **Per-centre contact block** (emails/phones/WhatsApp per centre — see B4 and the corporate-events table for the full set).
9. **iClassPro portal + book.jurong.theyard.sg + Google Form trial links** exist on the current site — the rebuild should route booking per the migration state (iClassPro→ClassCard migration in flight; confirm which portal links to publish).

## B7. Current-site vs ClassCard matrix — corrections the rebuild MUST make

- Current nav presents **Ninja Zone, Freestyle, Tumbling, Trampoline, Parkour** as site-wide programs with no per-centre qualification. Rebuild must scope: **Ninja Zone = Bukit Timah + Dempsey only; Tumbling & Trampoline = Jurong only; Freestyle = Dover (camps)**; Recreational (Gym Tots/KinderTots/FUNdamentals at all four) + Competitive are the top-priority programs; Ninja is a smaller program — do not over-feature.
- `/parkour/` page exists on the current site but parkour appears nowhere in the ClassCard matrix as a regular class — treat as party/camp activity only unless Rhys confirms otherwise.
- Adult: Jurong (Open Session/open gym) + Bukit Timah (Adult Foundation Gymnastics) only — current `/gymnastics-adults/` page must be scoped accordingly.

---

## FLAGS

1. **Partner schools list MISSING.** Zero named partner schools anywhere in the workspace; `information_gaps.md` item 11 confirms this is a known gap. **Rhys to supply the list** before any "Partner Schools" section is built.
2. **TP ICAP has no written source** — only Rhys's verbal confirmation. Fine to publish on his word, but nothing internal corroborates it.
3. **Client-logo permission**: LinkedIn, TP ICAP and Chanel are documented/confirmed as past clients, but confirm The Yard has the right to display their names/logos publicly (per `feedback_logos_and_imagery.md`: never recreate logos; use approved assets only).
4. **UWCSEA Dover relationship**: the coaches handbook evidence is from 2018 — verify with Rhys whether the UWCSEA Dover arrangement is current before mentioning it publicly.
5. **OWIS**: Drive-audit signal only (external file owners) — almost certainly NOT a partnership; do not publish without confirmation.
6. **Dover page contradictions** (Tumbling, Freestyle regular classes, WAG/MAG squads listed at Dover) vs ClassCard matrix — matrix wins; see B4/B7.
7. **Founder story absent** from the current About Us — the rebuild needs Rhys/Rosanna to supply origin-story copy; nothing quotable exists on the live page beyond her title.
8. **Awards unverified** — "Readers' Choice" and "Expat Living Awards" badges plus a 2025 "Award-Winning Programs" badge; confirm exact award names, categories and years before reprinting.
9. **No prices captured as current** — birthday-party and camp prices vary by centre and weren't verifiably current in sources; pull live at build time and mark "verify". (Workshop prices $110 and meet entry fees in Part A context are from the agent's product catalogue, current as of the agent's KB — still verify before publishing.)
10. **Booking-link ambiguity**: current site links iClassPro portal + book.jurong.theyard.sg; the iClassPro→ClassCard migration (Dover/Dempsey + Ticket Tailor → ClassCard, date TBD) means the rebuild must confirm which booking endpoints to publish per centre.
