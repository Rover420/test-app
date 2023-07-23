import { getDictionary } from '@/get-dictionary'
import Main from '@/components/main/main';

export default async function Home({ params: { lang } }) {

  const rawt = await getDictionary(lang);

  const t = rawt?.home

  return (
    <Main t={t} />
  )
}
