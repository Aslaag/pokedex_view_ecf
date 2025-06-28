import { useNavigate } from "react-router";
import { ROUTES } from "../routes/Routes";
import { Logo } from "./Logo";

export function Header() {
  let navigate = useNavigate()
   
  return (
    <div 
      onClick={() => navigate(ROUTES.HOME)} 
      className="flex flex-col justify-center items-center bg-lime-800/60 p-4 shadow-md shadow-lime-800/30 hover:cursor-pointer">
      <Logo/>
    </div>
  )
}