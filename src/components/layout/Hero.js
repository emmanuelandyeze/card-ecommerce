import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
		<section className="hero md:mt-4">
			<div className="py-8 md:py-12">
				<h1 className="text-4xl md:text-6xl font-semibold">
					Where Every{' '}
					<span className="text-primary">Card</span> <br />
					Tells a Story <br />
				</h1>
				<p className="my-6 text-gray-500 text-sm">
					Unique, Personalized Cards for Every Occasion,
					Made with Heart and Creativity.
				</p>
				<div className="flex gap-4 text-sm ">
					<Link
						href="/menu"
						className="flex w-80 justify-center bg-primary uppercase items-center gap-2 text-white px-8 py-2 rounded-full"
					>
						<p>Order now</p>
						<Right />
					</Link>

					<button className="hidden md:flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
						Learn more
						<Right />
					</button>
				</div>
			</div>
			<div className="relative hidden md:block">
				<Image
					src={'/background.png'}
					layout={'fill'}
					objectFit={'contain'}
					alt={'pizza'}
				/>
			</div>
		</section>
	);
}