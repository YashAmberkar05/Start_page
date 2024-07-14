import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { RiEdit2Fill } from "react-icons/ri";
const Workspace = () => {
	// Array of unique props for each Card
	const cardsData = [
		{ id: 1, title: "Card 1", link: "https://github.com/" },
		{ id: 2, title: "Card 2", link: "Content for Card 2" },
		{ id: 3, title: "Card 3", link: "Content for Card 3" },
		{ id: 4, title: "Card 4", link: "Content for Card 4" },
		{ id: 5, title: "Card 5", link: "Content for Card 5" },
		{ id: 6, title: "Card 6", link: "Content for Card 6" },
		{ id: 7, title: "Card 7", link: "Content for Card 7" },
		{ id: 8, title: "Card 8", link: "Content for Card 8" },
	];

	// scrollbar behaviour
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;

		const handleScroll = (event) => {
			event.preventDefault();

			if (event.deltaY < 0) {
				// Scroll up, scroll right
				container.scrollLeft += 5;
			} else {
				// Scroll down, scroll left
				container.scrollLeft -= 5;
			}
		};

		container.addEventListener("wheel", handleScroll, { passive: false });

		return () => {
			container.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div className=' relative  top-32  flex flex-col h-[15%] w-[90vw] md:max-w-screen-2xl mt-2 md:max-h-32 mx-auto  md:flex-row md:justify-around md:items-center'>
			{/* shortcuts Group name */}
			<div className='flex justify-between relative  my-auto h-12 w-20 min-w-56 border-2 '>
				<span className='  bg-yellow-400 font-Questrial text-2xl w-[80%] h-full text-center  content-center'>
					Academics
				</span>
				<button className=' w-[20%] h-full bg-yellow-400 '>
					<RiEdit2Fill className='ml-2 bg-yellow-400' size={20} />
				</button>
			</div>

			{/* shortcuts */}
			<div
				className='  flex  space-x-7 p-2 items-center h-[100%] md:h-[100%] w-[100%] overflow-x-auto md:w-[75%] custom-scrollbar'
				ref={containerRef}
			>
				{cardsData.map((item) => (
					<div key={item.id} className='border min-w-64 h-10'>
						<Card {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Workspace;
