import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerFPara,
  ArContainerS,
  ArContainerSImg,
  ArSubContainerF,
  ArWrapper,
} from "./Article.elements";
import physician from "../../assets/arab.png";
import { Button } from "../../globalStyles";

const Article = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>
            نحل أكبر التحديات في قوى العمل الصحية!
          </ArContainerFCon>
          <ArContainerFHe>
            بحثك عن المواهب في مجال الرعاية الصحية أصبح سهلاً!
          </ArContainerFHe>
          <ArContainerFPara>
            تقدم شركتنا خدمات متخصصة لمساعدة المستشفيات في العثور على المواهب
            الطبية المؤهلة والمحترفة. نحن ندرك أهمية وجود فريق عمل طبي ماهر
            لضمان تقديم أفضل رعاية للمرضى. لذلك، نعمل بجد لتوفير الكفاءات الطبية
            التي تتناسب مع متطلباتكم وتلبي معايير الجودة العالية.
          </ArContainerFPara>
          <Button>خدمة المستشفيات</Button>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={physician} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Article;
