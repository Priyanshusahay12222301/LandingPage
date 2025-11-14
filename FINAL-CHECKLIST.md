# ✅ Final Deployment Checklist

## 🎯 Phase 6: Pipedream Setup (15 minutes)

### Step 1: Create Pipedream Workflow
- [ ] Go to pipedream.com and create account
- [ ] Create new workflow with HTTP Webhook trigger
- [ ] Copy webhook URL (format: `https://eoXXXXX.m.pipedream.net`)
- [ ] Test webhook by sending sample data

### Step 2: Update Landing Pages
Replace `YOUR_PIPEDREAM_ENDPOINT_HERE` in these files:
- [ ] `LP1/index.html` (line ~865)
- [ ] `LP2/index.html` (line ~865)

Example:
```javascript
const pipedreamEndpoint = 'https://eo12345.m.pipedream.net';
```

## 🚀 Phase 7: Vercel Deployment (30 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy Project
```bash
cd university-landing
vercel
```

### Step 3: Production Deployment
```bash
vercel --prod
```

### Expected URLs:
- **LP1**: `https://your-project.vercel.app/lp1`
- **LP2**: `https://your-project.vercel.app/lp2`
- **APIs**: `https://your-project.vercel.app/api/university1`

## 🧪 Phase 8: Testing (20 minutes)

### Form Testing
- [ ] LP1 form submission with valid data
- [ ] LP2 form submission with valid data
- [ ] Check Pipedream workflow logs
- [ ] Verify source tracking (LP1 vs LP2)

### Validation Testing
- [ ] Empty form submission
- [ ] Invalid email format
- [ ] Invalid phone number (not 10 digits)
- [ ] Missing consent checkbox

### Modal Testing
- [ ] "Check Course-wise Fees" button on LP1
- [ ] "Check Course-wise Fees" button on LP2
- [ ] Verify different fee data displays

### API Testing
- [ ] `/api/university1` - Amity data
- [ ] `/api/university1-fees` - Amity fees
- [ ] `/api/university2` - LPU data
- [ ] `/api/university2-fees` - LPU fees

### Mobile Testing
- [ ] LP1 mobile responsiveness
- [ ] LP2 mobile responsiveness
- [ ] Form submission on mobile
- [ ] Modal functionality on mobile

## 📦 Final Submission Package

### Create Google Drive Folder
- [ ] Create folder: "University Landing Pages Project"
- [ ] Upload entire `university-landing/` directory
- [ ] Include updated README with live URLs
- [ ] Make folder publicly accessible

### Submit These 4 Items:
1. **LP1 Live URL**: `https://your-project.vercel.app/lp1`
2. **LP2 Live URL**: `https://your-project.vercel.app/lp2`
3. **Pipedream Endpoint**: `https://eoXXXXX.m.pipedream.net`
4. **Google Drive Folder URL**: Share link

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Form Not Submitting
- Check Pipedream endpoint URL is correct
- Verify network connectivity
- Check browser console for errors
- Ensure Pipedream workflow is active

#### Modal Not Loading Fee Data
- Check API endpoints are deployed
- Verify API responses return JSON
- Check browser network tab for failed requests

#### Mobile Layout Issues
- Clear browser cache
- Test in incognito/private mode
- Verify viewport meta tag is present

#### API CORS Errors
- Ensure `Access-Control-Allow-Origin` headers are set
- Verify Vercel deployment was successful
- Check API endpoint URLs are correct

### Debug Commands
```bash
# Test local development
vercel dev

# Check deployment logs
vercel logs

# Test API endpoints
curl https://your-app.vercel.app/api/university1
```

## 🎉 Success Criteria

### All features working:
- ✅ Both landing pages deployed and accessible
- ✅ Forms capturing and validating data
- ✅ Pipedream receiving form submissions
- ✅ Fee modals displaying correct data
- ✅ All API endpoints responding
- ✅ Mobile-responsive design
- ✅ Source tracking differentiating LP1/LP2

### Performance targets:
- ⚡ Page load time < 3 seconds
- 📱 Mobile-friendly (Google PageSpeed > 90)
- 🔒 HTTPS enabled
- ✨ No console errors

---

**🚀 PROJECT READY FOR DEPLOYMENT!**

All phases of your roadmap have been successfully implemented. The project is now complete and ready for the final deployment steps.