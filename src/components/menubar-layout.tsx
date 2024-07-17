import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
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
                        <MenubarTrigger className="cursor-pointer" onClick={()=>navigate("/")}>Inicio</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">Intereses</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className="cursor-pointer" onClick={()=>navigate("/interes-simple")} >
                                Simple
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="cursor-pointer" onClick={()=>navigate("/interes-compuesto")}>
                                Compuesto
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">Anualidades</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className="cursor-pointer">
                                Vencidas
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="cursor-pointer">
                                Anticipadas
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="cursor-pointer">
                                Diferidas
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer" >Ratios</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className="cursor-pointer">
                                Endudamiento
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="cursor-pointer">
                                Rentabilidad
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="cursor-pointer">
                                Liquidez
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </div>
            </Menubar>
        </div>
        <Outlet/>
        </>
    )
}
