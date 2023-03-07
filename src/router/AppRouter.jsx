import { Route, Routes } from "react-router-dom";
import { CatFavorites } from "../pages/CatFavorites";
import { CatHome } from "../pages/CatHome";
import { CatNotFound } from "../pages/CatNotFound";
import { CatNavBar } from "../ui/components/CatNavBar";

export const AppRouter = () => {
    return (
        <>
            <CatNavBar />
            <Routes>
                <Route path="/" element={<CatHome />} />
                <Route path="/favoritos" element={<CatFavorites />} />
                <Route path="*" element={<CatNotFound />} />
            </Routes>
        </>

    )
}
