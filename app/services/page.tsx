import type { Metadata } from "next";
import Experience from "../_design/Experience";
export const metadata: Metadata = {"title": "A clearer path through billing work.", "description": "Eight focused services that support your revenue-cycle team. Explore the tasks, records, and handoffs involved, with clinical, coding, and financial decisions kept with qualified staff.", "alternates": {"canonical": "/services"}};
export default function Page(){return <Experience services/>}
