export const ProductType: { id: number; section: string; link: string[]; }[] = [
  {
    id: 1,
    section: "Treatments",
    link: ['Dental Implants', 'Dental Bridges', 'Dental Crowns', 'Dental Veneers', 'Dental Inlays', 'Dental Onlays', 'Smile Makeover', 'Whitening']
  },
  {
    id: 2,
    section: "Get in Touch",
    link: ['Free Estimate', 'Contact Us']
  },
  {
    id: 3,
    section: "Legal",
    link: ['Privacy Policy', 'Terms of Service']
  }
];


export const Aboutdata: { heading: string; imgSrc: string; paragraph: string; link: string; }[] = [
  {
    heading: "Affordable",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "We offer a range of affordable dental care options to suit your budget.",
    link: "Learn more",
  },
  {
    heading: "Transparent.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "We provide clear and transparent pricing for all our services.",
    link: "Learn more",
  },
  {
    heading: "Convenient",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "We offer flexible payment options to make your dental care more accessible.",
    link: "Learn more",
  },
];

export const StopHiddingPainPoints: { bold: string; text: string }[] = [
  
  { bold: "You avoid your favorite foods", text: " worried about pain or instability." },
  { bold: "You dread photos", text: " always finding a way to hide your teeth." },
  { bold: "You're tired of temporary fixes", text: " like messy adhesives and loose dentures." },
];
export const StopHiddingBenefits: { bold: string; text: string }[] = [
  { bold: "Get Your Bite Back", text: " With world-class Dental Implants and All-on-X procedures, you can eat what you love again with total confidence." },
  { bold: "Picture-Perfect Results", text: " Our in-house digital lab uses advanced CAD/CAM technology to craft flawless crowns and veneers, giving you a natural, brilliant smile." },
  { bold: "Expertise You Can Trust", text: " Dr. Guzmán, a US & German-trained specialist, ensures your treatment is not only affordable but meets the highest global standards of safety and excellence." },
];
export const StopHidding: { heading: string; imgSrc: string; paragraph: string; link: string; benefits?: { bold: string; text: string }[] }[] = [
  {
    heading: "The Daily Cost of Bad Teeth",
    imgSrc: "/images/hero/DentalPassport4.webp",
    paragraph:
      "You feel a flash of self-consciousness when you laugh or smile.",
    link: "Learn more",
    benefits: StopHiddingPainPoints,
  },
  {
    heading: "A Permanent Smile in Paradise",
    imgSrc: "/images/DentalPassport1.webp",
    paragraph:
      "We don't offer temporary patches. We deliver permanent, life-changing results with Costa Rica's leading dental team.",
    link: "Learn more",
    benefits: StopHiddingBenefits,
  },
  {
    heading: "Your New Beginning",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Don't just take our word for it. See the results for yourself. These are real patients who decided to stop compromising and start living again. This is the level of transformation you can expect.",
    link: "Learn more",
  },
];

export const DataType: { profession: string; name: string; imgSrc: string; }[] = [
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar4.svg",
  },
];

export const postData: { heading: string; imgSrc: string; }[] = [
  {
    heading: "Brand design for a computer brand.",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Brand design for a computer brand.",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Mobile app 3d wallpaper.",
    imgSrc: "/images/featured/feat2.jpg",
  },
];

export const Testimonials: { profession: string; comment: string; imgSrc: string; name: string; rating: number }[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 4,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
];


export const Article: { time: string; heading: string; heading2: string; date: string; imgSrc: string; name: string; }[] = [
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon",
    date: "August 19, 2021",
    imgSrc: "/images/articles/article3.png",
  },
];
