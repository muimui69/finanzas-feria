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
import { calcularAnualidadAnticipada } from "@/math/anualidades"
import { FormEvent, useState } from "react"


interface ISimple {
    pmt: string;
    tasa: string;
    n: string;
}

export function AnualidadAnticipada() {

    const [anualidadAnticipada, setAnualidadAnticipada] = useState<ISimple>({
        pmt: '',
        tasa: '',
        n: ''
    })

    const [resultado, setResultado] = useState<number | null>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAnualidadAnticipada(prevData => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pmtNum = parseFloat(anualidadAnticipada.pmt as string);
        const tasaNum = parseFloat(anualidadAnticipada.tasa as string);
        const nNum = parseFloat(anualidadAnticipada.n as string);
        if (!isNaN(pmtNum) && !isNaN(tasaNum) && !isNaN(nNum)) {
            const resultado = calcularAnualidadAnticipada(pmtNum, tasaNum, nNum);
            console.log(resultado)
            setResultado(resultado);
        }
    };

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Anualidad anticipada</CardTitle>
                    <CardDescription>Rellene los campos correctamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Capital</Label>
                                <Input
                                    id="name"
                                    name="pmt"
                                    placeholder="Pago periodico"
                                    value={anualidadAnticipada.pmt}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tasa (%)</Label>
                                <Input
                                    id="name"
                                    name="tasa"
                                    placeholder="Tasa de interes"
                                    value={anualidadAnticipada.tasa}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Periodo</Label>
                                <Input
                                    id="name"
                                    name="n"
                                    placeholder="Numero de periodos o cuotas"
                                    value={anualidadAnticipada.n}
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
