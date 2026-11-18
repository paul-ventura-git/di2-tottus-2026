import R01BannerEnvioGratis from "../components/Home/R01BannerEnvioGratis";
import R02Carousel from "../components/Home/R02Carousel";
import R03BannerOfertasTicTac from "../components/Home/R03BannerOfertasTicTac";
import R04ContainerLinkimage4 from "../components/Home/R04ContainerLinkimage4";
import R30CarouselLoMejorenTecnologia from "../components/Home/R30CarouselLoMejorenTecnologia";
import R31AprovechaYLlenaTuCarrito from "../components/Home/R31AprovechaYLlenaTuCarrito";

import mensaje_importado from "../data/mensaje.js";
import { products } from "../data/R30-query-productos-tecnologia.js";

export default function Home() {
  return (
    <div>
      <R01BannerEnvioGratis />
      <R02Carousel />
      <div className="container">
        <R03BannerOfertasTicTac />
        <R04ContainerLinkimage4 mensaje={ mensaje_importado } />

        <R30CarouselLoMejorenTecnologia productos={ products } />
        <R31AprovechaYLlenaTuCarrito />
      </div>      
    </div>
  )
}
