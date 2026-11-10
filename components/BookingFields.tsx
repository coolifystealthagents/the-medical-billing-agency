"use client";
import { useState } from "react";
export const personalDomains=new Set(["gmail.com","googlemail.com","yahoo.com","hotmail.com","outlook.com","live.com","icloud.com","aol.com","proton.me","protonmail.com"]);
export function BookingFields(){
 const [referral,setReferral]=useState("");
 return <div className="booking-fields">
  <label>First Name *<input name="first_name" autoComplete="given-name" maxLength={60} required/></label>
  <label>Last Name *<input name="last_name" autoComplete="family-name" maxLength={60} required/></label>
  <label className="booking-email">Business Email *<input name="email" type="email" autoComplete="email" maxLength={254} required/><small>Not accepting personal email addresses.</small></label>
  <div className="booking-phone-field"><span>Phone Number *</span><div className="booking-phone"><select aria-label="Country code" name="phone_country" defaultValue="+1">{[["United States / Canada","+1"],["Indonesia","+62"],["Philippines","+63"],["United Kingdom","+44"],["Australia","+61"],["New Zealand","+64"],["Singapore","+65"],["India","+91"],["United Arab Emirates","+971"],["Germany","+49"],["France","+33"],["Ireland","+353"],["Netherlands","+31"],["Spain","+34"],["Italy","+39"],["South Africa","+27"],["Brazil","+55"],["Mexico","+52"],["Malaysia","+60"],["Japan","+81"],["South Korea","+82"],["Hong Kong","+852"],["Other (include code in number)",""]].map(([name,code])=><option key={name} value={code} title={name}>{code||"Other"}</option>)}</select><input aria-label="Phone Number *" name="phone" type="tel" autoComplete="tel-national" inputMode="tel" placeholder="Phone number" pattern={String.raw`[+0-9\(\) .\-]{6,30}`} maxLength={30} required/></div></div>
  <label>Company Name *<input name="company" autoComplete="organization" maxLength={160} required/></label>
  <label>Website / URL<input name="company_website" autoComplete="url" placeholder="example.com" maxLength={300}/></label>
  <label>Company Size *<select name="company_size" defaultValue="" required><option value="" disabled>Select...</option>{["1-5","5-10","11-50","51-250","251-1k","1k+"].map(x=><option key={x}>{x}</option>)}</select></label>
  <label>How Many Positions to Fill *<select name="positions_to_fill" defaultValue="" required><option value="" disabled>Select...</option>{["Just 1 Position","2-5 Positions","6-10 Positions","11-50 Positions","51-100 Positions","101-500 Positions","501-1,000 Positions","Over 1,000 Positions"].map(x=><option key={x}>{x}</option>)}</select></label>
  <label className={referral==="Other"?"":"booking-wide"}>How Did You Hear About Us? *<select name="referral_source" value={referral} onChange={e=>setReferral(e.target.value)} required><option value="" disabled>Select...</option>{["Google","Email","LinkedIn","Reddit","X / Twitter","Referral","ChatGPT / AI","Outbound Outreach","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
  {referral==="Other"&&<label>Please Specify *<input name="referral_specify" maxLength={200} required/></label>}
  <label className="booking-wide">Message<textarea name="message" rows={4} maxLength={2000} placeholder="Tell us about the work you need help with."/></label>
  <label className="booking-wide booking-consent"><input type="checkbox" name="sms_consent" value="yes"/><span>I agree to receive appointment reminder texts from Stealth Agents. Message frequency varies; message and data rates may apply.</span></label>
  <input type="hidden" name="form_version" value="booking-v2"/>
  <label className="booking-honeypot" aria-hidden="true">Leave this field empty<input name="website_url" tabIndex={-1} autoComplete="off"/></label>
 </div>;
}
