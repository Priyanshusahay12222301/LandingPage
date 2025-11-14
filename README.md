# 🎓 University Landing Pages Project

## 📋 Project Overview
This project contains two professional landing pages for university admissions with integrated lead capture forms and APIs for dynamic content.

## 🏛️ Universities Featured
- **LP1**: Amity University - India's leading private university
- **LP2**: Lovely Professional University - India's largest private university

## 📁 Project Structure
```
university-landing/
├── LP1/                     # Amity University Landing Page
│   └── index.html          # Complete responsive landing page
├── LP2/                     # LPU Landing Page
│   └── index.html          # Complete responsive landing page
├── api/                     # RESTful API endpoints
│   ├── university1.js      # Amity University data API
│   ├── university1-fees.js # Amity University fees API  
│   ├── university2.js      # LPU data API
│   ├── university2-fees.js # LPU fees API
│   ├── university1.json    # Static JSON data (Amity)
│   ├── university1-fees.json
│   ├── university2.json    # Static JSON data (LPU)
│   └── university2-fees.json
├── package.json            # Project configuration
├── vercel.json            # Vercel deployment config
├── DEPLOYMENT-GUIDE.md    # Complete deployment instructions
└── README.md              # This file
```

## 🌐 Live URLs
**After deployment, update these URLs:**
- **LP1 URL**: `https://your-app.vercel.app/lp1`
- **LP2 URL**: `https://your-app.vercel.app/lp2`
- **Pipedream Endpoint**: `https://eoXXXXX.m.pipedream.net`

## 🔗 API Endpoints
**After deployment, these will be available:**
- **Amity Data**: `https://your-app.vercel.app/api/university1`
- **Amity Fees**: `https://your-app.vercel.app/api/university1-fees`
- **LPU Data**: `https://your-app.vercel.app/api/university2`
- **LPU Fees**: `https://your-app.vercel.app/api/university2-fees`

## ✨ Features Implemented

### 🎯 Landing Pages
- ✅ **Modern Responsive Design** - Mobile-first approach
- ✅ **Hero Sections** - Compelling headlines and CTAs
- ✅ **University Information** - Overview, courses, placements, facilities
- ✅ **Call-to-Action Buttons** - Apply Now, Check Fees, Download Brochure
- ✅ **Smooth Animations** - Hover effects and transitions
- ✅ **Cross-browser Compatible** - Works on all modern browsers

### 📝 Lead Capture Forms
- ✅ **Complete Validation** - Real-time form validation
- ✅ **Required Fields**: Full Name, Email, Phone, State, Course, Intake Year, Consent
- ✅ **Smart Validation**: Email format, 10-digit phone, mandatory consent
- ✅ **Error Handling** - Clear error messages and success notifications
- ✅ **Pipedream Integration** - Automatic lead forwarding
- ✅ **Source Tracking** - Differentiates between LP1 and LP2 leads

### 💰 Fee Modals
- ✅ **Dynamic Fee Display** - Course-wise fee breakdown
- ✅ **API Integration** - Real-time data from APIs
- ✅ **Responsive Modal** - Works perfectly on mobile
- ✅ **Detailed Information** - Includes scholarships and payment options

### 🔌 APIs
- ✅ **RESTful Endpoints** - JSON responses for all university data
- ✅ **CORS Enabled** - Cross-origin resource sharing configured
- ✅ **Serverless Functions** - Vercel-optimized Node.js functions
- ✅ **Error Handling** - Proper HTTP status codes and responses

## 🚀 Quick Deployment

### Prerequisites
- Node.js installed
- Vercel account
- Pipedream account

### Deploy Steps
1. **Clone/Download** this project
2. **Set up Pipedream**:
   - Create HTTP webhook workflow
   - Copy webhook URL
   - Update landing pages with endpoint
3. **Deploy to Vercel**:
   ```bash
   npm i -g vercel
   cd university-landing
   vercel --prod
   ```
4. **Test Everything**:
   - Submit forms on both pages
   - Check fee modals
   - Verify API responses

## 📱 Mobile Responsive
Both landing pages are fully responsive and tested on:
- Mobile phones (320px+)
- Tablets (768px+) 
- Desktops (1024px+)
- Large screens (1200px+)

## 🔐 Form Security
- Input sanitization
- Email validation
- Phone number validation
- HTTPS encryption (via Vercel)
- CORS protection

## 📊 Analytics Ready
The forms include timestamp and source tracking, making it easy to:
- Track conversion rates
- Identify best-performing pages
- Analyze user behavior
- Optimize campaigns

## 🎨 Design Highlights
- **Amity University**: Blue gradient theme with professional styling
- **LPU**: Pink/red gradient theme with modern design
- **Font Awesome Icons**: Professional iconography
- **Smooth Animations**: Enhanced user experience
- **Clean Typography**: Easy-to-read content hierarchy

## 📞 Support
For deployment help, refer to `DEPLOYMENT-GUIDE.md` or check:
- Vercel documentation
- Pipedream help center
- Browser developer console for debugging

---

**🎉 Project Status: COMPLETE & READY FOR DEPLOYMENT**

All phases of the roadmap have been successfully implemented!