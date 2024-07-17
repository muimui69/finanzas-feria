import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calcularEndeudamiento } from "@/math/ratios"
import { FormEvent, useState } from "react"


interface ISimple {
    pasivo: string;
    activo: string;
}

export function RatioEndeudamiento() {

    const [ratioEndeudamiento, setRatioEndeudamiento] = useState<ISimple>({
        activo: '',
        pasivo: '',
    })

    const [resultado, setResultado] = useState<number | null>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRatioEndeudamiento(prevData => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const activoNum = parseFloat(ratioEndeudamiento.activo as string);
        const pasivoNum = parseFloat(ratioEndeudamiento.pasivo as string);
        if (!isNaN(activoNum) && !isNaN(pasivoNum)) {
            const resultado = calcularEndeudamiento(pasivoNum, activoNum);
            console.log(resultado)
            setResultado(resultado);
        }
    };

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Ratio endeudamiento</CardTitle>
                    <CardDescription>Rellene los campos correctamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Activo</Label>
                                <Input
                                    id="name"
                                    name="activo"
                                    placeholder="Activo de la empresa"
                                    value={ratioEndeudamiento.activo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Pasivo</Label>
                                <Input
                                    id="name"
                                    name="pasivo"
                                    placeholder="Pasivo de la empresa"
                                    value={ratioEndeudamiento.pasivo}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="resultado">Resultado: {resultado !== null ? resultado : ''} </Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Button className="w-full" type="submit">Calcular</Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
