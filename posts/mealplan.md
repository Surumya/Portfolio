# Case Study: Meal Planning Tool — Decision Logistics Strategy

**Role:** Product Manager (Strategy & Design by Surumya Sharma)
**Objective:** Reduce the cognitive load associated with meal planning for busy professionals — turning a fragmented, effortful task into fast, confident decisions.

## 1. Executive Summary

### Strategic Shift
Moving away from traditional "Recipe Discovery" toward **"Decision Logistics."**

### The Three Core Shifts

| From | To |
| :--- | :--- |
| Static | **Dynamic** — Meal planning adapts to your actual day, not an ideal one |
| Recipe-First | **Pantry-First** — Recommendations start with what you already have |
| Weekly Plan | **Daily Decision** — Instant, context-aware guidance when it matters most |

## 2. Target Users — Ideal Customer Profile (ICP)

**Segment:** High-Intent, Low-Bandwidth Urban Professionals ("Adaptive Achievers")

| Attribute | Definition |
| :--- | :--- |
| **Demographics** | 25–45, Urban/Suburban, Dual-income or busy solo professionals |
| **Mindset** | Values health and sustainability but suffers from "Invisible Labor" fatigue |
| **Key Behavior** | Buys "aspirational groceries" on Sunday that rot by Thursday due to schedule volatility |
| **The Goal** | Bridge the gap between their Aspirational Self (the cook) and Exhausted Self (the takeout orderer) |

## 3. User Personas

| Persona | Context | Goal | Pain Point | Opportunity |
| :--- | :--- | :--- | :--- | :--- |
| **Time-Compressed Achiever** | Long, unpredictable workdays | Eat healthy with minimal planning | Decision fatigue after work | Instant, context-aware meal suggestions |
| **Efficiency-Driven Couple** | Dual-income household | Reduce waste and coordination friction | Unused groceries, plan breakdown mid-week | Shared adaptive planning + pantry tracking |
| **Busy Health-Conscious Parent** (Secondary) | Family meal complexity | Balance nutrition + time | Multiple preferences, higher planning overhead | Future expansion with advanced planning |

## 4. Core Problem Identification — JTBD + 5 Whys

### Jobs-to-be-Done (JTBD)

**Core Job Statement:**
> *"When I'm mentally tired and short on time, help me decide a meal using what I already have so I can eat well without thinking or planning."*

| Type | Description |
| :--- | :--- |
| **Functional** | Quickly generate meal decisions based on time, diet, and available ingredients |
| **Emotional** | Reduce stress, guilt, and decision fatigue around mealtime |
| **Social** | Maintain a lifestyle that feels organized, healthy, and responsible |

### 5 Whys Root Cause Analysis

1. **Why do they fail to cook?** No concrete plan for tonight.
2. **Why no plan?** Matching recipes to current ingredients + time is a high-effort task.
3. **Why is it high effort?** Data is fragmented — Pantry = physical, Time = Calendar, Recipes = Digital.
4. **Why does fragmentation matter?** Creates a Cognitive Load spike at the worst possible moment.
5. **Root Cause:** Meal planning is a **"Static Project" in a "Dynamic Life."** Users try to solve a fluid problem with rigid tools.

## 5. Solution Pillars

| Pillar | Problem | Solution | User Value |
| :--- | :--- | :--- | :--- |
| **Cognitive Load Reduction** | Planning requires too many decisions and coordination | Turn planning into quick confirmations and suggestions | Save mental energy |
| **Inventory Intelligence** | Users buy ingredients without awareness of what they have, causing waste | Pantry-first recommendations + expiry-aware prioritization | Reduce waste & spend |
| **Time-Adaptive Planning** | Meal plans don't align with daily time availability | Plan by time slots: 10, 20, or 40 min recipes | Fit real-life schedules |
| **Flexibility & Resilience** | Plans collapse completely when schedules change unexpectedly | Auto-reshuffle meals and enable quick swaps | Maintain continuity |

## 6. Prioritization — RICE Matrix

