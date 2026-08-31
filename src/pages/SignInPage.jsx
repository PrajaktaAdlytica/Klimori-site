import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Gauge, LockKeyhole } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { useNarrativeMotion } from "../hooks/useNarrativeMotion.js";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const rootRef = useNarrativeMotion("Sign in | Klimori");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Preview complete. No credentials were sent.");
  }

  return (
    <main ref={rootRef} className="auth-page">
      <SiteHeader />
      <section className="auth-layout route-motion-section route-hero" aria-labelledby="sign-in-heading">
        <aside className="auth-context route-motion-item">
          <div className="auth-context__top"><Gauge size={25} aria-hidden="true" /><span>KLIMORI WORKSPACE</span></div>
          <div><p>Operating context stays with the decision.</p><h2>Return to the buildings and portfolios your team is reviewing.</h2></div>
          <dl><div><dt>Workspace</dt><dd>Secure organisation access</dd></div><div><dt>Region</dt><dd>USA / Global</dd></div><div><dt>Status</dt><dd><i></i>Secure environment</dd></div></dl>
        </aside>
        <div className="auth-form-wrap route-motion-item">
          <NavLink className="auth-back" to="/"><ArrowLeft size={15} /> Back to Klimori</NavLink>
          <div className="auth-heading"><span><LockKeyhole size={18} aria-hidden="true" /> Protected workspace access</span><h1 id="sign-in-heading">Sign in to Klimori.</h1><p>Use your organisation email to continue.</p></div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="sign-in-email">Work email<input id="sign-in-email" type="email" name="email" autoComplete="email" placeholder="name@company.com" required /></label>
            <label htmlFor="sign-in-password">Password<div className="password-field"><input id="sign-in-password" type={showPassword ? "text" : "password"} name="password" autoComplete="current-password" placeholder="Enter your password" required /><button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>
            <div className="auth-options"><label className="auth-checkbox"><input type="checkbox" name="remember" /><span>Keep me signed in</span></label><a href="mailto:access@klimori.com">Forgot password?</a></div>
            <button className="button button--primary" type="submit">Sign in <ArrowRight size={17} /></button>
            <button className="auth-sso" type="button" onClick={() => setStatus("Microsoft sign-in is available in the live product.")}>Continue with Microsoft</button>
            {status && <p className="auth-status" role="status"><Check size={16} />{status}</p>}
          </form>
          <p className="auth-help">Need workspace access? <NavLink to="/request-access">Request Klimori access</NavLink></p>
        </div>
      </section>
      <footer className="auth-footer"><span>© 2026 Klimori</span><span>USA data region</span><NavLink to="/legal#privacy">Privacy</NavLink></footer>
    </main>
  );
}

export { SignInPage };
