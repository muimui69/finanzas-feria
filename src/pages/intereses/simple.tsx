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
import { calcularInteresSimple } from "@/math/intereses"
import { FormEvent, useState } from "react"


interface ISimple {
  capital: string;
  tasa: string;
  tiempo: string;
}

export function InteresSimple() {

  const [interesSimple, setInteresSimple] = useState<ISimple>({
    capital: '',
    tasa: '',
    tiempo: ''
  })

  const [resultado, setResultado] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInteresSimple(prevData => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name,value)
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const capitalNum = parseFloat(interesSimple.capital as string);
    const tasaNum = parseFloat(interesSimple.tasa as string);
    const periodoNum = parseFloat(interesSimple.tiempo as string);
    if (!isNaN(capitalNum) && !isNaN(tasaNum) && !isNaN(periodoNum)) {
      const resultado = calcularInteresSimple(capitalNum, tasaNum, periodoNum);
      console.log(resultado)
      setResultado(resultado);
    }

  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Interes simple</CardTitle>
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
                  value={interesSimple.capital}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Tasa (%)</Label>
                <Input
                  id="name"
                  name="tasa"
                  placeholder="Tasa de interes"
                  value={interesSimple.tasa}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Periodo</Label>
                <Input
                  id="name"
                  name="tiempo"
                  placeholder="Numero de periodos"
                  value={interesSimple.tiempo}
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
