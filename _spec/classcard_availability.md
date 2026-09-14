# ClassCard availability — SOURCE OF TRUTH for per-centre regular-class claims

> **CORRECTION 2026-09-14 (Rhys):** competitive WAG and MAG squads train at **all four centres**, which the
> squad classes on ClassCard show. The 2026-07-05 query below counted only published events tagged `class`,
> so squad sessions were missed and Jurong was wrongly framed as the sole hub. Jurong is the largest venue and
> hosts the Lion City Classic and Diamond Classic; entry to any squad is by free assessment and invitation,
> arranged with the centre team. Treat every "Jurong HP hub" / "competitive hub" line below as superseded.

Queried live via ClassCard API (`classcard_manager.get_available_events`, per-centre keys) on 2026-07-05, window 5 weeks, `include_full=True`, published + `tags=="class"` only. **Do not assert a regular class is offered at a centre unless it appears here.** (Camps/events/parties are separate — not bound by this rule.)

## Per-centre REGULAR classes (from ClassCard)

| Program | Jurong | Bukit Timah | Dempsey | Dover |
|---|:--:|:--:|:--:|:--:|
| Gym Tots (18 mo–3) | ✅ | ✅ | ✅ | ✅ |
| KinderTots (3–4) | ✅ | ✅ | ✅ | ✅ |
| FUNdamentals (5–10) | ✅ | ✅ | ✅ | ✅ |
| Warriors (5–10) | – | ✅ | – | ✅ |
| Senior Warriors (10–16) | – | – | – | ✅ |
| Boys Fundamentals / Boys Tots | – | – | ✅ | ✅ |
| **Ninja Zone** (Ninja White 5–10 + Ninja Tots 3–4) | – | ✅ | ✅ | – |
| **Tumbling & Trampoline** (10–16) | ✅ | – | – | – |
| Adult | ✅ "Open Session" (open gym) | ✅ Adult Foundation Gymnastics | – | – |
| Competitive WAG/MAG | ✅ HP hub (WAG/MAG camps; squads by selection) | – | ◑ WAG Kinder Development | – |
| Freestyle | – | – | – | ✅ (camps) |

## Camps (a large, active component — separate section)
- **Gymnastics Camps** (FUNdamentals + KinderTots): all four centres, weekly through the holidays.
- **Ninja Zone Camps**: Bukit Timah, Dempsey.
- **High Performance Competitive Camps** (WAG JNR/SNR, MAG JNR): Jurong.
- **Freestyle camp**: Dover.

## KEY CORRECTIONS (vs prior assumptions — surfaced to Rhys)
1. **Ninja Zone runs at Bukit Timah AND Dempsey** — not "only Bukit Timah," and NOT all four centres. No regular Ninja at Jurong or Dover (Jurong/Dover show zero Ninja regular classes). Ninja is a smaller program (2 centres) → de-emphasise vs Recreational/Competitive.
2. **Tumbling & Trampoline appears at Jurong only** on ClassCard (directives claim Dover + Jurong; Dover ClassCard shows no Tumbling). Assert Tumbling = Jurong.
3. **Dover IS live on ClassCard** (351 published class-events: FUNdamentals, Warriors, Senior Warriors, KinderTots, Boys classes, Gym Tots, Freestyle camps). This contradicts "Dover is not yet on ClassCard." → Treated Dover as ClassCard-backed like the others; flagged to Rhys. If the Dover ClassCard data should NOT be trusted yet, revert Dover to KB/current-site.
4. **Recreational is the broad backbone** (Gym Tots/KinderTots/FUNdamentals everywhere; Warriors at BT+Dover; Senior Warriors + Boys at Dover; Boys at Dempsey) → highest priority + most prominent.
5. **Competitive hub = Jurong** (High Performance WAG/MAG). Squads are by selection/assessment (not open booking) → present as a pathway, not a per-centre bookable class.
6. Adult = Jurong (Open Session / open gym) + Bukit Timah (Adult Foundation Gymnastics).
