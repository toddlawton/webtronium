
import AboutContainer from '../../client/components/AboutContainer'

function index (ctx) {
  ctx.cache.control = 'public'
  ctx.state.context.container.component = AboutContainer
  ctx.state.layout.alternate = true
}

export default { index }