| Rank | Solution | Reach (%) | Impact | Confidence (%) | Effort (P-Mo.) | RICE Score |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | **Progressive Cart Milestones** | 90 | 1.3 | 90 | 2 | **52.65** |
| #2 | Smart Companion Suggestions | 70 | 1.3 | 80 | 3 | 24.27 |
| #3 | One-Tap Smart Bundles | 40 | 1.9 | 70 | 5 | 10.64 |
| #4 | Auto-Pantry Replenishment | 30 | 2.8 | 60 | 6 | 8.40 |

**Key Insights:**
- **Priority #1 — Progressive Cart Milestones:** Highest reach (90%) at low effort (2 person-months). Clear starting point for launch.
- **High Impact — Auto-Pantry Replenishment:** Highest impact rating (2.8) but also highest effort (6 PM). Ideal for Phase 2 after initial traction.
- **Quick Win — Smart Companion Suggestions:** 70% reach at medium effort — strong early-phase candidate alongside the #1 priority.

## 7. Key User Flows

| Flow | User Goal | Key Steps | Output | Strategic Role |
| :--- | :--- | :--- | :--- | :--- |
| **1. Quick Weekly Planning** (Primary) | Create a full plan fast | Open app → Enter preferences (diet, family size, time) → System auto-generates plan → User reviews/swaps → Confirm | Weekly menu + grocery list | Core activation & highest reach |
| **2. Pantry-First Planning** | Use existing ingredients | Scan/add pantry → System identifies items & expiry → Suggest meals using pantry → User selects → Auto-add missing items | Waste-optimized weekly plan | Cost savings & differentiation |
| **3. Time-Adaptive Daily Planning** | Fit meals to real schedule | Daily check-in (time available) → System filters or swaps meals → Show optimized recipe → User cooks | Realistic daily execution | Drives habit & adherence |
| **4. Adaptive Re-Planning** | Recover when plans change | User skips/edits meal → System reshuffles schedule → Updates pantry usage & grocery list → User confirms | Updated, realistic plan | Retention & plan continuity |
| **5. Instant Decision Flow** | Remove decision fatigue | Open Today view → System checks plan + time + pantry → Shows 1–3 options → User selects | Immediate cooking guidance | Daily engagement loop |

### End-to-End Flow Logic

Current Struggle (no time / no ideas / wasted food) → Choose Entry Point (Quick plan | Pantry plan | Daily guidance) → System Intelligence (preferences + time + inventory) → User Review / Confirmation → Weekly Plan + Dynamic Adjustments → Consistent Execution & Habit Formation

## 8. Prototype & User Testing

**Prototype:** [yummy-plan-pilot.lovable.app](https://yummy-plan-pilot.lovable.app)

### What Worked (Positive Feedback)
- Smooth & intuitive navigation
- Calm, appealing color combination
- Users liked menu choice options (Vegetarian, Vegan, etc.)
- Helpful Re-stock & mark-as-used flow
- Overall UI/UX felt simple and clear

### Key Issues Identified
- Vegetarian filter showing non-veg recipes
- Unable to add meals/lists in Planner
- Confusion between Pantry vs List
- No shared account option

### Major Refinements Required
1. **Correct dietary filtering** — Fix Vegetarian filter to exclude non-veg recipes
2. **Enable Planner actions** — Allow adding meals & lists directly in Planner
3. **Unify Pantry structure** — Clarify Pantry vs List to remove user confusion
4. **Add shared accounts** — Multi-user / family account support

> *Note: AI prototyping tool (Lovable) was unable to handle these refinements — developer implementation required.*

## 9. Summary

| Dimension | Detail |
| :--- | :--- |
| **Problem** | Meal planning is a static tool in a dynamic life — creating cognitive overload and food waste |
| **User** | Busy 25–45 year-old professionals who aspire to cook healthy but default to takeout |
| **Solution** | Pantry-first, time-adaptive planning with instant context-aware decision support |
| **Priority** | Launch with Progressive Cart Milestones (RICE: 52.65) for maximum early impact |
| **Next Step** | Iterate prototype based on user testing feedback |
