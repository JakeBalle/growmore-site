# GrowMore Website Rebuild — Status File

**Last updated:** July 2026  
**Site:** growmorespt.co.nz  
**Repo:** https://github.com/JakeBalle/growmore-site.git  
**Local path:** `/Users/meanmac/GrowMoreHQ/Knowledge Inbox/00_To_Process/GrowMore ex USB/growmore-site/`  
**Stack:** Pure HTML / CSS / JS — GitHub Pages  
**Goal:** Full rebuild ahead of August 2026 fertiliser season marketing push

---

## CURRENT STATUS

Site has been fully rebuilt. **Pending: fix outstanding mistakes (Jake to identify), then git push to GitHub.**

---

## WHAT'S BEEN BUILT

### New files created
| File | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Rebuilt | New hero, opportunity section, steps, independence section, showcase, CTA |
| `home.css` | ✅ Rebuilt | Full stylesheet for homepage |
| `how-it-works.html` | ✅ Rebuilt | 3-phase workflow (Farm Setup / Soil Test / Compare & Choose) |
| `hiw.css` | ✅ New | Stylesheet for How It Works page |
| `about.html` | ✅ Rebuilt | Founder story, science, independence, GBot credit |
| `faq.html` | ✅ Rebuilt | Accordion UI, 6 categories, 25+ FAQs |
| `testimonials.html` | ✅ New | Placeholder, links to App Store/Google Play |
| `international.html` | ✅ New | NZ-first rationale, international interest |
| `contact.html` | ✅ New | 2×2 grid: General / Supplier / International / Download |

### New image assets added
| File | Source | Content |
|------|--------|---------|
| `assets/app-soil-test.png` | Google Chat (1170×2532) | Soil Test Report — radar chart + colour-coded nutrient bars |
| `assets/app-farm-setup.png` | Google Chat (1170×2532) | Farm setup onboarding screen |
| `assets/app-slan-report.png` | Google Chat (1080×2400) | SLAN report — radar chart + written summary ("Gidday Mert...") |

### Still using old low-res images (needs replacing)
| File | Where used | Resolution issue |
|------|------------|-----------------|
| `assets/step10.png` | Homepage step 3, How It Works Phase 3 | ~654px wide, blurry on desktop |
| `assets/step1.png` | How It Works — add blocks | Old, low-res |
| `assets/step5.png` | How It Works — soil test input | Old, low-res |
| `assets/step11.png` | How It Works — fine tune | Old, low-res |
| `assets/step16.png` | How It Works — blend detail | Old, low-res |

**Jake has app store promotional images** that may work as replacements — location on Mac unknown (not in GrowMoreHQ).

---

## KEY MESSAGING DECISIONS

### Commission model — critical, get this right
- GrowMore earns commission from **ALL participating suppliers at the same flat rate**
- Independence = equal treatment, NOT zero commission
- Non-participating suppliers still appear in results — manual order required
- **Do NOT say "$0 commission"** — that was the old (wrong) wording

### Co-op messaging
- **Do NOT attack co-ops** — they could retaliate
- Focus on "improving NZ productivity" and transparency
- FAQ has one gentle co-op question ("I'm a shareholder...") — tone is measured

### App pricing
- **Free to download and use** — no subscription, no paywall
- Revenue comes from commissions when orders are placed

### Hero messaging
- Pill: "Science-based. Supplier-neutral. Free to use."
- H1: "Better fertiliser decisions. From your phone."

---

## CSS VARIABLES (from styles.css / home.css)
```css
--green: #4fc97e
--blue:  #5bb8f5
--dark:  #0e0e0e
--card:  #1a1a1a
--border: rgba(255,255,255,0.08)
```

---

## APP STORE LINKS
- **iOS:** https://apps.apple.com/nz/app/growmore-virtual-agronomist/id6773807170
- **Android:** https://play.google.com/store/apps/details?id=nz.co.growmorespt.growmore&pcampaignid=web_share

---

## KEY PEOPLE
- **Jake Balle** — founder, jake@growmorespt.co.nz
- **Gazihan Alankuş** — app developer, GBot Software (Turkey), Google Developer Expert in Flutter/Dart (one of 133 worldwide)
- **Doug Edmeades** — soil scientist, PVA book author (email pending after Jake reads book)
- **Andrew Macky** — Once a Day Farmer, potential first-20-customers target

---

## PENDING TASKS

### Before git push
- [ ] Fix outstanding site mistakes (Jake identifying these — work through them one by one)
- [ ] Replace step10.png (supplier comparison screen) with high-res version
- [ ] Preview site locally and confirm everything looks right
- [ ] Git push to GitHub → live on growmorespt.co.nz

### Blocked / waiting
- [ ] Task #17: Film app demo screen recording (Jake to do on phone)
- [ ] Task #19: YouTube Short narration script (blocked by #17)
- [ ] Task #20: Email Doug Edmeades (blocked — Jake reading PVA book first)
- [ ] Task #21: Social media campaign for August fert season
- [ ] Task #22: Book meeting with Andrew Macky (blocked by #17 + #18)

### Other monitoring
- AGMARDT funding decision expected mid-July 2026 — monitor inbox
- Dickie Direct invoice — chase yukana@dickiedirect.co.nz
- R&D tax incentive — follow up Tony Lyle (tony.s.lyle@pwc.com)

---

## HOW TO PREVIEW LOCALLY
The Chrome MCP extension has a known bug with file:// URLs (prepends https://).  
Best approach: open Finder → navigate to the growmore-site folder → double-click index.html.  
Or: use `mcp__cowork__present_files` with the index.html path and click to open.

---

## HOW TO PUSH TO GITHUB
```bash
cd "/Users/meanmac/GrowMoreHQ/Knowledge Inbox/00_To_Process/GrowMore ex USB/growmore-site"
git add -A
git commit -m "Full site rebuild — August 2026 season"
git push origin main
```
(Confirm branch name first with `git branch`)
