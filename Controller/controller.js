const siteData = {
  profile: {
    name: 'Angie Sumsion',
    title: 'Care Coordination & Senior Navigation',
    tagline: 'Guiding Families Through Aging With Clarity & Compassion',
    npi: '1750929980',
    payment: 'Private-Pay | No Insurance Needed',
    phone: '3854146113',
    email: 'angiesumsion1@gmail.com',
    location: 'Salt Lake • Utah • Davis Counties',
    accepting: 'Now Accepting New Families'
  },

  whoIHelp: [
    'Busy adult children caring for aging parents',
    'Seniors who want to safely age in place',
    'Families navigating a hospital discharge'
  ],

  services: [
    'Initial In-Home Assessment & Written Care Plan',
    'Care coordination and provider communication',
    'Hospital discharge planning support',
    'Family updates and ongoing navigation'
  ],

  doList: [
    'Coordinate care',
    'Advocate for your family',
    'Navigate systems',
    'Organize information',
    'Provide ongoing support'
  ],

  dontList: [
    'Hands-on medical care',
    'Diagnose or prescribe',
    'Replace home health',
    'Replace your medical team'
  ],

  packages: [
    {
      name: 'Starter — Peace of Mind Assessment',
      price: '$175',
      details: [
        '90-min assessment',
        'Written care plan',
        'Local resource list'
      ]
    },
    {
      name: 'Light Support',
      price: '$450/mo',
      details: [
        '4 hours/month',
        'Weekly check-in call',
        'Monthly family email',
        'Appointment scheduling'
      ]
    },
    {
      name: 'Standard Support ⭐ Most Popular',
      price: '$850/mo',
      details: [
        '8 hours/month',
        'In-person visits',
        'Care plan updates',
        'Provider coordination',
        'Family meeting'
      ],
      popular: true
    },
    {
      name: 'Intensive / Transition',
      price: '$1,500/mo',
      details: [
        '15 hours/month',
        'Hospital discharge support',
        'Daily check-ins first week',
        'Full advocacy'
      ]
    }
  ],

  cta: {
    title: 'Free 20-min Discovery Call',
    text: 'No pressure. We’ll discuss your situation, what support would help most, and next steps.',
    responseTime: 'Response within 24 hrs'
  }
};

const getHome = (req, res) => {
  res.render('home', { data: siteData });
};

module.exports = { siteData, getHome };