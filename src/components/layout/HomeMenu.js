'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HomeMenu() {
  // const [bestSellers, setBestSellers] = useState([]);
  // useEffect(() => {
  //   fetch('/api/menu-items').then(res => {
  //     res.json().then(menuItems => {
  //       setBestSellers(menuItems.slice(-3));
  //     });
  //   });
  // }, []);
  const bestSellers = [
		{
			_id: '1',
			name: 'Floral Elegance',
			image: '/background.jpg',
			description:
				'A stunning floral design that conveys heartfelt sentiments.',
			basePrice: 12.99,
		},
		{
			_id: '2',
			name: 'Whimsical Wonders',
			image: '/background.jpg',
			description:
				'Playful and charming cards that bring joy and laughter.',
			basePrice: 9.99,
		},
		{
			_id: '3',
			name: 'Vintage Charm',
			image: '/background.jpg',
			description:
				'Timeless cards reminiscent of a bygone era.',
			basePrice: 15.99,
		},
		{
			_id: '4',
			name: 'Celebration Sparkle',
			image: '/background.jpg',
			description:
				"Glittering cards perfect for celebrating life's milestones.",
			basePrice: 11.49,
		},
		{
			_id: '5',
			name: "Nature's Symphony",
			image: '/background.jpg',
			description:
				'Captivating cards inspired by the beauty of nature.',
			basePrice: 14.99,
		},
		{
			_id: '6',
			name: 'Handwritten Whispers',
			image: '/background.jpg',
			description:
				'Elegantly scripted cards that speak from the heart.',
			basePrice: 10.99,
		},
	];


  return (
    <section className="">
      {/* <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/1.png'} width={109} height={289}  alt={'card'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div> */}
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Sellers'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}