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
import couple from "../../assets/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>صنع من محترفين</ArContainerFCon>
          <ArContainerFHe>اطباء</ArContainerFHe>
          <ArContainerFPara>
            نحن نوظف أكثر من 4000 طبيب وممارس متقدم سنويًا في فرص العمل المؤقتة
            للأطباء والمواقع الدائمة، وطب الأسنان والطب عن بُعد في جميع أنواع
            بيئات الممارسة الطبية على مستوى الوطن.
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
