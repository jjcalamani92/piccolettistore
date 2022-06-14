export const HomeHardware = () => {
	return (
		<section className="relative bg-white">
			<img
				className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
				src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655137811/Ferreteria/Ferreteria_rxmqk6.webp"
				alt="Couple on a bed with a dog"
			/>

			<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

			<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						La calidad esta
						<strong className="font-extrabold text-orange-700 sm:block">
							Disponible
						</strong>
					</h1>

					<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						Fierros es una ferretería que ofrece toda una gama de herramientas para arreglar los desperfectos del hogar.
					</p>

					<div className="flex flex-wrap gap-4 mt-8 text-center">
						<a
							className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-orange-600 sm:w-auto active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring"
							href=""
						>
							Ver Productos
						</a>

						<a
							className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-orange-600 sm:w-auto hover:text-orange-700 active:text-orange-600 focus:outline-none focus:ring"
							href=""
						>
							Descuentos
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
