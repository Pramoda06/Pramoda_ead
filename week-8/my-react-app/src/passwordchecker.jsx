import react,{useState} from "react";

export default function app()
{
  const [password,setPassword]=useState("");
  const passchecker=(pass)=>{
    let score=0;
    if(pass.length==0)
      return 0;
    if(/[A-Z]/.test(pass))
      score++;
    if(/[a-z]/.test(pass))
      score++;
    if(/[0-9]/.test(pass))
      score++;
    if(/[@$!%*?&]/.test(pass))
      score++;
    return score;
  };

  const strength=passchecker(password);
  const label=(strength)=>{
    if(strength==0)
      return "no password";
    if (strength <= 2) return "Weak";
    if (strength === 3) return "Medium";
    if (strength === 4) return "Strong";
    else
      return "Very Strong";
  };

  return(
    <div>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" ></input>
      <p>Password strength:{label(strength)}</p>
    </div>
  );


}