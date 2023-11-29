'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import {useEffect, useState} from "react";

export default function MenuPage() {
  // const [categories, setCategories] = useState([]);
  // const [menuItems, setMenuItems] = useState([]);
  // useEffect(() => {
  //   fetch('/api/categories').then(res => {
  //     res.json().then(categories => setCategories(categories))
  //   });
  //   fetch('/api/menu-items').then(res => {
  //     res.json().then(menuItems => setMenuItems(menuItems));
  //   });
  // }, []);

  const menuItems = [
		{
			_id: '1',
			name: 'Floral Elegance',
			image: '/background.jpg',
			description:
				'A stunning floral design that conveys heartfelt sentiments.',
			basePrice: 12.99,
			category: 'Golfing',
		},
		{
			_id: '2',
			name: 'Whimsical Wonders',
			image: '/background.jpg',
			description:
				'Playful and charming cards that bring joy and laughter.',
			basePrice: 9.99,
			category: 'Fishing',
		},
		{
			_id: '3',
			name: 'Vintage Charm',
			image: '/background.jpg',
			description:
				'Timeless cards reminiscent of a bygone era.',
			basePrice: 15.99,
			category: 'Golfing',
		},
		{
			_id: '4',
			name: 'Celebration Sparkle',
			image: '/background.jpg',
			description:
				"Glittering cards perfect for celebrating life's milestones.",
			basePrice: 11.49,
			category: 'Fishing',
		},
		{
			_id: '5',
			name: "Nature's Symphony",
			image: '/background.jpg',
			description:
				'Captivating cards inspired by the beauty of nature.',
			basePrice: 14.99,
			category: 'Golfing',
		},
		{
			_id: '6',
			name: 'Handwritten Whispers',
			image: '/background.jpg',
			description:
				'Elegantly scripted cards that speak from the heart.',
			basePrice: 10.99,
			category: 'Fishing',
		},
	];

  const categories = [
    {
      _id: 1,
      name: 'Fishing'
    },
    {
      _id: 2,
      name: 'Golfing'
    }
  ]
  
  return (
    <section className="mt-8">
      {categories?.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6 mb-12">
            {menuItems.filter(item => item.category === c.name).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}