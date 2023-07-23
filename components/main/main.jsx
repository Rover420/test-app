import styles from './page.module.css'
import Clicks from './clicks'

async function getProviders() {
  const res = await fetch('http://localhost:3000/api/auth/providers', { next: { revalidate: 60 } }) // The result is cached
  return res.json()
}

const getClicks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_URL}/clicks`, { next: { revalidate: 60 } });
  return res.json();
}

const Main = async ({ t }) => {

  const providers = await getProviders();

  const prevClicks = await getClicks();

  return (
    <div style={{ height: '300vh' }}>
      <div style={{ display: 'flex', height: '100svh', justifyContent: 'center', alignItems: 'center' }}>
        <Clicks t={t} providers={providers} prevClicks={prevClicks} />
      </div>
    </div>
  )
}

export default Main