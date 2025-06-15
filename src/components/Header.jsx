import { useNavigate } from "react-router";
import { ROUTES } from "../routes/Routes";
import { Logo } from "./Logo";

export function Header() {
  let navigate = useNavigate()
   
  return (
    <div 
      onClick={() => navigate(ROUTES.HOME)} 
      className="bg-lime-800/60 p-2 hover:cursor-pointer">
      <Logo/>
    </div>
  )
}