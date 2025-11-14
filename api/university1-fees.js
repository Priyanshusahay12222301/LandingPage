const feeData = {
  "feeStructure": {
    "university": "Amity University",
    "academicYear": "2025-26",
    "courses": [
      {
        "name": "B.Tech Computer Science & Engineering",
        "category": "Engineering",
        "duration": "4 years",
        "feeBreakdown": {
          "tuitionFee": "₹3,25,000 per year",
          "developmentFee": "₹75,000 per year",
          "totalPerYear": "₹4,00,000",
          "totalCourse": "₹16,00,000"
        },
        "additionalFees": {
          "admissionFee": "₹25,000 (one-time)",
          "examFee": "₹15,000 per year",
          "libraryFee": "₹5,000 per year"
        },
        "hostelFees": {
          "accommodationPerYear": "₹1,20,000 - ₹1,80,000",
          "messFees": "₹45,000 per year"
        },
        "scholarships": {
          "meritBased": "Up to 50% fee waiver",
          "needBased": "Up to 25% fee waiver",
          "sports": "Up to 100% fee waiver"
        }
      },
      {
        "name": "MBA",
        "category": "Management",
        "duration": "2 years",
        "feeBreakdown": {
          "tuitionFee": "₹6,50,000 per year",
          "developmentFee": "₹1,50,000 per year",
          "totalPerYear": "₹8,00,000",
          "totalCourse": "₹16,00,000"
        },
        "additionalFees": {
          "admissionFee": "₹50,000 (one-time)",
          "examFee": "₹20,000 per year",
          "libraryFee": "₹10,000 per year"
        },
        "hostelFees": {
          "accommodationPerYear": "₹1,50,000 - ₹2,00,000",
          "messFees": "₹50,000 per year"
        }
      },
      {
        "name": "BBA",
        "category": "Management",
        "duration": "3 years",
        "feeBreakdown": {
          "tuitionFee": "₹2,75,000 per year",
          "developmentFee": "₹50,000 per year",
          "totalPerYear": "₹3,25,000",
          "totalCourse": "₹9,75,000"
        },
        "additionalFees": {
          "admissionFee": "₹20,000 (one-time)",
          "examFee": "₹12,000 per year",
          "libraryFee": "₹5,000 per year"
        }
      },
      {
        "name": "M.Tech",
        "category": "Engineering",
        "duration": "2 years",
        "feeBreakdown": {
          "tuitionFee": "₹2,25,000 per year",
          "developmentFee": "₹50,000 per year",
          "totalPerYear": "₹2,75,000",
          "totalCourse": "₹5,50,000"
        }
      },
      {
        "name": "B.Sc Applied Sciences",
        "category": "Sciences",
        "duration": "3 years",
        "feeBreakdown": {
          "tuitionFee": "₹1,75,000 per year",
          "developmentFee": "₹35,000 per year",
          "totalPerYear": "₹2,10,000",
          "totalCourse": "₹6,30,000"
        }
      },
      {
        "name": "M.Sc",
        "category": "Sciences",
        "duration": "2 years",
        "feeBreakdown": {
          "tuitionFee": "₹1,25,000 per year",
          "developmentFee": "₹25,000 per year",
          "totalPerYear": "₹1,50,000",
          "totalCourse": "₹3,00,000"
        }
      }
    ],
    "paymentOptions": {
      "installments": "Available in 2-4 installments per year",
      "scholarships": "Merit and need-based scholarships available",
      "educationLoan": "Tie-ups with leading banks for education loans"
    },
    "note": "Fees are subject to revision. Additional charges may apply for specialized courses and international programs."
  }
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json(feeData);
}