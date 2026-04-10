# Case Study: VitaFit — StayFit+ Initiative PRD

**Role:** Product Manager (PRD by Surumya Sharma)
**Target Launch:** Q1 2026
**Objective:** Transform VitaFit from a passive workout library into a gamified and community-driven fitness platform through two engagement features selected via RICE prioritization.

## 1. Problem Statement

- **Retention Drop:** Users experience "Motivation Decay" after the initial novelty wears off (Day 7–14).
- **Isolation:** At-home digital workouts lack the "Social Contract" of a physical gym, making it easy to skip sessions without consequence.
- **Lack of Recognition:** Users feel their effort is invisible, leading to a drop in Weekly Active Workouts (WAW).
- **Cost of Inaction:** High churn in Months 2–3 resulting in declining Customer Lifetime Value (LTV).

## 2. Target Audience

| Persona | Profile | Need |
| :--- | :--- | :--- |
| **Primary — The Busy Professional** | Maya (31) | A dopamine hit and a visual reason to squeeze in a 20-minute session between meetings |
| **Secondary — The Social Seeker** | Zara (22) | Wants to workout with friends and feels motivated by peer validation and leaderboards |

## 3. Strategic Fit

This initiative shifts VitaFit from:

> **One-Sided Content Delivery Platform → Community Fitness Ecosystem**

which strengthens long-term retention. Other solutions were rejected due to high cost and low scalability in this phase.

## 4. Prioritization — RICE Matrix

| Solution | Reach (R) | Impact (I) | Confidence (C) | Effort (E) | RICE Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Gamified Streaks** | 90 | 2.0 | 90% | 2 | **81.0** |
| **2. Accountability Circles** | 60 | 3.0 | 80% | 4 | **36.0** |
| 3. Live Leaderboards | 50 | 2.5 | 70% | 3 | 29.1 |
| 4. Instructor Shout-outs | 40 | 1.5 | 60% | 2 | 18.0 |
| 5. Social Feed | 70 | 1.0 | 70% | 4 | 12.2 |

**Top 2 Selected:** Gamified Streaks & Milestones + Fitness Squads (Accountability Circles).

## 5. Success Metrics

| Metric | Baseline | Target |
| :--- | :--- | :--- |
| 30-Day Retention | ~10% | 25% |
| Weekly Active Users | Baseline | +30% |
| Avg Sessions per User / Week | 2.5 | 4.0 |
| Squad Adoption Rate | 0% | 30% of Total Users |
| Streak Participation | 0% | 40% maintain ≥ 7-day streak |

**Guardrails:** Monitor notification fatigue and abuse/fake data (users spoofing completions).

## 6. Product Experience (MVP)

### Feature 1: Gamified Streaks & Milestones

- **Visual Heatmap:** A GitHub-style activity grid on the dashboard.
- **XP & Leveling:** Users earn points for every active minute.
- **Streak Freeze:** 1x weekly forgiveness token to prevent demotivation after a missed day.
- **Milestone Badges:** Digital trophies for 7, 30, and 100-day streaks.

**User Stories:**
- As a user, I want to see my streak so I stay motivated.
- As a user, I want milestone badges so I feel recognized.
- As a user, I want leaderboards so I can compete with friends.

### Feature 2: Fitness Squads (Accountability Circles)

- **Shared Progress Chain:** A group bar that only advances if every member completes their workout.
- **Squad Nudges:** One-tap emoji reactions to encourage lagging members.
- **Squad Rewards:** Bonus XP and exclusive Squad Badges unlocked upon full group completion.

**User Stories:**
- As a user, I want to join a squad so workouts feel social.
- As a user, I want to see squad progress so I stay accountable.
- As a user, I want squad rewards so we stay motivated together.

## 7. System Architecture

The system flow follows this logic:

1. **User Login** → Fetch Profile, XP, Streak Data
2. **Dashboard Load** → Display Streak Heatmap & Squad Status
3. **Select Workout** → Complete Session → Calculate XP & Increment
4. **Streak Validation** → Check if consecutive day condition met → Update Streak Counter
5. **Milestone Check** → If streak threshold reached (7/30/100 days) → Award Badge
6. **Squad Sync** → Push completion to squad → Check if all members completed → If yes, trigger Squad Reward (XP + Badge)
7. **Apply Streak Freeze** → If missed day & freeze available → Preserve streak, consume token

The architecture integrates with **HealthKit / Google Fit** for active minutes to prevent manual data spoofing.

## 8. Experiment & Rollout Plan

**A/B Test:** 10,000 users split into Control (Standard App) vs Variant (StayFit+ Features).

### Phased Rollout

| Phase | Scope | Details |
| :--- | :--- | :--- |
| Phase 1 — MVP Release (Alpha) | 20% of users | Streaks & XP engine |
| Phase 2 — Community Beta | 10,000 users | Squads & Shared Challenges |
| Phase 3 — Global Launch | All users | Full feature set |

## 9. Milestones & Timeline

| Milestone | Timeline | Deliverable |
| :--- | :--- | :--- |
| Discovery | Month 1 | Finalized UI/UX Wireframes & Logic |
| Alpha | Month 1.5 | Internal testing of XP engine |
| Beta | Month 2 | Squads and Shared Challenges to 10k Users |
| GA Launch | Month 3 | Full Global Release |
