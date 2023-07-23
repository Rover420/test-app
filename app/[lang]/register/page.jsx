import { getDictionary } from "@/get-dictionary";

export default async function Register({ params: { lang } }) {

    const rawt = await getDictionary(lang);
  
    const t = rawt?.register
  
    return (
      <div>Hello World!</div>
    )
}