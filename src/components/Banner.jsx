import bannerImg from "../assets/img/Banner horizontal Pizza Llamativo negro rojo verde.png"

function Banner() {
const imageBanner = bannerImg;
  return (
<div>
  <img src={imageBanner} className="bannerImage"/>
</div>
  );
}

export default Banner;