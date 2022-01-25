import { uid } from 'quasar'
import ga from '../services/analytics.js'

export default ({ router }) => {
  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, uid())

  })
}
