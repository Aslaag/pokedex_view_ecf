import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { PokedexHomePage } from "./pages/PokedexHomePage";
import { PokemonView } from "./pages/PokemonView";
import { ROUTES } from "./routes/Routes";

export function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME}  element={<PokedexHomePage/>}/>
        <Route path={ROUTES.POKEMON}   element={<PokemonView/>}/>
        <Route path={ROUTES.NOT_FOUND}   element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </>
}