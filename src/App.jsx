import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { PokedexLayout } from "./layout/PokedexLayout";
import { NotFound } from "./pages/NotFound";
import { PokedexHomePage } from "./pages/PokedexHomePage";
import { PokemonView } from "./pages/PokemonView";
import { ROUTES } from "./routes/Routes";

export function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<PokedexLayout/>}>
          <Route path={ROUTES.HOME}  element={<PokedexHomePage/>}/>
          <Route path="/pokemon" element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.POKEMON}   element={<PokemonView/>}/>
          <Route path={ROUTES.NOT_FOUND}   element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}