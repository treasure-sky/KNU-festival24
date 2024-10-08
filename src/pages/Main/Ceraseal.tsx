import Slider from "react-slick";
import {
  mainPageArtistImageStyle,
  mainPageArtistInfoStyle,
  mainPageArtistMoreInfoIconStyle,
} from "./.css.ts";
import { artistInfoListProps, SliderSettings } from "../../shared/types/mainPage.ts";
import { Link } from "react-router-dom";
import Lottie from "lottie-light-react";
import more_button from "../../assets/more_button.json";

interface SliderComponentProps {
  infoList: artistInfoListProps[];
  settings: SliderSettings;
}

/**
 * 아티스트 정보를 슬라이더로 보여주는 컴포넌트
 * @param infoList 아티스트 정보 리스트(artistImport.ts)
 * @param settings 슬라이더 설정
 */
const SliderComponent: React.FC<SliderComponentProps> = ({ infoList, settings }) => {
  return (
    <Slider {...settings}>
      {infoList.map((info, index) => (
        <div key={index}>
          <img src={info.image} className={mainPageArtistImageStyle} alt="artist" />
          <Link className={mainPageArtistInfoStyle} to={`artist/${info.url}`}>
            {info.name}
            <Lottie className={mainPageArtistMoreInfoIconStyle} animationData={more_button} />
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
