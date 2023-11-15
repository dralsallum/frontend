import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  AdCon,
  AdConSec,
  AgBut,
  AgCon,
  AgPa,
  ApConOn,
  ApConTw,
  ApFo,
  ApFoIn,
  ApFoInput,
  ApFoNo,
  ApHe,
  ApHeBe,
  ApHeDi,
  ApNo,
  ApSubWrap,
  ApWrap,
  AqAra,
  AqAraOne,
  AqAraOnePa,
  AqAraTwo,
  AqCon,
  AqMain,
  AqSec,
  AqSubCon,
  AqSubSec,
  ConFi,
  ConFo,
  ConOn,
  ConTh,
  ConTo,
  HiFiLa,
  HiFiOp,
  HiFiSel,
  HiOnIn,
  HiOnLa,
  HiOnSp,
  HiTwLa,
  HiWra,
  HiWraOn,
  HiWraOnIn,
  MasterOne,
  MasterTwo,
  TmBut,
  TmCon,
  TmEq,
  TmIn,
  TmInCon,
  TmInLab,
  TmInSpan,
  TmInSubCon,
} from "./Apply.elements";

const Apply = () => {
  const [isMasterOneVisible, setIsMasterOneVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [otherSpecialty, setOtherSpecialty] = useState("");
  const [disciplineOptions, setDisciplineOptions] = useState([]);
  const [specialtyOptions, setSpecialtyOptions] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const professionOptions = {
    nursing: ["Clinical Nursing", "Surgical Nursing"],
    physician: ["Cardiology", "Neurology"],
    dentist: ["Cardiology", "Neurology"],
    allies: ["Cardiology", "Neurology"],
    leadership: ["Cardiology", "Neurology"],
    language: ["Cardiology", "Neurology"],
  };

  const disciplineOptionsMapping = {
    "Clinical Nursing": ["Adult Health", "Pediatrics"],
    "Surgical Nursing": ["Orthopedics", "Neurosurgery"],
    Cardiology: ["Interventional Cardiology", "Electrophysiology"],
    Neurology: ["Stroke Care", "Epilepsy"],

    // ... other discipline to specialty mappings
  };

  const submitApplication = async () => {
    // Validate all the required fields
    // ...

    // Create the application object
    const applicationData = {
      email,
      phone,
      firstName,
      lastName,
      profession,
      discipline,
      specialty,
      otherSpecialty,
      // ... any other fields you have in your form ...
    };

    try {
      // Make the API call to submit the application
      const response = await fetch("http://localhost:8000/api/applies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle the response
      const result = await response.json();
      console.log(result);
      // Maybe show a success message or redirect the user
      navigate("/");
    } catch (error) {
      // Handle any errors
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleSelectChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  // Function to handle form input changes
  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear the error message as the user is typing
    if (emailError) setEmailError("");
  };

  const validateEmail = (email) => {
    // Regex for basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleButtonClick = () => {
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      return; // Do not toggle visibility if the email is invalid
    }

    // If the email is valid, you can proceed with your action, like toggling visibility
    setIsMasterOneVisible(!isMasterOneVisible);
  };

  useEffect(() => {
    if (profession) {
      setDisciplineOptions(professionOptions[profession] || []);
    }
  }, [profession]);

  useEffect(() => {
    if (discipline) {
      setSpecialtyOptions(disciplineOptionsMapping[discipline] || []);
    }
  }, [discipline]);

  return (
    <>
      <ApWrap>
        <ApSubWrap>
          <ApConOn>
            <ApHe>حان الوقت للارتقاء بمستوى مهنتك إلى المستوى التالي</ApHe>
            <ApHeBe>
              بغض النظر عن المكان الذي ترغب في الذهاب إليه، لدينا فرص في مواقع
              متعددة في جميع أنحاء البلاد
            </ApHeBe>
            <ApHeDi></ApHeDi>
          </ApConOn>
          <ApConTw>
            <AqCon></AqCon>
            <AqMain>
              <AqSec>
                <AqSubSec>
                  <AqAra>
                    <AqAraOne>
                      <AqAraOnePa>
                        خُذ الخطوة الأولى لبدء مسيرتك المهنية الجديدة
                      </AqAraOnePa>
                    </AqAraOne>
                    <AqAraTwo>
                      <ApFo onSubmit={(e) => e.preventDefault()}>
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoInput type="text" />
                        <ApFoNo>
                          <ApNo></ApNo>
                        </ApFoNo>
                        <AdCon>
                          <AdConSec>
                            {isMasterOneVisible && (
                              <MasterOne>
                                <TmCon>
                                  <ConOn>
                                    <svg></svg>
                                  </ConOn>
                                  <ConTo>
                                    <svg></svg>
                                  </ConTo>
                                  <ConTh>
                                    <svg></svg>
                                  </ConTh>
                                  <ConFo>
                                    <svg></svg>
                                  </ConFo>
                                  <ConFi>
                                    <svg></svg>
                                  </ConFi>
                                  <TmEq>
                                    <TmInCon>
                                      <TmInSubCon>
                                        <TmInLab htmlFor="emailInput"></TmInLab>
                                        <TmIn
                                          id="emailInput"
                                          type="email"
                                          placeholder="ايميل *"
                                          value={email}
                                          onChange={handleEmailChange}
                                        />
                                        {emailError && (
                                          <TmInSpan>{emailError}</TmInSpan>
                                        )}
                                      </TmInSubCon>
                                    </TmInCon>
                                    <TmBut onClick={handleButtonClick}>
                                      ابدا
                                    </TmBut>
                                  </TmEq>
                                  <a href=""></a>
                                  <a href=""></a>
                                  <a href=""></a>
                                </TmCon>
                              </MasterOne>
                            )}
                            {!isMasterOneVisible && (
                              <MasterTwo>
                                <HiWraOn>
                                  <HiOnLa htmlFor="">ايميل *</HiOnLa>
                                  <HiOnIn
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                      handleInputChange(e, setEmail)
                                    }
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">رقم الجوال *</HiTwLa>
                                  <HiOnIn
                                    id="phone"
                                    type="text"
                                    placeholder="رقم الجوال"
                                    value={phone}
                                    onChange={(e) =>
                                      handleInputChange(e, setPhone)
                                    }
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">الاسم الاول *</HiTwLa>
                                  <HiOnIn
                                    id="firstName"
                                    type="text"
                                    placeholder="الاسم الاول"
                                    value={firstName}
                                    onChange={(e) =>
                                      handleInputChange(e, setFirstName)
                                    }
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">اسم العائلة *</HiTwLa>
                                  <HiOnIn
                                    id="LastName"
                                    type="text"
                                    placeholder="اسم العائلة"
                                    value={lastName}
                                    onChange={(e) =>
                                      handleInputChange(e, setLastName)
                                    }
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>المهنة *</HiFiLa>
                                  <HiFiSel
                                    id="profession"
                                    value={profession}
                                    onChange={(e) =>
                                      handleSelectChange(e, setProfession)
                                    }
                                  >
                                    <HiFiOp value="">-- اختر المهنة --</HiFiOp>
                                    {Object.keys(professionOptions).map(
                                      (key) => (
                                        <HiFiOp key={key} value={key}>
                                          {key}
                                        </HiFiOp>
                                      )
                                    )}
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>الشهادة *</HiFiLa>
                                  <HiFiSel
                                    id="discipline"
                                    value={discipline}
                                    onChange={(e) =>
                                      handleSelectChange(e, setDiscipline)
                                    }
                                    disabled={!profession} // Disable if profession is not selected
                                  >
                                    <HiFiOp value="">-- اختر الشهادة --</HiFiOp>
                                    {disciplineOptions.map((option) => (
                                      <HiFiOp key={option} value={option}>
                                        {option}
                                      </HiFiOp>
                                    ))}
                                  </HiFiSel>

                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>التخصص *</HiFiLa>
                                  <HiFiSel
                                    id="specialty"
                                    value={specialty}
                                    onChange={(e) =>
                                      handleSelectChange(e, setSpecialty)
                                    }
                                    disabled={!discipline} // Disable if discipline is not selected
                                  >
                                    <HiFiOp value="">-- اختر التخصص --</HiFiOp>
                                    {specialtyOptions.map((option) => (
                                      <HiFiOp key={option} value={option}>
                                        {option}
                                      </HiFiOp>
                                    ))}
                                  </HiFiSel>

                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>تخصصات اخرى *</HiFiLa>
                                  <HiFiSel
                                    id="otherSpecialty"
                                    value={otherSpecialty}
                                    onChange={(e) =>
                                      handleSelectChange(e, setOtherSpecialty)
                                    }
                                  >
                                    <HiFiOp value="">-- تخصصات اخرى --</HiFiOp>
                                    <HiFiOp value="nursing">تمريض</HiFiOp>
                                    <HiFiOp value="allies">استقبال</HiFiOp>
                                    <HiFiOp value="physician">طبيب</HiFiOp>
                                    <HiFiOp value="leadership">اداري</HiFiOp>
                                    <HiFiOp value="dentist">طبيب اسنان</HiFiOp>
                                    <HiFiOp value="language">فني</HiFiOp>
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">السيرة *</HiTwLa>
                                  <HiOnIn
                                    id="resume"
                                    type="file"
                                    placeholder="resume"
                                    onChange={(e) => setFile(e.target.files[0])}
                                  />

                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <AgCon>
                                    <AgPa>* حقول اجبارية</AgPa>
                                    <AgPa></AgPa>
                                    <AgPa>
                                      "أوافق على استلام البريد الإلكتروني،
                                      والرسائل النصية الآلية والمكالمات الهاتفية
                                      (بما في ذلك المكالمات التي تحتوي على محتوى
                                      مُسجل مُسبقًا) من ونيابةً عن اللميديكال،
                                      والشركات التابعة لها."
                                      <a href="">اريني المزيد</a>
                                    </AgPa>
                                  </AgCon>
                                </HiWraOn>
                                <HiWraOn>
                                  <AgBut
                                    type="button"
                                    onClick={submitApplication}
                                  >
                                    ارسال!
                                  </AgBut>
                                </HiWraOn>
                              </MasterTwo>
                            )}
                          </AdConSec>
                        </AdCon>
                      </ApFo>
                    </AqAraTwo>
                  </AqAra>
                </AqSubSec>
              </AqSec>
            </AqMain>
            <AqSubCon></AqSubCon>
          </ApConTw>
        </ApSubWrap>
      </ApWrap>
    </>
  );
};

export default Apply;
