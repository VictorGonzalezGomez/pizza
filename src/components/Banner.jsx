import bannerImg from "../assets/img/Banner horizontal Pizza Llamativo negro rojo verde.png"

function Banner() {
const imageBanner = bannerImg;
  return (
<div>
  <img src={imageBanner} alt="banner de especial de pizzas con 50% de descuento a la derecha se ve una pizza con distintos tipos de ingredientes" className="bannerImage"/>
</div>
  );
}

export default Banner;