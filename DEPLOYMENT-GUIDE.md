# 🚀 University Landing Pages - Deployment Guide

## 📁 Project Structure
```
university-landing/
├── LP1/                    # Amity University Landing Page
│   └── index.html
├── LP2/                    # LPU Landing Page  
│   └── index.html
├── api/                    # API endpoints
│   ├── university1.js      # Amity University data API
│   ├── university1-fees.js # Amity University fees API
│   ├── university2.js      # LPU data API
│   └── university2-fees.js # LPU fees API
├── package.json
├── vercel.json
└── README.md
```

## 🎯 Phase 6: Pipedream Workflow Setup

### Step 1: Create Pipedream Workflow
1. Go to [pipedream.com](https://pipedream.com)
2. Sign up/Login to your account
3. Click "New Workflow"
4. Add "HTTP Webhook" as the trigger
5. Copy the webhook URL (e.g., `https://eo12345.m.pipedream.net`)

### Step 2: Configure Workflow Steps
Add these steps to your Pipedream workflow:

#### Data Processing Step (Node.js)
```javascript
export default defineComponent({
  async run({ steps, $ }) {
    const leadData = steps.trigger.event.body;
    
    // Process and validate the lead data
    const processedLead = {
      ...leadData,
      receivedAt: new Date().toISOString(),
      status: 'new',
      leadId: `LEAD_${Date.now()}`
    };
    
    console.log('New lead received:', processedLead);
    
    return processedLead;
  },
})
```

#### Google Sheets Integration (Optional)
- Add Google Sheets action
- Connect your Google account
- Select spreadsheet and worksheet
- Map form fields to columns

#### Email Notification (Optional)
- Add Email action
- Configure recipient and template

### Step 3: Update Landing Pages
Replace `YOUR_PIPEDREAM_ENDPOINT_HERE` in both LP1 and LP2 files with your actual Pipedream webhook URL.

**File locations to update:**
- `LP1/index.html` (line ~865)
- `LP2/index.html` (line ~865)

## 🌐 Phase 7: Deploy to Vercel

### Method 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project directory
cd university-landing

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

### Method 2: Vercel Website
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository or upload folder
5. Deploy automatically

## 🔗 Expected URLs After Deployment
- **LP1 (Amity)**: `https://your-app.vercel.app/lp1`
- **LP2 (LPU)**: `https://your-app.vercel.app/lp2`
- **API Endpoints**:
  - `https://your-app.vercel.app/api/university1`
  - `https://your-app.vercel.app/api/university1-fees`
  - `https://your-app.vercel.app/api/university2`
  - `https://your-app.vercel.app/api/university2-fees`

## ✅ Testing Checklist

### Form Testing
- [ ] Fill out form on LP1 with valid data
- [ ] Check Pipedream logs for received data
- [ ] Verify source field shows "LP1"
- [ ] Fill out form on LP2 with valid data  
- [ ] Check Pipedream logs for received data
- [ ] Verify source field shows "LP2"

### Form Validation Testing
- [ ] Submit form with empty fields
- [ ] Submit form with invalid email
- [ ] Submit form with invalid phone number
- [ ] Submit form without consent checkbox

### Modal Testing
- [ ] Click "Check Course-wise Fees" on LP1
- [ ] Verify modal opens with Amity fee data
- [ ] Click "Check Course-wise Fees" on LP2
- [ ] Verify modal opens with LPU fee data

### API Testing
- [ ] Test all 4 API endpoints
- [ ] Verify JSON responses
- [ ] Check CORS headers

### Mobile Testing
- [ ] Test both landing pages on mobile
- [ ] Verify responsive design
- [ ] Test form submission on mobile

## 📊 Features Implemented

### ✅ Landing Page 1 (Amity University)
- [x] Modern responsive design
- [x] Hero section with CTA buttons
- [x] University overview section
- [x] Popular courses section
- [x] Placement statistics
- [x] World-class facilities
- [x] Lead capture form with validation
- [x] Course-wise fee modal
- [x] Pipedream integration
- [x] Success/error messages
- [x] Smooth scrolling navigation

### ✅ Landing Page 2 (LPU)
- [x] Modern responsive design (different color scheme)
- [x] Hero section with CTA buttons
- [x] University overview section
- [x] Popular courses section
- [x] Placement statistics  
- [x] World-class facilities
- [x] Lead capture form with validation
- [x] Course-wise fee modal
- [x] Pipedream integration (source: LP2)
- [x] Success/error messages
- [x] Smooth scrolling navigation

### ✅ APIs Created
- [x] University 1 data API
- [x] University 1 fees API
- [x] University 2 data API
- [x] University 2 fees API
- [x] CORS headers configured
- [x] Vercel serverless functions

### ✅ Form Validation
- [x] Full name validation
- [x] Email format validation
- [x] 10-digit phone validation
- [x] State selection validation
- [x] Course selection validation
- [x] Intake year validation
- [x] Consent checkbox validation
- [x] Real-time error display

## 🎉 Final Submission Package

### Required Items:
1. **LP1 Live URL**: `https://your-app.vercel.app/lp1`
2. **LP2 Live URL**: `https://your-app.vercel.app/lp2`
3. **Pipedream Endpoint**: `https://eoXXXXX.m.pipedream.net`
4. **Source Code**: This entire folder

### Google Drive Upload:
1. Create folder: "University Landing Pages Project"
2. Upload entire `university-landing/` folder
3. Include this README with updated URLs
4. Make folder publicly accessible

## 🔧 Troubleshooting

### Common Issues:
1. **Form not submitting**: Check Pipedream endpoint URL
2. **Modal not loading**: Check API endpoints
3. **Mobile layout issues**: Clear browser cache
4. **API CORS errors**: Verify Vercel deployment

### Support:
For any issues during deployment, check:
- Vercel deployment logs
- Pipedream workflow logs
- Browser developer console
- Network tab for API calls

---

**Project completed successfully! 🎉**

Both landing pages are now ready for deployment with full functionality including lead capture, API integration, and responsive design.