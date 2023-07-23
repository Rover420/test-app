import { getDictionary } from '@/get-dictionary'
import Main from '@/components/main/main';

export default async function Home({ params: { lang } }) {

  const rawt = await getDictionary(lang);

  console.log(rawt);

  const t = rawt?.home;

  console.log(t);

  return (
    <Main t={t} />
  )
}
