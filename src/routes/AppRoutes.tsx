import { Route, Routes } from 'react-router-dom';
import { InteresSimple } from '@/pages/intereses/simple';
import { InteresCompuesto } from '@/pages/intereses/compuesto';
import { MenubarLayout } from '@/components/menubar-layout';
import { AnualidadAnticipada } from '@/pages/anualidades/anticipadas';
import { AnualidadVencida } from '@/pages/anualidades/vencidas';
import { AnualidadDiferida } from '@/pages/anualidades/diferidas';
import { RatioEndeudamiento } from '@/pages/ratios/endeudamiento';
import { RatioLiquidez } from '@/pages/ratios/liquidez';
import { RatioRentabilidad } from '@/pages/ratios/rentabilidad';

export const AppRoutes = () => {
    return (
        <>
            <MenubarLayout />
            <Routes>
                <Route path="/interes-simple" Component={InteresSimple} />
                <Route path="/interes-compuesto" Component={InteresCompuesto} />
                <Route path="/anualidad-anticipada" Component={AnualidadAnticipada} />
                <Route path="/anualidad-vencida" Component={AnualidadVencida} />
                <Route path="/anualidad-diferida" Component={AnualidadDiferida} />
                <Route path="/ratio-endeudamiento" Component={RatioEndeudamiento} />
                <Route path="/ratio-liquidez" Component={RatioLiquidez} />
                <Route path="/ratio-rentabilidad" Component={RatioRentabilidad} /> 
            </Routes>
        </>
    );
};

