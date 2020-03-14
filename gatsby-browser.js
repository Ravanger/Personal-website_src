import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}
