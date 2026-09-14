# The Yard — Programs Spec (#1 spec for website rebuild)

> **CORRECTION 2026-09-14 (Rhys):** competitive WAG and MAG squads train at **all four centres**, as the squad
> classes on ClassCard show. Every "Jurong HP hub" / "hub at Jurong" line in section 3 and section 10 is
> superseded: present competitive as a pathway available at every centre, entered by free assessment and
> invitation arranged with the centre team. Jurong remains the largest venue and the host of the Lion City
> Classic and Diamond Classic.

> **Purpose**: Full program detail for the public website rebuild. Written for a builder to consume directly — copy is quotable, factual, and safe for a public site + LLM search.
>
> **Per-centre availability rule**: Every per-centre claim for REGULAR classes below comes from `_spec/classcard_availability.md` (ClassCard API, queried 2026-07-05) — the SOURCE OF TRUTH. Where the directives disagree with the matrix, the matrix wins and the conflict is logged under `## FLAGS`. Camps/events/parties are not bound by the matrix.
>
> **Sources**:
> - `MATRIX` = /Users/rhys/Documents/Antigravity/theyard-website/_spec/classcard_availability.md
> - `CAT` = theyard-ai-agent/directives/product_catalogue.md (last updated 2026-03-21)
> - `KB` = theyard-ai-agent/directives/knowledge_base.md (last updated 2026-04-06)
> - `STAFF` = theyard-training/directives/staff_kb.md (Product Pathways training module + Skills Matrix content)
>
> **Pricing note**: All prices below are from CAT (dated 2026-03-21) — treat every price as **"verify before publish"**. Fee structure: 1-hour class $66/mo-equivalent session at Jurong, $63 at other centres; 1.5-hour class $77 Jurong / $73.50 others; one-time lifetime registration fee $60 (CAT).

---

## 1. Program priority & positioning (for the site)

