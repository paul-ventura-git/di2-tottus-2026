import C01Producto from '../subcomponents/R04ContainerLinkImage4.jsx/C01Producto'
import C02Producto from '../subcomponents/R04ContainerLinkImage4.jsx/C02Producto'
import C03Producto from '../subcomponents/R04ContainerLinkImage4.jsx/C03Producto'
import C04Producto from '../subcomponents/R04ContainerLinkImage4.jsx/C04Producto'

export default function R04ContainerLinkimage4(props) {
  return (
    <>
      <div class="d-flex gap-2 mt-2">        
        <div className="flex-fill">
          { props.mensaje }
          <C01Producto />
        </div>

        <div className="flex-fill">
          { props.mensaje }
          <C02Producto />
        </div>

        <div className="flex-fill">
          { props.mensaje }
          <C03Producto />
        </div>

        <div className="flex-fill">
          { props.mensaje }
          <C04Producto />
        </div>
      </div>
    </>
  )
}
