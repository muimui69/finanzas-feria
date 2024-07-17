import { Route, Routes } from 'react-router-dom';
import { InteresSimple } from '@/pages/intereses/simple';
import { InteresCompuesto } from '@/pages/intereses/compuesto';
import { MenubarLayout } from '@/components/menubar-layout';

export const AppRoutes = () => {
    return (
        <>
            <MenubarLayout />
            <Routes>
                <Route path="/interes-simple" Component={InteresSimple} />
                <Route path="/interes-compuesto" Component={InteresCompuesto} />
            </Routes>
        </>
    );
};

