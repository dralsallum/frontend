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
} from "./Divider.elements";
import couple from "../../assets/smilling.webp";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFHe>اطباء</ArContainerFHe>
          <ArContainerFPara>
            ساعدنا بتوظيف العديد من الاطباء والممارسين في فرص العمل المؤقتة
            والفرص الدائمة، وساعدنا اطباء الأسنان في الحصول على بيئات العمل
            الافضل على مستوى الوطن
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={couple} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Divider;