1. **Recreational Gymnastics** — the broad backbone. Gym Tots / KinderTots / FUNdamentals run at **all four centres**; advanced recreational continues at selected centres. Highest prominence on the site (MATRIX correction #4).
2. **Competitive (WAG/MAG)** — equal-top priority as the aspirational pathway. Hub = **Jurong High Performance**. By selection/assessment, not open booking — present as a *pathway*, not a bookable class grid (MATRIX correction #5).
3. **Ninja Zone** — a smaller program at **Bukit Timah + Dempsey only**. Feature it, but do not give it all-centre prominence (MATRIX correction #1).
4. **Tumbling & Trampoline** — **Jurong only** (MATRIX correction #2).
5. **Freestyle** — Dover (camps confirmed on ClassCard; see FLAGS on regular classes).
6. **Adult** — Jurong (Open Session / open gym) + Bukit Timah (Adult Foundation Gymnastics) (MATRIX).
7. **Camps, birthday parties, events** — large active components, covered in separate specs; camps run at all four centres.

There is **no "main" centre** — never describe any location as the main or primary centre (KB, hard rule).

---

## 2. Recreational Gymnastics — the backbone

### 2.1 Gym Tots (18 months – 3 years)

- **What it is**: The Yard's parent-and-child entry class. Toddlers and an adult (parent or caregiver) explore obstacle courses and movement stations together on the gym floor. (CAT)
- **Age**: 18 months – 3 years. (CAT, MATRIX)
- **Duration**: 1 hour. (CAT)
- **Why parents choose it**: Builds early confidence, body awareness, and the listening skills that set children up for pre-school, sports, and friendships — and it's a special hour together for the adult who joins on the floor. (CAT)
- **What a class looks like**: Play-based stations and obstacle courses; strength, coordination, and flexibility develop through play; balance and listening skills come from following the coach's cues. (CAT)
- **Practical**: No potty-training requirement (a parent/caregiver attends). (KB — surface only in FAQ, not headline copy)
- **Progression**: Feeds into KinderTots at age 3 (girls and boys) — see pathway summary.
- **Availability (MATRIX)**: ✅ Jurong · ✅ Bukit Timah · ✅ Dempsey · ✅ Dover — all four centres.
- **Trial price**: $66 Jurong · $63 elsewhere (CAT — verify).

### 2.2 KinderTots (3–4 years)

- **What it is**: The child's first independent class — a coach-led session without mum or dad on the floor. (CAT)
- **Age**: 3–4 years. **Duration**: 1 hour. (CAT)
- **Why parents choose it**: Their first taste of independence — children leave more confident, more capable, and proud of what they tried on their own. Parents notice the change in everyday situations: more willing to attempt new things, calmer in unfamiliar settings. (CAT)
- **What a class looks like**: 3–4 year olds explore bars, beam, vault, and floor through games and stations. Strength, balance, listening skills, and coordination develop naturally through play. Coach-to-child ratio 1:6 for KinderTots (KB). KinderTots focuses on motor movement without formal skills testing (CAT).
- **Practical**: Children must be potty trained (KB — FAQ-level detail only, not headline copy).
- **Progression**: → FUNdamentals at age 5. Boys can also take **Boys Tots** (see §2.5).
- **Availability (MATRIX)**: ✅ All four centres.
- **Trial price**: $66 Jurong · $63 elsewhere (CAT — verify).

### 2.3 FUNdamentals (5–10 years)

- **What it is**: The core recreational gymnastics class and the athletic foundation of the whole Yard pathway. (CAT)
- **Age**: 5–10 years. **Duration**: 1 hour. (CAT)
- **Why parents choose it**: "The athletic foundation that supports every sport and physical activity your child will ever do — and the confidence that comes from discovering they can do hard things." Parents report children becoming braver on the playground, more focused at school, and stronger in their other sports within a term or two. (CAT)
- **What a class looks like**: Children rotate through vault, bars, beam, and floor in a structured, fun environment (warm-up → stretching → apparatus rotations → cool-down; KB). Coaches divide the 5–10 band into smaller groups by age/ability within the class (KB). Ratio ~1:8 (KB).
- **Skills & assessment**: 20-skill Skills Matrix syllabus — 8 floor, 4 bars, 4 vault/trampoline, 4 beam; 18/20 mastered to advance (CAT). Example skills: forward/backward roll, cartwheel, handstand, bridge, beam walking and balances, vault run-and-jump, squat on, chin up, swinging on bars (STAFF). Skills are medalled Bronze (assisted) / Silver (reduced support) / Gold (unaided, correct technique); assessments run 3× per year in Terms 1, 3, 5 with medals awarded (KB, CAT).
- **Progression**: → Warriors (by assessment or progression), and the doorway to the competitive pathway for those invited.
- **Availability (MATRIX)**: ✅ All four centres.
- **Trial price**: $66 Jurong · $63 elsewhere (CAT — verify).

### 2.4 Warriors & Senior Warriors (advanced recreational)

**Warriors**
- **What it is**: The first advanced-recreational level above FUNdamentals — "where children stop simply *doing* gymnastics and start *owning* it." (CAT)
- **Age**: 5–10 (MATRIX label); entry is by assessment or progression from FUNdamentals (CAT).
- **Duration**: 1.5 hours (90 min). (CAT)
- **Why parents choose it**: Sharper technique, more independence, and the focus to set their own goals; a noticeable lift in self-discipline and resilience. (CAT)
- **What a class looks like**: A 90-minute session that raises difficulty across vault, bars, beam, and floor while raising the bar on technique. Skills-matrix examples: handstand, round off, bridge kick-over, beam leaps and forward roll on beam, handstand flat back vault, upward circle and glide swing on bars. (CAT, STAFF)
- **Availability (MATRIX)**: ✅ Bukit Timah · ✅ Dover only. (Directives claim Jurong/Dempsey — see FLAGS.)
- **Trial price**: $73.50 at Bukit Timah (CAT — verify; CAT's $77 Jurong price is moot since the matrix shows no Jurong Warriors class).

**Senior Warriors**
- **What it is / age**: Advanced recreational for ages **10–16** (MATRIX). The matrix is the only source that names "Senior Warriors" — treat it as the older-age Warriors stream at Dover.
- **Availability (MATRIX)**: ✅ Dover only.
- **Detail gap**: No benefit/class-description copy exists in the directives for Senior Warriors specifically — reuse Warriors copy adjusted for the 10–16 age band, and verify positioning with the team (see FLAGS).

### 2.5 Boys classes

- **What they are**: Boys-specific recreational classes — **Boys Tots** (3–4, boys' version of KinderTots) and **Boys Fundamentals** (5–10, boys' version of FUNdamentals). (CAT)
- **Why parents choose them**: A boys' environment on boys' apparatus from the start — the boys' Skills Matrix includes parallel bars, rings, and pommel-horse (mushroom) work alongside floor, vault, and bars (STAFF: Gladiator/Boys 20-skill list includes dips and swings on parallel bars, skin-the-cat and inverted hang on rings, circles on mushroom).
- **What a class looks like**: Same structure as KinderTots/FUNdamentals (warm-up, apparatus rotations, cool-down) with boys' apparatus in the rotation.
- **Progression**: Gym Tots → Boys Tots → Boys Fundamentals → Gladiator (boys' advanced recreational; CAT) → MAG competitive pathway by selection.
- **Availability (MATRIX)**: ✅ Dempsey · ✅ Dover only ("Boys Fundamentals / Boys Tots" row). (CAT says Jurong — see FLAGS.)
- **Trial price**: Contact team (CAT).

### 2.6 Heroes, Legends, Gladiator (higher recreational levels — pathway content, availability unconfirmed)

These are documented progression levels in the directives but **do not appear in the ClassCard matrix as bookable regular classes at any centre** — present them on the site as *pathway levels*, not as a per-centre class grid, until verified (see FLAGS).

- **Heroes** (1.5 hrs, entry by progression from Warriors): higher-level skills, greater strength demands, more complex routines across all apparatus. Skills include one-hand cartwheel, handspring, cartwheel and handstand on beam, front tuck dismount, front somersault vault, back hip circle on bars. Children come out more determined, more coachable, and visibly proud of their progress. (CAT, STAFF)
- **Legends** (1.5 hrs, entry by progression from Heroes): the peak of recreational gymnastics — back handsprings, somersaults, aerials, walkovers at competition-level intensity, with high conditioning demands. Skills include round off back handspring, aerial cartwheel, backward walkover on beam, kip on bars, handspring over table. (CAT, STAFF)
- **Gladiator (Boys)** (1.5 hrs, entry by progression from Boys Fundamentals): advanced boys' program spanning parallel bars, rings, and pommel horse alongside floor, vault, and bars. Boys leave stronger, more agile, and more confident in their body. (CAT)

---

## 3. Competitive Gymnastics (WAG / MAG) — the deep track

### What it is

The Yard's selection-based competitive pathway, following the **SGLP (Singapore Gymnastics Levels Programme) and USAG standards, Levels 1–10**, progressing from compulsory to optional routines (CAT). Athletes train **6 to 24 hours per week** depending on squad level (CAT). Squad training means more hours, smaller coach-to-athlete ratios, advanced skills and routine work, and mandatory competitions (STAFF, KB).

- **WAG (Women's Artistic Gymnastics)** — 4 apparatus: vault, uneven bars, balance beam, floor exercise. Emphasises strength, agility, and grace alongside mental resilience and confidence. (CAT)
- **MAG (Men's Artistic Gymnastics)** — 6 apparatus: floor, pommel horse, rings, vault, parallel bars, high bar. Intensive training building strength, technique, and confidence for competition. Led by Coach Derek Trotter (37+ years experience). (CAT — verify coach attribution is current before publishing a name)

### Entry — assessment and invitation only

- Competitive squads require an **assessment**, not a trial class. The assessment is **free of charge** and arranged directly with the centre team; coaches evaluate current ability and potential. (CAT, KB)
- Following assessment, suitable children are **invited** — entry is strictly invitation-only; there is no open enrolment. (CAT)
- Placement is at the appropriate squad level for the athlete — athletes do not necessarily start at the lowest squad (KB). Families relocating from Australia (ALP) or the US (USAG): grades generally translate, but final placement is always by The Yard's own assessment (KB).
- Typical route in: a child progresses well in Recreational → the coach notices → assessment/trial session with the squad group → invitation (STAFF). Selection is coach-led, not enquiry-led (STAFF).
- Invitation does not guarantee permanent placement — athletes are continuously evaluated on attendance, effort, progress, coachability, and behaviour (CAT).

### Season & competitions

- The competitive season runs **August to July**, aligned with Singapore's national competition calendar (CAT).
- Yard-hosted meets at Jurong: **Lion City Classic** (sanctioned, WAG Levels 2–10 / MAG Foundation–Level 5, April) and **Diamond Classic** (in-house/invitational, March) (CAT, KB). Recreational students do not compete at these meets (CAT).
- International pathways for squad members: Southeast Asia tours, Australia training camps, USA NCAA-pathway exposure trips, Canada tours (CAT).

### Level framework (for a "how levels work" explainer page)

- SGLP: Foundation Programme → Levels 1–2 (early skills) → Levels 3–5 (compulsory routines) → Levels 6–8 (mixed compulsory/optional) → Level 9 (optional, limited bonus) → Level 10 (full optional, unlimited bonus — highest national level before international representation). MAG National Programme uses Stages/Levels; the 2025 revamp introduced Stage 6 with Modified Junior FIG elements. (KB)
- Above national level sits FIG / Junior FIG (international). (KB)

### Jurong High Performance hub

- **Jurong is the competitive hub** — 20,000 sq ft Olympic-grade arena (opened Nov 2025), FIG-compliant spring floor, hosts Lion City Classic and Diamond Classic (KB). High Performance WAG/MAG camps run at Jurong (MATRIX).
- **Availability (MATRIX)**: ✅ Jurong — HP hub (WAG/MAG camps bookable; squads by selection). ◑ Dempsey — WAG Kinder Development appears on ClassCard. Present competitive as a **pathway available from any centre's recreational program**, with the hub at Jurong — not as a four-centre class grid. (CAT's "WAG at all 4 centres" and "MAG at Dover" claims are not matrix-confirmed as bookable — see FLAGS.)

### Supporting products (competitive)

- **Private coaching (WAG/MAG)** at Jurong and Bukit Timah, from $105/hr (junior coach, 1 athlete) to $220 for 2 hrs with a senior coach (CAT — verify).
- **Workshops & clinics** at Jurong: vault / beam / bars / pommel horse workshops $110 (90 min); ALP routines & choreography workshop $110 (CAT — verify).

---

## 4. Ninja Zone — Bukit Timah + Dempsey ONLY

**Hard rule for the site**: Ninja Zone runs at **Bukit Timah and Dempsey only** — not all four centres, not just Bukit Timah. It is a smaller program than Recreational/Competitive; feature it proportionately (MATRIX correction #1).

- **What it is**: A program combining gymnastics, parkour, obstacle courses, and martial-arts elements. Children develop strength, agility, and coordination through jumping, flipping, and conquering obstacles. (CAT)
- **Why parents choose it**: Channels high-energy children into a sport that feels like play — "Ninja Warrior on TV" energy. Strength, agility, and confidence build fast because they want to be there. (CAT)
- **Facility note**: Bukit Timah has a custom-built ninja rig (KB).

### Levels

- **Ninja Tots (3–4, 1 hour)** — introductory ninja training at toddler scale: obstacle courses, climbing, movement games. Channels boundless toddler energy into focused movement, coordination, and listening skills. Trial $63 at BT (CAT — verify). **Availability (MATRIX)**: BT + Dempsey.
- **Ninja White (5–10, 1 hour)** — core Ninja Zone training: gymnastics, parkour, obstacle-course work, and martial-arts elements rotated each session. Builds whole-body athleticism and a try-anything mindset. 21-skill matrix including handstand, ninja roll, palm spin, tic tac, wall run, lache, and rig obstacles (bungee cords, cargo net, ninja rings). Trial $63 at BT (CAT, STAFF — verify price). **Availability (MATRIX)**: BT + Dempsey.
- **Ninja Yellow (1.5 hrs, invitation only)** — step-up level by coaches' assessment and invitation. 25-skill matrix: kong vault, back handspring prep, wall run flip, suspended/hanging rope rig work. (CAT, STAFF) *Not in the ClassCard matrix — present as a progression level, availability "by invitation, ask the team" (see FLAGS).*
- **Ninja Green (1.5 hrs, invitation only after Yellow)** — elite-level ninja skill: back handspring, front tuck, wall spin, double kong, complex obstacle sequences. (CAT, STAFF) *Same caveat as Yellow.*

**Ninja pathway**: Ninja Tots (3–4) → Ninja White (5–10) → Ninja Yellow (invitation) → Ninja Green (invitation). (KB)

**Ninja Zone Camps** run at Bukit Timah and Dempsey (MATRIX camps section).

---

## 5. Tumbling & Trampoline (10–16) — Jurong ONLY

**Hard rule for the site**: Tumbling & Trampoline = **Jurong only** (MATRIX correction #2; directives' Dover claim is not matrix-confirmed).

- **What it is**: A floor, vault, and tumble-track program for tweens and teens, progressing through rolls, cartwheels, round-offs, walkovers, and aerial movements. (CAT)
- **Age**: 10–16. **Duration**: 1 hour (Beginner & Intermediate) · 1.5 hours (Advanced). (CAT)
- **Why parents choose it**: A confidence sport for tweens and teens — skills that look spectacular (somersaults, aerials, walkovers) and the strength to back them up; many report feeling fitter, stronger, and more grounded in their body within a single term. (CAT)
- **Levels & skills (STAFF)**:
  - **Beginner** (10 skills): rebound jumps, handstand pops, cartwheels, jump turns, bridge, front somersault, snap ups, flighted roll, landings, round off.
  - **Intermediate** (10 skills): handspring, one-handed cartwheels, back handspring, piked front somersault, flyspring, round off.
  - **Advanced** (10 skills): round off back handsprings ×2, aerial cartwheel, round off back tuck, straight front somersault, front tucked half twist, handspring step out.
- **Medal system**: Tumbling uses its own Bronze (10–14) / Silver (15–25) / Gold (26–30) scoring scale within the Skills Matrix assessments (KB).
- **Availability (MATRIX)**: ✅ Jurong only.
- **Trial price**: $66 at Jurong (CAT — verify; CAT quotes "$63 all other locations" but no other centre offers it per the matrix).
- **Note for pathway copy**: Trampoline is positioned as its own track — a child can do it *instead of* or *alongside* artistic gymnastics (STAFF); useful as a co-track option for older recreational gymnasts.

---

## 6. Freestyle — Dover

- **What it is**: Combines traditional gymnastics and acrobatic stunts with freedom of movement — spatial awareness, strength, agility, and flow develop alongside personal expression and creativity. (CAT)
- **Age**: 7+. (CAT)
- **Why parents choose it**: For children who want to move *their* way — creative ownership of training, building athletic skill through self-expression rather than rigid routine. The result is athletes who genuinely love what they do. (CAT)
- **Levels (CAT)**: Freestyle Foundation (1 hr, entry-level, foundational movements and acrobatic flair) → Freestyle Intermediate (1.5 hrs, bigger movement, more complex sequences, confidence to perform). Website sub-levels: Kiddos, Junior (12+), Senior (12+).
- **Availability (MATRIX)**: Dover — the matrix confirms **Freestyle camps** at Dover. Regular weekly Freestyle classes are marked "✅ (camps)" only — verify whether weekly classes are currently bookable before publishing a regular-class claim (see FLAGS).
- **Trial price**: Contact team (CAT).

---

## 7. Adult Programme (16+)

**Availability (MATRIX)**: ✅ Jurong — "Open Session" (open gym) · ✅ Bukit Timah — "Adult Foundation Gymnastics". No adult classes at Dempsey or Dover per the matrix (CAT's "Dover Mon–Wed evenings" claim is not matrix-confirmed — see FLAGS).

### Open Session / Open Gym (Jurong)

- **What it is**: A 1.5-hour self-directed session across full apparatus — work on the skills you want at the pace you want. No group warm-up or class plan, but a coach is **always on the floor** to supervise, give safety advice, and teach skills on request. Beginners welcome. (CAT, KB)
- **Why adults choose it**: "Movement on your own terms. Adults leave Open Gym physically stronger, mentally lighter, and reconnected with the kind of play they don't get at the desk or the regular gym." Suits returning gymnasts, parkour-curious beginners, and anyone wanting an unusual way to stay strong. (CAT)
- **Age**: 16+. **Fee**: $66/session · Trial $78.41 at Jurong (CAT — verify).

### Adult Foundation Gymnastics (Bukit Timah)

- **What it is**: A coached adult gymnastics class at Bukit Timah (MATRIX). The directives contain no class-description copy for this specific product — write it as a structured, coach-led adult foundations class and **verify details (duration, price, description) with the team** (see FLAGS).

---

## 8. Camps (cross-program, all centres — separate spec, summary here)

Camps are not bound by the regular-class matrix and run at all four centres (MATRIX camps section):

- **Gymnastics Camps** (FUNdamentals + KinderTots ages): all four centres, weekly through the holidays.
- **Ninja Zone Camps**: Bukit Timah, Dempsey.
- **High Performance Competitive Camps** (WAG JNR/SNR, MAG JNR): Jurong.
- **Freestyle camp**: Dover.

Format: 5-day (Mon–Fri), 3 hours/day, during Singapore school holidays (March, June, September, December) (CAT). Positioning (STAFF): camps are a great low-commitment first contact and holiday top-up — term classes are where curriculum-level progression happens; don't position camps as the main path.

---

## 9. The Recreational Pathway (summary for a pathway page)

**Girls**: Gym Tots (18m–3) → KinderTots (3–4) → FUNdamentals (5–10) → Warriors → Heroes → Legends (CAT, KB)
**Boys**: Gym Tots (18m–3) → Boys Tots (3–4) → Boys Fundamentals (5–10) → Gladiator (CAT, KB)
**Older starters / teens**: Senior Warriors (10–16, Dover) and Tumbling & Trampoline (10–16, Jurong) give age-appropriate entry and continuation points for the 10+ band (MATRIX).

How progression works:
- From age 5+, gymnasts work through **Skills Matrix** syllabi. Each recreational level has 20 elements (8 floor, 4 bars, 4 vault/trampoline, 4 beam; boys add parallel bars, rings, pommel; ninja adds rig obstacles). **18 of 20 must be mastered to advance.** (CAT, KB)
- Each skill is medalled **Bronze** (assisted), **Silver** (greater independence), **Gold** (unaided, correct technique); totals determine the overall medal (KB).
- **Assessments run 3× per year** (Terms 1, 3, 5, weeks 4–5); results within 2 weeks; medals awarded (CAT, KB).
- **A coach calls level moves** — levels are not time-served; a child moves up when they demonstrate next-level skills reliably (STAFF).
- Philosophy (quotable, STAFF): "Progress is the point, not pace." Foundations before sophistication; classes live in the "stretched, not strained" zone; plateaus are a normal part of progression; and the exit is part of the design — a successful Yard journey ends with a child who's strong, coordinated, and confident, whether or not they stay in gymnastics.
- No experience needed to start; children can join any time (fees prorated); children can combine disciplines (gymnastics + ninja + tumbling), starting at foundational level in each (KB).

## 10. The Competitive Pathway (summary for a pathway page)

1. **Start in Recreational** (any centre). Most squad athletes come through FUNdamentals and beyond.
2. **Coach notices, family talks** — selection is coach-led; parents can also request a conversation (STAFF).
3. **Free competitive assessment** with the centre team — no trial fee; coaches evaluate skills, conditioning, and potential (CAT, KB).
4. **Invitation to a squad**, placed at the appropriate SGLP/USAG level (not necessarily the lowest) (CAT, KB).
5. **Train 6–24 hrs/week** depending on squad level, on an **August–July season** aligned to the national competition calendar (CAT).
6. **Compete** — Yard-hosted meets at Jurong (Diamond Classic, Lion City Classic) plus sanctioned national competitions; continued placement depends on attendance, effort, progress, coachability, and behaviour (CAT).
7. **Go further** — SGLP Levels up to 10, then international representation; overseas tours, Australia camps, and USA NCAA-pathway exposure trips for eligible squad members (CAT, KB).

Hub: **Jurong High Performance** (Olympic-grade 20,000 sq ft arena) — with squad activity also visible at Dempsey (WAG Kinder Development on ClassCard) (MATRIX, KB).

---

## 11. Cross-program facts the site should carry (from KB)

- Class structure everywhere: warm-up → stretching → apparatus rotations → cool-down.
- Ratios: ~1:8 most classes, 1:6 KinderTots; max 32 children with 4 coaches.
- Classes run year-round with a few short term-break closures; make-up token policy covers misses (1/month with valid reason).
- FIG-certified apparatus (Gymnova, Gao Fei) at competition standard across centres.
- Parents welcome to watch from dedicated viewing areas at all four centres (no filming/photography).
- Inclusive environment — families with special needs are asked to have a brief pre-class conversation with the centre team.
- Dress: close-fitting athletic wear, hair tied, bare feet/gym shoes, no socks, no jewellery.
- "Why gymnastics" benefit bank available in KB (physical / mental / cross-sport "mother of all sports" / academic / life skills) — good source for a benefits page, with research citations.

---

## FLAGS — gaps, conflicts, and verify-before-publish items

1. **Warriors availability conflict**: CAT lists Warriors at Jurong, Bukit Timah, Dempsey; MATRIX shows Warriors at **Bukit Timah + Dover only**. Matrix wins per the source-of-truth rule — but confirm with the team whether Jurong/Dempsey Warriors classes were discontinued or simply unlisted this window.
2. **Heroes / Legends / Gladiator not in the matrix**: CAT describes them (at Jurong/BT) but no regular class appears in ClassCard at any centre. Spec presents them as pathway levels only. Verify: are they currently running (possibly booked by internal progression rather than open listing)?
3. **Senior Warriors**: appears ONLY in the matrix (Dover, 10–16). No descriptive copy exists in any directive. Copy above reuses Warriors framing — needs team sign-off.
4. **Boys classes location conflict**: CAT says Boys Tots / Boys Fundamentals are "Jurong only"; MATRIX shows Boys classes at **Dempsey + Dover** and none at Jurong. Matrix wins; flag to team.
5. **Tumbling & Trampoline**: CAT says Dover + Jurong; MATRIX shows **Jurong only** (already a logged matrix correction). Site asserts Jurong only.
6. **Adult Open Gym**: CAT says Jurong, Bukit Timah, Dover (Mon–Wed evenings); KB facilities section also mentions Dover adult open gym. MATRIX shows adult offerings only at **Jurong (Open Session)** and **BT (Adult Foundation Gymnastics)**. Matrix wins; verify whether Dover adult evenings still run off-platform.
7. **Adult Foundation Gymnastics (BT)**: no description, duration, or price in any directive — write-up needs team input.
8. **Freestyle regular classes**: matrix confirms Dover **camps** only ("✅ (camps)"). CAT describes Foundation/Intermediate weekly classes at Dover. Do not assert weekly Freestyle classes until confirmed; camps are safe to state.
9. **Competitive per-centre claims**: CAT says WAG at "all 4 centres" and MAG at "Dover, Jurong". MATRIX confirms bookable competitive activity only at Jurong (HP hub) and partially Dempsey (WAG Kinder Development). Since squads are invitation-only anyway, the site should present competitive as a pathway with the Jurong hub — but verify which centres actually host squad training sessions before naming them.
10. **Ninja Yellow / Green**: described in CAT/KB as invitation-only levels; not in the matrix as open classes (consistent with invitation-only). Present as progression levels; confirm they currently run at BT and/or Dempsey.
11. **All prices** ($63/$66 trials, $73.50/$77 advanced trials, $66 adult session, $78.41 adult trial, private coaching, workshops, registration fee $60): CAT dated 2026-03-21 — **verify all prices before publish**.
12. **Coach Derek Trotter (MAG)**: named in CAT — verify he is still current before publishing a named coach; KB says the live coaches roster is the source of truth for coach specifics.
13. **Squad names** (Squad 24, Hotshots6, Kinder Dev 4, etc., CAT): term-specific and volatile — do not hard-code squad names on the site; describe the level framework instead.
14. **Dover ClassCard trust**: MATRIX correction #3 notes Dover ClassCard data contradicted a prior "Dover not on ClassCard" assumption and was flagged to Rhys. If Dover's ClassCard data is later deemed untrustworthy, Dover rows above (Warriors, Senior Warriors, Boys, Freestyle camps) need re-verification.
15. **Age-band mismatch (internal training vs public catalogue)**: STAFF's Product Pathways module uses a generic taxonomy (GymTots 3–5, Recreational Mid 7–12, Recreational Senior 12–18, Squad 8+). The public catalogue's program names/ages (used in this spec) are the customer-facing truth; STAFF was used only for philosophy, skills lists, and squad-selection process.
16. **Potty training / KinderTots**: keep to FAQ level per KB guidance (not a headline talking point).
