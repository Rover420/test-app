import { getDictionary } from "@/get-dictionary";

export default async function SignIn({ params: { lang } }) {

    const rawt = await getDictionary(lang);
  
    const t = rawt?.signin
  
    return (
      <div>Hello World!</div>
    )
}