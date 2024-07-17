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
import { calcularInteresCompuesto } from "@/math/intereses"
import { FormEvent, useState } from "react"


interface ISimple {
  capital: string;
  tasa: string;
  tiempo: string;
  capitalizacion: string;
}

export function InteresCompuesto() {

  const [interesCompuesto, setInteresCompuesto] = useState<ISimple>({
    capital: '',
    tasa: '',
    tiempo: '',
    capitalizacion:''
  })

  const [resultado, setResultado] = useState<number | null>(0);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInteresCompuesto(prevData => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value)
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const capitalNum = parseFloat(interesCompuesto.capital as string);
    const tasaNum = parseFloat(interesCompuesto.tasa as string);
    const periodoNum = parseFloat(interesCompuesto.tiempo as string);
    const capitalizaionNum = parseFloat(interesCompuesto.capitalizacion as string);
    if (!isNaN(capitalNum) && !isNaN(tasaNum) && !isNaN(periodoNum) && !isNaN(capitalizaionNum)) {
      const resultado = calcularInteresCompuesto(capitalNum, tasaNum, periodoNum,capitalNum);
      console.log(resultado)
      setResultado(resultado);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[350px] shadow-2xl">
        <CardHeader>
          <CardTitle>Interes compuesto</CardTitle>
          <CardDescription>Rellene los campos correctamente.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Capital</Label>
                <Input
                  id="name"
                  name="capital"
                  placeholder="Capital de tu empresa"
                  value={interesCompuesto.capital}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Tasa (%)</Label>
                <Input
                  id="name"
                  name="tasa"
                  placeholder="Tasa de interes"
                  value={interesCompuesto.tasa}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Periodo</Label>
                <Input
                  id="name"
                  name="tiempo"
                  placeholder="Numero de periodos"
                  value={interesCompuesto.tiempo}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Capitalizacones</Label>
                <Input
                  id="name"
                  name="capitalizacion"
                  placeholder="Numero de capitalizaciones"
                  value={interesCompuesto.capitalizacion}
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
