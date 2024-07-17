import { Route, Routes } from 'react-router-dom';
import { InteresSimple } from '@/pages/intereses/simple';
import { InteresCompuesto } from '@/pages/intereses/compuesto';
import { MenubarLayout } from '@/components/menubar-layout';
import { AnualidadAnticipada } from '@/pages/anualidades/anticipadas';
import { AnualidadVencida } from '@/pages/anualidades/vencidas';
import { AnualidadDiferida } from '@/pages/anualidades/diferidas';

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
            </Routes>
        </>
    );
};

