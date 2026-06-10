import { redirect } from "next/navigation";

// /services existed before — redirect to the new /treatments URL
export default function ServicesRedirect() {
  redirect("/treatments");
}
