import { styled } from "styled-components";

// DetailLantern.jsx
export const DetailLanternWrapper = styled.div`
  height: 90%;
  max-height: 620px;
  position: relative;
  margin-top: 3%;
`;

export const DetailLanternImg = styled.img`
  height: 100%;
`;

export const TitleSec = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  top: 58%;
  left: 50%;
  width: 48%;

  color: #5b3a1a;
  font-size: 100%;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentSec = styled(TitleSec)`
  position: absolute;
  transform: translate(-50%, 0);
  width: 48%;
  top: 63%;
  font-size: 14px;
  line-height: 130%;
`;
export const MoreSec = styled.img`
  position: absolute;
  top: 54%;
  right: 25%;
  width: 3px;
`;
export const LikeBtn = styled.div`
  position: absolute;
  bottom: 3%;
  right: 26%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 16px;

    margin-right: 6px;
  }
  p {
    color: #5b3a1a;
    font-size: 16px;
    font-weight: 400;
  }
`;

// MoreModal.jsx
export const MoreModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;

  padding: 0 10px 5px 10px; // 0 632px 31px 22px
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
export const MoreBtnBox = styled.div`
  width: 100%; // 368px
  height: 163px;
  border-radius: 15px;
  background-color: #f1f1f1;
  margin-bottom: 8px;
`;
export const DeleteBtn = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 0.5px solid #3d4353;
  background-color: #f1f1f1;
  color: #0c74f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;
export const MoreTitle = styled(DeleteBtn)`
  height: 46px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  color: #3d4353;
  font-size: 12px;
`;
export const ReportBtn = styled(DeleteBtn)`
  height: 58px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom: none;
`;
export const XBtn = styled(MoreBtnBox)`
  height: 59px;
  background-color: #fff;
  color: #c31010;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

// DeleteModal.jsx
export const DeleteModalWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
export const DeleteBox = styled.div`
  width: 282px;
  height: 110px;
  border-radius: 15px;
  background-color: #f1f1f1;
`;
export const Question = styled(DeleteBox)`
  height: 64px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.5px solid #3d4353;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SelectBox = styled(DeleteBox)`
  height: 46px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
`;
export const NoBtn = styled(DeleteBox)`
  border-radius: 0;
  border-bottom-left-radius: 15px;
  width: 141px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  border-right: 0.5px solid #3d4353;
  border-left: 0;
`;
export const YesBtn = styled(NoBtn)`
  color: #c31010;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
`;

// PwModal.jsx
export const PwModalWrapper = styled(DeleteModalWrapper)``;
export const PwBox = styled(DeleteBox)``;
export const PwInputBox = styled(Question)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  p {
    padding-left: 8px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
  input {
    width: 100px;
    height: 34px;
    background-color: #d9d9d9;
    border: 1px solid #898989;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    font-size: 20px;
  }
`;

// YesModal.jsx
export const YesModalWrapper = styled(DeleteModalWrapper)``;
export const AlertBox = styled(DeleteBox)`
  width: 270px;
  height: 64px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3d4353;
`;

// ReportModal.jsx
export const ReportModalWrapper = styled.div`
  position: fixed;
  z-index: 10;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ReportBox = styled.div`
  width: 333px; // 100%
  border-radius: 15px;
  background-color: #fff;
`;
export const ReportTitle = styled.div`
  width: 100%;
  height: 130px;
  padding: 44px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 116.523%;
  display: flex;
  justify-content: center;
`;
export const ReportCheckBoxs = styled.div`
  width: 100%;
`;
export const CheckBox = styled.div`
  padding: 11px 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    background-color: #d9d9d9;
    margin-right: 14px;
  }
  input:checked {
    background-image: url("/checked.png");
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const Explain = styled.div`
  width: 100%;
  padding-top: 27px;
  padding-bottom: 47px;
  display: flex;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`;
export const ReportBtnBox = styled.div`
  width: 100%;
  height: 75px;
  border-top: 1px solid #b0b0b0;
  display: flex;
  flex-direction: row;
`;
export const ReportNoBtn = styled(NoBtn)`
  border-right: 1px solid #b0b0b0;
  width: 166px;
  height: 100%;
  background-color: transparent;
`;
export const ReportYesBtn = styled(ReportNoBtn)`
  color: #c31010;
  border-radius: 0;
  border-bottom-right-radius: 15px;
  border-right: 0;
`;

// ReportAlertModal.jsx
export const ReportAlertWrapper = styled(DeleteModalWrapper)``;
export const ReportAlertBox = styled(DeleteBox)`
  width: 282px;
  height: 64px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
