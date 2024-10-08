import * as styles from "./index.css";

import TabBtns from "./TabBtns";
import Card from "./Card";
import { useBoothNFoodtruckTabs } from "./TabBtns/hook";
import { dataMappping } from "./dataMapping";

import haminseop_layout from "../../assets/data/layout/haminseop_layout.png";
import playground_layout from "../../assets/data/layout/playground_layout.png";
import sixty_anniv_layout from "../../assets/data/layout/sixty_anniv_layout.png";
import ImageModal from "../../components/ImageModal";

export default function BoothNFoodList() {
  const { activePlace, activeType, changeTab } = useBoothNFoodtruckTabs();
  let prevName = "";
  const { data, color } = dataMappping(activePlace, activeType);

  return (
    <div>
      <section className={styles.tabContainer}>
        <TabBtns
          color={color}
          activePlace={activePlace}
          activeType={activeType}
          changeTab={changeTab}
        />
      </section>
      <section className={styles.imgContainer}>
        <div className={styles.imgContainer2}>
          {activePlace !== "미래광장" && (
            <ImageModal
              src={
                activePlace === "함인섭광장"
                  ? haminseop_layout
                  : activePlace === "대운동장"
                    ? playground_layout
                    : sixty_anniv_layout
              }
              alt="layout"
              activePlace={activePlace}
            />
          )}
        </div>
      </section>
      <section className={styles.cardContainer}>
        {data.map((item) => {
          if (prevName === item.name) return null;
          prevName = item.name;
          return (
            <Card
              key={item.id}
              id={item.id}
              description={item.description}
              imgURL={"image" in item ? item.image : undefined}
              color={color}
              order={item.order}
              name={item.name}
              hasDetail={
                // 판매중인 상품이 있거나 설명이 10자 이상인 경우에만 상세 페이지 존재
                ("saleItems" in item ? item.saleItems.length > 0 : undefined) ||
                item.description.length > 10
              }
            />
          );
        })}
      </section>
    </div>
  );
}
