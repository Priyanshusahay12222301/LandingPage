const feeData = {
  "feeStructure": {
    "university": "Lovely Professional University",
    "academicYear": "2025-26",
    "courses": [
      {
        "name": "B.Tech Computer Science & Engineering",
        "category": "Engineering",
        "duration": "4 years",
        "feeBreakdown": {
          "tuitionFee": "₹2,20,000 per year",
          "developmentFee": "₹60,000 per year",
          "totalPerYear": "₹2,80,000",
          "totalCourse": "₹11,20,000"
        },
        "additionalFees": {
          "admissionFee": "₹20,000 (one-time)",
          "examFee": "₹12,000 per year",
          "libraryFee": "₹4,000 per year"
        },
        "hostelFees": {
          "accommodationPerYear": "₹95,000 - ₹1,40,000",
          "messFees": "₹42,000 per year"
        },
        "scholarships": {
          "meritBased": "Up to 100% fee waiver",
          "needBased": "Up to 50% fee waiver",
          "sports": "Up to 100% fee waiver",
          "international": "Special scholarships for international students"
        }
      },
      {
        "name": "MBA",
        "category": "Management",
        "duration": "2 years",
        "feeBreakdown": {
          "tuitionFee": "₹3,50,000 per year",
          "developmentFee": "₹50,000 per year",
          "totalPerYear": "₹4,00,000",
          "totalCourse": "₹8,00,000"
        },
        "additionalFees": {
          "admissionFee": "₹25,000 (one-time)",
          "examFee": "₹15,000 per year",
          "libraryFee": "₹6,000 per year"
        },
        "hostelFees": {
          "accommodationPerYear": "₹1,20,000 - ₹1,60,000",
          "messFees": "₹45,000 per year"
        }
      },
      {
        "name": "BBA International Business",
        "category": "Management",
        "duration": "3 years",
        "feeBreakdown": {
          "tuitionFee": "₹1,80,000 per year",
          "developmentFee": "₹40,000 per year",
          "totalPerYear": "₹2,20,000",
          "totalCourse": "₹6,60,000"
        },
        "additionalFees": {
          "admissionFee": "₹15,000 (one-time)",
          "examFee": "₹10,000 per year",
          "libraryFee": "₹3,000 per year"
        }
      },
      {
        "name": "B.Des Fashion Design",
        "category": "Design",
        "duration": "4 years",
        "feeBreakdown": {
          "tuitionFee": "₹2,50,000 per year",
          "developmentFee": "₹75,000 per year",
          "totalPerYear": "₹3,25,000",
          "totalCourse": "₹13,00,000"
        },
        "additionalFees": {
          "materialFee": "₹25,000 per year",
          "studioFee": "₹15,000 per year"
        }
      },
      {
        "name": "B.Com (Hons)",
        "category": "Commerce",
        "duration": "3 years",
        "feeBreakdown": {
          "tuitionFee": "₹1,25,000 per year",
          "developmentFee": "₹25,000 per year",
          "totalPerYear": "₹1,50,000",
          "totalCourse": "₹4,50,000"
        }
      },
      {
        "name": "BA Journalism & Mass Communication",
        "category": "Arts",
        "duration": "3 years",
        "feeBreakdown": {
          "tuitionFee": "₹1,60,000 per year",
          "developmentFee": "₹30,000 per year",
          "totalPerYear": "₹1,90,000",
          "totalCourse": "₹5,70,000"
        },
        "additionalFees": {
          "equipmentFee": "₹10,000 per year",
          "practicalFee": "₹8,000 per year"
        }
      }
    ],
    "paymentOptions": {
      "installments": "Available in 2-3 installments per semester",
      "scholarships": "Merit-based scholarships up to 100%",
      "educationLoan": "Partnership with major banks for easy loan approval",
      "earlyBird": "5% discount for early fee payment"
    },
    "internationalStudents": {
      "feeStructure": "USD equivalent with additional support services",
      "scholarships": "Special merit scholarships available",
      "additionalServices": "Visa assistance, airport pickup, cultural orientation"
    },
    "note": "All fees are inclusive of GST where applicable. Special discounts available for economically weaker sections."
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