import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Outlet, useNavigate } from "react-router-dom";

export function MenubarLayout() {
    const navigate = useNavigate();

    return (
        <>
            <div className="border">
                <Menubar
                    className="container p-7 flex items-center justify-between border-none shadow-none"
                >
                    <div className="flex items-center space-x-4">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer" onClick={() => navigate("/")}>Inicio</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">Intereses</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="cursor-pointer" onClick={() => navigate("/interes-simple")} >
                                    Simple
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="cursor-pointer" onClick={() => navigate("/interes-compuesto")}>
                                    Compuesto
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">Anualidades</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/anualidad-vencida")}>
                                    Vencidas
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/anualidad-anticipada")}>
                                    Anticipadas
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/anualidad-diferida")}>
                                    Diferidas
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer" >Ratios</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/ratio-endeudamiento")}
                                >
                                    Endudamiento
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/ratio-rentabilidad")}
                                >
                                    Rentabilidad
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="cursor-pointer"
                                    onClick={() => navigate("/ratio-liquidez")}
                                >
                                    Liquidez
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </div>
                </Menubar>
            </div>
            <Outlet />
        </>
    )
}
