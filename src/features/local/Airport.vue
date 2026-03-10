<script setup>
// import { usePopupStore } from '@/stores/popup';
import { ImageComponent } from '@/components/image';
// import { POPUP_SET } from '@/js/constants/popup-set';
import introBg from '@images/local/airport/airport-intro.jpeg';
import step1 from '@images/local/airport/step1.png';
import step2 from '@images/local/airport/step2.png';
import step3 from '@images/local/airport/step3.png';
import step4 from '@images/local/airport/step4.png';
import step5 from '@images/local/airport/step5.png';
import qrCode from '@images/local/airport/qr.png';
// const popupStore = usePopupStore();

// const handleOpenPopup = () => {
//   popupStore.openPopup(POPUP_SET.qr);
// };
</script>
<template>
  <div class="airport-container">
    <h2 class="section-title">공항</h2>

    <ImageComponent :src="introBg" alt="삿포로 공항 이미지" class="main-img mb40" />

    <section class="content-section">
      <div class="process-steps">
        <div class="step-card step-card-1">
          <div class="step-header">
            <span class="step-badge">01</span>
            <h3 class="step-title">입국 심사</h3>
          </div>
          <div class="step-body">
            <div class="h-row h-row-align-center">
              <div class="h-col h-col-12 h-col-md-4">
                <ImageComponent :src="step1" class="step-thumb" />
              </div>
              <div class="h-col h-col-12 h-col-md-8">
                <p class="step-text">안내 표지판을 따라 이동하여 여권과 입국 신고서를 제출합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="connector"><div class="line"></div></div>

        <div class="step-card step-card-2">
          <div class="step-header">
            <span class="step-badge">02</span>
            <h3 class="step-title">수하물 수취</h3>
          </div>
          <div class="step-body">
            <div class="h-row h-row-align-center">
              <div class="h-col h-col-12 h-col-md-4">
                <ImageComponent :src="step2" class="step-thumb" />
              </div>
              <div class="h-col h-col-12 h-col-md-8">
                <p class="step-text">전광판에서 항공편명을 확인하고 해당 수하물 컨베이어에서 짐을 찾습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="connector"><div class="line"></div></div>

        <div class="step-card step-card-3">
          <div class="step-header">
            <span class="step-badge">03</span>
            <h3 class="step-title">세관 검사</h3>
          </div>
          <div class="step-body">
            <div class="h-row h-row-align-center">
              <div class="h-col h-col-8 h-col-md-4">
                <ImageComponent :src="step3" class="step-thumb" />
              </div>
              <div class="h-col h-col-4 h-col-md-2">
                <ImageComponent :src="qrCode" :alt="'sample'" class="step-thumb" />
              </div>
              <div class="h-col h-col-12 h-col-md-6">
                <p class="step-text">키오스크에 여권 스캔 및 QR 스캔 후 출구로 이동하여 나갑니다.</p>
                <!-- <button type="button" class="btn-qrCode" @click="handleOpenPopup">QR 코드 보기</button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="connector"><div class="line"></div></div>

        <div class="step-card step-card-4">
          <div class="step-header">
            <span class="step-badge">04</span>
            <h3 class="step-title">버스 승차장 이동</h3>
          </div>
          <div class="step-body">
            <div class="h-row h-row-align-center">
              <div class="h-col h-col-12 h-col-md-4">
                <ImageComponent :src="step4" class="step-thumb" />
              </div>
              <div class="h-col h-col-12 h-col-md-8">
                <p class="step-text">로비 밖으로 나와 'Bus' 표지판을 따라 1층 버스 승차장으로 이동합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="connector"><div class="line"></div></div>

        <div class="step-card step-card-5">
          <div class="step-header">
            <span class="step-badge">05</span>
            <h3 class="step-title">버스 탑승</h3>
          </div>
          <div class="step-body">
            <div class="h-row h-row-align-center">
              <div class="h-col h-col-12 h-col-md-4">
                <ImageComponent :src="step5" class="step-thumb" />
              </div>
              <div class="h-col h-col-12 h-col-md-8">
                <p class="step-text">가이드 안내에 따라 버스에 탑승합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>

.header-section {
  text-align: center;
  background: #fff;
}

.description-box {
  margin-bottom: 40px;
  text-align: center;

}

.process-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-card {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--common-bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-width: 2px;
  border-style: solid;
  &.step-card-1 { border-color:  #dbeafe; }
  &.step-card-2 { border-color:  #bfdbfe; }
  &.step-card-3 { border-color:  #93c5fd; }
  &.step-card-4 { border-color:  #60a5fa; }
  &.step-card-5 { border-color:  #3b82f6; }

  .step-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;

    .step-badge {
      background: #eff6ff;
      color: #3b82f6;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 6px;
    }
    .step-title {
      font-size: 18px;
      font-weight: 700;
      color: #1e293b;
    }
  }

  .step-body {
    .step-text {
      font-size: 16px;
      text-align: center;
      margin-top: 20px;
      color: #475569;
      @media (min-width: 1024px) {
        font-size: 18px;
        text-align: left;
        margin-top: 0;
      }
    }
    .btn-qrCode {
      width: 100%;
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
      background-color: #3b82f6;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #2563eb;
      }
      @media (min-width: 1024px) {
        width: auto;
      }
    }
  }
}

.connector {
  height: 30px;
  .line {
    width: 2px;
    height: 100%;
    background: #cbd5e1;
    position: relative;
    &::after {
      content: '▼';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
      color: #cbd5e1;
    }
  }
}
</style>

