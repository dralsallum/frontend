import React, { useState, useRef, useEffect } from "react";
import {
  ArA,
  ArASp,
  ArConFCon,
  ArContainerF,
  ArHead,
  ArSubConF,
  ArWrapper,
  ColAud,
  ColAudCon,
  ColAudConF,
  ColAudSubBut,
  ColAudSubCon,
  ColAudSubSpan,
  ColAudSubSvg,
  ColConFCon,
  ColSubConFCon,
  ColSubPara,
  ColSubParaCon,
  ExCon,
  ExLab,
  ExReCon,
  ExReInp,
  ExReSubInpCon,
  ExSubCon,
  ExSubSpan,
  GoConFCon,
  KmCon,
  KmSubCon,
  OldSpan,
  ReConFCon,
  ReConFImg,
  ReConFaImg,
  ReSubConFCon,
  RowConFCon,
  RowLi,
  RowLiBut,
  RowLiCon,
  RowLisCon,
  RowReSpan,
  RowSpan,
  UtCon,
  UtyCon,
} from "./Options.elements";
import Back from "../../assets/tabs_background_1.svg";
import ReBack from "../../assets/double.svg";
import slides from "../../utils/Slides";

const buttonToSlideIndex = {
  Meditate: 0,
  Sleep: 1,
  Move: 2,
  Focus: 3,
  WakeUp: 4,
};

const Article = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioDuration, setAudioDuration] = useState(0); // duration of the audio
  const [audioCurrentTime, setAudioCurrentTime] = useState(0); // current time of the audio
  const audioPercentage = audioDuration
    ? (audioCurrentTime / audioDuration) * 100
    : 0;

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleButtonClick = (buttonLabel) => {
    const newIndex = buttonToSlideIndex[buttonLabel];
    if (newIndex !== undefined) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause if it's currently playing
      } else {
        audioRef.current.play(); // Play if it's currently paused
      }
      setIsPlaying(!isPlaying); // Toggle the state
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      // Remove old event listeners
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);

      // Set new audio source
      audioRef.current.src = slides[currentIndex].audioSrc;

      // Reload the audio to apply new source
      audioRef.current.load();

      // Add new event listeners
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      // Reset audio if index changes
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      };
    }
  }, [currentIndex]); // Now depends on currentIndex

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <ArWrapper>
      <ArHead>احصل على مساحة ذهنية</ArHead>
      <ArA>
        <ArASp>ابدأ فترة التجربة المجانية</ArASp>
      </ArA>
      <ArContainerF>
        <ArSubConF>
          <ArConFCon>
            <ReConFCon>
              <ReSubConFCon>
                <ReConFaImg src={ReBack} alt="" />
              </ReSubConFCon>
              <ReConFImg src={Back} alt="" />
            </ReConFCon>
          </ArConFCon>
          <GoConFCon>
            <RowConFCon>
              <RowLisCon>
                <RowLiCon>
                  <RowLi>
                    <RowLiBut onClick={() => handleButtonClick("Meditate")}>
                      <RowSpan>
                        <RowReSpan></RowReSpan>
                        الهدوء
                      </RowSpan>
                    </RowLiBut>
                  </RowLi>
                </RowLiCon>
                <RowLiCon>
                  <RowLi>
                    <RowLiBut onClick={() => handleButtonClick("Sleep")}>
                      <RowSpan>
                        <RowReSpan></RowReSpan>
                        النوم
                      </RowSpan>
                    </RowLiBut>
                  </RowLi>
                </RowLiCon>
                <RowLiCon>
                  <RowLi>
                    <RowLiBut
                      RowLiBut
                      onClick={() => handleButtonClick("Move")}
                    >
                      <RowSpan>
                        <RowReSpan></RowReSpan>
                        التحرك
                      </RowSpan>
                    </RowLiBut>
                  </RowLi>
                </RowLiCon>
                <RowLiCon>
                  <RowLi>
                    <RowLiBut
                      RowLiBut
                      onClick={() => handleButtonClick("Focus")}
                    >
                      <RowSpan>
                        <RowReSpan></RowReSpan>
                        التركيز
                      </RowSpan>
                    </RowLiBut>
                  </RowLi>
                </RowLiCon>
                <RowLiCon>
                  <RowLi>
                    <RowLiBut onClick={() => handleButtonClick("WakeUp")}>
                      <RowSpan>
                        <RowReSpan></RowReSpan>
                        اليقظة
                      </RowSpan>
                    </RowLiBut>
                  </RowLi>
                </RowLiCon>
              </RowLisCon>
            </RowConFCon>
            <ColConFCon>
              <ColSubConFCon>
                <ColSubParaCon>
                  <ColSubPara>{slides[currentIndex].text}</ColSubPara>
                </ColSubParaCon>
                <ColAudConF>
                  <ColAud
                    ref={audioRef}
                    src={slides[currentIndex].audioSrc}
                    onLoadedMetadata={() => {
                      if (audioRef.current) {
                        setAudioDuration(audioRef.current.duration);
                      }
                    }}
                    onTimeUpdate={() => {
                      if (audioRef.current) {
                        setAudioCurrentTime(audioRef.current.currentTime);
                      }
                    }}
                  ></ColAud>
                  <ColAudCon>
                    <ColAudSubCon>
                      <ColAudSubBut onClick={handlePlayAudio}>
                        <ColAudSubSpan>
                          <ColAudSubSvg viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M8 5v14l11-7z" />
                          </ColAudSubSvg>
                        </ColAudSubSpan>
                      </ColAudSubBut>
                      <ExCon>
                        <ExLab>{slides[currentIndex].label}</ExLab>
                        <ExSubCon>
                          <ExSubSpan>{formatTime(audioCurrentTime)}</ExSubSpan>
                          <ExReCon>
                            <ExReInp type="text" />
                            <ExReSubInpCon>
                              <UtCon></UtCon>
                              <UtyCon></UtyCon>
                            </ExReSubInpCon>
                            <KmCon>
                              <KmSubCon
                                style={{ right: `${100 - audioPercentage}%` }}
                              ></KmSubCon>
                            </KmCon>
                          </ExReCon>
                          <OldSpan>{formatTime(audioDuration)}</OldSpan>
                        </ExSubCon>
                      </ExCon>
                    </ColAudSubCon>
                  </ColAudCon>
                </ColAudConF>
              </ColSubConFCon>
            </ColConFCon>
          </GoConFCon>
        </ArSubConF>
      </ArContainerF>
    </ArWrapper>
  );
};

export default Article;
