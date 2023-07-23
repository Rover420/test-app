import styles from './page.module.css'
import Clicks from './clicks'


const Main = async ({ t }) => {

  return (
    <div style={{ height: '300vh' }}>
      <div style={{ display: 'flex', height: '100svh', justifyContent: 'center', alignItems: 'center' }}>
        <Clicks t={t} providers={providers} prevClicks={prevClicks} />
      </div>
    </div>
  )
}

export default Main
