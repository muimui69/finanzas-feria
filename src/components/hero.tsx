// import HeroCards from "./hero-cards";
import "./css/hero.css"
import { cn } from "@/lib/utils";


export default function Hero() {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                            Sistema Financiero integral
                        </span>{" "}
                        para el cálculo
                        de
                    </h1>{" "}
                    Intereses, anualidades dentro{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            de los ratios financieros
                        </span>{" "}
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Un sistema completo para calcular intereses, anualidades y ratios financieros de manera precisa y eficiente.
                </p>

            </div>

            <div className="z-10">
                {/* <HeroCards /> */}
            </div>

            <div className="shadow-card"></div>
        </section>
    );
};