# Google Analytics 4 Setup Instructions

**Status:** Code implemented, awaiting GA4 Measurement ID  
**Date:** January 20, 2026

---

## What's Been Implemented

✅ **Google Analytics 4 tracking code** added to `client/index.html`  
✅ **Analytics utility library** created at `client/src/lib/analytics.ts`  
✅ **Event tracking** added to all CTAs and key interactions  
✅ **Resume file verified** at `client/public/Martin-Veldsman-Resume.pdf` (40KB)

---

## What You Need to Do

### Step 1: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (or create one)
3. Click **"Admin"** (gear icon in bottom left)
4. Click **"Create Property"**
5. Enter property details:
   - **Property name:** Martin Veldsman Portfolio
   - **Reporting time zone:** (UTC-05:00) Eastern Time
   - **Currency:** USD
6. Click **"Next"**
7. Fill in business details:
   - **Industry category:** Professional Services
   - **Business size:** Small (1-10 employees)
8. Click **"Next"**
9. Select business objectives:
   - ✅ Generate leads
   - ✅ Examine user behavior
10. Click **"Create"**
11. Accept the Terms of Service

### Step 2: Set Up Data Stream

1. Select **"Web"** as the platform
2. Enter website details:
   - **Website URL:** https://martinveldsman.com
   - **Stream name:** martinveldsman.com
3. Click **"Create stream"**
4. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Update the Code

1. Open `client/index.html`
2. Find **both instances** of `G-XXXXXXXXXX` (lines 48 and 53)
3. Replace with your actual Measurement ID
4. Save the file

**Example:**
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX', {

<!-- After -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  gtag('config', 'G-ABC123XYZ', {
```

### Step 4: Deploy to Production

1. Commit the changes:
   ```bash
   git add client/index.html
   git commit -m "feat: add Google Analytics 4 tracking ID"
   git push
   ```

2. Vercel will automatically deploy the changes

### Step 5: Verify Tracking is Working

1. Go back to Google Analytics
2. Click **"Reports"** → **"Realtime"**
3. Open https://martinveldsman.com in a new tab
4. You should see yourself as an active user within 30 seconds
5. Click around the site to verify events are being tracked

---

## Events Being Tracked

### Calendly Booking Clicks
All Calendly CTAs track which section the visitor clicked from:
- `calendly_click` → `navigation`
- `calendly_click` → `mobile_menu`
- `calendly_click` → `hero`
- `calendly_click` → `work_together_fulltime`
- `calendly_click` → `work_together_contract`
- `calendly_click` → `tampa_bay_coffee`
- `calendly_click` → `contact_section`

### Resume Downloads
- `resume_download` → Tracks when visitors download the PDF resume

### External Link Clicks
- `external_link_click` → `linkedin` (LinkedIn profile)
- `external_link_click` → `design_conquest` (Design Conquest portfolio)

### Automatic Tracking
- **Page views:** Every page load
- **Scroll depth:** How far visitors scroll
- **Outbound clicks:** Links to external sites
- **File downloads:** PDF and other file downloads

---

## Analyzing Your Data

### Key Metrics to Monitor

1. **Traffic Sources**
   - Where visitors are coming from (Google, LinkedIn, direct, etc.)
   - Which sources convert to Calendly bookings

2. **Conversion Funnel**
   - How many visitors view the site
   - How many click Calendly CTAs
   - Which CTA locations convert best

3. **User Behavior**
   - Which sections get the most attention
   - How long visitors stay on the site
   - Bounce rate and engagement

4. **Device Breakdown**
   - Desktop vs mobile vs tablet
   - Optimize for the devices your audience uses

### Custom Reports to Create

1. **Calendly Conversion Rate**
   - Events → `calendly_click` → Compare by location
   - See which CTA performs best

2. **Resume Download Rate**
   - Events → `resume_download`
   - Track interest in full-time opportunities

3. **Traffic Sources**
   - Acquisition → Traffic acquisition
   - See which marketing channels work

---

## Privacy & Compliance

The implementation includes:
- ✅ **IP anonymization** enabled (`anonymize_ip: true`)
- ✅ **No personally identifiable information (PII)** collected
- ✅ **GDPR-compliant** tracking

**Note:** You may want to add a cookie consent banner if you plan to market in the EU. For now, the site is compliant with US privacy laws.

---

## Troubleshooting

### "I don't see any data in Google Analytics"

1. Check that you replaced **both** instances of `G-XXXXXXXXXX`
2. Clear your browser cache and visit the site again
3. Check the browser console for errors (F12 → Console tab)
4. Verify the Measurement ID is correct in GA4 settings

### "Events aren't showing up"

1. Events can take 24-48 hours to appear in standard reports
2. Use **Realtime reports** to see events immediately
3. Click the CTAs yourself and watch the Realtime report

### "I see my own visits but no one else"

1. This is normal for a new site
2. Share the link on LinkedIn to drive traffic
3. Consider running LinkedIn ads targeting Tampa Bay product teams

---

## Next Steps After Setup

1. **Set up conversion goals** in GA4 for Calendly clicks
2. **Create custom dashboards** for weekly monitoring
3. **Set up email alerts** for daily traffic summaries
4. **Link to Google Search Console** for SEO insights
5. **Consider adding LinkedIn Insight Tag** for retargeting

---

*Setup guide created: January 20, 2026*
