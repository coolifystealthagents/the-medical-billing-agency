import type {Metadata} from "next";
import ContactShell from "@/components/ContactShell";
import LeadForm from "@/components/LeadForm";

export const metadata:Metadata={title:"Contact Us",description:"Tell us about the claims, payment, denial, eligibility, or patient-account work that needs administrative support.",alternates:{canonical:"https://themedicalbillingagency.com/contact-us"}};
export default function ContactPage(){return <ContactShell brand={"The Medical Billing Agency"} title={"Build a clearer billing workflow."} intro={"Tell us about the claims, payment, denial, eligibility, or patient-account work that needs administrative support."} preparation={["Your recurring billing queues", "Approved practice systems and reporting needs", "Qualified review, access and escalation owners"]} boundary={"Your practice retains clinical, coding, compliance and financial decisions. Do not include patient records or protected health information in this form."} calendar={"https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1"}><LeadForm source="contact-page-consultation"/></ContactShell>}
