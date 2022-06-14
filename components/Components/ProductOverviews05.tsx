import { FC,  } from "react";
import { IHardware } from "../../src/interfaces";
import { SwiperDetail } from "./Swiper";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface Props {
	product: IHardware;
}

export const ProductOverviews05: FC<Props> = ({ product }) => {

	return (
		<>
			<section className="container mx-auto" >
				<div className="max-w-2xl mx-auto py-1 px-4 sm:px-6 lg:max-w-7xl lg:py-3 lg:px-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
					<div className="col-span-3" >
						{/* <SwiperComponent image={product.image} /> */}
						<SwiperDetail image={product.image} />
					</div>
					<div className="col-span-2" >
						<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
								{product.name}
							</h1>
						</div>
						<div className="mt-4 lg:mt-0 lg:row-span-3">
							<h2 className="sr-only">Product information</h2>
							<p className="text-3xl text-gray-900">{product.price}.00 Bs </p>
							<form className="mt-10">
								<button
									type="submit"
									className="mt-10 w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
								>
									Agregar al carrito
								</button>
							</form>
							<div className="py-2 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">


								<div className="mt-2">
									<h2 className="text-sm font-medium text-gray-900">Detalles</h2>

									<div className="mt-4 space-y-6">
										<p className="text-sm text-gray-600">{product.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
