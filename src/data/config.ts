export const SITE_CONFIG = {
  name: "Pankaj Foolwani",
  fullName: "Pankaj Foolwani",
  title: "Pankaj Foolwani — Entrepreneur & Business Consultant in India",
  description:
    "Pankaj Foolwani — entrepreneur and business consultant. Business consulting, documentation services and travel planning across Zirakpur, Chandigarh, Delhi & Jaipur.",
  role: "Entrepreneur & Business Consultant",
  tagline: "Empowering Businesses. Enabling Dreams.",
  intro:
    "I am an entrepreneur and business consultant focused on simplifying complex services through business solutions, professional documentation assistance and personalised travel planning.",
  phone: "+91 7009589439",
  phoneTel: "+917009589439",
  whatsappNumber: "917009589439",
  whatsappUrl: "https://wa.me/917009589439",
  email: "digitalservice115@gmail.com",
  locations: ["Zirakpur", "Chandigarh", "Panchkula", "Delhi", "Gurgaon", "Jaipur"],
  portrait: "/assets/pankaj-portrait.jpg",
  address: "Shop No. 51, Panchkula Complex, Krishna Enclave, Dhakoli, Zirakpur, Punjab 160104",
  hours: "Open daily, 10:30 AM – 9:00 PM",
  stats: {
    clients: "20,350+",
    ventures: "3",
    locations: "6",
    experienceYears: "8+"
  },
  socials: {
    instagram: "https://www.instagram.com/panchkula_seva_kendra",
    justdial: "https://jsdl.in/DT-196HFIEXYAS",
    whatsapp: "https://wa.me/917009589439"
  },
  googleReviewLink: "https://g.page/r/CR7ZsHcTeySUEBM/review",
  googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJIRHOqOKVDzkRHtmwdxN7JJQ"
};

export interface ReviewItem {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export const REVIEWS_DATA: {
  rating: number;
  reviewCount: number;
  mapsLink: string;
  reviews: ReviewItem[];
} = {
  rating: 5.0,
  reviewCount: 38,
  mapsLink: "https://g.page/r/CR7ZsHcTeySUEBM/review",
  reviews: [
    {
      name: "Dr Priyanka Mehra",
      rating: 5,
      date: "3 months ago",
      text: "This is my go-to online shop for any official documentation or form filling now. They are reliable, secure with personal details, and very affordable. From Aadhaar updates to complex applications, they handle everything smoothly. Excellent communication throughout. Highly professional and efficient. Highly recommend."
    },
    {
      name: "rajat kaushik",
      rating: 5,
      date: "6 months ago",
      text: "Excellent service with quick and correct response and professional behaviour. Highly recommended for every service."
    },
    {
      name: "Preety Sharma",
      rating: 5,
      date: "2 months ago",
      text: "These people are very helpful. I had to get my baby's Aadhaar card made but it was not getting made. It was done in one day through them. Very good service."
    }
  ]
};
